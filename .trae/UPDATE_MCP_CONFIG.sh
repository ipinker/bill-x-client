#!/bin/bash
# Figma Desktop MCP 配置更新脚本

echo "================================================"
echo "Figma Desktop MCP 配置更新"
echo "================================================"
echo ""

# 显示新配置内容
echo "新的 MCP 配置内容："
echo ""
cat << 'EOF'
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
EOF
echo ""
echo "================================================"
echo ""
echo "由于系统保护，无法自动修改 .trae/mcp.json"
echo "请手动完成以下步骤："
echo ""
echo "1. 在 Figma Desktop 中启用 MCP Server："
echo "   - 打开 Figma Desktop 应用"
echo "   - 按 Shift+D 打开开发者菜单"
echo "   - 点击 'Enable desktop MCP server'"
echo ""
echo "2. 手动编辑配置文件："
echo "   - 用文本编辑器打开: .trae/mcp.json"
echo "   - 将上面显示的 JSON 内容复制替换到文件中"
echo "   - 保存文件"
echo ""
echo "3. 验证连接："
echo "   - 在新终端运行: curl http://127.0.0.1:3845/mcp"
echo "   - 如果返回 JSON 数据，说明连接成功"
echo ""
echo "4. 重启 Trae Code 编辑器使配置生效"
echo ""
echo "================================================"
echo "参考文档: .trae/Figma-Desktop-MCP配置指南.md"
echo "================================================"
