# Page 12: Account Management

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

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
