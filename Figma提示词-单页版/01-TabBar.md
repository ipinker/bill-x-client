# Page 1: Bottom TabBar

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

---

## Page 1: Bottom TabBar

### Layout Description
Design a bottom navigation bar with 3 tabs spanning the full width of 750px.

### Component Specifications

**Container**
- Width: 750px
- Height: 100px + safe-area-inset-bottom
- Background: #FFFFFF
- Top shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.05)
- Position: Fixed bottom

**Tab Items** (3 items, equal width)
- Each tab width: 250px
- Padding: 10px 0
- Display: Flex column, center aligned

**Tab 1 - Todo/Home**
- Icon: 📊 Dashboard icon
- Size: 40px
- Label: "Todo"
- Font size: 20px
- Inactive color: #999999
- Active color: #7C4DFF

**Tab 2 - AI Assistant**
- Icon: 🤖 AI robot icon
- Size: 40px
- Label: "AI"
- Font size: 20px
- Inactive color: #999999
- Active color: #7C4DFF

**Tab 3 - Profile**
- Icon: 👤 User icon
- Size: 40px
- Label: "Mine"
- Font size: 20px
- Inactive color: #999999
- Active color: #7C4DFF

### Interaction States
- **Default**: Gray icon (#999999) + gray text (#999999)
- **Active**: Blue icon (#7C4DFF) + blue text (#7C4DFF) + 600 font-weight
- **Pressed**: Scale 0.95 with 150ms transition

### Bottom Safe Area
- Add safe-area-inset-bottom for iPhone X and newer models
- Minimum bottom padding: 20px on devices without notch
