# uni-app Vue2 到 uni-app x 迁移实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 `/Users/ipink/Documents/GitHub/x-client` 迁移为当前 uni-app x 项目的可跨端离线优先壳，保留首页侧边栏，并建立可同步、可导出、可配置的本地数据体系。

**Architecture:** 业务数据通过统一 `StorageAdapter` 访问：App 使用 SQLite，H5 使用 IndexedDB，小程序使用其原生数据库能力；内存状态只做运行时缓存。所有写操作先落本地并写入 outbox，后台队列静默上报，用户可手动执行全量同步；服务端以版本号、幂等键和单点登录会话保证一致性。

**Tech Stack:** uni-app x、UTS、SQLite（App）、IndexedDB（H5）、微信/目标小程序原生存储数据库、现有 YAPI 生成器、CSV/XLSX/SQL 导出器。

## Global Constraints

- 页面入口只保留 `src/pages/home/index.uvue` 与首页侧边栏。
- 不再把业务数据写入 `uni.setStorageSync`；仅允许保存极少量设备级配置或会话元数据。
- 本地优先；首次启动禁止全量远端拉取，必须先展示本地快照，再增量同步。
- 静默上报与一键同步均由个人配置开关控制，并预留付费能力校验。
- 导出必须支持 CSV、Excel、SQL；导出过程不上传用户数据。
- UTS 对象类型使用 `type`，避免自动格式化改成 `interface`。

### Task 1: 建立迁移基线与页面映射

**Files:**
- Read: `/Users/ipink/Documents/GitHub/x-client/pages.json`
- Read: `/Users/ipink/Documents/GitHub/x-client/common/js/request/api/*.js`
- Read: `/Users/ipink/Documents/GitHub/x-client/store/modules/*.js`
- Modify: `docs/uniappx-page-api-mapping.md`

- [ ] 列出 Vue2 页面到 uni-app x 页面/组件的映射；当前阶段只映射首页侧边栏入口。
- [ ] 为每个保留业务域记录旧接口名、路径、请求方法、鉴权方式、数据实体和迁移状态。
- [ ] 标记所有 `uni.getStorageSync`/`uni.setStorageSync` 调用，按会话、配置、业务数据分类。
- [ ] 验收：映射文档覆盖 `bill`、`todo`、`user`、`set`、`login`、`config`、`queue`，且每项有文件来源。

### Task 2: 跨端本地数据库抽象

**Files:**
- Create: `src/storage/types.uts`
- Create: `src/storage/storageAdapter.uts`
- Create: `src/storage/sqliteAdapter.uts`
- Create: `src/storage/indexedDbAdapter.uts`
- Create: `src/storage/miniProgramAdapter.uts`
- Create: `src/storage/migrations.uts`
- Test: `tests/storage/*.test.*`

**Interfaces:**
- `StorageAdapter.open(): Promise<void>`
- `StorageAdapter.get<T>(table: string, key: string): Promise<T | null>`
- `StorageAdapter.put<T>(table: string, key: string, value: T, version: number): Promise<void>`
- `StorageAdapter.delete(table: string, key: string): Promise<void>`
- `StorageAdapter.list<T>(table: string, cursor?: string, limit?: number): Promise<Array<T>>`
- `StorageAdapter.transaction<T>(fn: () => Promise<T>): Promise<T>`

- [ ] 定义统一实体元数据：`id`、`userId`、`version`、`updatedAt`、`deletedAt`、`deviceId`。
- [ ] App 端实现 SQLite schema 与迁移；H5 实现 IndexedDB object store；小程序实现原生数据库适配。
- [ ] 为迁移增加 schema version、失败回滚和重复执行幂等性。
- [ ] 验收：三端适配器通过 CRUD、事务、分页、迁移重复执行测试。

### Task 3: 本地优先仓库与 Outbox 队列

**Files:**
- Create: `src/sync/repository.uts`
- Create: `src/sync/outbox.uts`
- Create: `src/sync/syncWorker.uts`
- Create: `src/sync/conflictResolver.uts`
- Modify: `src/store/index.uts`

**Interfaces:**
- `Repository.save(entity): Promise<SaveResult>`
- `Repository.query(query): Promise<QueryResult>`
- `SyncWorker.enqueue(change): Promise<void>`
- `SyncWorker.run(reason: 'startup' | 'resume' | 'manual' | 'timer'): Promise<SyncReport>`
- `ConflictResolver.resolve(local, remote): ConflictResult`

