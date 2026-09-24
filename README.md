# x-client-demo

`uni-app x` 客户端工程。页面、接口适配与原生资源均在本仓库维护。

## 本地启动

1. 执行 `pnpm install`。
2. 用 HBuilderX 打开工程，并选择 Android 或 iOS 设备运行。命令行编译可使用：

   ```sh
   /Applications/HBuilderX.app/Contents/MacOS/cli launch app-android --project "$PWD" --compile true --continue-on-error false
   ```

3. 执行 `pnpm test:contract`，确认 API 网关、YApi 传输层和原生网络配置可用。

开发 API 默认指向 `http://192.168.143.129/api`。`nativeResources` 仅为该内网 HTTP 网关配置了 Android 明文访问及 iOS ATS 例外；发布前必须切换为 HTTPS 并移除这些例外。

## 本地私有配置

- `.env*`、MCP 注册文件和 `manifest.json` 不会提交。复制 `.env.example` 后，仅在重新生成 YApi 客户端时设置 `YAPI_TOKEN`。
- `manifest.json` 包含本机签名配置，应在 HBuilderX 中按当前开发者证书创建或补齐，不能从仓库共享签名材料。
