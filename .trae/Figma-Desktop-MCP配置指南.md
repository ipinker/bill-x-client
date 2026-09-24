# Figma Desktop MCP 配置指南

## 配置步骤

### 1. 替换 MCP 配置文件

由于系统限制无法自动修改 `.trae/mcp.json`，请手动执行以下命令：

```bash
cd /Users/ipink/Documents/GitHub/x-client-demo/.trae
cp mcp-desktop.json mcp.json
```

或者手动编辑 `.trae/mcp.json`，将内容替换为：

```json
{
  "mcpServers": {
    "uni-app-x": {
      "command": "npx",
      "args": [
        "-y",
        "@dcloudio/uni-app-x-mcp"
      ]
    },
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp",
      "type": "http"
    }
  }
}
```

### 2. 启用 Figma Desktop MCP Server

在 Figma Desktop 中启用 MCP Server：

1. 打开 Figma Desktop 应用
2. 按下快捷键 **Shift+D**（或 **⇧D**）
3. 在弹出的开发者菜单中，找到并点击 **"Enable desktop MCP server"**
4. 确认看到提示消息，表示 MCP Server 已启用

> **注意**：此功能需要 Figma Desktop 最新版本（推荐 119.0+）

### 3. 验证连接

配置文件替换后，在 Trae Code 中执行以下操作验证连接：

1. 重启 Trae Code 编辑器（让新配置生效）
2. 运行 `/mcp` 命令查看 MCP 服务器列表
3. 应该能看到两个 MCP 服务器：
   - `uni-app-x`
   - `figma-desktop`

### 4. 测试 Figma Desktop MCP

验证 Figma Desktop MCP 是否正常工作：

```bash
# 测试端口是否开启
curl http://127.0.0.1:3845/mcp
```

如果返回 JSON 响应（包含 `protocol` 和 `capabilities`），说明连接成功。

### 5. 使用 MCP 工具

连接成功后，可以使用 `run_mcp` 工具调用 Figma Desktop MCP 的功能：

```typescript
// 示例：获取 Figma 文件数据
run_mcp({
  server_name: "figma-desktop",
  tool_name: "get_figma_data",
  args: {
    file_key: "your-figma-file-key"
  }
})
```

## 配置变更说明

### 与原配置的区别

| 配置项 | 原配置 | 新配置 | 说明 |
|--------|--------|--------|------|
| uni-app-x args | `["@dcloudio/uni-app-x-mcp"]` | `["-y", "@dcloudio/uni-app-x-mcp"]` | 添加 `-y` 参数自动确认安装 |
| Figma 服务器名称 | `figma` | `figma-desktop` | 更清晰的命名，表明是本地桌面版 |
| Figma 连接方式 | 远程 OAuth (`https://mcp.figma.com/mcp`) | 本地桥接 (`http://127.0.0.1:3845/mcp`) | 使用本地 Figma Desktop 桥接 |

### 优势

- **免费**：无需 Figma Enterprise 或购买 API 额度
- **低延迟**：本地直接通信，无需远程网络请求
- **结构化数据完整**：可获取完整的设计系统（Design System）、组件信息、布局数据
- **官方支持**：Figma 官方推荐的 MCP 接入方式

## 常见问题

### 问题 1：无法启用 MCP Server

**症状**：在 Figma Desktop 中按 Shift+D 后没有 "Enable desktop MCP server" 选项

**解决方案**：
1. 检查 Figma Desktop 版本（需要 119.0+）
2. 更新到最新版本
3. 如果仍然没有，可能需要申请 Beta 访问权限

### 问题 2：端口 3845 被占用

**症状**：`curl http://127.0.0.1:3845/mcp` 返回 `Connection refused` 或其他错误

**解决方案**：
1. 关闭 Figma Desktop 重新打开
2. 检查防火墙设置
3. 确认没有其他应用占用 3845 端口

### 问题 3：Trae Code 无法识别新配置

**症状**：运行 `/mcp` 命令后，仍然显示旧的配置

**解决方案**：
1. 完全退出 Trae Code 编辑器
2. 重新打开项目
3. 检查 `.trae/mcp.json` 文件是否已正确替换

## 下一步操作

配置完成并验证连接后，可以：

1. **查看可用的 MCP 工具**：
   ```bash
   ls /Users/ipink/.trae/mcps/s_x-client-demo-*/solo_agent/mcp_Figma_AI_Bridge/tools/
   ```

2. **在 Figma 中创建设计稿**：
   - 使用前面生成的设计提示词在 Figma Make 中生成设计
   - 或在 Figma Desktop 中手动创建设计稿

3. **测试设计稿读取**：
   - 获取 Figma 文件的 file_key（从 URL 中复制）
   - 使用 `get_figma_data` 工具读取设计数据
   - 验证是否能正确获取组件、样式、布局信息

4. **开始迁移第一个页面**：
   - 选择一个简单的页面（如登录页）
   - 读取设计数据
   - 使用 uni-app-x-mcp 生成 uvue 页面代码
   - 验证生成效果

## 相关文档

- [Figma接入方式对比分析.md](./Figma接入方式对比分析.md) - 详细的技术方案对比
- [MCP配置说明.md](./MCP配置说明.md) - 通用的 MCP 配置指南
- [mcp-config-recommended.json](./mcp-config-recommended.json) - 包含更多 MCP 服务器的推荐配置

## 附录：配置文件完整内容

当前推荐的 `.trae/mcp.json` 配置（仅包含必要的两个 MCP 服务器）：

```json
{
  "mcpServers": {
    "uni-app-x": {
      "command": "npx",
      "args": [
        "-y",
        "@dcloudio/uni-app-x-mcp"
      ]
    },
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp",
      "type": "http"
    }
  }
}
```

如果需要更多功能，可以参考 `mcp-config-recommended.json` 中的扩展配置。
