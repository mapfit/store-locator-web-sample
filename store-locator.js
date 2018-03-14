let map;

document.addEventListener('DOMContentLoaded', function(){
    
    L.apikey = '591dccc4e499ca0001a4c6a423229dd9f27f4b999d8353e974feb679';
    map = L.MapView('mapfit')
    map.drawMap();
    map.setRecenterButtonEnabled(true);
    map.setCenter([40.714997, -73.985367])
    map.setZoom(13);
    let locationList = document.getElementById('location-list')
    let locationListMobile = document.getElementById('location-list-mobile')
    let xml = new XMLHttpRequest();
    let company;

    // switch(window.location.pathname.toLowerCase()){
    //     case "starbucks":
    //         company = "starbucks"
    //         break;
    //     default:
    //         company = "starbucks"
    //         break;

    // }
    
    //window.location.pathname = `/${company}`;
    // history.pushState('index.html', 'Store Locator', `/${company}`)
    // xml.open("GET",`${company}-locations.json`)
    // xml.setRequestHeader("Accept", "application/json")

    // xml.onreadystatechange = function(){
    //     if (xml.readyState == 4 && xml.status == "200") {
    //         // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
    //         let locs = JSON.parse(xml.responseText);
    //         console.log(locs)
    //         for(let element in locs){

    //             let listItem = document.createElement('li')
    //             let listItemMobile = document.createElement('li')
    //             listItem.innerHTML = `<h2>${locs[element].Name}</h2><p>${locs[element].Address}</p>`
    //             listItemMobile.innerHTML = `<h2>${locs[element].Name}</h2><p>${locs[element].Address}</p>`
    //             locationList.appendChild(listItem);
    //             locationListMobile.appendChild(listItemMobile);
    //             let marker = mapfit.Marker();
    //             let icon = mapfit.Icon();
    //             icon.setIconUrl('./images/pngs/custom.png')
    //             icon.setWidth(38);
    //             icon.setHeight(56);
    //             icon.setAnchorWidth(19)
    //             icon.setAnchorHeight(52)
    //             let placeInfo = mapfit.PlaceInfo();
    //             placeInfo.setTitle(`<h3>${locs[element].Name}</h3>`);
    //             placeInfo.setDescription(`<p>${locs[element].Address}</p>`);
    //             placeInfo.enableDirectionsButton();
    //             marker.setIcon(icon);
    //             marker.address = locs[element].Address;
    //             marker.setPlaceInfo(placeInfo);
    //             console.log(marker);
    //             map.addMarker(marker)
    //             console.log(locs[element])
    //         }
    //     }
    // }
    // xml.send(null)

    let locs = {
        "Chelsea":{
            "Address": "450 W 15th Street, New York, NY 10014",
            "Coordinates": "",
            "Name": "Chelsea"
        },
        "Bryant Park":{
            "Address": "54 W 40th Street, New York, NY 10018",
            "Coordinates": "",
            "Name": "Bryant Park"
        },
        "Grand Central Place":{
            "Address": "60 E 42nd Street, Suite 140, New York, NY 10165",
            "Coordinates": "",
            "Name": "Grand Central Place"
        },
        "Rockefeller Center":{
            "Address": "1 Rockefeller Plaza, Suite D, New York,NY 10020",
            "Coordinates": "",
            "Name": "Rockefeller Center"
        },
        "Midtown East":{
            "Address": "10 E 53rd Street, New York, NY 10022",
            "Coordinates": "",
            "Name": "Midtown East"
        },
        "Clinton Street":{
            "Address": "71 Clinton Street, New York, NY 10002",
            "Coordinates": "",
            "Name": "Clinton Street"
        }
    }


    for(let element in locs){
        let listItem = document.createElement('li')
        let listItemMobile = document.createElement('li')
        listItem.innerHTML = `<h2>${locs[element].Name}</h2><p>${locs[element].Address}</p>`
        listItemMobile.innerHTML = `<h2>${locs[element].Name}</h2><p>${locs[element].Address}</p>`
        locationList.appendChild(listItem);
        locationListMobile.appendChild(listItemMobile);
        let marker = mapfit.Marker();
        let icon = mapfit.Icon();
        icon.setIconUrl('./images/pngs/custom.png')
        icon.setWidth(38);
        icon.setHeight(56);
        icon.setAnchorWidth(19)
        icon.setAnchorHeight(52)
        let placeInfo = mapfit.PlaceInfo();
        placeInfo.setTitle(`<h3>${locs[element].Name}</h3>`);
        placeInfo.setDescription(`<p>${locs[element].Address}</p>`);
        placeInfo.enableDirectionsButton();
        marker.setIcon(icon);
        marker.address = locs[element].Address;
        marker.setPlaceInfo(placeInfo);
        map.addMarker(marker)
    }
    
})

