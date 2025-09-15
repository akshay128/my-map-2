// My Map 2 - Interactive Map Application

class MapApp {
    constructor() {
        this.map = null;
        this.markers = [];
        this.init();
    }

    init() {
        // Initialize the map
        this.map = L.map('map').setView([40.7128, -74.0060], 10); // Default to New York City
        
        // Add tile layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        
        // Add default marker
        this.addDefaultMarker();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Try to get user's location
        this.getCurrentLocation();
    }

    addDefaultMarker() {
        const defaultMarker = L.marker([40.7128, -74.0060])
            .addTo(this.map)
            .bindPopup('<b>Welcome to My Map 2!</b><br>This is New York City.<br>Click anywhere on the map to add markers.')
            .openPopup();
        this.markers.push(defaultMarker);
    }

    setupEventListeners() {
        // Add click event to add markers
        this.map.on('click', (e) => {
            this.addMarkerAtLocation(e.latlng.lat, e.latlng.lng, 'Clicked Location');
        });
    }

    addMarkerAtLocation(lat, lng, title = 'New Marker') {
        const marker = L.marker([lat, lng])
            .addTo(this.map)
            .bindPopup(`
                <b>${title}</b><br>
                Latitude: ${lat.toFixed(4)}<br>
                Longitude: ${lng.toFixed(4)}<br>
                <small>Added: ${new Date().toLocaleTimeString()}</small>
            `);
        
        this.markers.push(marker);
        return marker;
    }

    addRandomMarker() {
        const bounds = this.map.getBounds();
        
        // Generate random coordinates within the current view
        const lat = bounds.getSouth() + (Math.random() * (bounds.getNorth() - bounds.getSouth()));
        const lng = bounds.getWest() + (Math.random() * (bounds.getEast() - bounds.getWest()));
        
        this.addMarkerAtLocation(lat, lng, 'Random Marker');
    }

    clearMarkers() {
        // Remove all markers except the first one (default marker)
        this.markers.forEach((marker, index) => {
            if (index > 0) {
                this.map.removeLayer(marker);
            }
        });
        this.markers = [this.markers[0]]; // Keep only the default marker
    }

    zoomToWorld() {
        this.map.setView([20, 0], 2);
    }

    getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    
                    this.map.setView([userLat, userLng], 13);
                    
                    const userMarker = L.marker([userLat, userLng])
                        .addTo(this.map)
                        .bindPopup(`
                            <b>📍 You are here!</b><br>
                            Latitude: ${userLat.toFixed(4)}<br>
                            Longitude: ${userLng.toFixed(4)}<br>
                            <small>Located: ${new Date().toLocaleString()}</small>
                        `)
                        .openPopup();
                    
                    this.markers.push(userMarker);
                },
                (error) => {
                    console.log('Geolocation error:', error.message);
                    // Keep default location if geolocation fails
                }
            );
        }
    }

    getMarkerCount() {
        return this.markers.length;
    }

    fitMarkersToView() {
        if (this.markers.length > 1) {
            const group = new L.featureGroup(this.markers);
            this.map.fitBounds(group.getBounds().pad(0.1));
        }
    }
}

// Global functions for button handlers
let mapApp;

function addMarker() {
    mapApp.addRandomMarker();
}

function clearMarkers() {
    mapApp.clearMarkers();
}

function zoomToWorld() {
    mapApp.zoomToWorld();
}

function fitToMarkers() {
    mapApp.fitMarkersToView();
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    mapApp = new MapApp();
});