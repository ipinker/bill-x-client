# iOS Homepage Source Map

真实 iOS 首页卡片实现来自 `/Users/ipink/xkang-ios` 的 `AIFeed` 模块，不是旧首页 mock 卡片。

## 入口

- `pdhaAndUlc/PDHA/Class/XKang/AIFeed/ViewController/XKAIFeedViewController.m`
- `pdhaAndUlc/PDHA/Class/XKang/AIFeed/Model/XKAIFeedModel.{h,m}`
- `pdhaAndUlc/PDHA/Class/XKang/AIFeed/Layout/XKAIFeedWaterfallLayout.m`

## 首页卡片 Cell

- `XKAIFeedDramaCell.m`
- `XKAIFeedWeatherCell.m`
- `XKAIFeedQuoteCell.m`
- `XKAIFeedHealthConsultCell.m`
- `XKAIFeedCalendarCell.m`
- `XKAIFeedStockCell.m`
- `XKAIFeedAdCell.m`
- `XKAIFeedFreeClinicCell.m`
- `XKAIFeedCouponCell.m`

## 当前 HPP 对应文件

- `src/pages/home/index.nvue`
- `src/pages/home/components/item.nvue`
- `src/pages/home/components/xwaterfall.nvue`
- `src/pages/home/composables/useHomeFeed.ts`
- `src/pages/home/types/feed.d.ts`

## 固定原则

1. 首页 Feed 以接口 `card_type + payload + on_click` 为准。
2. 未知 `card_type` 不兜底渲染成别的卡，直接跳过。
3. 瀑布流按 iOS 维持双列。
4. 视觉先对 iOS，再参考蓝湖截图修细节。
