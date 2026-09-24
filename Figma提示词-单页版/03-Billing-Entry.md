# Page 3: Billing Entry Page

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

---

## Page 3: Billing Entry Page

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
