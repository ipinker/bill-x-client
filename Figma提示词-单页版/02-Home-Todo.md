# Page 2: Todo Tab - Home Page

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

---

## Page 2: Todo Tab - Home Page

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