- [ ] 写入顺序固定为本地事务、outbox 记录、异步唤醒队列。
- [ ] 启动只读取本地快照；后台按 `lastSyncCursor` 拉取增量，再提交 outbox。
- [ ] 每条变更带幂等键；网络失败指数退避，达到上限进入 dead-letter 并可重试。
- [ ] 冲突默认按字段版本/服务器版本合并，无法合并时保留本地副本并提示用户。
- [ ] 验收：断网写入、恢复网络、重复提交、进程中断恢复、冲突合并测试通过。

### Task 4: SSO 与会话同步

**Files:**
- Create: `src/auth/sso.uts`
- Modify: `src/http/request/index.uts`
- Modify: `src/store/token.uts`

- [ ] 将 access token、refresh token、过期时间和用户标识放入平台安全会话存储；业务数据不得进入键值存储。
- [ ] 增加 `sessionVersion` 与设备会话撤销处理；401 时单次刷新并重放原请求。
- [ ] 启动流程改为恢复会话、打开数据库、展示本地、静默同步。
- [ ] 验收：多设备登录、刷新失败、撤销会话、重复重放请求测试通过。

### Task 5: 用户同步设置与付费能力开关

**Files:**
- Create: `src/settings/syncSettings.uts`
- Modify: `src/pages/home/components/side-menu-panel.uvue`
- Modify: `src/pages/home/index.uvue`

- [ ] 增加 `silentUploadEnabled`、`manualSyncEnabled`、`syncOnWifiOnly`、`privacyMode` 设置。
- [ ] 设置写入本地数据库；服务端保存用户级配置并返回能力/订阅状态。
- [ ] 关闭静默上报后保留本地 outbox；一键同步始终显示，但按订阅能力决定是否允许执行。
- [ ] 验收：开关即时生效、付费降级不丢数据、隐私模式阻止静默上报。

### Task 6: 一键同步与导出

**Files:**
- Create: `src/sync/manualSync.uts`
- Create: `src/export/csvExporter.uts`
- Create: `src/export/xlsxExporter.uts`
- Create: `src/export/sqlExporter.uts`
- Modify: `src/pages/home/components/side-menu-panel.uvue`

- [ ] 侧边栏提供同步状态、最后同步时间、待上传数量和“一键同步云端”。
- [ ] 导出从本地一致性快照读取，支持 CSV、Excel、SQL；SQL 输出 schema、数据和转义值。
- [ ] 大数据量导出采用分块写文件；导出失败清理临时文件并保留原数据。
- [ ] 验收：空数据、中文、换行、特殊字符、重复主键、百万级分页导出测试通过。

### Task 7: API 契约与 YAPI 变更

**Files:**
- Modify: `yapi/yapi-to-ts.ts`
- Create: `docs/api-changes.md`
- Create/Modify: `src/api/index.uts`

- [ ] 保持现有业务接口兼容，同时新增以下接口契约：
  - `POST /auth/sso/exchange`：交换平台登录凭证，返回会话与 `sessionVersion`。
  - `GET /sync/pull?cursor=&limit=`：按用户返回增量变更、服务端游标和冲突版本。
  - `POST /sync/push`：批量提交 outbox，要求 `idempotencyKey`，逐条返回 accepted/conflict/rejected。
  - `GET /sync/status`：返回最后游标、待处理数量、服务端时间和能力状态。
  - `GET /user/sync-settings`、`PUT /user/sync-settings`：读写个人同步开关。
  - `GET /user/export`：仅用于导出任务授权/能力检查，不传输导出数据。
- [ ] 文档明确错误码：`SESSION_REVOKED`、`CURSOR_EXPIRED`、`VERSION_CONFLICT`、`QUOTA_EXCEEDED`、`FEATURE_LOCKED`。
- [ ] YAPI 配置只保留当前单项目 token；生成结果不覆盖本地仓库未确认的手工 API。
- [ ] 验收：契约 mock 覆盖分页、幂等、冲突、游标过期和权限不足。

### Task 8: 分阶段迁移与五端验证

**Files:**
- Modify: `package.json`
- Create: `scripts/verify-platforms.mjs`
- Create: `docs/platform-verification.md`

- [ ] 先迁移实体与仓库，再迁移账单/待办/用户页面，最后恢复侧边栏入口的真实跳转。
- [ ] 为 H5、微信小程序、鸿蒙、iOS、Android 分别配置构建命令、环境变量和数据库能力检查。
- [ ] 每端执行冷启动、本地读写、断网写入、恢复同步、导出、SSO、升级迁移场景。
- [ ] 验收：五端产物可生成，核心同步场景通过；任何不能在当前机器执行的原生打包必须记录原因与替代验证。

## API 变更摘要

