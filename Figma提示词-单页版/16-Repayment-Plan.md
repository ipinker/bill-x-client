# Page 16: Repayment Plan

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

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
