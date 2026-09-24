---
trigger: always_on
glob: 
description: Uni-App X implements a subset of Web CSS on the App platform
---
# css rules
ucss是css的子集，但可以跨平台使用。除了浏览器之外，还支持App原生平台。

## 布局规范
- 禁用浮动、网格等布局，仅使用flex布局或绝对定位。
- flex布局默认方向为垂直(通过 flex-direction:column 实现)。

## 选择器规则
- 仅支持基本的类选择器 (.class)，禁止使用其他选择器。
- 类名必须符合 [A-Za-z0-9_-]+ 规范，禁止使用特殊字符(例如 @class)。

## 文字样式规则
- 文字内容需放置在组件 <text> 或 <button> 中。文字类样式(color、font-size)只能设置在 <text> 或 <button> 组件上。 其他组件（如<view>）禁止设置文本相关样式。
- 文字样式不继承。
- 禁用继承相关关键字，例如 inherit 和 unset。

## 层级控制
- z-index 仅对同级兄弟节点生效。
- absolute 固定位与文档流分离，不支持分层覆盖。

## 长度单位
- 仅支持px、rpx、百分比。字体的line-height支持em。不能使用其他单位，如vh。
- 除非width需要根据屏幕宽度而变化才使用rpx单位。其他场景不使用rpx单位。
- 除非长度单位需要根据父容器大小而变化才使用百分比单位。其他场景不使用rpx单位。

## at-rules
- 仅支持`@font-face`、`@import`，不使用其他at-rules。
- 如需使用`@media` 适配不同屏幕，改用 uts 代码实现，先通过API `uni.getWindowInfo`获取屏幕宽度， 再通过代码进行适配。
- 如需使用`@media` 适配暗黑模式， 改用 uts 代码 和 css变量 实现。
- 如需使用`@keyframes`，改为通过UniElement对象的animate方法实现相同逻辑。

## css function
- 仅支持 url()、rgb()、rgba()、var()、env()，不使用其他css方法。

## 样式作用范围规则
- 不使用css scoped。

## 不支持的CSS 和 UNOCSS 类名

#### 任何会生成复杂选择器的类名都不支持，包括但不限于：

* 使用 `>`（子选择器）的类名
* 使用 `+`（相邻兄弟选择器）的类名
* 使用 `~`（通用兄弟选择器）的类名
* 使用 `:has()` 等伪类选择器的类名
* 使用 `:focus` 伪类选择器的类名
* 使用 `:active` 伪类选择器的类名
* 使用 `:disabled` 伪类选择器的类名
* 使用 `:first-child` 伪类选择器的类名
* 使用 `:last-child` 伪类选择器的类名
* 使用 `:hover` 伪类选择器的类名（uni-app 使用 `hover-class` 属性替代）
* 使用 `:visited` 伪类选择器的类名
* 使用 `:link` 伪类选择器的类名
* 使用 `:checked` 伪类选择器的类名
* 使用 `:empty` 伪类选择器的类名
* 使用 `:nth-child()` 伪类选择器的类名
* 使用 `:nth-of-type()` 伪类选择器的类名
* 使用 `:not()` 伪类选择器的类名
* 使用 `:before`、`::before` 伪元素的类名
* 使用 `:after`、`::after` 伪元素的类名

#### 不支持的 CSS 属性

以下 CSS 属性在 uni-app x APP 中也不支持：

* `gap` 属性（包括 `row-gap`、`column-gap`）
* `grid` 相关属性（包括 `grid-template-columns`、`grid-template-rows`、`grid-gap` 等）
* `aspect-ratio` 属性
* `cursor` 属性
* `user-select` 属性（包括 `-webkit-user-select`）
* `overflow-wrap` 属性
* `text-transform` 属性
* `outline-width` 属性
* `outline-color` 属性
* `outline-style` 属性
* `outline-offset` 属性

#### 不支持的 CSS 属性值

以下 CSS 属性值在 uni-app x APP 中不支持：

**flex-direction 属性**：只支持 `row`、`column`

