# xkong-hpp Migration Notes

## 项目背景

- 当前仓库是 `uni-app x` 迁移项目。
- 原 `uni-app` 项目来源：`/Users/ipink/Documents/HBuilderProjects/xkong-hpp/`
- iOS 原生项目来源：`/Users/ipink/xkong-ios`
- 页面或模块做 1:1 迁移、对照还原时，优先参考 `.codex/ios-source-map.md` 中已经整理好的映射关系。

## UTS / uvue 约束

- UTS 里的字面量对象类型优先使用 `type`，不要改成 `interface`。
- 如果编辑器自动保存或格式化会把 `type` 改成 `interface`，必须阻止这种改写；这是已知迁移风险，会直接导致 `uni-app x`/UTS 编译问题。
- 修改 `*.uts`、`*.uvue` 后，优先采用最小补丁，避免顺手重构类型结构。

## 迁移执行原则

- 视觉和交互优先对齐 iOS 原生实现，再参考旧 `uni-app` 项目补齐业务细节。
- 不要凭空扩展字段或页面行为；接口字段、卡片类型和点击行为以现有映射和业务代码为准。
- 发现来源不明确的页面时，先补映射说明，再继续改代码。
