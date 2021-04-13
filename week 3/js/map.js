var map = L.map('map').setView([32.7157, -117.1611], 10);

var sd = L.icon({
    iconUrl: 'sd.jpg',

    iconSize: [80, 80], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var vta = L.icon({
    iconUrl: 'vta.jpg',

    iconSize: [80, 80], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var fl = L.icon({
    iconUrl: 'fl.jpg',

    iconSize: [80, 80], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var cl = L.icon({
    iconUrl: 'cl.jpg',

    iconSize: [80, 80], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var la = L.icon({
    iconUrl: 'la.jpg',

    iconSize: [80, 80], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let data = [
    {
        'title': 'San Diego, where I was born',
        'lat': 32.7157,
        'lon': -117.1611,
        'icon': sd
    },
    {
        'title': 'Ventura, where I grew up',
        'lat': 34.2805,
        'lon': -119.2945,
        'icon': vta
    },
    {
        'title': 'Fort Lee VA, where I spent a year in training',
        'lat': 37.2490,
        'lon': -77.3382,
        'icon': fl
    },
    {
        'title': 'Camp Lejeune, where I was stationed for about 4 years',
        'lat': 34.6251,
        'lon': -77.4013,
        'icon': cl
    },
    {
        'title': 'LA, where I am now',
        'lat': 34.0522,
        'lon': -118.2437,
        'icon': la
    }
]

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let myMarkers = L.featureGroup();
// loop through data
let i;
for (i = 0; i < 5; i++) {

    var marker = L.marker([data[i].lat, data[i].lon], {
        icon: data[i].icon, riseOnHover: true, clickable: true,
        title: data[i].title
    }).on('click', zoomIn).bindPopup(data[i].title);

    marker.title = data[i].title;

    myMarkers.addLayer(marker)

    $('.sidebar').append(`<div class="sidebar-item" onclick="flyByIndex(${i})" 
    onmouseover="setAttribute('style', 'background-color : black; color : white; border: 3px solid white;')" 
    onmouseleave="setAttribute('style', 'background-color : gainsboro')">${data[i].title}</div>`)
}

myMarkers.addTo(map)

// define layers
let layers = {
    "My Markers": myMarkers
}

// add layer control box
L.control.layers(null, layers).addTo(map)

// make the map zoom to the extent of markers
map.fitBounds(myMarkers.getBounds());
map.setView([32.7157, -117.1611], 17); // starting view


// functions

// function to fly to a location by a given id number
function flyByIndex(index) {
    map.flyTo([data[index].lat, data[index].lon], 12)

    // open the popup
    myMarkers.getLayers()[index].openPopup()
}


function zoomIn() {   //zoom in when you click the marker
    this.bindPopup(this.title).openPopup();
    map.setView([this.getLatLng().lat, this.getLatLng().lng], 18);

}

function changeColor() {
    document.sidebar - item.setAttribute('style', 'background-color : red');
}

function flyToIndex(index) {
    map.flyTo([data[index].lat, data[index].lon], 12)
}