* ❌ `flex-direction: row-reverse`
* ❌ `flex-direction: column-reverse`
* ✅ `flex-direction: row`
* ✅ `flex-direction: column`

**display 属性**：只支持 `flex` 和 `none`

* ❌ `display: block`
* ❌ `display: inline-block`
* ✅ `display: flex`
* ✅ `display: none`

**overflow 属性**：只支持 `visible` 和 `hidden`

* ❌ `overflow: auto`
* ❌ `overflow: scroll`
* ✅ `overflow: visible`
* ✅ `overflow: hidden`

**font-weight 属性**：只支持 `normal`、`bold`、`400`、`500`、`600`、`700`

* ❌ `font-weight: 100` (thin)
* ❌ `font-weight: 200` (extralight)
* ❌ `font-weight: 300` (light)
* ✅ `font-weight: 400` (normal)
* ✅ `font-weight: 500` (medium)
* ✅ `font-weight: 600` (semibold)
* ✅ `font-weight: 700` (bold)
* ❌ `font-weight: 800` (extrabold)
* ❌ `font-weight: 900` (black)

#### 不支持的类名

**display 相关类名**：

```html
复制代码<!-- 不支持 -->
<view class="block">块级元素</view>
<view class="inline-block">行内块元素</view>

<!-- 替代方案 -->
<view class="flex">使用 flex 布局</view>
<view class="hidden">隐藏元素</view>
```

**overflow 相关类名**：

```html
复制代码<!-- 不支持 -->
<view class="overflow-auto">可滚动</view>

<!-- 替代方案 -->
<view class="overflow-hidden">隐藏溢出</view>
<!-- 或使用 scroll-view 组件 -->
<scroll-view scroll-y>可滚动内容</scroll-view>
```

**font-weight 相关类名**：

```html
复制代码<!-- 不支持 -->
<text class="font-light">细体</text>
<text class="font-extrabold">超粗</text>

<!-- 支持的字重 -->
<text class="font-normal">正常</text>
<text class="font-medium">中等</text>
<text class="font-bold">粗体</text>
```

**其他不支持的类名**：

* `flex-row-reverse`、`flex-col-reverse` - 反向排列
* `aspect-square`、`aspect-ratio-*` - 宽高比相关
* `cursor-pointer` - 光标样式
* `select-none`、`select-text` - 文本选择
* `break-words` - 文本换行
* `uppercase`、`lowercase`、`capitalize` - 文本转换
* `outline-*` - 轮廓相关（包括 `outline-none`、`outline-2`、`outline-blue-500` 等）
* `focus:*` - 聚焦状态相关（如 `focus:outline-2`、`focus:bg-red-500`）
* `active:*` - 激活状态相关（如 `active:scale-95`、`active:bg-blue-500`）
* `disabled:*` - 禁用状态相关（如 `disabled:opacity-50`、`disabled:bg-gray-400`）
* `first:*` - 第一个子元素相关（如 `first:bg-cyan-200`、`first:font-bold`）
* `last:*` - 最后一个子元素相关（如 `last:bg-yellow-200`、`last:text-red-500`）
* `hover:*` - 悬停状态相关（如 `hover-class="bg-blue-500"`、`hover-class="text-white"`）
* `visited:*` - 访问过的链接相关
* `link:*` - 未访问的链接相关
* `checked:*` - 选中状态相关（如 `checked:bg-blue-500`、`checked:border-blue-500`）
* `empty:*` - 空元素相关
* `nth-child:*` - 第n个子元素相关（如 `nth-child-2:bg-red-500`）
* `nth-of-type:*` - 第n个同类型元素相关
* `not-*` - 非选择器相关
* `before:*`、`after:*` - 伪元素相关

## 支持的 CSS 单位

uni-app x APP 只支持以下 CSS 单位：

* `px` 单位（像素）
* `rpx` 单位（响应式像素，750rpx = 屏幕宽度）

**说明**：uni-app x APP 不支持其他 CSS 单位，包括：

