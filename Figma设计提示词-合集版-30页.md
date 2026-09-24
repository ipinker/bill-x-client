# Fresh Accounting v2.0 - Complete Design Prompts (30 Pages)

**Theme Color**: Deep Purple #7C4DFF | **Width**: 750px | **Style**: Clean & Elegant

---

## 📋 Table of Contents

**Core Pages (Priority)**
- [Page 1: TabBar](#page-1-tabbar)
- [Page 2: Home - Todo Tab](#page-2-home-todo-tab)
- [Page 3: Billing Entry](#page-3-billing-entry)
- [Page 4: AI Assistant](#page-4-ai-assistant)
- [Page 5: Profile Center](#page-5-profile-center)

**Billing Module**
- [Page 6: Bill Details](#page-6-bill-details)
- [Page 7: Bill Search](#page-7-bill-search)
- [Page 8: Bill Calendar](#page-8-bill-calendar)
- [Page 9: Bill Favorites](#page-9-bill-favorites)
- [Page 10: Ledger Management](#page-10-ledger-management)
- [Page 11: Category Management](#page-11-category-management)
- [Page 12: Account Management](#page-12-account-management)
- [Page 13: Bill Import](#page-13-bill-import)
- [Page 14: Bill Statistics](#page-14-bill-statistics)

**Assets & Analysis**
- [Page 15: Asset Analysis](#page-15-asset-analysis)
- [Page 16: Repayment Plan](#page-16-repayment-plan)
- [Page 17: Repayment History](#page-17-repayment-history)

**AI Features**
- [Page 18: AI Image Generation](#page-18-ai-image-generation)
- [Page 19: AI Text Generation](#page-19-ai-text-generation)
- [Page 20: AI Decision Assistant](#page-20-ai-decision-assistant)
- [Page 21: Smart Reminders](#page-21-smart-reminders)

**Todo & Tasks**
- [Page 22: Todo List](#page-22-todo-list)
- [Page 23: Add Todo](#page-23-add-todo)

**Settings & Account**
- [Page 24: Settings Home](#page-24-settings-home)
- [Page 25: Theme Settings](#page-25-theme-settings)
- [Page 26: Personal Info](#page-26-personal-info)
- [Page 27: Security Settings](#page-27-security-settings)
- [Page 28: Login](#page-28-login)
- [Page 29: Register](#page-29-register)
- [Page 30: Forgot Password](#page-30-forgot-password)

---

## Usage Instructions

**Option 1: Copy Individual Page** (Recommended)
1. Use Ctrl/Cmd + F to find the page number (e.g., "## Page 1:")
2. Copy from "## Page X" to the next "---" separator
3. Paste into Figma AI

**Option 2: Use Page Markers**
- Each page starts with "## Page X: [Name]"
- Use browser search (Ctrl/Cmd + F) to jump to specific page

---

## Page 1: TabBar

### Layout Description
Design a bottom navigation bar with 3 tabs spanning the full width of 750px.

### Component Specifications

**Container**
- Width: 750px
- Height: 100px + safe-area-inset-bottom
- Background: #FFFFFF
- Top shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.05)
- Position: Fixed bottom

**Tab Items** (3 items, equal width)
- Each tab width: 250px
- Padding: 10px 0
- Display: Flex column, center aligned

**Tab 1 - Todo/Home**
- Icon: 📊 Dashboard icon
- Size: 40px
- Label: "Todo"
- Font size: 20px
- Inactive color: #999999
- Active color: #7C4DFF

**Tab 2 - AI Assistant**
- Icon: 🤖 AI robot icon
- Size: 40px
- Label: "AI"
- Font size: 20px
- Inactive color: #999999
- Active color: #7C4DFF

**Tab 3 - Profile**
- Icon: 👤 User icon
- Size: 40px
- Label: "Mine"
- Font size: 20px
- Inactive color: #999999
- Active color: #7C4DFF

### Interaction States
- **Default**: Gray icon (#999999) + gray text (#999999)
- **Active**: Blue icon (#7C4DFF) + blue text (#7C4DFF) + 600 font-weight
- **Pressed**: Scale 0.95 with 150ms transition

### Bottom Safe Area
- Add safe-area-inset-bottom for iPhone X and newer models
- Minimum bottom padding: 20px on devices without notch

---

## Page 2: Home Todo Tab

### Layout Description
Main dashboard page showing billing overview, quick actions, bill list, and todo items.

### Navigation Bar (Custom)
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Bottom shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05)

**Left Button** - Menu Icon
- Size: 60px × 60px
- Icon: Three horizontal lines (hamburger)
- Icon size: 32px
- Color: #333333

**Center Title** - Month Selector
- Text: "2024-09" or current month
- Font size: 32px
- Font weight: 600
- Color: #333333
- Right icon: Dropdown arrow 24px

**Right Buttons** (3 icons, horizontal)
- Search icon: 32px, color #333333
- Bill record icon: 32px, color #333333
- Calendar icon: 32px with date number overlay

### Header Card (Gradient Background)
- Width: 690px (30px margin on each side)
- Height: 280px
- Margin: 0 30px
- Margin top: 20px
- Border radius: 24px
- Background: linear-gradient(135deg, #7C4DFF 0%, #9575CD 100%)
- Padding: 40px
- Box shadow: 0 8px 30px 0 rgba(124, 77, 255, 0.3)

**Main Amount Display**
- Label: "Monthly Expenses"
- Font size: 24px
- Color: rgba(255, 255, 255, 0.9)
- Margin bottom: 8px

**Amount Value**
- Font size: 48px
- Font weight: 700
- Color: #FFFFFF
- Text shadow: 0 2px 8px rgba(0, 0, 0, 0.15)
- Format: ¥1,234.56

**Secondary Info Row** (Horizontal flex)
- Margin top: 30px
- Gap: 40px

**Income Section**
- Label: "Income"
- Font size: 22px
- Color: rgba(255, 255, 255, 0.8)
- Amount: 26px, #FFFFFF, font-weight 600

**Balance Section**
- Label: "Balance"
- Font size: 22px
- Color: rgba(255, 255, 255, 0.8)
- Amount: 26px, #FFFFFF, font-weight 600

**Ledger Selector** (Bottom of card)
- Margin top: 30px
- Padding top: 20px
- Border top: 1px solid rgba(255, 255, 255, 0.2)
- Text: "Default Ledger"
- Font size: 24px
- Color: #FFFFFF
- Right icon: Chevron 20px

### Monthly Budget Card
- Width: 690px
- Margin: 30px 30px 0 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08)

**Header Row**
- Title: "Monthly Budget"
- Font size: 28px
- Font weight: 600
- Color: #333333
- Right icon: Settings gear 28px, color #666666

**Progress Circle** (Center)
- Diameter: 160px
- Stroke width: 16px
- Background circle: #F0F0F0
- Progress circle: #7C4DFF
- Center text: "65%" in 36px bold #7C4DFF

**Budget Info Grid** (Below circle, 3 columns)
- Margin top: 30px
- Gap: 20px

**Used Amount**
- Label: "Used"
- Font size: 22px, color #999999
- Amount: 28px, color #FC5872, bold

**Total Budget**
- Label: "Total"
- Font size: 22px, color #999999
- Amount: 28px, color #333333, bold

**Daily Available**
- Label: "Daily Available"
- Font size: 22px, color #999999
- Amount: 28px, color #39B54A, bold

### Bill List Section
- Margin: 30px 30px 0 30px

**Date Group Header**
- Background: transparent
- Padding: 20px 0 10px 0
- Border bottom: 1px solid #F0F0F0

**Left Side** - Date
- Text: "09-10 Tue"
- Font size: 26px
- Font weight: 600
- Color: #333333

**Right Side** - Daily Summary
- Text: "Expense ¥120.00"
- Font size: 24px
- Color: #FC5872

**Bill Item Card**
- Background: #FFFFFF
- Border radius: 16px
- Padding: 24px 30px
- Margin bottom: 16px
- Box shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04)

**Left Section** - Category
- Icon container: 48px × 48px, border-radius 12px
- Icon background: Category color with 10% opacity
- Icon: 28px, category color
- Category name: 28px, #333333, margin-left 16px

**Middle Section** - Details
- Title: 26px, #333333
- Remark: 22px, #999999, margin-top 4px

**Right Section** - Amount
- Font size: 32px
- Font weight: 700
- Expense color: #FC5872
- Income color: #39B54A

### Todo Card
- Width: 690px
- Margin: 30px 30px 0 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08)

**Header**
- Title: "Todo"
- Font size: 28px
- Font weight: 600
- Color: #333333
- Right icons: Help icon + Add button

**Todo Item**
- Padding: 16px 0
- Border bottom: 1px solid #F0F0F0

**Checkbox**
- Size: 32px × 32px
- Border: 2px solid #E5E5E5
- Border radius: 50%
- Checked: Background #7C4DFF with white checkmark

**Todo Text**
- Font size: 26px
- Color: #333333
- Completed state: Color #999999 with strikethrough
- Margin left: 16px

**Footer Button**
- Text: "Manage, More >"
- Font size: 24px
- Color: #7C4DFF
- Text align: center
- Margin top: 20px

### Floating Add Button
- Size: 100px × 100px
- Border radius: 50%
- Background: linear-gradient(135deg, #7C4DFF 0%, #9575CD 100%)
- Position: Fixed, bottom 180px, right 30px
- Icon: Plus sign, 48px, #FFFFFF
- Box shadow: 0 8px 24px 0 rgba(0, 129, 255, 0.4)

### Interaction States
- **Bill item press**: Background changes to #F7F8FA
- **Long press**: Show action menu (Edit/Delete)
- **Pull down**: Refresh with loading indicator
- **Scroll up**: Load more bills

---

## Page 3: Billing Entry

### Layout Description
Full-screen numeric input interface for quick expense/income entry with keyboard.

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Add Bill"
- Font size: 32px, weight 600, color #333333
- Left button: Back arrow, 32px, #333333
- Right button: Mode toggle "Simple/Detail", 24px, #7C4DFF

### Type Toggle Tab
- Width: 690px
- Margin: 20px 30px 0 30px
- Height: 88px
- Background: rgba(0, 129, 255, 0.1)
- Border radius: 44px
- Padding: 4px

**Expense Tab**
- Width: 50%
- Height: 80px
- Border radius: 40px
- Font size: 28px
- Inactive: transparent background, #666666 text
- Active: #FFFFFF background, #FC5872 text, weight 600

**Income Tab**
- Width: 50%
- Height: 80px
- Border radius: 40px
- Font size: 28px
- Inactive: transparent background, #666666 text
- Active: #FFFFFF background, #39B54A text, weight 600

### Amount Display Area
- Width: 690px
- Margin: 40px 30px 0 30px
- Height: 120px
- Text align: center

**Currency Symbol**
- Text: "¥"
- Font size: 48px
- Color: #666666
- Display: inline

**Amount Input**
- Font size: 64px
- Font weight: 700
- Color: #333333
- Expense mode: #FC5872
- Income mode: #39B54A
- Placeholder: "0.00"

### Form Fields Section
- Width: 690px
- Margin: 40px 30px 0 30px

**Field Row** (Standard)
- Height: 88px
- Background: #FFFFFF
- Border radius: 16px
- Padding: 0 30px
- Margin bottom: 16px
- Border: 2px solid #E5E5E5
- Display: flex, space-between, center aligned

**Category Field**
- Label: "Category"
- Font size: 26px, color #666666
- Value: Category name, 28px, #333333
- Icon: 32px category icon
- Right arrow: 24px, #CCCCCC
- Required indicator: Red asterisk

**Account Field**
- Label: "Account"
- Font size: 26px, color #666666
- Value: Account name, 28px, #333333
- Icon: 32px account icon
- Right arrow: 24px, #CCCCCC
- Required indicator: Red asterisk

**Date/Time Fields**
- Same structure as above
- Default values: Current date/time
- Icons: Calendar/Clock 28px

### Action Buttons
- Width: 690px
- Margin: 40px 30px 30px 30px

**Save Button**
- Width: 100%
- Height: 96px
- Background: #7C4DFF
- Border radius: 16px
- Text: "Save"
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF

### Number Keyboard (Bottom)
- Width: 750px
- Background: #F7F8FA
- Padding: 20px 30px
- Border top: 1px solid #E5E5E5

**Keyboard Layout** (4×3 Grid)
- Button size: 110px × 88px
- Gap: 10px
- Border radius: 12px
- Background: #FFFFFF
- Font size: 36px

---

## Page 4: AI Assistant

### Navigation Bar
- Height: 88px + status-bar-height
- Background: linear-gradient(135deg, #7C4DFF 0%, #9575CD 100%)
- Title: "AI Assistant"
- Font size: 32px, weight 600, color #FFFFFF

### Feature Cards Grid
- Width: 690px
- Margin: 30px
- Display: Grid 2×2
- Gap: 20px

**Card 1 - AI Image Generation**
- Width: 335px
- Height: 180px
- Background: linear-gradient(135deg, #FF6B9D 0%, #FFA06B 100%)
- Border radius: 24px
- Padding: 30px
- Icon: 🎨 64px
- Title: "AI Image Gen", 28px bold, #FFFFFF
- Description: "Text to Image", 22px, rgba(255,255,255,0.8)

**Card 2 - AI Text Generation**
- Background: linear-gradient(135deg, #A8C5FF 0%, #6B9DFF 100%)
- Icon: ✍️
- Title: "AI Text Gen"
- Description: "Smart Copywriting"

**Card 3 - Decision Helper**
- Background: linear-gradient(135deg, #FFD56B 0%, #FFA06B 100%)
- Icon: 🎲
- Title: "Decision Helper"
- Description: "Choice Assistant"

**Card 4 - Smart Reminders**
- Background: linear-gradient(135deg, #AE9AF0 0%, #8B6FE0 100%)
- Icon: ⏰
- Title: "Smart Reminder"
- Description: "Scheduled Tasks"

---

## Page 5: Profile Center

### Navigation Bar (Gradient)
- Height: 200px + status-bar-height
- Background: linear-gradient(135deg, #7C4DFF 0%, #9575CD 100%)

**User Info Section**
- Padding: 40px 30px

**Avatar**
- Size: 80px × 80px
- Border radius: 50%
- Border: 3px solid #FFFFFF
- Box shadow: 0 4px 12px rgba(0,0,0,0.15)

**Username**
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF
- Margin top: 20px

**VIP Badge** (if applicable)
- Padding: 6px 16px
- Background: rgba(255,255,255,0.2)
- Border radius: 999px
- Font size: 20px
- Color: #FFFFFF
- Margin top: 12px

### Stats Card
- Width: 690px
- Margin: -60px 30px 0 30px
- Height: 160px
- Background: #FFFFFF
- Border radius: 24px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)
- Display: Grid 3 columns
- Padding: 30px

**Stat Item**
- Text align: center

**Number**
- Font size: 36px
- Font weight: 700
- Color: #7C4DFF
- Text shadow: 0 0 4px rgba(0,129,255,0.3)

**Label**
- Font size: 22px
- Color: #999999
- Margin top: 8px

### Function Menu List
- Margin: 30px 30px 0 30px

**Menu Card**
- Background: #FFFFFF
- Border radius: 24px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)

**Menu Item**
- Height: 100px
- Padding: 0 30px
- Display: flex, center aligned
- Border bottom: 1px solid #F0F0F0
- Last item: no border

**Left Icon Container**
- Size: 56px × 56px
- Border radius: 12px
- Background: Icon color with 10% opacity

**Icon**
- Size: 32px
- Color: Theme color

**Text**
- Font size: 28px
- Color: #333333
- Margin left: 20px

**Right Arrow**
- Size: 24px
- Color: #CCCCCC

### Menu Items List
1. 📊 Statistics - #7C4DFF background
2. 💰 Assets - #39B54A background
3. 📝 Bills - #F7C242 background
4. 🎨 Theme - #AE9AF0 background
5. 🔑 Authorization - #FC5872 background
6. 💬 Feedback - #00AA90 background
7. ℹ️ About - #666666 background
8. ⚙️ Settings - #999999 background

---

## Page 6: Bill Details

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Bill Details"
- Font size: 32px, weight 600, color #333333
- Left: Back button
- Right: Edit button (pencil icon 32px)

### Amount Display Card
- Width: 690px
- Margin: 20px 30px 0 30px
- Height: 200px
- Background: linear-gradient(135deg, #FF6B9D 0%, #FFA06B 100%) for expense
- Background: linear-gradient(135deg, #39B54A 0%, #4DD865 100%) for income
- Border radius: 24px
- Padding: 40px
- Text align: center

**Amount**
- Font size: 64px
- Font weight: 700
- Color: #FFFFFF
- Text shadow: 0 2px 8px rgba(0,0,0,0.15)

**Type Label**
- Font size: 24px
- Color: rgba(255,255,255,0.9)
- Margin bottom: 16px

### Details Card
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Detail Row**
- Height: 80px
- Display: flex, space-between
- Border bottom: 1px solid #F0F0F0
- Last item: no border

**Label**
- Font size: 26px
- Color: #999999

**Value**
- Font size: 26px
- Color: #333333
- Font weight: 500

**Rows Include:**
- Category (with icon)
- Account
- Ledger
- Date
- Time
- Title
- Location
- Remark

### Receipt Photo Section
- Margin top: 30px
- If photo exists:
  - Width: 690px
  - Border radius: 16px
  - Box shadow: 0 2px 8px rgba(0,0,0,0.08)

### Action Buttons
- Width: 690px
- Margin: 30px
- Display: flex
- Gap: 20px

**Delete Button**
- Flex: 1
- Height: 88px
- Background: #FFFFFF
- Border: 2px solid #FC5872
- Border radius: 16px
- Text: "Delete"
- Font size: 28px
- Color: #FC5872

**Edit Button**
- Flex: 1
- Height: 88px
- Background: #7C4DFF
- Border radius: 16px
- Text: "Edit"
- Font size: 28px
- Color: #FFFFFF

---

## Page 7: Bill Search

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Search"
- Left: Back button

### Search Bar
- Width: 690px
- Margin: 20px 30px
- Height: 80px
- Background: #F7F8FA
- Border radius: 40px
- Padding: 0 30px
- Display: flex, center aligned

**Search Icon**
- Size: 32px
- Color: #999999
- Margin right: 16px

**Input**
- Flex: 1
- Font size: 26px
- Placeholder: "Search bills..."
- Placeholder color: #CCCCCC

**Clear Button** (when text exists)
- Size: 32px
- Icon: X circle
- Color: #999999

### Filter Chips
- Width: 690px
- Margin: 0 30px 30px 30px
- Display: flex, horizontal scroll
- Gap: 16px

**Filter Chip**
- Padding: 12px 24px
- Background: #F7F8FA
- Border radius: 999px
- Font size: 24px
- Color: #666666
- Active: Background #7C4DFF, color #FFFFFF

**Chips:**
- All
- Expense
- Income
- This Month
- This Year

### Results List
- Margin: 0 30px

**Result Item**
- Similar to bill item card on home page
- Highlight search keywords in yellow

### Empty State
- Text align: center
- Padding: 100px 30px

**Icon**
- Size: 120px
- Color: #E5E5E5

**Text**
- Font size: 26px
- Color: #999999
- Margin top: 30px
- Text: "No results found"

---

## Page 8: Bill Calendar

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: Current month "September 2024"
- Left: Back button
- Right: Today button

### Month Selector
- Width: 690px
- Margin: 20px 30px
- Display: flex, space-between

**Previous Month Button**
- Size: 60px × 60px
- Border radius: 12px
- Background: #F7F8FA
- Icon: Left arrow 24px

**Month Display**
- Font size: 28px
- Font weight: 600
- Color: #333333

**Next Month Button**
- Size: 60px × 60px
- Border radius: 12px
- Background: #F7F8FA
- Icon: Right arrow 24px

### Calendar Grid
- Width: 690px
- Margin: 0 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Weekday Header**
- Display: Grid 7 columns
- Gap: 8px
- Margin bottom: 20px

**Weekday Cell**
- Text align: center
- Font size: 24px
- Color: #999999
- Font weight: 600

**Date Grid**
- Display: Grid 7 columns
- Gap: 8px

**Date Cell**
- Width: 86px
- Height: 86px
- Border radius: 12px
- Display: flex column, center aligned
- Padding: 8px 0

**Date Number**
- Font size: 26px
- Color: #333333
- Font weight: 600

**Amount Dot**
- Width: 6px
- Height: 6px
- Border radius: 50%
- Margin top: 4px
- Expense: #FC5872
- Income: #39B54A

**Today**
- Background: rgba(0,129,255,0.1)
- Date color: #7C4DFF

**Selected**
- Background: #7C4DFF
- Date color: #FFFFFF

**Has Bills**
- Show colored dots below date

### Summary Card (Below calendar)
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Selected Date**
- Font size: 28px
- Font weight: 600
- Color: #333333
- Margin bottom: 20px

**Summary Row**
- Display: flex, space-between
- Margin bottom: 16px

**Label**
- Font size: 24px
- Color: #999999

**Amount**
- Font size: 28px
- Font weight: 600
- Expense: #FC5872
- Income: #39B54A

---

## Page 9: Bill Favorites

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Favorites"
- Left: Back button
- Right: Edit button

### Sort/Filter Bar
- Width: 690px
- Margin: 20px 30px
- Display: flex, space-between

**Sort Button**
- Padding: 12px 24px
- Background: #F7F8FA
- Border radius: 999px
- Font size: 24px
- Color: #666666
- Icon: Sort 20px

**Filter Buttons**
- Same style as sort
- Options: All, Expense, Income

### Favorites List
- Margin: 0 30px

**Favorite Item Card**
- Background: #FFFFFF
- Border radius: 16px
- Padding: 24px 30px
- Margin bottom: 16px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)
- Display: flex

**Star Icon**
- Size: 32px
- Color: #F7C242
- Margin right: 20px

**Content** (Same as bill item)
- Category icon + name
- Title + remark
- Amount

**Action Buttons** (Slide to reveal)
- Unfavorite: Background #F7C242
- Delete: Background #FC5872
- Width: 100px each

### Empty State
- Padding: 100px 30px
- Text align: center

**Icon**
- Star outline 120px
- Color: #E5E5E5

**Text**
- Font size: 26px
- Color: #999999
- Text: "No favorites yet"

**Action Button**
- Margin top: 30px
- Text: "Browse Bills"
- Font size: 24px
- Color: #7C4DFF

---

## Page 10: Ledger Management

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Ledgers"
- Left: Back button
- Right: Add button (+ icon 32px)

### Ledger List
- Margin: 30px

**Ledger Card**
- Width: 690px
- Height: 160px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Margin bottom: 20px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Top Row**
- Display: flex, space-between

**Left Section**
- Ledger icon: 48px × 48px, custom color background
- Icon: 28px

**Ledger Name**
- Font size: 32px
- Font weight: 600
- Color: #333333
- Margin top: 12px

**Right Section**
- Default badge (if default ledger)
  - Padding: 6px 12px
  - Background: rgba(0,129,255,0.1)
  - Border radius: 999px
  - Font size: 20px
  - Color: #7C4DFF
  - Text: "Default"

**Bottom Row**
- Margin top: 20px
- Display: flex, space-between

**Stats**
- Font size: 22px
- Color: #999999
- Text: "124 bills"

**Action Menu**
- Icon: More (3 dots) 24px
- Color: #999999

### Add Ledger Button (Floating)
- Size: 100px × 100px
- Border radius: 50%
- Background: #7C4DFF
- Position: Fixed, bottom 150px, right 30px
- Icon: Plus 48px, #FFFFFF
- Box shadow: 0 8px 24px rgba(0,129,255,0.4)

### Long Press Menu
- Background: #FFFFFF
- Border radius: 16px
- Padding: 8px 0
- Box shadow: 0 8px 30px rgba(0,0,0,0.12)

**Menu Items:**
- Edit
- Set as Default
- Delete
- Each: Height 88px, padding 0 30px, font 26px

---

## Page 11: Category Management

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Categories"
- Left: Back button
- Right: Add button

### Type Tabs
- Width: 690px
- Margin: 20px 30px
- Height: 80px
- Background: rgba(0,129,255,0.1)
- Border radius: 40px
- Padding: 4px
- Display: flex

**Expense Tab**
- Flex: 1
- Height: 72px
- Border radius: 36px
- Font size: 26px
- Active: Background #FFFFFF, color #FC5872

**Income Tab**
- Flex: 1
- Height: 72px
- Border radius: 36px
- Font size: 26px
- Active: Background #FFFFFF, color #39B54A

### Category Grid
- Width: 690px
- Margin: 0 30px
- Display: Grid 4 columns
- Gap: 20px

**Category Item**
- Width: 157px
- Height: 140px
- Background: #FFFFFF
- Border radius: 16px
- Padding: 20px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)
- Display: flex column, center aligned

**Icon Container**
- Size: 64px × 64px
- Border radius: 12px
- Background: Category color with 10% opacity

**Icon**
- Size: 36px
- Color: Category color

**Category Name**
- Font size: 24px
- Color: #333333
- Text align: center
- Margin top: 12px
- Max lines: 1
- Overflow: ellipsis

**Usage Count**
- Font size: 20px
- Color: #999999
- Margin top: 4px

### Drag Handle
- When in edit mode, show drag handle on top-right
- Size: 24px
- Color: #CCCCCC

### Edit Mode Actions
- Long press to enter edit mode
- Show delete badge on top-left corner
- Enable drag to reorder

---

## Page 12: Account Management

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Accounts"
- Left: Back button
- Right: Add button

### Account Type Tabs
- Width: 690px
- Margin: 20px 30px
- Display: horizontal scroll
- Gap: 16px

**Type Tab**
- Padding: 12px 24px
- Background: #F7F8FA
- Border radius: 999px
- Font size: 24px
- Color: #666666
- Active: Background #7C4DFF, color #FFFFFF

**Types:**
- All
- Bank Card
- Alipay
- WeChat Pay
- Cash
- Credit Card

### Account List
- Margin: 0 30px

**Account Card**
- Width: 690px
- Height: 180px
- Background: Card gradient based on type
- Border radius: 24px
- Padding: 30px
- Margin bottom: 20px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Bank Card Gradient**
- linear-gradient(135deg, #667EEA 0%, #764BA2 100%)

**Alipay**
- linear-gradient(135deg, #00A0E9 0%, #00C8FF 100%)

**WeChat**
- linear-gradient(135deg, #2AAE67 0%, #69D99F 100%)

**Top Row**
- Display: flex, space-between

**Account Type Icon**
- Size: 40px
- Color: #FFFFFF

**Balance Label**
- Font size: 22px
- Color: rgba(255,255,255,0.8)

**Middle Row**
- Margin top: 20px

**Account Name**
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF

**Bottom Row**
- Margin top: 20px

**Balance**
- Font size: 36px
- Font weight: 700
- Color: #FFFFFF
- Text shadow: 0 2px 8px rgba(0,0,0,0.15)

**Card Number** (for cards)
- Font size: 24px
- Color: rgba(255,255,255,0.7)
- Text: Last 4 digits
- Format: **** 1234

---

## Page 13: Bill Import

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Import Bills"
- Left: Back button

### Import Methods
- Margin: 30px

**Method Card**
- Width: 690px
- Height: 200px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 40px
- Margin bottom: 20px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Card 1 - File Import**
- Icon: 📁 64px
- Title: "Import from File"
- Description: "Support CSV, Excel formats"
- Font size: 28px, #333333
- Description: 24px, #999999
- Right arrow: 32px, #CCCCCC

**Card 2 - Alipay Import**
- Icon: Alipay logo 64px
- Background: linear-gradient(135deg, #E6F7FF 0%, #FFFFFF 100%)
- Title: "Alipay Bills"
- Description: "Import from Alipay app"

**Card 3 - WeChat Import**
- Icon: WeChat logo 64px
- Background: linear-gradient(135deg, #E8F8EB 0%, #FFFFFF 100%)
- Title: "WeChat Bills"
- Description: "Import from WeChat app"

**Card 4 - Manual CSV**
- Icon: 📊 64px
- Title: "CSV Template"
- Description: "Download template and fill"

### Instructions Card
- Width: 690px
- Margin: 0 30px
- Background: #FFF9E6
- Border radius: 16px
- Padding: 30px
- Border: 1px solid #F7C242

**Icon**
- Size: 32px
- Color: #F7C242

**Title**
- Font size: 26px
- Font weight: 600
- Color: #333333
- Margin bottom: 12px

**Steps List**
- Font size: 24px
- Color: #666666
- Line height: 36px

---

## Page 14: Bill Statistics

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Statistics"
- Left: Back button
- Right: Share button

### Time Period Selector
- Width: 690px
- Margin: 20px 30px
- Display: flex, space-between

**Previous Button**
- Size: 60px × 60px
- Border radius: 12px
- Background: #F7F8FA
- Icon: Left arrow 24px

**Period Display**
- Font size: 28px
- Font weight: 600
- Color: #333333
- Text: "September 2024"

**Next Button**
- Size: 60px × 60px
- Border radius: 12px
- Background: #F7F8FA
- Icon: Right arrow 24px

### Summary Cards Row
- Width: 690px
- Margin: 0 30px
- Display: Grid 3 columns
- Gap: 15px

**Summary Card**
- Height: 140px
- Background: #FFFFFF
- Border radius: 16px
- Padding: 24px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)
- Text align: center

**Label**
- Font size: 22px
- Color: #999999
- Margin bottom: 12px

**Amount**
- Font size: 32px
- Font weight: 700
- Expense: #FC5872
- Income: #39B54A
- Balance: #7C4DFF or #FC5872

**Card 1 - Expense**
- Background: linear-gradient(109.6deg, #FFEBEE 29.9%, #FFFFFF 99.9%)

**Card 2 - Income**
- Background: linear-gradient(109.6deg, #E8F8EB 29.9%, #FFFFFF 99.9%)

**Card 3 - Balance**
- Background: #FFFFFF

### Trend Chart Card
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Header**
- Title: "Bill Trend"
- Font size: 28px
- Font weight: 600
- Color: #333333
- Right: Period selector (Day/Week/Month)

**Chart Area**
- Height: 300px
- Margin top: 30px

**Line Chart**
- Expense line: #FC5872, width 3px
- Income line: #39B54A, width 3px
- Grid lines: #F0F0F0
- X-axis labels: 22px, #999999
- Y-axis labels: 22px, #999999

### Category Distribution Card
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Header**
- Title: "Category Distribution"
- Font size: 28px
- Font weight: 600
- Color: #333333

**Pie Chart**
- Diameter: 300px
- Margin: 30px auto
- Colors: Use 8-color palette from design spec

**Legend List**
- Margin top: 30px

**Legend Item**
- Display: flex, space-between
- Padding: 12px 0
- Border bottom: 1px solid #F0F0F0

**Left Section**
- Color dot: 16px × 16px, border-radius 50%
- Category name: 26px, #333333, margin-left 12px

**Right Section**
- Percentage: 24px, #666666
- Amount: 26px, #333333, font-weight 600

### Detail Table Card
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Header**
- Title: "Daily Statistics"
- Font size: 28px
- Font weight: 600
- Color: #333333

**Table**
- Margin top: 20px

**Table Header**
- Height: 60px
- Background: #F7F8FA
- Border radius: 12px
- Padding: 0 20px
- Display: Grid 4 columns
- Font size: 24px
- Color: #999999
- Font weight: 600

**Table Row**
- Height: 80px
- Padding: 0 20px
- Display: Grid 4 columns
- Border bottom: 1px solid #F0F0F0
- Align items: center

**Columns:**
1. Date: 24px, #666666
2. Expense: 26px, #FC5872, right-align
3. Income: 26px, #39B54A, right-align
4. Balance: 26px, #333333, right-align, font-weight 600

---

## Page 15: Asset Analysis

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title Tabs: "Assets / Liabilities"
- Left: Back button
- Tab indicator: Bottom border 4px, #7C4DFF

### Total Asset Card
- Width: 690px
- Margin: 20px 30px 0 30px
- Height: 200px
- Background: linear-gradient(135deg, #7C4DFF 0%, #9575CD 100%)
- Border radius: 24px
- Padding: 40px
- Box shadow: 0 8px 30px rgba(0,129,255,0.3)

**Label**
- Font size: 24px
- Color: rgba(255,255,255,0.9)

**Total Amount**
- Font size: 56px
- Font weight: 700
- Color: #FFFFFF
- Text shadow: 0 2px 8px rgba(0,0,0,0.15)
- Margin top: 16px

**Net Worth Label**
- Font size: 22px
- Color: rgba(255,255,255,0.8)
- Margin top: 20px

### Asset Distribution Grid
- Width: 690px
- Margin: 30px
- Display: Grid 2 columns
- Gap: 20px

**Asset Type Card**
- Height: 160px
- Background: #FFFFFF
- Border radius: 16px
- Padding: 30px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)

**Icon Container**
- Size: 56px × 56px
- Border radius: 12px
- Background: Type color with 10% opacity
- Icon: 32px, type color

**Type Name**
- Font size: 24px
- Color: #666666
- Margin top: 16px

**Amount**
- Font size: 32px
- Font weight: 700
- Color: #333333
- Margin top: 8px

**Types:**
1. Bank Deposits - #7C4DFF
2. Alipay - #00A0E9
3. WeChat - #2AAE67
4. Cash - #F7C242
5. Credit Cards - #FC5872
6. Other - #999999

### Liabilities Tab Content

**Total Debt Card**
- Similar to Total Asset Card
- Background: linear-gradient(135deg, #FC5872 0%, #FF8A9D 100%)

**Debt Distribution Pie Chart**
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px

**Pie Chart**
- Diameter: 300px
- Center text: Total debt amount

**Debt Items List**
- Margin top: 30px

**Debt Item**
- Padding: 20px 0
- Border bottom: 1px solid #F0F0F0

**Left**
- Icon: 32px
- Name: 26px, #333333

**Right**
- Amount: 28px, #FC5872, font-weight 600
- Progress: Width 100%, height 8px, border-radius 4px
- Progress bar: Background #FC5872

---

## Page 16: Repayment Plan

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Repayment Plan"
- Left: Back button
- Right: History button

### Month Selector
- Width: 690px
- Margin: 20px 30px
- Display: flex, space-between

**Previous Month**
- Size: 60px × 60px
- Border radius: 12px
- Background: #F7F8FA
- Icon: Left arrow 24px

**Current Month**
- Font size: 28px
- Font weight: 600
- Color: #333333

**Next Month**
- Size: 60px × 60px
- Border radius: 12px
- Background: #F7F8FA
- Icon: Right arrow 24px

### Summary Card
- Width: 690px
- Margin: 0 30px
- Height: 140px
- Background: linear-gradient(135deg, #FF6B9D 0%, #FFA06B 100%)
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(255,107,157,0.3)

**Total Amount**
- Label: "Total Due This Month"
- Font size: 22px, rgba(255,255,255,0.9)

**Amount**
- Font size: 48px
- Font weight: 700
- Color: #FFFFFF
- Margin top: 12px

### Repayment List

**Section Header**
- Font size: 26px
- Font weight: 600
- Color: #333333
- Margin: 30px 30px 20px 30px

**Sections:**
1. "Due This Month"
2. "Paid This Month"
3. "Due Next Month"

**Repayment Item Card**
- Width: 690px
- Margin: 0 30px 16px 30px
- Background: #FFFFFF
- Border radius: 16px
- Padding: 24px 30px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)

**Top Row**
- Display: flex, space-between

**Left Section**
- Icon: 48px, bank/platform logo
- Name: 28px, #333333, font-weight 600, margin-left 16px

**Status Badge**
- Padding: 6px 16px
- Border radius: 999px
- Font size: 20px

**Pending:**
- Background: rgba(252,88,114,0.1)
- Color: #FC5872

**Paid:**
- Background: rgba(57,181,74,0.1)
- Color: #39B54A

**Middle Row**
- Margin top: 20px
- Display: flex, space-between

**Due Date**
- Font size: 24px
- Color: #999999

**Amount**
- Font size: 32px
- Font weight: 700
- Pending: #FC5872
- Paid: #39B54A

**Bottom Row** (if not paid)
- Margin top: 20px

**Progress Bar**
- Height: 8px
- Background: #F0F0F0
- Border radius: 4px

**Progress Fill**
- Height: 8px
- Background: #7C4DFF
- Border radius: 4px

**Days Left**
- Font size: 22px
- Color: #666666
- Margin top: 8px

**Action Button** (if pending)
- Margin top: 16px
- Height: 60px
- Background: #7C4DFF
- Border radius: 12px
- Text: "Mark as Paid"
- Font size: 24px
- Color: #FFFFFF

---

## Page 17: Repayment History

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Payment History"
- Left: Back button
- Right: Filter button

### Filter Bar
- Width: 690px
- Margin: 20px 30px
- Display: flex
- Gap: 16px

**Filter Chip**
- Padding: 12px 24px
- Background: #F7F8FA
- Border radius: 999px
- Font size: 24px
- Color: #666666
- Active: Background #7C4DFF, color #FFFFFF

**Filters:**
- All
- Credit Cards
- Loans
- Other

### Timeline List
- Margin: 0 30px

**Month Group**
- Margin bottom: 40px

**Month Header**
- Font size: 26px
- Font weight: 600
- Color: #333333
- Margin bottom: 20px
- Padding bottom: 12px
- Border bottom: 2px solid #E5E5E5

**Payment Item**
- Display: flex
- Margin bottom: 30px

**Timeline Dot**
- Width: 16px
- Height: 16px
- Border radius: 50%
- Background: #39B54A
- Margin right: 20px
- Margin top: 8px

**Timeline Line**
- Width: 2px
- Background: #E5E5E5
- Margin left: 7px
- Flex grow: 1

**Content Card**
- Flex: 1
- Background: #FFFFFF
- Border radius: 16px
- Padding: 24px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)

**Top Row**
- Display: flex, space-between

**Account Name**
- Font size: 28px
- Font weight: 600
- Color: #333333

**Amount**
- Font size: 32px
- Font weight: 700
- Color: #39B54A

**Bottom Row**
- Margin top: 16px
- Display: flex, space-between

**Payment Date**
- Font size: 24px
- Color: #999999

**Payment Method**
- Font size: 24px
- Color: #666666

---

## Page 18: AI Image Generation

### Navigation Bar
- Height: 88px + status-bar-height
- Background: linear-gradient(135deg, #FF6B9D 0%, #FFA06B 100%)
- Title: "AI Image Generation"
- Font size: 32px, weight 600, color #FFFFFF
- Left: Back button, color #FFFFFF
- Right: History button, color #FFFFFF

### Input Section
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Title**
- Font size: 28px
- Font weight: 600
- Color: #333333
- Margin bottom: 20px

**Prompt Input**
- Min height: 120px
- Background: #F7F8FA
- Border radius: 12px
- Padding: 20px
- Font size: 26px
- Line height: 38px
- Border: 2px solid #E5E5E5
- Placeholder: "Describe the image you want to generate..."

**Character Counter**
- Font size: 22px
- Color: #999999
- Text align: right
- Margin top: 8px

### Options Section
- Margin top: 30px

**Option Group**
- Margin bottom: 30px

**Label**
- Font size: 26px
- Font weight: 600
- Color: #333333
- Margin bottom: 16px

**Size Options**
- Display: flex
- Gap: 12px

**Size Button**
- Flex: 1
- Height: 72px
- Background: #F7F8FA
- Border radius: 12px
- Border: 2px solid #E5E5E5
- Font size: 24px
- Color: #666666
- Active: Border #7C4DFF, color #7C4DFF, background rgba(0,129,255,0.05)

**Sizes:**
- Square (1:1)
- Landscape (16:9)
- Portrait (9:16)

**Style Options**
- Display: Grid 3 columns
- Gap: 12px

**Style Card**
- Height: 100px
- Background: #F7F8FA
- Border radius: 12px
- Border: 2px solid #E5E5E5
- Padding: 16px
- Text align: center
- Active: Border #7C4DFF

**Icon**
- Size: 32px
- Margin bottom: 8px

**Label**
- Font size: 22px
- Color: #666666

**Styles:**
- Realistic 🎨
- Illustration 🖼️
- Abstract 🌈
- Anime 🎭
- 3D Render 💎
- Oil Painting 🖌️

### Generate Button
- Width: 690px
- Margin: 30px
- Height: 96px
- Background: linear-gradient(135deg, #FF6B9D 0%, #FFA06B 100%)
- Border radius: 16px
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF
- Box shadow: 0 4px 12px rgba(255,107,157,0.3)

**Loading State**
- Show spinner icon
- Text: "Generating..."
- Disabled: opacity 0.6

### Result Section
- Width: 690px
- Margin: 30px
- Display: none until generated

**Generated Image**
- Width: 690px
- Border radius: 16px
- Box shadow: 0 4px 20px rgba(0,0,0,0.12)

**Action Buttons Row**
- Display: flex
- Gap: 16px
- Margin top: 20px

**Download Button**
- Flex: 1
- Height: 72px
- Background: #7C4DFF
- Border radius: 12px
- Icon + text: "Download"
- Font size: 26px
- Color: #FFFFFF

**Share Button**
- Flex: 1
- Height: 72px
- Background: #FFFFFF
- Border: 2px solid #7C4DFF
- Border radius: 12px
- Icon + text: "Share"
- Font size: 26px
- Color: #7C4DFF

**Regenerate Button**
- Flex: 1
- Height: 72px
- Background: #F7F8FA
- Border radius: 12px
- Icon + text: "Regenerate"
- Font size: 26px
- Color: #666666

### History Grid
- Width: 690px
- Margin: 30px
- Display: Grid 2 columns
- Gap: 16px

**History Item**
- Width: 337px
- Height: 337px
- Border radius: 16px
- Position: relative
- Box shadow: 0 2px 8px rgba(0,0,0,0.08)

**Image**
- Width: 100%
- Height: 100%
- Object fit: cover
- Border radius: 16px

**Overlay** (on hover/press)
- Position: absolute
- Background: rgba(0,0,0,0.5)
- Display: flex center
- Action icons: Download, Delete

---

## Page 19: AI Text Generation

### Navigation Bar
- Height: 88px + status-bar-height
- Background: linear-gradient(135deg, #A8C5FF 0%, #6B9DFF 100%)
- Title: "AI Text Generation"
- Font size: 32px, weight 600, color #FFFFFF
- Left: Back button, #FFFFFF
- Right: History button, #FFFFFF

### Scene Selection
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Title**
- Font size: 28px
- Font weight: 600
- Color: #333333
- Margin bottom: 20px

**Scene Grid**
- Display: Grid 2 columns
- Gap: 16px

**Scene Card**
- Height: 120px
- Background: #F7F8FA
- Border radius: 16px
- Border: 2px solid #E5E5E5
- Padding: 24px
- Active: Border #7C4DFF, background rgba(0,129,255,0.05)

**Icon**
- Size: 40px
- Margin bottom: 12px

**Scene Name**
- Font size: 26px
- Font weight: 600
- Color: #333333

**Description**
- Font size: 22px
- Color: #999999
- Margin top: 4px

**Scenes:**
1. Bill Remark 📝 - "Generate bill notes"
2. Diary Entry ✍️ - "Write daily diary"
3. Notification 📢 - "Create notifications"
4. Social Post 💬 - "Social media content"
5. Email ✉️ - "Professional emails"
6. Custom 🎯 - "Custom text"

### Input Section
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Keywords Input**
- Label: "Keywords"
- Font size: 26px, weight 600, #333333
- Margin bottom: 16px

**Input Field**
- Height: 88px
- Background: #F7F8FA
- Border radius: 12px
- Padding: 0 24px
- Font size: 26px
- Border: 2px solid #E5E5E5
- Placeholder: "Enter keywords separated by comma"

**Style Selection**
- Label: "Writing Style"
- Margin top: 30px
- Margin bottom: 16px

**Style Chips**
- Display: flex
- Gap: 12px

**Style Chip**
- Padding: 12px 24px
- Background: #F7F8FA
- Border radius: 999px
- Font size: 24px
- Color: #666666
- Border: 2px solid #E5E5E5
- Active: Background #7C4DFF, color #FFFFFF, border #7C4DFF

**Styles:**
- Professional
- Casual
- Humorous
- Formal
- Creative

**Length Selection**
- Label: "Text Length"
- Margin top: 30px
- Display: flex
- Gap: 12px

**Length Options:**
- Short (50 words)
- Medium (150 words)
- Long (300 words)

### Generate Button
- Width: 690px
- Margin: 30px
- Height: 96px
- Background: linear-gradient(135deg, #A8C5FF 0%, #6B9DFF 100%)
- Border radius: 16px
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF

### Result Section
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)
- Display: none until generated

**Generated Text**
- Font size: 26px
- Line height: 40px
- Color: #333333
- Min height: 200px

**Action Buttons**
- Display: flex
- Gap: 16px
- Margin top: 30px

**Copy Button**
- Flex: 1
- Height: 72px
- Background: #7C4DFF
- Border radius: 12px
- Text: "Copy"
- Font size: 26px
- Color: #FFFFFF

**Regenerate Button**
- Flex: 1
- Height: 72px
- Background: #FFFFFF
- Border: 2px solid #7C4DFF
- Border radius: 12px
- Text: "Regenerate"
- Font size: 26px
- Color: #7C4DFF

---

## Page 20: AI Decision Assistant

### Navigation Bar
- Height: 88px + status-bar-height
- Background: linear-gradient(135deg, #FFD56B 0%, #FFA06B 100%)
- Title: "Decision Assistant"
- Font size: 32px, weight 600, color #FFFFFF
- Left: Back button
- Right: History button

### Question Input
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Label**
- Font size: 28px
- Font weight: 600
- Color: #333333
- Margin bottom: 16px

**Input**
- Min height: 100px
- Background: #F7F8FA
- Border radius: 12px
- Padding: 20px
- Font size: 26px
- Line height: 38px
- Border: 2px solid #E5E5E5
- Placeholder: "What decision do you need help with?"

### Options Section
- Width: 690px
- Margin: 0 30px 30px 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Header**
- Display: flex, space-between
- Margin bottom: 20px

**Title**
- Font size: 28px
- Font weight: 600
- Color: #333333

**Add Button**
- Size: 48px × 48px
- Border radius: 50%
- Background: rgba(0,129,255,0.1)
- Icon: Plus 24px, #7C4DFF

**Option Item**
- Margin bottom: 16px
- Last item: no margin

**Option Input**
- Display: flex
- Gap: 12px

**Number Badge**
- Size: 48px × 48px
- Border radius: 50%
- Background: rgba(0,129,255,0.1)
- Font size: 24px
- Font weight: 600
- Color: #7C4DFF
- Display: flex center

**Input Field**
- Flex: 1
- Height: 88px
- Background: #F7F8FA
- Border radius: 12px
- Padding: 0 24px
- Font size: 26px
- Border: 2px solid #E5E5E5

**Delete Button**
- Size: 48px × 48px
- Border radius: 50%
- Background: rgba(252,88,114,0.1)
- Icon: X 24px, #FC5872

**Detail Input** (Optional)
- Margin top: 8px
- Margin left: 60px
- Height: 72px
- Background: #F7F8FA
- Border radius: 12px
- Padding: 0 24px
- Font size: 24px
- Placeholder: "Add details (optional)"

### Analyze Button
- Width: 690px
- Margin: 0 30px 30px 30px
- Height: 96px
- Background: linear-gradient(135deg, #FFD56B 0%, #FFA06B 100%)
- Border radius: 16px
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF

### Result Section
- Width: 690px
- Margin: 0 30px 30px 30px
- Display: none until analyzed

**Recommendation Card**
- Background: linear-gradient(135deg, #E8F8EB 0%, #FFFFFF 100%)
- Border radius: 24px
- Padding: 40px
- Border: 3px solid #39B54A
- Box shadow: 0 8px 30px rgba(57,181,74,0.2)
- Margin bottom: 30px

**Badge**
- Padding: 8px 20px
- Background: #39B54A
- Border radius: 999px
- Font size: 22px
- Color: #FFFFFF
- Text: "✓ Recommended"
- Margin bottom: 20px
- Display: inline-flex

**Option Title**
- Font size: 36px
- Font weight: 700
- Color: #39B54A
- Margin bottom: 16px

**Reason**
- Font size: 26px
- Line height: 40px
- Color: #333333

**Other Options List**
- Margin top: 30px

**Option Card**
- Background: #FFFFFF
- Border radius: 16px
- Padding: 30px
- Margin bottom: 16px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)

**Option Number**
- Size: 40px × 40px
- Border radius: 50%
- Background: rgba(0,129,255,0.1)
- Font size: 24px
- Color: #7C4DFF
- Display: inline-flex center
- Margin bottom: 12px

**Option Name**
- Font size: 28px
- Font weight: 600
- Color: #333333
- Margin bottom: 12px

**Analysis**
- Font size: 24px
- Line height: 36px
- Color: #666666

**Score Bar**
- Margin top: 16px
- Height: 8px
- Background: #F0F0F0
- Border radius: 4px

**Score Fill**
- Height: 8px
- Background: #7C4DFF
- Border radius: 4px
- Width: Based on score percentage

---

## Page 21: Smart Reminders

### Navigation Bar
- Height: 88px + status-bar-height
- Background: linear-gradient(135deg, #AE9AF0 0%, #8B6FE0 100%)
- Title: "Smart Reminders"
- Font size: 32px, weight 600, color #FFFFFF
- Left: Back button
- Right: Add button

### Reminder Type Tabs
- Width: 690px
- Margin: 20px 30px
- Display: flex
- Gap: 16px

**Tab Chip**
- Padding: 12px 24px
- Background: rgba(255,255,255,0.2)
- Border radius: 999px
- Font size: 24px
- Color: #FFFFFF
- Active: Background #FFFFFF, color #AE9AF0

**Types:**
- All
- Bill Reminders
- Repayment
- Custom

### Reminders List
- Margin: 0 30px

**Reminder Card**
- Width: 690px
- Background: #FFFFFF
- Border radius: 16px
- Padding: 24px 30px
- Margin bottom: 16px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)

**Top Row**
- Display: flex, space-between

**Left Section**
- Display: flex, align-items: center

**Icon Container**
- Size: 56px × 56px
- Border radius: 12px
- Background: Type color with 10% opacity
- Icon: 32px, type color
- Margin right: 20px

**Content**
- Flex: 1

**Title**
- Font size: 28px
- Font weight: 600
- Color: #333333

**Description**
- Font size: 24px
- Color: #999999
- Margin top: 4px

**Toggle Switch**
- Width: 80px
- Height: 44px
- Border radius: 22px
- Background: #E5E5E5 (off), #7C4DFF (on)

**Switch Knob**
- Size: 36px × 36px
- Border radius: 50%
- Background: #FFFFFF
- Box shadow: 0 2px 4px rgba(0,0,0,0.2)
- Transition: 200ms

**Bottom Row**
- Margin top: 20px
- Display: flex, space-between
- Padding top: 20px
- Border top: 1px solid #F0F0F0

**Repeat Info**
- Font size: 24px
- Color: #666666
- Icon: 🔁 20px

**Time**
- Font size: 24px
- Color: #666666
- Font weight: 600

**Next Reminder** (if active)
- Margin top: 12px
- Font size: 22px
- Color: #7C4DFF
- Text: "Next: Tomorrow 9:00 AM"

### Add Reminder Floating Button
- Size: 100px × 100px
- Border radius: 50%
- Background: linear-gradient(135deg, #AE9AF0 0%, #8B6FE0 100%)
- Position: Fixed, bottom 150px, right 30px
- Icon: Plus 48px, #FFFFFF
- Box shadow: 0 8px 24px rgba(174,154,240,0.4)

### Empty State
- Padding: 100px 30px
- Text align: center

**Icon**
- Bell icon 120px
- Color: #E5E5E5

**Text**
- Font size: 26px
- Color: #999999
- Margin top: 30px
- Text: "No reminders yet"

**Action Button**
- Margin top: 30px
- Padding: 16px 40px
- Background: #AE9AF0
- Border radius: 999px
- Font size: 26px
- Color: #FFFFFF
- Text: "Create First Reminder"

---

## Page 22: Todo List

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Todo List"
- Font size: 32px, weight 600, color #333333
- Left: Back button
- Right: Filter button

### Filter Bar
- Width: 690px
- Margin: 20px 30px
- Display: flex
- Gap: 12px

**Filter Chip**
- Padding: 12px 24px
- Background: #F7F8FA
- Border radius: 999px
- Font size: 24px
- Color: #666666
- Active: Background #7C4DFF, color #FFFFFF

**Filters:**
- All (badge with count)
- Active
- Completed

### Stats Row
- Width: 690px
- Margin: 0 30px 30px 30px
- Display: flex
- Gap: 16px

**Stat Card**
- Flex: 1
- Height: 100px
- Background: #FFFFFF
- Border radius: 16px
- Padding: 20px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)
- Text align: center

**Number**
- Font size: 36px
- Font weight: 700
- Active: #7C4DFF
- Completed: #39B54A
- Total: #666666

**Label**
- Font size: 22px
- Color: #999999
- Margin top: 8px

### Todo Groups
- Margin: 0 30px

**Group Header**
- Font size: 26px
- Font weight: 600
- Color: #333333
- Margin bottom: 16px
- Padding: 20px 0 12px 0
- Border bottom: 2px solid #E5E5E5

**Groups:**
- Today
- Tomorrow
- This Week
- Later
- Completed

**Todo Item Card**
- Background: #FFFFFF
- Border radius: 16px
- Padding: 24px 30px
- Margin bottom: 12px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)
- Display: flex

**Checkbox**
- Size: 40px × 40px
- Border: 3px solid #E5E5E5
- Border radius: 50%
- Margin right: 20px
- Flex shrink: 0

**Checked State**
- Background: #39B54A
- Border color: #39B54A
- Checkmark: White, 24px

**Content**
- Flex: 1

**Title**
- Font size: 28px
- Color: #333333
- Font weight: 500
- Completed: Color #999999, text-decoration line-through

**Details Row**
- Display: flex
- Gap: 20px
- Margin top: 12px

**Priority Badge**
- Padding: 4px 12px
- Border radius: 999px
- Font size: 20px

**High Priority**
- Background: rgba(252,88,114,0.1)
- Color: #FC5872
- Text: "High"

**Medium Priority**
- Background: rgba(247,194,66,0.1)
- Color: #F7C242
- Text: "Medium"

**Low Priority**
- Background: rgba(0,129,255,0.1)
- Color: #7C4DFF
- Text: "Low"

**Due Date**
- Font size: 22px
- Color: #999999
- Icon: Calendar 18px

**Overdue**
- Color: #FC5872
- Font weight: 600

### Quick Add Bar (Bottom)
- Width: 750px
- Height: 100px + safe-area-inset-bottom
- Background: #FFFFFF
- Border top: 1px solid #E5E5E5
- Padding: 20px 30px
- Position: Fixed bottom
- Display: flex, center aligned
- Gap: 16px

**Input**
- Flex: 1
- Height: 60px
- Background: #F7F8FA
- Border radius: 30px
- Padding: 0 24px
- Font size: 24px
- Placeholder: "Quick add todo..."

**Add Button**
- Size: 60px × 60px
- Border radius: 50%
- Background: #7C4DFF
- Icon: Plus 28px, #FFFFFF

---

## Page 23: Add Todo

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "New Todo"
- Font size: 32px, weight 600, color #333333
- Left: Close button (X icon)
- Right: Save button (text "Save", color #7C4DFF)

### Form Section
- Width: 690px
- Margin: 30px

**Title Input**
- Label: "Title"
- Font size: 26px, weight 600, #333333
- Margin bottom: 12px

**Input Field**
- Height: 88px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Padding: 0 30px
- Font size: 28px
- Placeholder: "What needs to be done?"

**Focus State**
- Border color: #7C4DFF

**Description Input**
- Label: "Description (Optional)"
- Margin top: 30px
- Margin bottom: 12px

**Textarea**
- Min height: 120px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Padding: 20px 30px
- Font size: 26px
- Line height: 38px
- Placeholder: "Add details..."

**Due Date Picker**
- Label: "Due Date"
- Margin top: 30px
- Margin bottom: 12px

**Date Button**
- Height: 88px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Padding: 0 30px
- Display: flex, space-between, center aligned

**Left Section**
- Icon: Calendar 28px, #666666
- Text: Selected date or "Set due date"
- Font size: 26px, color #333333
- Margin left: 16px

**Right Icon**
- Chevron right 24px, #CCCCCC

**Time Picker**
- Similar structure to date picker
- Icon: Clock 28px
- Text: Selected time or "Set time"

**Priority Selector**
- Label: "Priority"
- Margin top: 30px
- Margin bottom: 12px

**Priority Options**
- Display: flex
- Gap: 12px

**Priority Button**
- Flex: 1
- Height: 72px
- Background: #F7F8FA
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Font size: 24px
- Display: flex column, center aligned

**High**
- Active: Background rgba(252,88,114,0.1), border #FC5872, color #FC5872
- Icon: !! 28px

**Medium**
- Active: Background rgba(247,194,66,0.1), border #F7C242, color #F7C242
- Icon: ! 28px

**Low**
- Active: Background rgba(0,129,255,0.1), border #7C4DFF, color #7C4DFF
- Icon: - 28px

**Reminder Toggle**
- Margin top: 30px
- Height: 88px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Padding: 0 30px
- Display: flex, space-between, center aligned

**Left**
- Icon: Bell 28px, #666666
- Text: "Remind me"
- Font size: 26px, color #333333
- Margin left: 16px

**Toggle Switch**
- Width: 80px
- Height: 44px
- Similar to reminder page toggle

### Action Buttons
- Width: 690px
- Margin: 40px 30px 30px 30px

**Save Button**
- Width: 100%
- Height: 96px
- Background: #7C4DFF
- Border radius: 16px
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF

**Disabled State**
- Background: #E5E5E5
- Color: #CCCCCC

---

## Page 24: Settings Home

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Settings"
- Font size: 32px, weight 600, color #333333
- Left: Back button

### Settings Groups
- Margin: 30px 30px 0 30px

**Group Card**
- Background: #FFFFFF
- Border radius: 16px
- Margin bottom: 30px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)

**Group Title**
- Font size: 24px
- Font weight: 600
- Color: #999999
- Padding: 20px 30px 12px 30px

**Setting Item**
- Height: 100px
- Padding: 0 30px
- Display: flex, space-between, center aligned
- Border bottom: 1px solid #F0F0F0
- Last item: no border

**Left Section**
- Display: flex, align items center

**Icon Container**
- Size: 48px × 48px
- Border radius: 12px
- Background: Icon color with 10% opacity
- Icon: 28px, icon color
- Margin right: 20px

**Label**
- Font size: 28px
- Color: #333333

**Right Section**
- Display: flex, align items center
- Gap: 12px

**Value Text** (if applicable)
- Font size: 26px
- Color: #999999

**Arrow**
- Size: 24px
- Color: #CCCCCC

**Toggle Switch** (for toggleable settings)
- Width: 80px
- Height: 44px

### Settings Groups

**Personal Settings**
- 🔐 Change Password
- 📱 Phone Number: +86 138****8888
- ✉️ Email: user@example.com

**General Settings**
- 🌐 Language: English
- 📱 Layout Config
- 🎨 Theme: Default

**Security Center**
- 👆 Biometric Auth: Toggle
- 🔢 Gesture Password: Toggle
- 🔒 Auto Lock: 5 minutes

**Push Notifications**
- 🔔 System Notifications: Toggle
- 💰 Bill Reminders: Toggle
- 💳 Repayment Reminders: Toggle

**About**
- ℹ️ Version: v2.0.0
- 📜 User Agreement
- 🔒 Privacy Policy
- 🆕 Check Updates

**Account Management**
- 🔗 Merge Accounts
- 🚪 Sign Out
- 🗑️ Delete Account

---

## Page 25: Theme Settings

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Theme"
- Font size: 32px, weight 600, color #333333
- Left: Back button

### Current Theme Preview
- Width: 690px
- Height: 200px
- Margin: 30px
- Background: Current theme gradient
- Border radius: 24px
- Padding: 40px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)
- Position: relative

**Theme Name**
- Font size: 32px
- Font weight: 700
- Color: #FFFFFF
- Text shadow: 0 2px 8px rgba(0,0,0,0.2)

**Selected Badge**
- Position: absolute
- Top: 20px
- Right: 20px
- Padding: 8px 20px
- Background: rgba(255,255,255,0.3)
- Backdrop filter: blur(10px)
- Border radius: 999px
- Font size: 22px
- Color: #FFFFFF
- Text: "✓ Current"

### Theme Options

**Section Title**
- Font size: 26px
- Font weight: 600
- Color: #333333
- Margin: 30px 30px 20px 30px

**Theme Grid**
- Width: 690px
- Margin: 0 30px
- Display: Grid 2 columns
- Gap: 20px

**Theme Card**
- Width: 335px
- Height: 180px
- Border radius: 24px
- Position: relative
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)
- Cursor: pointer

**Theme Gradient Background**
- Width: 100%
- Height: 100%
- Border radius: 24px

**Theme 1 - Deep Purple (Default)**
- Background: linear-gradient(135deg, #7C4DFF 0%, #9575CD 100%)

**Theme 2 - Sunset Orange**
- Background: linear-gradient(135deg, #FF6B9D 0%, #FFA06B 100%)

**Theme 3 - Forest Green**
- Background: linear-gradient(135deg, #39B54A 0%, #4DD865 100%)

**Theme 4 - Purple Dream**
- Background: linear-gradient(135deg, #AE9AF0 0%, #8B6FE0 100%)

**Theme 5 - Rose Gold**
- Background: linear-gradient(135deg, #F7C242 0%, #FF8A9D 100%)

**Theme 6 - Ocean Blue**
- Background: linear-gradient(135deg, #00AA90 0%, #00D4C4 100%)

**Theme 7 - Dark Mode**
- Background: linear-gradient(135deg, #2C3E50 0%, #34495E 100%)

**Theme 8 - Cherry Blossom**
- Background: linear-gradient(135deg, #FFB6C1 0%, #FFD4E5 100%)

**Theme Name Overlay**
- Position: absolute
- Bottom: 0
- Left: 0
- Right: 0
- Padding: 20px
- Background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)
- Border radius: 0 0 24px 24px

**Name Text**
- Font size: 24px
- Font weight: 600
- Color: #FFFFFF
- Text shadow: 0 1px 4px rgba(0,0,0,0.3)

**Selected Indicator**
- Position: absolute
- Top: 16px
- Right: 16px
- Size: 40px × 40px
- Border radius: 50%
- Background: rgba(255,255,255,0.9)
- Display: flex center
- Icon: Checkmark 24px, theme color

**Press State**
- Transform: scale(0.95)
- Transition: 200ms

### Dark Mode Toggle
- Width: 690px
- Margin: 30px
- Height: 88px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Padding: 0 30px
- Display: flex, space-between, center aligned

**Left**
- Icon: Moon 28px, #666666
- Text: "Dark Mode"
- Font size: 26px, color #333333
- Margin left: 16px

**Toggle**
- Width: 80px
- Height: 44px

---

## Page 26: Personal Info

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Personal Info"
- Font size: 32px, weight 600, color #333333
- Left: Back button
- Right: Save button (text "Save", #7C4DFF)

### Avatar Section
- Width: 690px
- Margin: 40px 30px
- Text align: center

**Avatar**
- Size: 120px × 120px
- Border radius: 50%
- Box shadow: 0 4px 20px rgba(0,0,0,0.1)
- Position: relative
- Margin: 0 auto

**Edit Badge**
- Size: 40px × 40px
- Border radius: 50%
- Background: #7C4DFF
- Position: absolute
- Bottom: 0
- Right: 0
- Icon: Camera 24px, #FFFFFF
- Border: 4px solid #FFFFFF

**Edit Text**
- Font size: 24px
- Color: #7C4DFF
- Margin top: 16px

### Form Section
- Width: 690px
- Margin: 0 30px

**Form Item**
- Margin bottom: 30px

**Label**
- Font size: 26px
- Font weight: 600
- Color: #333333
- Margin bottom: 12px

**Input Field**
- Height: 88px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Padding: 0 30px
- Font size: 28px
- Color: #333333

**Focus State**
- Border color: #7C4DFF

**Nickname Input**
- Placeholder: "Enter your nickname"

**Gender Selector**
- Display: flex
- Gap: 16px

**Gender Button**
- Flex: 1
- Height: 88px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Font size: 26px
- Color: #666666
- Display: flex center

**Active State**
- Border color: #7C4DFF
- Color: #7C4DFF
- Background: rgba(0,129,255,0.05)

**Options:**
- Male ♂
- Female ♀
- Other

**Birthday Picker**
- Height: 88px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Padding: 0 30px
- Display: flex, space-between, center aligned

**Left**
- Icon: Calendar 28px, #666666
- Text: Selected date or "Select birthday"
- Font size: 26px, color #333333
- Margin left: 16px

**Right**
- Chevron 24px, #CCCCCC

**Bio Input**
- Min height: 120px
- Padding: 20px 30px
- Font size: 26px
- Line height: 38px
- Placeholder: "Tell us about yourself (optional)"

**Character Counter**
- Text align: right
- Font size: 22px
- Color: #999999
- Margin top: 8px
- Text: "0/100"

### Save Button
- Width: 690px
- Margin: 40px 30px 30px 30px
- Height: 96px
- Background: #7C4DFF
- Border radius: 16px
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF

---

## Page 27: Security Settings

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Security"
- Font size: 32px, weight 600, color #333333
- Left: Back button

### Security Options List
- Margin: 30px

**Option Card**
- Width: 690px
- Height: 120px
- Background: #FFFFFF
- Border radius: 16px
- Padding: 0 30px
- Margin bottom: 16px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)
- Display: flex, space-between, center aligned

**Left Section**
- Display: flex, align items center

**Icon Container**
- Size: 56px × 56px
- Border radius: 12px
- Margin right: 20px

**Password Icon**
- Background: rgba(0,129,255,0.1)
- Icon: 🔐 32px

**Fingerprint Icon**
- Background: rgba(57,181,74,0.1)
- Icon: 👆 32px

**Face ID Icon**
- Background: rgba(174,154,240,0.1)
- Icon: 👤 32px

**PIN Icon**
- Background: rgba(247,194,66,0.1)
- Icon: 🔢 32px

**Content**
- Title: Font size 28px, weight 600, #333333
- Description: Font size 24px, #999999, margin-top 4px

**Right Section**
- Display: flex, align items center
- Gap: 12px

**Status Badge** (if applicable)
- Padding: 6px 16px
- Border radius: 999px
- Font size: 20px

**Enabled**
- Background: rgba(57,181,74,0.1)
- Color: #39B54A
- Text: "Enabled"

**Disabled**
- Background: rgba(153,153,153,0.1)
- Color: #999999
- Text: "Disabled"

**Arrow or Toggle**
- Arrow: 24px, #CCCCCC
- Toggle: Width 80px, height 44px

### Security Options

**1. Change Password**
- Icon: 🔐
- Title: "Change Password"
- Description: "Update your password"
- Right: Arrow

**2. Biometric Authentication**
- Icon: 👆
- Title: "Fingerprint / Face ID"
- Description: "Quick and secure login"
- Right: Toggle
- Status badge if enabled

**3. Gesture Password**
- Icon: 🔢
- Title: "Gesture Password"
- Description: "Draw pattern to unlock"
- Right: Toggle
- Status badge if set

**4. Auto Lock**
- Icon: 🔒
- Title: "Auto Lock"
- Description: "Immediately"
- Right: Arrow

**5. Two-Factor Authentication**
- Icon: 🔐
- Title: "2FA"
- Description: "Extra security layer"
- Right: Toggle

### Security Tips Card
- Width: 690px
- Margin: 30px
- Background: #FFF9E6
- Border: 1px solid #F7C242
- Border radius: 16px
- Padding: 30px

**Icon**
- Size: 32px
- Color: #F7C242
- Margin bottom: 12px

**Title**
- Font size: 26px
- Font weight: 600
- Color: #333333
- Margin bottom: 12px

**Tips List**
- Font size: 24px
- Color: #666666
- Line height: 36px

**Tips:**
- Use strong passwords
- Enable 2FA for extra security
- Don't share your password
- Update regularly

---

## Page 28: Login

### Layout Description
Full-screen login interface with logo, form, and social login options.

### Background
- Width: 750px
- Height: Full screen
- Background: linear-gradient(180deg, #F7F8FA 0%, #FFFFFF 100%)

### Logo Section
- Margin top: 100px + status-bar-height
- Text align: center

**App Logo**
- Size: 120px × 120px
- Border radius: 30px
- Box shadow: 0 8px 30px rgba(0,129,255,0.2)
- Margin: 0 auto

**App Name**
- Font size: 40px
- Font weight: 700
- Color: #333333
- Margin top: 30px

**Tagline**
- Font size: 24px
- Color: #999999
- Margin top: 12px

### Login Form
- Width: 690px
- Margin: 80px 30px 0 30px

**Input Group**
- Margin bottom: 24px

**Username/Phone Input**
- Height: 96px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Padding: 0 30px
- Font size: 28px

**Left Icon**
- Size: 28px
- Color: #999999
- Margin right: 16px

**Input**
- Flex: 1
- Font size: 28px
- Color: #333333
- Placeholder: "Phone number or email"
- Placeholder color: #CCCCCC

**Focus State**
- Border color: #7C4DFF

**Password Input**
- Same structure as username
- Right icon: Eye icon 28px to toggle visibility
- Input type: password/text

**Forgot Password Link**
- Text align: right
- Margin top: 12px
- Font size: 24px
- Color: #7C4DFF

### Login Button
- Width: 690px
- Height: 96px
- Background: #7C4DFF
- Border radius: 16px
- Margin top: 40px
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF
- Box shadow: 0 4px 12px rgba(0,129,255,0.3)

**Disabled State**
- Background: #E5E5E5
- Color: #CCCCCC
- Box shadow: none

### Divider
- Width: 690px
- Margin: 50px 30px
- Display: flex, center aligned
- Gap: 20px

**Line**
- Flex: 1
- Height: 1px
- Background: #E5E5E5

**Text**
- Font size: 24px
- Color: #999999

### Social Login Section
- Width: 690px
- Margin: 0 30px
- Display: flex, center justified
- Gap: 40px

**Social Button**
- Size: 80px × 80px
- Border radius: 50%
- Background: #F7F8FA
- Border: 2px solid #E5E5E5
- Display: flex center

**Icon**
- Size: 40px

**Buttons:**
- WeChat (Green gradient background)
- Apple (Black gradient background)
- Alipay (Blue gradient background)

### Register Link
- Text align: center
- Margin top: 40px
- Font size: 26px
- Color: #666666

**Link Text**
- Color: #7C4DFF
- Text: "Create account"

### Terms Agreement
- Width: 690px
- Margin: 40px 30px 30px 30px
- Text align: center
- Font size: 22px
- Color: #999999
- Line height: 32px

**Link Text**
- Color: #7C4DFF
- Text decoration: underline

---

## Page 29: Register

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Create Account"
- Font size: 32px, weight 600, color #333333
- Left: Back button

### Progress Steps
- Width: 690px
- Margin: 30px 30px 50px 30px
- Display: flex, space-between
- Position: relative

**Step Item**
- Display: flex column, center aligned
- Position: relative
- Z-index: 2

**Step Number**
- Size: 48px × 48px
- Border radius: 50%
- Background: #E5E5E5
- Color: #FFFFFF
- Font size: 24px
- Font weight: 600
- Display: flex center

**Active Step**
- Background: #7C4DFF

**Completed Step**
- Background: #39B54A

**Step Label**
- Font size: 20px
- Color: #999999
- Margin top: 8px

**Active Label**
- Color: #7C4DFF

**Progress Line**
- Position: absolute
- Top: 24px
- Left: 24px
- Right: 24px
- Height: 2px
- Background: #E5E5E5
- Z-index: 1

**Progress Fill**
- Height: 2px
- Background: #7C4DFF
- Width: Based on current step

### Form Section
- Width: 690px
- Margin: 0 30px

**Step 1 - Phone Verification**

**Phone Input**
- Height: 96px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Display: flex

**Country Code**
- Width: 120px
- Padding: 0 20px
- Border right: 1px solid #E5E5E5
- Font size: 28px
- Color: #333333

**Phone Number**
- Flex: 1
- Padding: 0 30px
- Font size: 28px

**Verification Code Row**
- Display: flex
- Gap: 16px
- Margin top: 24px

**Code Input**
- Flex: 1
- Height: 96px
- Similar structure to phone input
- Placeholder: "Enter verification code"

**Send Code Button**
- Width: 200px
- Height: 96px
- Background: rgba(0,129,255,0.1)
- Border: 2px solid #7C4DFF
- Border radius: 16px
- Font size: 24px
- Color: #7C4DFF
- Text: "Send Code"

**Countdown State**
- Background: #F7F8FA
- Border color: #E5E5E5
- Color: #999999
- Text: "Resend (60s)"

**Step 2 - Password Setup**

**Password Input**
- Height: 96px
- Margin bottom: 24px
- Left icon: Lock 28px
- Right icon: Eye toggle

**Confirm Password Input**
- Same structure
- Placeholder: "Confirm your password"

**Password Requirements**
- Margin top: 16px
- Padding: 20px
- Background: #F7F8FA
- Border radius: 12px

**Requirement Item**
- Font size: 22px
- Color: #999999
- Line height: 32px
- Display: flex, align items center

**Check Icon**
- Size: 20px
- Color: #39B54A (if met)
- Color: #CCCCCC (if not met)
- Margin right: 12px

**Requirements:**
- At least 8 characters
- Contains uppercase letter
- Contains lowercase letter
- Contains number

**Step 3 - Personal Info (Optional)**

**Nickname Input**
- Height: 96px
- Placeholder: "Enter nickname (optional)"

**Gender Selector**
- Margin top: 24px
- Display: flex, gap: 16px
- (Same as personal info page)

### Continue Button
- Width: 690px
- Margin: 50px 30px 30px 30px
- Height: 96px
- Background: #7C4DFF
- Border radius: 16px
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF

**Last Step - Complete Button**
- Text: "Complete Registration"

### Terms Agreement
- Width: 690px
- Margin: 30px
- Display: flex
- Align items: flex-start

**Checkbox**
- Size: 32px × 32px
- Border: 2px solid #E5E5E5
- Border radius: 8px
- Flex shrink: 0

**Checked State**
- Background: #7C4DFF
- Border color: #7C4DFF
- Checkmark: White

**Agreement Text**
- Flex: 1
- Margin left: 16px
- Font size: 22px
- Color: #666666
- Line height: 32px

**Link Text**
- Color: #7C4DFF

---

## Page 30: Forgot Password

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Reset Password"
- Font size: 32px, weight 600, color #333333
- Left: Back button

### Illustration
- Width: 300px
- Height: 300px
- Margin: 50px auto 40px auto
- Display: Illustration or icon
- Color: #7C4DFF with opacity variations

### Form Section
- Width: 690px
- Margin: 0 30px

**Instructions**
- Font size: 24px
- Color: #666666
- Line height: 36px
- Text align: center
- Margin bottom: 40px
- Text: "Enter your phone number to receive verification code"

**Phone Input**
- Height: 96px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Display: flex
- Margin bottom: 24px

**Country Code + Phone Number**
- Same structure as register page

**Verification Code Row**
- Display: flex
- Gap: 16px
- Margin bottom: 24px

**Code Input + Send Button**
- Same structure as register page

**New Password Input**
- Height: 96px
- Margin bottom: 24px
- Icon: Lock 28px
- Placeholder: "Enter new password"
- Toggle visibility icon

**Confirm Password Input**
- Same structure
- Placeholder: "Confirm new password"

### Reset Button
- Width: 690px
- Margin: 40px 30px 30px 30px
- Height: 96px
- Background: #7C4DFF
- Border radius: 16px
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF

**Disabled State**
- Background: #E5E5E5
- Color: #CCCCCC

### Back to Login Link
- Text align: center
- Margin top: 30px
- Font size: 26px
- Color: #7C4DFF
- Text: "← Back to Login"

---

## 🎨 Quick Reference

**Theme Colors**:
- Primary: #7C4DFF
- Gradient: linear-gradient(135deg, #7C4DFF 0%, #9575CD 100%)
- Light BG: #EDE7FF / #F5F3FF
- Dark: #5E35B1 / #4527A0

**Border Radius**:
- Card: 24px
- Button: 16px
- Input: 12px/16px

**Spacing**:
- Page margin: 30px
- Card gap: 30px
- Element gap: 20px-60px

**Typography**:
- H1: 48px
- H2: 36px
- H3: 32px
- Body: 28px
- Caption: 24px
- Small: 22px/20px

**Shadow**:
- Card: 0 4px 20px rgba(0,0,0,0.08)
- Button: 0 4px 12px rgba(124,77,255,0.25)

---

**Total Pages**: 30  
**Last Updated**: 2026-09-10  
**Theme**: Deep Purple #7C4DFF
