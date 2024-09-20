

let styleUrl = 'mapbox://styles/hudsonaccess/cm0si1ohd02vk01qr8tgj1g8q'

let mapbox_access_token = 'pk.eyJ1IjoiaHVkc29uYWNjZXNzIiwiYSI6ImNsbDJqbnJ5ZjIyYWgzZHBrNTFwNmp5eHgifQ.WmHbnTbEIrqqpzFU0HF9eA';

mapboxgl.accessToken = mapbox_access_token;


const map = new mapboxgl.Map({
    container: 'map',
    // type: 'vector',
    style: styleUrl,
    zoom: 9,
    center: [-74.0060, 40.7128] // New York coordinates
});

let link = `https://api.mapbox.com/styles/v1/hudsonaccess/cm0si558602t401qq85gsamhk?access_token=${mapbox_access_token}`;
console.log(link);


map.on('load', function() {

    let layers = map.getStyle().layers;

    console.log(layers);

    let makeVisizble = [
        'hap-sites-name-program-contac-78n54l (1)',
        'csos-near-hap-sites-06112024-528lbh'
    ]

    makeVisizble.forEach(layer => {
        if (layers.find(l => l.id === layer)) {
            map.setLayoutProperty(layer, 'visibility', 'visible');
        }
    });

});



// add vector tile 
console.log( 'Loading the tile layers' )

