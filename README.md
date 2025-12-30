# 🏁 Juniper's Alphabet Race! 🎮

A fun, educational racing game for toddlers that combines button-mashing fun with alphabet learning!

## 🎯 Features

- **5 Adorable Racers**: Siamese cat, two tabbies, a princess, and a monster
- **Simple Controls**: Just press SPACE or TAP to make everyone race!
- **Alphabet Learning**: Race through all 26 letters from A to Z
- **Themed Backgrounds**: Each letter has fun themed emojis (Apples, Bumblebees, Zebras, etc.)
- **Audio Announcements**: Hear each letter announced out loud as you race
- **Random Winner**: Different winner every time for replay value!
- **Mobile Friendly**: Works great on phones and tablets

## 🚀 How to Play

1. **Open `index.html` in your web browser**
2. **Press and hold SPACE** (or tap and hold on mobile) to make the racers run
3. **Watch them race through the alphabet** - A is for Apples, B is for Bumblebees!
4. **Cheer for your favorite** - the racers stay close together so anyone can win!
5. **Celebrate the winner** with applause at the finish line! 🎉
6. **Click "Race Again!"** to play another round

## 🎨 Customization Ideas

### Adding Real Character Images

The game currently uses emojis, but you can easily add custom character images:

1. Add image files to an `images/` folder
2. Update the `.racer-character` divs in `index.html`:
   ```html
   <div class="racer-character">
       <img src="images/siamese-cat.png" alt="Flame">
   </div>
   ```
3. Adjust the CSS in `styles.css` to style the images

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