旧项目目前把登录、配置、账单、队列和上传接口混在 `common/js/request/api/*.js` 中，客户端直接以 `uni.getStorageSync('AppToken')` 等键值读取状态。迁移后需要服务端提供统一用户游标、变更版本、幂等提交和能力开关；详情见 Task 7。旧的全量启动接口应保留兼容期，但新客户端不得在启动阶段调用。

## 风险与备注

- App SQLite 与浏览器 IndexedDB 的事务语义不同，必须通过适配器测试统一行为。
- 小程序数据库能力受平台配额和审核限制，需在正式接入前确认目标小程序平台及可用 API。
- 明文密码不写入仓库、YAPI 配置或日志；YAPI 账号只用于服务端管理操作。
- 当前仓库缺少完整原生打包环境，五端验证应在 HBuilderX/对应 SDK 环境中执行。

## 全量扫描补充

已对 `/Users/ipink/Documents/GitHub/x-client` 完成非依赖文件扫描，共约 1092 个文件：97 个组件、48 个公共模块、22 个账单文件、18 个用户文件、14 个设置/登录相关页面、队列模块、SQLite 配置、uniCloud 函数、支付、图表、贷款和导入导出能力。迁移不能只覆盖当前侧边栏，应按产品域分批落地。

### 产品域迁移顺序

1. **数据底座**：实体模型、SQLite/IndexedDB/小程序数据库适配、schema migration、Repository、Outbox。
2. **身份与会话**：SSO exchange、设备会话、refresh、撤销和安全存储。
3. **记账核心**：账单、分类、账户、账本、收藏、导入解析与本地去重。
4. **待办与提醒**：todo、周期任务、通知和离线提醒。
5. **统计工具**：chart、property、loan、预算、周期性支出识别，全部从本地派生查询读取。
6. **同步与导出**：增量 pull/push、冲突、手动同步、CSV/Excel/SQL、备份恢复。
7. **AI 记账**：图片/文本识别只生成待确认草稿，确认后进入普通账单仓库；AI 任务独立排队并记录模型、费用和隐私授权。
8. **工具平台**：工具注册表和版本化契约，首批预算、账单计算、周期性支出、报表工具，后续可按订阅解锁。

### AI 与工具接口草案

- `AiProvider.parseReceipt(input): Promise<ReceiptDraft>`
- `AiProvider.parseText(text, locale): Promise<LedgerDraft>`
- `AiTaskQueue.enqueue(task): Promise<string>`
- `ToolRegistry.register(definition): void`
- `ToolRegistry.run(id, input): Promise<UTSJSONObject>`

AI 草稿必须带置信度、来源、模型版本和待确认字段；低置信度不得自动入账。工具只能通过 Repository 访问数据，不能直接调用平台存储。

### 必须新增或调整的服务端接口

| 方法 | 路径 | 目的 |
| --- | --- | --- |
| POST | `/auth/sso/exchange` | 单点登录凭证交换和会话版本 |
| GET | `/sync/pull` | 按 cursor 增量拉取 |
| POST | `/sync/push` | 带幂等键批量提交 outbox |
| GET | `/sync/status` | 游标、待处理数、服务端时间、订阅能力 |
| GET/PUT | `/user/sync-settings` | 静默上报、同步、隐私开关 |
| GET | `/user/export` | 导出能力检查，不上传导出数据 |
| POST | `/ai/tasks` | 创建 AI 识别任务，返回 taskId 和能力消耗 |
| GET | `/ai/tasks/{taskId}` | 查询 AI 任务状态和草稿 |
| GET | `/user/capabilities` | 返回 AI、工具、导出等订阅能力 |

错误码至少包括 `SESSION_REVOKED`、`CURSOR_EXPIRED`、`VERSION_CONFLICT`、`FEATURE_LOCKED`、`AI_QUOTA_EXCEEDED` 和 `IDEMPOTENCY_REPLAY`。

### 可执行里程碑

- **M0（1-2 天）**：冻结页面范围、生成实体/API 映射表，建立备份和回滚目录。
- **M1（3-5 天）**：完成三端 `StorageAdapter`、schema v1、Repository 和测试。
- **M2（3-5 天）**：完成 SSO、Outbox、静默队列、手动同步 mock。
- **M3（5-8 天）**：迁移账单/分类/账户/待办和导入，使用本地数据驱动页面。
- **M4（3-5 天）**：迁移统计、预算、导出、恢复和隐私设置。
- **M5（3-5 天）**：接入 AI 草稿流和工具注册表，按能力开关灰度。
- **M6（2-4 天）**：五端构建与断网/升级/冲突/导出验收，形成发布清单。

每个里程碑都必须有可运行产物、数据迁移脚本、接口 mock、回滚步骤和验收记录；不得把全量页面迁移和同步切换放在同一个提交中。
