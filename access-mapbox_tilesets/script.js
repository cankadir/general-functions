
const sba_id = 'hudsonrf.20f3qr15'
mapboxgl.accessToken = 'pk.eyJ1IjoiaHVkc29ucmYiLCJhIjoiY2ptcWsybmN0MXF5azN2bWw0emxvdmI2aSJ9.lFisgR_vLsqNOMgusrDIhA';

const map = new mapboxgl.Map({
    container: 'map',
    // type: 'vector',
    style: 'mapbox://styles/hudsonrf/clxgh1t7100vt01qmgorcg64x',
    zoom: 9,
    center: [-74.0060, 40.7128] // New York coordinates
});

map.on('load', function() {

    let layers = map.getStyle().layers;

    // filter layers to only show layers that start with 'ia-', the interactive ones.
    layers = layers.filter(layer => layer.id.startsWith('ia-'));
    console.log('AI layers: ', layers);
    
    const buttonsContainer = document.querySelector('.buttons');
    layers.forEach(layer => {

        // if layer has paint property
        if (layer.paint && layer.paint['fill-color']) {
            
            // visibility
            // does layer name have the word visible in it? if yes set visibility to visible, else set to none
            layer.id.includes('visible') ? map.setLayoutProperty(layer.id, 'visibility', 'visible') : map.setLayoutProperty(layer.id, 'visibility', 'none');;
            
            // Create buttons
            const button = document.createElement('button');
            button.className = 'toggle-layers';
            buttonsContainer.appendChild(button);
            
            button.style.backgroundColor = layer.paint['fill-color'];
            button.textContent = layer.id;
            
            button.addEventListener('click', () => {
                let visibility = map.getLayoutProperty(layer.id, 'visibility');
                console.log('visibility: ', visibility);
                map.setLayoutProperty(layer.id, 'visibility', visibility === 'visible' ? 'none' : 'visible');
            });   
        }
    });




})


// add vector tile 
console.log( 'Loading the tile layers' )

