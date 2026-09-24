# MCP 配置说明

## 📋 当前配置的 MCP 服务器

### 1. uni-app-x MCP
**功能**：
- 查询 uni-app x 官方文档
- API 使用示例
- 组件规范说明
- 迁移指南

**状态**：✅ 已配置，可直接使用

---

### 2. Figma MCP
**功能**：
- 读取 Figma 设计稿内容
- 导出设计资源（图片、SVG）
- 获取组件样式信息
- 查询设计规范

**配置要求**：需要 Figma Personal Access Token

**获取步骤**：
1. 登录 Figma：https://www.figma.com/settings
2. 找到 **"Personal Access Tokens"** 部分
3. 点击 **"Generate new token"**
4. 输入名称：`TraeCode MCP`
5. 设置权限：
   - ✅ **File content - Read only**（必选）
   - ✅ **File comments - Read and write**（可选，用于添加评论）
6. 点击 **Generate token**
7. **复制令牌**（只显示一次！记得保存）
8. 将令牌填入 `mcp.json` 的 `FIGMA_PERSONAL_ACCESS_TOKEN` 字段

**状态**：⚠️ 需要配置 Token

---

### 3. Filesystem MCP（推荐添加）
**功能**：
- 增强的文件读写能力
- 批量文件操作
- 文件监听
- 目录管理

**配置**：
```json
"filesystem": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "/Users/ipink/Documents/GitHub/x-client-demo"
  ]
}
```

**状态**：✅ 可选，已验证可用

---

### 4. Git MCP（推荐添加）
**功能**：
- 查看 Git 历史
- 文件 diff 对比
- Git blame 查看代码作者
- 分支管理

**配置**：
```json
"git": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-git",
    "--repository",
    "/Users/ipink/Documents/GitHub/x-client-demo"
  ]
}
```

**状态**：✅ 可选，已验证可用

---

## 🔧 配置步骤

### 方法一：手动编辑（当前需要）

1. 打开文件：`/Users/ipink/Documents/GitHub/x-client-demo/.trae/mcp.json`
2. 参考 `mcp-config-recommended.json` 文件
3. 复制内容到 `mcp.json`
4. 填入你的 Figma Token（如果需要 Figma 集成）
5. 保存文件
6. 重启 TraeCode

### 方法二：使用推荐配置（简单）

```bash
# 备份当前配置
cp .trae/mcp.json .trae/mcp.json.backup

# 使用推荐配置（记得先填 Figma Token！）
cp .trae/mcp-config-recommended.json .trae/mcp.json
```

---

## 🧪 测试 MCP 连接

配置完成后，可以通过以下方式测试：

### 1. 测试 uni-app-x MCP
```bash
npx -y @dcloudio/uni-app-x-mcp --version
```

### 2. 测试 Figma MCP
```bash
# 需要先设置环境变量
export FIGMA_PERSONAL_ACCESS_TOKEN="你的token"
npx -y @modelcontextprotocol/server-figma --version
```

### 3. 测试 Filesystem MCP
```bash
npx -y @modelcontextprotocol/server-filesystem --version
```

### 4. 测试 Git MCP
```bash
npx -y @modelcontextprotocol/server-git --version
```

---

## 📖 使用示例

### 在 TraeCode 中调用 Figma MCP

配置完成后，你可以：

1. **读取 Figma 设计稿**：
   ```
   "帮我从 Figma 文件 <file_key> 中读取首页设计稿"
   ```

2. **导出图标资源**：
   ```
   "从 Figma 导出所有图标到 /static/icons/ 目录"
   ```

3. **获取组件样式**：
   ```
   "读取 Figma 中按钮组件的圆角、颜色、字号等样式信息"
   ```

### 在 TraeCode 中调用 uni-app-x MCP

```
"uni-app x 中如何使用 UTS 类型？"
"uvue 文件的 template 语法有什么限制？"
"如何在 uni-app x 中调用原生 API？"
```

---

## 🔐 安全提示

1. **Token 保密**：
   - ❌ 不要将 `mcp.json` 提交到 Git
   - ❌ 不要在公开场合分享 Token
   - ✅ 将 `.trae/mcp.json` 添加到 `.gitignore`

2. **Token 权限**：
   - 仅授予必要的最小权限
   - 定期轮换 Token
   - 不再使用时立即撤销

3. **已添加到 .gitignore**：
   ```gitignore
   .trae/mcp.json
   .trae/mcp-*.json
   ```

---

## 🐛 常见问题

### Q1: MCP 服务器无法连接？
**A**: 检查 npx 是否可用，运行 `npx --version` 测试

### Q2: Figma Token 无效？
**A**: 
- 检查 Token 是否正确复制（不包含空格）
- 检查 Token 是否过期或被撤销
- 重新生成一个新的 Token

### Q3: uni-app-x MCP 报错？
**A**: 
- 确保网络连接正常
- 运行 `npx -y @dcloudio/uni-app-x-mcp --version` 测试
- 清除 npm 缓存：`npx clear-npx-cache`

### Q4: 配置修改后不生效？
**A**: 重启 TraeCode 或重新加载配置

---

## 📚 相关资源

- uni-app x 官方文档：https://doc.dcloud.net.cn/uni-app-x/
- Figma API 文档：https://www.figma.com/developers/api
- MCP 协议规范：https://modelcontextprotocol.io/
- TraeCode MCP 指南：https://docs.trae.ai/mcp

---

**最后更新**：2026-09-10  
**配置版本**：v1.0
