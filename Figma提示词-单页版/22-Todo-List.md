# Page 22: Todo List

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

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
