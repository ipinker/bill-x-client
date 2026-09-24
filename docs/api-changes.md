# 接口变更清单

## 现状

原项目的登录、配置、账单和队列接口分散在 `/Users/ipink/Documents/GitHub/x-client/common/js/request/api`，启动流程会通过 `uni.getStorageSync` 恢复状态并触发远端初始化。新客户端改为本地优先，启动只恢复会话和本地快照。

## 新增接口

| 方法 | 路径 | 用途 |
| --- | --- | --- |
| POST | `/auth/sso/exchange` | 单点登录凭证交换，返回 token、用户标识、会话版本 |
| GET | `/sync/pull` | 按 cursor 拉取增量变更 |
| POST | `/sync/push` | 幂等批量提交本地 outbox |
| GET | `/sync/status` | 查询游标、待处理数、服务端时间和订阅能力 |
| GET/PUT | `/user/sync-settings` | 读取和更新静默上报、手动同步等个人开关 |
| GET | `/user/export` | 校验导出能力或申请导出授权，不传输用户数据 |

## 数据约束

所有同步实体必须包含 `id`、`userId`、`version`、`updatedAt`、`deletedAt`、`deviceId`。`/sync/push` 每条变更必须包含客户端生成的 `idempotencyKey`；服务端逐条返回 `accepted`、`conflict` 或 `rejected`。游标失效返回 `CURSOR_EXPIRED`，版本冲突返回 `VERSION_CONFLICT`，权限不足返回 `FEATURE_LOCKED`。

## 兼容策略

原有业务接口在迁移期间继续保留；新客户端不在启动阶段调用全量初始化接口。服务端完成 `/sync/*` 后，再下线旧的全量启动路径。
