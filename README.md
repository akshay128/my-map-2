# My Map 2

An interactive web-based map application built with Leaflet.js that allows users to explore locations, add markers, and interact with a responsive map interface.

## Features

- 🗺️ **Interactive Map**: Powered by OpenStreetMap and Leaflet.js
- 📍 **Dynamic Markers**: Click anywhere on the map to add markers
- 🎯 **Location Detection**: Automatically detects and centers on user's location
- 🎮 **Map Controls**: Easy-to-use buttons for map manipulation
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI**: Clean, gradient-based design with smooth animations

## How to Use

1. **Open the Application**: 
   - Open `index.html` in any modern web browser (uses custom CSS-based map)
   - Or open `index-leaflet.html` for full Leaflet.js integration (requires internet connection)
2. **Explore the Map**: Use mouse/touch to pan and zoom around the map
3. **Add Markers**: 
   - Click anywhere on the map to add a marker at that location
   - Use the "Add Marker" button to add a random marker in the current view
4. **Control the Map**:
   - **Clear Markers**: Remove all markers except the default welcome marker
   - **Zoom to World**: Reset the view to show the entire world
   - **Fit to Markers**: Adjust the view to show all markers on screen

## Files Structure

```
my-map-2/
├── index.html          # Main HTML file (CSS-based map implementation)
├── index-leaflet.html  # Alternative Leaflet.js implementation
├── styles.css          # Stylesheet with responsive design
├── script.js           # JavaScript functionality for Leaflet version
└── README.md           # This documentation
```

## Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling with gradients and responsive design
- **JavaScript (ES6+)**: Interactive functionality with modern syntax
- **Leaflet.js**: Open-source mapping library
- **OpenStreetMap**: Free, editable map data

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Allow location access when prompted (optional)
4. Start exploring and adding markers!

## Customization

You can easily customize the map by modifying:

- **Default location**: Change the coordinates in `script.js`
- **Map style**: Modify the tile layer URL for different map themes
- **Colors and styling**: Update `styles.css` to match your preferences
- **Functionality**: Add new features by extending the `MapApp` class

## License

This project is open source and available under the MIT License.
