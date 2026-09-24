# Page 18: AI Image Generation

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

---

## Page 18: AI Image Generation

### Navigation Bar
- Height: 88px + status-bar-height
- Background: linear-gradient(135deg, #FF6B9D 0%, #FFA06B 100%)
- Title: "AI Image Generation"
- Font size: 32px, weight 600, color #FFFFFF
- Left: Back button, color #FFFFFF
- Right: History button, color #FFFFFF

### Input Section
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Title**
- Font size: 28px
- Font weight: 600
- Color: #333333
- Margin bottom: 20px

**Prompt Input**
- Min height: 120px
- Background: #F7F8FA
- Border radius: 12px
- Padding: 20px
- Font size: 26px
- Line height: 38px
- Border: 2px solid #E5E5E5
- Placeholder: "Describe the image you want to generate..."

**Character Counter**
- Font size: 22px
- Color: #999999
- Text align: right
- Margin top: 8px

### Options Section
- Margin top: 30px

**Option Group**
- Margin bottom: 30px

**Label**
- Font size: 26px
- Font weight: 600
- Color: #333333
- Margin bottom: 16px

**Size Options**
- Display: flex
- Gap: 12px

**Size Button**
- Flex: 1
- Height: 72px
- Background: #F7F8FA
- Border radius: 12px
- Border: 2px solid #E5E5E5
- Font size: 24px
- Color: #666666
- Active: Border #7C4DFF, color #7C4DFF, background rgba(0,129,255,0.05)

**Sizes:**
- Square (1:1)
- Landscape (16:9)
- Portrait (9:16)

**Style Options**
- Display: Grid 3 columns
- Gap: 12px

**Style Card**
- Height: 100px
- Background: #F7F8FA
- Border radius: 12px
- Border: 2px solid #E5E5E5
- Padding: 16px
- Text align: center
- Active: Border #7C4DFF

**Icon**
- Size: 32px
- Margin bottom: 8px

**Label**
- Font size: 22px
- Color: #666666

**Styles:**
- Realistic 🎨
- Illustration 🖼️
- Abstract 🌈
- Anime 🎭
- 3D Render 💎
- Oil Painting 🖌️

### Generate Button
- Width: 690px
- Margin: 30px
- Height: 96px
- Background: linear-gradient(135deg, #FF6B9D 0%, #FFA06B 100%)
- Border radius: 16px
- Font size: 32px
- Font weight: 600
- Color: #FFFFFF
- Box shadow: 0 4px 12px rgba(255,107,157,0.3)

**Loading State**
- Show spinner icon
- Text: "Generating..."
- Disabled: opacity 0.6

### Result Section
- Width: 690px
- Margin: 30px
- Display: none until generated

**Generated Image**
- Width: 690px
- Border radius: 16px
- Box shadow: 0 4px 20px rgba(0,0,0,0.12)

**Action Buttons Row**
- Display: flex
- Gap: 16px
- Margin top: 20px

**Download Button**
- Flex: 1
- Height: 72px
- Background: #7C4DFF
- Border radius: 12px
- Icon + text: "Download"
- Font size: 26px
- Color: #FFFFFF

**Share Button**
- Flex: 1
- Height: 72px
- Background: #FFFFFF
- Border: 2px solid #7C4DFF
- Border radius: 12px
- Icon + text: "Share"
- Font size: 26px
- Color: #7C4DFF

**Regenerate Button**
- Flex: 1
- Height: 72px
- Background: #F7F8FA
- Border radius: 12px
- Icon + text: "Regenerate"
- Font size: 26px
- Color: #666666

### History Grid
- Width: 690px
- Margin: 30px
- Display: Grid 2 columns
- Gap: 16px

**History Item**
- Width: 337px
- Height: 337px
- Border radius: 16px
- Position: relative
- Box shadow: 0 2px 8px rgba(0,0,0,0.08)

**Image**
- Width: 100%
- Height: 100%
- Object fit: cover
- Border radius: 16px

**Overlay** (on hover/press)
- Position: absolute
- Background: rgba(0,0,0,0.5)
- Display: flex center
- Action icons: Download, Delete
