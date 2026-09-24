#!/bin/bash

echo "🔍 测试 Figma Desktop MCP 连接..."
echo ""

# 测试 1: 初始化连接
echo "📡 步骤 1: 初始化 MCP 连接"
RESPONSE=$(curl -s -X POST http://127.0.0.1:3845/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "method": "initialize",
    "params": {
      "protocolVersion": "2024-11-05",
      "capabilities": {},
      "clientInfo": {
        "name": "trae-test-client",
        "version": "1.0.0"
      }
    },
    "id": 1
  }')

echo "$RESPONSE"
echo ""

# 提取服务器名称
SERVER_NAME=$(echo "$RESPONSE" | grep -o '"name":"[^"]*"' | head -1 | cut -d'"' -f4)
if [ -n "$SERVER_NAME" ]; then
    echo "✅ 连接成功！"
    echo "   服务器: $SERVER_NAME"
else
    echo "❌ 连接失败"
    exit 1
fi

echo ""
echo "🎉 Figma Desktop MCP 配置完成！"
echo ""
echo "下一步："
echo "1. 在 Trae Code 中重启以加载新配置"
echo "2. 运行命令 /mcp 查看所有 MCP 服务器"
echo "3. 确认 'figma-desktop' 和 'uni-app-x' 都显示为已连接"
