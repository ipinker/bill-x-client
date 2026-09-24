# Page 6: Bill Details

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

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
