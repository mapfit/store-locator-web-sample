let map;
document.addEventListener('DOMContentLoaded', function(){
    L.apikey = '591dccc4e499ca0001a4c6a423229dd9f27f4b999d8353e974feb679';
    map = L.MapView('mapfit')
    map.drawMap();
    map.setRecenterButtonEnabled(true);
    map.setCenter([40.714997, -73.985367])
    map.setZoom(13);
    let locationList = document.getElementById('location-list')
    let xml = new XMLHttpRequest();
    xml.open("GET",'starbucks-locations.json')
    xml.setRequestHeader("Accept", "application/json")

    xml.onreadystatechange = function(){
        if (xml.readyState == 4 && xml.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            let locs = JSON.parse(xml.responseText);
            console.log(locs)
            for(let element in locs){

                let listItem = document.createElement('li')
                listItem.innerHTML = `<h2>${locs[element].Name}</h2><p>${locs[element].Address}</p>`
                locationList.appendChild(listItem);
                let marker = mapfit.Marker();
                let icon = mapfit.Icon();
                icon.setIconUrl('cafe')
                let placeInfo = mapfit.PlaceInfo();
                placeInfo.setTitle(`<h3>${locs[element].Name}</h3>`);
                placeInfo.setDescription(`<p>${locs[element].Address}</p>`);
                placeInfo.enableDirectionsButton();
                marker.setIcon(icon);
                marker.address = locs[element].Address;
                marker.setPlaceInfo(placeInfo);
                console.log(marker);
                map.addMarker(marker)
                console.log(locs[element])
            }
        }
    }
    xml.send(null)
    
})

