# Page 11: Category Management

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

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
