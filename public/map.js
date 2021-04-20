var mymap = L.map('worldmap',
     {
      center: [48.866667, 2.333333],
      zoom: 4
     }
     );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '(c) <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

var customIcon = L.icon({
     iconUrl: './images/leaf-green.png',
     shadowUrl: '/images/leaf-shadow.png',
    
     iconSize:   [15, 45],
     shadowSize:  [25, 30],
    
     iconAnchor:  [5, 45],
     shadowAnchor: [0, 30],  
    
     popupAnchor: [5, -40]
    });

$('li').each(function(){
     L.marker([$(this).data("lat"), $(this).data("lon")], {icon: customIcon}).addTo(mymap).bindPopup($(this).data("name"));
});