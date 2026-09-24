# Page 7: Bill Search

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

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
