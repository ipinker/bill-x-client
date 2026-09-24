# Page 23: Add Todo

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

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
