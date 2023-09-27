if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);

        // Chame a função initMap e passe as coordenadas
        initMap(latitude, longitude);
    });
} else {
    console.log("Geolocalização não é suportada pelo seu navegador.");
}

function initMap(latitude, longitude) {
    // Coordenadas de latitude e longitude
    var myLatLng = { lat: latitude, lng: longitude };

    // Crie um mapa com as opções de zoom e centro
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng
    });

    // Adicione um marcador ao mapa
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Minha Localização'
    });
}
