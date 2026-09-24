# Page 14: Bill Statistics

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

---

## Page 14: Bill Statistics

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Statistics"
- Left: Back button
- Right: Share button

### Time Period Selector
- Width: 690px
- Margin: 20px 30px
- Display: flex, space-between

**Previous Button**
- Size: 60px × 60px
- Border radius: 12px
- Background: #F7F8FA
- Icon: Left arrow 24px

**Period Display**
- Font size: 28px
- Font weight: 600
- Color: #333333
- Text: "September 2024"

**Next Button**
- Size: 60px × 60px
- Border radius: 12px
- Background: #F7F8FA
- Icon: Right arrow 24px

### Summary Cards Row
- Width: 690px
- Margin: 0 30px
- Display: Grid 3 columns
- Gap: 15px

**Summary Card**
- Height: 140px
- Background: #FFFFFF
- Border radius: 16px
- Padding: 24px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)
- Text align: center

**Label**
- Font size: 22px
- Color: #999999
- Margin bottom: 12px

**Amount**
- Font size: 32px
- Font weight: 700
- Expense: #FC5872
- Income: #39B54A
- Balance: #7C4DFF or #FC5872

**Card 1 - Expense**
- Background: linear-gradient(109.6deg, #FFEBEE 29.9%, #FFFFFF 99.9%)

**Card 2 - Income**
- Background: linear-gradient(109.6deg, #E8F8EB 29.9%, #FFFFFF 99.9%)

**Card 3 - Balance**
- Background: #FFFFFF

### Trend Chart Card
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Header**
- Title: "Bill Trend"
- Font size: 28px
- Font weight: 600
- Color: #333333
- Right: Period selector (Day/Week/Month)

**Chart Area**
- Height: 300px
- Margin top: 30px

**Line Chart**
- Expense line: #FC5872, width 3px
- Income line: #39B54A, width 3px
- Grid lines: #F0F0F0
- X-axis labels: 22px, #999999
- Y-axis labels: 22px, #999999

### Category Distribution Card
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Header**
- Title: "Category Distribution"
- Font size: 28px
- Font weight: 600
- Color: #333333

**Pie Chart**
- Diameter: 300px
- Margin: 30px auto
- Colors: Use 8-color palette from design spec

**Legend List**
- Margin top: 30px

**Legend Item**
- Display: flex, space-between
- Padding: 12px 0
- Border bottom: 1px solid #F0F0F0

**Left Section**
- Color dot: 16px × 16px, border-radius 50%
- Category name: 26px, #333333, margin-left 12px

**Right Section**
- Percentage: 24px, #666666
- Amount: 26px, #333333, font-weight 600

### Detail Table Card
- Width: 690px
- Margin: 30px
- Background: #FFFFFF
- Border radius: 24px
- Padding: 30px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

**Header**
- Title: "Daily Statistics"
- Font size: 28px
- Font weight: 600
- Color: #333333

**Table**
- Margin top: 20px

**Table Header**
- Height: 60px
- Background: #F7F8FA
- Border radius: 12px
- Padding: 0 20px
- Display: Grid 4 columns
- Font size: 24px
- Color: #999999
- Font weight: 600

**Table Row**
- Height: 80px
- Padding: 0 20px
- Display: Grid 4 columns
- Border bottom: 1px solid #F0F0F0
- Align items: center

**Columns:**
1. Date: 24px, #666666
2. Expense: 26px, #FC5872, right-align
3. Income: 26px, #39B54A, right-align
4. Balance: 26px, #333333, right-align, font-weight 600
