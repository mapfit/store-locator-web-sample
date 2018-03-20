let map;

document.addEventListener('DOMContentLoaded', function(){
    
    L.apikey = '591dccc4e499ca0001a4c6a423229dd9f27f4b999d8353e974feb679';
    map = L.MapView('mapfit')
    map.drawMap();
    map.setRecenterButtonEnabled(true);
    map.setCenter([40.714997, -73.985367], 0)
    map.setZoom(13);
    let locationList = document.getElementById('location-list')
    let locationListMobile = document.getElementById('location-list-mobile')
    let gitLink = document.getElementById('git-link')
    let gitLinkInfo = document.getElementById('git-link-info')
    let company;
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
        },
        "Dean Street":{
            "Address": "85 Dean Street Brooklyn, NY 11201",
            "Coordinates":"",
            "Name": "Dean Street"
        },
        "Williamsburg":{
            "Address": "76 N. 4th Street, Store A Brooklyn, NY 11249",
            "Coordinates": "",
            "Name": "Williamsburg"
        },
        "World Trade Center":{
            "Address": "150 Greenwich St New York, NY 10007",
            "Coordinates": "",
            "Name": "World Trade Center"
        },
        "University Place":{
            "Address": "101 University Place New York, NY 10003",
            "Coordinates": "",
            "Name":"University Place"
        },
        "Bushwick":{
            "Address": "279 McKibbin Street Brooklyn, NY 11206",
            "Coordinates": "",
            "Name":"Bushwick"
        }

    }

    var timerId;
    gitLink.addEventListener("mouseover", function(){
        gitLink.src = "./images/pngs/gitHover.png"
        timerId = window.setTimeout(function(){
                    gitLinkInfo.style.display = "block";
                  },1500);
        
    })

    gitLink.addEventListener("mouseout", function(){
        gitLink.src = "./images/pngs/gitRegular.png"
        window.clearTimeout(timerId);
        gitLinkInfo.style.display = "none";
    })
   


    for(let element in locs){
        let listItem = document.createElement('li')
        let listItemMobile = document.createElement('li')
        listItem.innerHTML = `<h1>${locs[element].Name}</h1><p>${locs[element].Address}</p>`
        listItemMobile.innerHTML = `<h1>${locs[element].Name}</h1><p>${locs[element].Address}</p>`
        let marker = mapfit.Marker();
        let icon = mapfit.Icon();
        //icon.setIconUrl('./images/pngs/custom.png')
        icon.setIconUrl('cafe')
        // icon.setWidth(38);
        // icon.setHeight(56);
        // icon.setAnchorWidth(19)
        // icon.setAnchorHeight(52)
        let placeInfo = mapfit.PlaceInfo({offset: [0,]});
        placeInfo.setTitle(`<h3 id="infoHeader">${locs[element].Name}</h3>`);
        placeInfo.setDescription(`<p id="infoDescription">${locs[element].Address}</p>`);
        placeInfo.enableDirectionsButton(true);

        map.options.mapObject.on("popupopen popupclose",function(e){
           switch(e.type){
               case "popupopen":
                if(e.popup === placeInfo){
                    listItem.style.backgroundColor = "#f2f5f7";
                    listItemMobile.style.backgroundColor = "#f2f5f7"
                    listItem.scrollIntoView()
                    listItemMobile.scrollIntoView()
                }
               break;
               case "popupclose":
                if(e.popup === placeInfo){
                    listItem.style.backgroundColor = "#ffff";
                    listItemMobile.style.backgroundColor = "#ffff"
                }
                break;
                
           }
            
        })
        marker.setIcon(icon);
        marker.address = locs[element].Address;
        marker.setPlaceInfo(placeInfo);

        marker.on("click",function(){
            let mPos = marker.getPosition();
            map.setCenter([mPos.lat, mPos.lng], 0)
        })
        listItem.addEventListener("click",function(){
            marker.fire('click');
        })

        listItemMobile.addEventListener("click",function(){
            marker.fire('click');
        })


       
        map.addMarker(marker)
        locationList.appendChild(listItem);
        locationListMobile.appendChild(listItemMobile);
    }

   
   
    
})

