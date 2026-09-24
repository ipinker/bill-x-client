# Page 21: Smart Reminders

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

---

## Page 21: Smart Reminders

### Navigation Bar
- Height: 88px + status-bar-height
- Background: linear-gradient(135deg, #AE9AF0 0%, #8B6FE0 100%)
- Title: "Smart Reminders"
- Font size: 32px, weight 600, color #FFFFFF
- Left: Back button
- Right: Add button

### Reminder Type Tabs
- Width: 690px
- Margin: 20px 30px
- Display: flex
- Gap: 16px

**Tab Chip**
- Padding: 12px 24px
- Background: rgba(255,255,255,0.2)
- Border radius: 999px
- Font size: 24px
- Color: #FFFFFF
- Active: Background #FFFFFF, color #AE9AF0

**Types:**
- All
- Bill Reminders
- Repayment
- Custom

### Reminders List
- Margin: 0 30px

**Reminder Card**
- Width: 690px
- Background: #FFFFFF
- Border radius: 16px
- Padding: 24px 30px
- Margin bottom: 16px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)

**Top Row**
- Display: flex, space-between

**Left Section**
- Display: flex, align-items: center

**Icon Container**
- Size: 56px × 56px
- Border radius: 12px
- Background: Type color with 10% opacity
- Icon: 32px, type color
- Margin right: 20px

**Content**
- Flex: 1

**Title**
- Font size: 28px
- Font weight: 600
- Color: #333333

**Description**
- Font size: 24px
- Color: #999999
- Margin top: 4px

**Toggle Switch**
- Width: 80px
- Height: 44px
- Border radius: 22px
- Background: #E5E5E5 (off), #7C4DFF (on)

**Switch Knob**
- Size: 36px × 36px
- Border radius: 50%
- Background: #FFFFFF
- Box shadow: 0 2px 4px rgba(0,0,0,0.2)
- Transition: 200ms

**Bottom Row**
- Margin top: 20px
- Display: flex, space-between
- Padding top: 20px
- Border top: 1px solid #F0F0F0

**Repeat Info**
- Font size: 24px
- Color: #666666
- Icon: 🔁 20px

**Time**
- Font size: 24px
- Color: #666666
- Font weight: 600

**Next Reminder** (if active)
- Margin top: 12px
- Font size: 22px
- Color: #7C4DFF
- Text: "Next: Tomorrow 9:00 AM"

### Add Reminder Floating Button
- Size: 100px × 100px
- Border radius: 50%
- Background: linear-gradient(135deg, #AE9AF0 0%, #8B6FE0 100%)
- Position: Fixed, bottom 150px, right 30px
- Icon: Plus 48px, #FFFFFF
- Box shadow: 0 8px 24px rgba(174,154,240,0.4)

### Empty State
- Padding: 100px 30px
- Text align: center

**Icon**
- Bell icon 120px
- Color: #E5E5E5

**Text**
- Font size: 26px
- Color: #999999
- Margin top: 30px
- Text: "No reminders yet"

**Action Button**
- Margin top: 30px
- Padding: 16px 40px
- Background: #AE9AF0
- Border radius: 999px
- Font size: 26px
- Color: #FFFFFF
- Text: "Create First Reminder"