* `vh` 单位（视口高度单位，如 `100vh`）
* `vw` 单位（视口宽度单位，如 `100vw`）
* `rem` 单位（根元素字体大小单位）
* `em` 单位（父元素字体大小单位）
* `%` 单位（百分比单位）
* `cm`、`mm`、`in`、`pt`、`pc` 等其他单位

#### 视口相关类名

`h-screen`、`w-screen` 等类名会生成包含 `vh` 或 `vw` 单位的规则，因此不支持：

```html
复制代码<!-- 不支持 -->
<view class="h-screen">占满屏幕高度</view>
<view class="w-screen">占满屏幕宽度</view>
```

生成的 CSS（不支持）：

```css
复制代码.h-screen {
  height: 100vh;
}

.w-screen {
  width: 100vw;
}
```

#### Grid 相关类名

`grid-*` 系列类名会生成包含 CSS Grid 布局的规则，因此不支持：

```html
复制代码<!-- 不支持 -->
<view class="grid grid-cols-3 gap-4">
  <view>项目1</view>
  <view>项目2</view>
  <view>项目3</view>
</view>
```

#### 特殊字符类名限制

小程序和 uni-app x APP 对类名中的特殊字符有限制，括号语法 `from-[...]` 中的某些特殊字符（如 `#`）需要特殊处理。

**问题示例**：

```html
复制代码<!-- 类名会被转义 -->
<view class="from-[#f5f5f5] to-red"></view>

<!-- 实际生成的类名可能变成 -->
<view class="from-_a__a_f5f5f5_a_ to-red"></view>
```

**classCharReplace 配置说明**：

**`classCharReplace: true`**（默认）：精准匹配，只在 `class` 和 `hover-class` 属性中转换特殊字符，不会影响文本内容或其他属性

```html
复制代码<!-- 文本内容不会被转换 -->
<text class="text-sm mb-2">自定义颜色 (from-[#f5f5f5] to-red):</text>

<!-- class 属性中的特殊字符会被正确转换 -->
<view class="from-[#f5f5f5] to-[#3b82f6]"></view>
```

**`classCharReplace: 'global'`**：全局匹配，会在整个代码中替换特殊字符，**可能会错误转换文本内容**

```html
复制代码<!-- ⚠️ 文本内容也会被错误转换 -->
<text class="text-sm mb-2">自定义颜色 (from-_a__a_f5f5f5_a_ to-red):</text>
```

**`classCharReplace: false`**：禁用转换，**不支持包含特殊字符的类名**

```html
复制代码<!-- ❌ 不支持特殊字符，样式不会生效 -->
<view class="from-[#f5f5f5]"></view>
```

### 注意事项

1. **仅影响非 web 平台**：这些限制只适用于非 web 平台（如小程序、APP），不影响 web 平台
2. **编译时检查**：在 uni-app x APP 平台编译时，会检测到不支持的 CSS 选择器并报错
3. **使用 `uni-appx:` 前缀**：可以为 uni-app x APP 平台单独编写兼容的样式

## UnoCSS 局限性

由于 UnoCSS 在构建时工作，这意味着只会生成静态渲染的工具并将其发送到你的应用。可能无法检测或应用在运行时动态使用或从外部资源获取的工具。

### 不支持的场景

```html
复制代码<!-- ❌ 动态拼接的类名无法被检测 -->
<div class="p-${size}"></div>

<!-- ❌ 运时动态生成的类名无法被检测 -->
<view :class="'text-' + color"></view>

<!-- ❌ 从外部 API 获取的类名无法被检测 -->
<view :class="externalClasses"></view>
```

### 推荐的做法

```html
复制代码<!-- ✅ 使用完整的类名 -->
<div class="p-4"></div>

<!-- ✅ 使用对象语法控制类名（类名是静态的，只是条件是动态的） -->
<view :class="{ 'p-4': size === 4, 'p-8': size === 8 }"></view>

<!-- ✅ 使用数组语法（类名是静态的） -->
<view :class="['p-4', 'text-white']"></view>
```