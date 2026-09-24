# Page 8: Bill Calendar

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

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
