# Page 10: Ledger Management

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

---

## Page 10: Ledger Management

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Ledgers"
- Left: Back button
- Right: Add button (+ icon 32px)

### Ledger List
- Margin: 30px

**Ledger Card**
- Width: 690px
- Height: 160px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Margin bottom: 20px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Top Row**
- Display: flex, space-between

**Left Section**
- Ledger icon: 48px × 48px, custom color background
- Icon: 28px

**Ledger Name**
- Font size: 32px
- Font weight: 600
- Color: #333333
- Margin top: 12px

**Right Section**
- Default badge (if default ledger)
  - Padding: 6px 12px
  - Background: rgba(0,129,255,0.1)
  - Border radius: 999px
  - Font size: 20px
  - Color: #7C4DFF
  - Text: "Default"

**Bottom Row**
- Margin top: 20px
- Display: flex, space-between

**Stats**
- Font size: 22px
- Color: #999999
- Text: "124 bills"

**Action Menu**
- Icon: More (3 dots) 24px
- Color: #999999

### Add Ledger Button (Floating)
- Size: 100px × 100px
- Border radius: 50%
- Background: #7C4DFF
- Position: Fixed, bottom 150px, right 30px
- Icon: Plus 48px, #FFFFFF
- Box shadow: 0 8px 24px rgba(0,129,255,0.4)

### Long Press Menu
- Background: #FFFFFF
- Border radius: 16px
- Padding: 8px 0
- Box shadow: 0 8px 30px rgba(0,0,0,0.12)

**Menu Items:**
- Edit
- Set as Default
- Delete
- Each: Height 88px, padding 0 30px, font 26px
