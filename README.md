# 🏁 Juniper's Alphabet Race! 🎮

A beautiful, educational racing game for toddlers that combines button-mashing fun with alphabet learning!

## 🎯 Features

- **5 Hand-Illustrated Racers**:
  - 🐱 **Flame** - Flame Point Siamese cat with creamy colors
  - 😛 **Silly** - Tall skinny Black Mackerel Tabby with tongue sticking out
  - 😾 **Grumpy** - Stout wide Black Mackerel Tabby with intense look
  - 👸 **Princess** - Sparkly dress and golden crown
  - 👹 **Monster** - Sulley-style friendly monster with horns
- **Simple Controls**: Just press SPACE or TAP to make everyone race!
- **Alphabet Learning**: Race through all 26 letters from A to Z
- **Layered Parallax Scenes**: Beautiful sky, background, and themed foreground items
- **Themed Backgrounds**: Each letter has fun themed emojis (Apples, Bumblebees, Zebras, etc.)
- **Audio Announcements**: Hear each letter announced out loud as you race
- **Random Winner**: Different winner every time for replay value!
- **Smooth Animations**: Characters run, legs move, tongues wag, dresses sparkle!
- **Great Vertical Spacing**: Easy to see all racers at once
- **Mobile Friendly**: Works great on phones and tablets

## 🚀 How to Play

1. **Open `index.html` in your web browser**
2. **Press and hold SPACE** (or tap and hold on mobile) to make the racers run
3. **Watch them race through the alphabet** - A is for Apples, B is for Bumblebees!
4. **Cheer for your favorite** - the racers stay close together so anyone can win!
5. **Celebrate the winner** with applause at the finish line! 🎉
6. **Click "Race Again!"** to play another round

## 🎨 Customization Ideas

### Customizing Character Appearance

The characters are built with pure CSS! You can customize them by editing `styles.css`:

- **Change cat colors**: Look for the `.flame-cat`, `.tall-tabby`, `.stout-tabby` sections
- **Adjust character sizes**: Modify the `.racer-character` width and height
- **Change princess dress color**: Update the `.princess-dress` gradient colors
- **Modify monster appearance**: Edit `.monster` colors and features

### Replacing with Custom Images

Want to use actual photos or illustrations? Easy:

1. Add image files to an `images/` folder
2. Replace the CSS-illustrated character with an image:
   ```html
   <div class="racer-character">
       <img src="images/flame-cat.png" alt="Flame" style="width: 120px; height: 120px;">
   </div>
   ```
3. Comment out or remove the complex CSS for that character

### Changing the Alphabet Words

Edit the `alphabet` array in `game.js` to customize what appears for each letter:

```javascript
{ letter: 'A', word: 'Apples', emoji: '🍎', count: 8 }
```

### Adding Sound Effects

You can add audio files for letters instead of text-to-speech:

1. Add MP3 files to an `audio/` folder (e.g., `audio/A.mp3`)
2. Update the `announceLetter()` function to play audio files

### Adjusting Difficulty

In `game.js`, change the finish line distance:
- **Shorter race**: `finishLinePosition: 1300` (half alphabet)
- **Longer race**: `finishLinePosition: 5200` (full alphabet twice)

## 🌐 Deploying Online

You can easily host this game for free:

### GitHub Pages
1. Push the code to a GitHub repository
2. Go to Settings → Pages
3. Select the main branch
4. Your game will be live at `https://username.github.io/alphabet-race/`

### Netlify Drop
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the entire folder
3. Get an instant live URL!

## 📱 Tips for Toddlers

- **Use fullscreen mode** (F11 on desktop) for an immersive experience
- **On tablets**: Pin the browser to prevent accidental exits
- **On mobile**: Add to home screen for a more app-like experience
- **Volume up!** The audio announcements help with letter recognition

## 💝 Made with Love

Created for Juniper - happy racing! 🎉

## 🔧 Technical Details

- Pure HTML/CSS/JavaScript - no dependencies!
- Uses Web Speech API for text-to-speech
- Responsive design for all screen sizes
- Touch-friendly for mobile devices
- Works in all modern browsers

---

**Have fun learning your ABCs, Juniper!** 🌟
