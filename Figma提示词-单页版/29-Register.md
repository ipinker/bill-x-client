# Page 29: Register Page

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

---

## Page 29: Register Page

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Create Account"
- Font size: 32px, weight 600, color #333333
- Left: Back button

### Progress Steps
- Width: 690px
- Margin: 30px 30px 50px 30px
- Display: flex, space-between
- Position: relative

**Step Item**
- Display: flex column, center aligned
- Position: relative
- Z-index: 2

**Step Number**
- Size: 48px × 48px
- Border radius: 50%
- Background: #E5E5E5
- Color: #FFFFFF
- Font size: 24px
- Font weight: 600
- Display: flex center

**Active Step**
- Background: #7C4DFF

**Completed Step**
- Background: #39B54A

**Step Label**
- Font size: 20px
- Color: #999999
- Margin top: 8px

**Active Label**
- Color: #7C4DFF

**Progress Line**
- Position: absolute
- Top: 24px
- Left: 24px
- Right: 24px
- Height: 2px
- Background: #E5E5E5
- Z-index: 1

**Progress Fill**
- Height: 2px
- Background: #7C4DFF
- Width: Based on current step

### Form Section
- Width: 690px
- Margin: 0 30px

**Step 1 - Phone Verification**

**Phone Input**
- Height: 96px
- Background: #FFFFFF
- Border: 2px solid #E5E5E5
- Border radius: 16px
- Display: flex

**Country Code**
- Width: 120px
- Padding: 0 20px
- Border right: 1px solid #E5E5E5
- Font size: 28px
- Color: #333333

**Phone Number**
- Flex: 1
- Padding: 0 30px
- Font size: 28px

**Verification Code Row**
- Display: flex
- Gap: 16px
- Margin top: 24px

**Code Input**
- Flex: 1
- Height: 96px
- Similar structure to phone input
- Placeholder: "Enter verification code"

**Send Code Button**
- Width: 200px
- Height: 96px
- Background: rgba(0,129,255,0.1)
- Border: 2px solid #7C4DFF
- Border radius: 16px
- Font size: 24px
- Color: #7C4DFF
- Text: "Send Code"

**Countdown State**
- Background: #F7F8FA
- Border color: #E5E5E5
- Color: #999999
- Text: "Resend (60s)"

**Step 2 - Password Setup**

**Password Input**
- Height: 96px
- Margin bottom: 24px
- Left icon: Lock 28px
- Right icon: Eye toggle

**Confirm Password Input**
- Same structure
- Placeholder: "Confirm your password"

**Password Requirements**
- Margin top: 16px
- Padding: 20px
- Background: #F7F8FA
- Border radius: 12px

**Requirement Item**
- Font size: 22px
- Color: #999999
- Line height: 32px
- Display: flex, align items center

**Check Icon**
- Size: 20px
- Color: #39B54A (if met)
- Color: #CCCCCC (if not met)
- Margin right: 12px

**Requirements:**
- At least 8 characters
- Contains uppercase letter
- Contains lowercase letter
- Contains number

**Step 3 - Personal Info (Optional)**

**Nickname Input**
- Height: 96px
- Placeholder: "Enter nickname (optional)"

**Gender Selector**
- Margin top: 24px
- Display: flex, gap: 16px
- (Same as personal info page)

### Continue Button
- Width: 690px
- Margin: 50px 30px 30px 30px
- Height: 96px
- Background: #7C4DFF
- Border radius: 16px
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF

**Last Step - Complete Button**
- Text: "Complete Registration"

### Terms Agreement
- Width: 690px
- Margin: 30px
- Display: flex
- Align items: flex-start

**Checkbox**
- Size: 32px × 32px
- Border: 2px solid #E5E5E5
- Border radius: 8px
- Flex shrink: 0

**Checked State**
- Background: #7C4DFF
- Border color: #7C4DFF
- Checkmark: White

**Agreement Text**
- Flex: 1
- Margin left: 16px
- Font size: 22px
- Color: #666666
- Line height: 32px

**Link Text**
- Color: #7C4DFF
