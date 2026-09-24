# Page 9: Bill Favorites

**Design Specs:** 750px width | Clean & Elegant | Deep Purple #7C4DFF

---

## Page 9: Bill Favorites

### Navigation Bar
- Height: 88px + status-bar-height
- Background: #FFFFFF
- Title: "Favorites"
- Left: Back button
- Right: Edit button

### Sort/Filter Bar
- Width: 690px
- Margin: 20px 30px
- Display: flex, space-between

**Sort Button**
- Padding: 12px 24px
- Background: #F7F8FA
- Border radius: 999px
- Font size: 24px
- Color: #666666
- Icon: Sort 20px

**Filter Buttons**
- Same style as sort
- Options: All, Expense, Income

### Favorites List
- Margin: 0 30px

**Favorite Item Card**
- Background: #FFFFFF
- Border radius: 16px
- Padding: 24px 30px
- Margin bottom: 16px
- Box shadow: 0 2px 8px rgba(0,0,0,0.04)
- Display: flex

**Star Icon**
- Size: 32px
- Color: #F7C242
- Margin right: 20px

**Content** (Same as bill item)
- Category icon + name
- Title + remark
- Amount

**Action Buttons** (Slide to reveal)
- Unfavorite: Background #F7C242
- Delete: Background #FC5872
- Width: 100px each

### Empty State
- Padding: 100px 30px
- Text align: center

**Icon**
- Star outline 120px
- Color: #E5E5E5

**Text**
- Font size: 26px
- Color: #999999
- Text: "No favorites yet"

**Action Button**
- Margin top: 30px
- Text: "Browse Bills"
- Font size: 24px
- Color: #7C4DFF
