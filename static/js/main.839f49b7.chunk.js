(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){},105:function(e,a,t){},107:function(e,a,t){},134:function(e,a){},136:function(e,a){},171:function(e,a){},172:function(e,a){},219:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(93),s=t.n(r),i=(t(103),t(8)),l=t(9),c=t(11),m=t(10),d=t(12),p=t(221),u=t(223),g=t(222),h=(t(105),t(107),t(94)),f=t.n(h),y=t(220),b=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={burgerOpen:!1},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar is-dark",role:"navigation",style:{backgroundColor:"#242f3e"}},o.a.createElement("div",{className:"navbar-brand"},o.a.createElement("a",{className:"navbar-item is-size-1",href:"/"},"The Bars of Davis Square"),o.a.createElement("div",{className:"navbar-burger","data-target":"navbarExampleTransparentExample",role:"button",style:{outline:"none"},tabIndex:"0"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))),o.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},o.a.createElement("div",{className:"navbar-start"}),o.a.createElement("div",{className:"navbar-end"},o.a.createElement(y.a,{className:"navbar-item",to:"/"},"Home"),o.a.createElement(y.a,{className:"navbar-item",to:"/about"},"About"),o.a.createElement("div",{className:"navbar-item"},o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control"},o.a.createElement("input",{className:"input",type:"text",placeholder:"find a bar"})))))))}}]),a}(n.Component);function v(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"content has-text-centered"},o.a.createElement("p",null,o.a.createElement("strong",null,"The Bars of Magoun Square")," by ",o.a.createElement("a",{href:"https://github.com/julianjohannesen"},"Julian Johannesen"),".")))}var w=t(95),E=t.n(w),M=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e={padding:"0.5em",border:"1px solid #242f3e",borderBottom:"none",borderRight:"none"};return o.a.createElement("section",{id:"barList",className:"section column is-narrow",style:{padding:"0"}},o.a.createElement("h2",{className:"heading is-size-4"},"Local Bars"),o.a.createElement("ul",{className:"menu-list",id:"barList",onClick:this.props.listClick,style:{overflowY:"scroll",height:"calc(100% - 3rem)",width:"28vw"}},this.props.barMarkers.map(function(a){return a.visible?o.a.createElement("li",{className:"menu-item",key:E()(),style:e},o.a.createElement("h3",{id:a.barData.venue.id},a.barData.venue.name)):null})))}}]),a}(n.Component),T=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.barMarkers,t=e.showListings,n=e.hideListings,r=e.toggleDrawing,s=e.zoomToArea,i=e.searchWithinTime;return o.a.createElement("main",null,o.a.createElement("section",{id:"options-box"},o.a.createElement("div",{className:"form-container"},o.a.createElement("div",{className:"field has-addons",style:{marginRight:"1em"}},o.a.createElement("div",{className:"control"},o.a.createElement("button",{className:"button",id:"show-listings",onClick:t},"Show")),o.a.createElement("div",{className:"control"},o.a.createElement("button",{className:"button",id:"hide-listings",onClick:n},"Hide"))),o.a.createElement("div",{className:"field",style:{marginRight:"1em"}},o.a.createElement("div",{className:"control"},o.a.createElement("button",{className:"button",id:"toggle-drawing",onClick:r},"Drawing Tools"))),o.a.createElement("div",{className:"field has-addons",style:{marginRight:"1em"}},o.a.createElement("div",{className:"control"},o.a.createElement("input",{className:"input",id:"zoom-to-area-text",type:"text",placeholder:"Enter street address"})),o.a.createElement("div",{className:"control"},o.a.createElement("button",{className:"button",id:"zoom-to-area",onClick:s},"Zoom"))),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control"},o.a.createElement("p",{className:"text text-margin"},"Within a "))),o.a.createElement("div",{className:"field has-addons"},o.a.createElement("div",{className:"select control"},o.a.createElement("select",{className:"",id:"max-duration",style:{borderTopRightRadius:"0",borderBottomRightRadius:"0"}},o.a.createElement("option",{value:"10"},"10 min"),o.a.createElement("option",{value:"15"},"15 min"),o.a.createElement("option",{value:"30"},"30 min"),o.a.createElement("option",{value:"60"},"1 hour"))),o.a.createElement("div",{className:"select control"},o.a.createElement("select",{className:"",defaultValue:"WALKING",id:"mode",style:{borderTopLeftRadius:"0",borderBottomLeftRadius:"0"}},o.a.createElement("option",{value:"DRIVING"},"drive"),o.a.createElement("option",{value:"WALKING"},"walk"),o.a.createElement("option",{value:"BICYCLING"},"bike"),o.a.createElement("option",{value:"TRANSIT"},"transit")))),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control"},o.a.createElement("p",{className:"text text-margin"}," of "))),o.a.createElement("div",{className:"field has-addons"},o.a.createElement("div",{className:"control"},o.a.createElement("input",{className:"input",id:"search-within-time-text",type:"text",placeholder:"Enter street address"})),o.a.createElement("div",{className:"control"},o.a.createElement("button",{className:"button",id:"search-within-time",onClick:i},"Go"))))),o.a.createElement("section",{className:"section columns",style:{height:"80vh",paddingTop:"0"}},o.a.createElement(M,{barMarkers:a,listClick:this.props.listClick}),o.a.createElement("section",{className:"column",id:"map"})))}}]),a}(n.Component),k=t(96),N=t.n(k),O=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{class:"hero"},o.a.createElement("figure",{class:"image"},o.a.createElement("img",{src:N.a,alt:"Olde Magoun's Saloon on a packed night."})))}}]),a}(n.Component),x=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,null),o.a.createElement("main",{className:"section"},o.a.createElement("h2",{className:"heading is-size-3"},"What is this?"),o.a.createElement("p",{className:"text"},"The Bars of Davis Square is a loving tribute to the bars, pubs, breweries, and etc. in and around Davis Square, Somerville."),o.a.createElement("p",{className:"text"},"Users can enter the name of a bar in the search box at the top right of the page to find a specific bar or they can use the map tools to (1) find bars in an area of their choosing, (2) zoom in on a particular area, or (3) find all of the bars within walking distance of a particular address."),o.a.createElement("h2",{className:"heading is-size-3"},"Implementation details"),o.a.createElement("p",{className:"text"},"The Bars of Davis Square was created using React and Bulma CSS. The information that appears on the map and the map itself are made possible by FourSquare's API and  Google's Google Maps JavaScript API. The application first fetches a list of Davis Square area bars from FourSquare's API, and, after setting state to capture the response data, calls a function that fetches and loads our map. Map markers are generated and assigned to each venue returned by FourSquare and a single Info Window instance is populated with the relevant information whenever a user clicks on a marker. The drawing tools, zoom functionality, and search-within-time-by-mode functionality are accomplished with the Google Maps API."),o.a.createElement("h2",{className:"heading is-size-3"},"Thanks"),o.a.createElement("p",{className:"text"},"I'd like to thank Yahya Elharony for his series of tutorials on using the FourSquare and Google Maps APIs together.")))}}]),a}(n.Component),I=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:{margin:"2em"}},o.a.createElement("h3",null,"The URL you entered (",o.a.createElement("code",null,this.props.location.pathname),") was not found."),o.a.createElement(y.a,{to:"/"},"Home"))}}]),a}(n.Component),j=(t(131),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={bars:[],barMarkers:[],bounds:{},davisMap:{},polygon:[]},t.lat=42.396365,t.lng=-71.122262,t.initMap=function(){var e={center:{lat:t.lat,lng:t.lng},mapTypeControlOptions:{mapTypeIds:["styled_davisMap","roadmap"]},zoom:12};t.setState({davisMap:new window.google.maps.Map(document.getElementById("map"),e),bounds:new window.google.maps.LatLngBounds,barInfo:new window.google.maps.InfoWindow,drawingMngr:new window.google.maps.drawing.DrawingManager({drawingMode:window.google.maps.drawing.OverlayType.POLYGON,drawingControl:!0,drawingControlOptions:{position:window.google.maps.ControlPosition.TOP_LEFT,drawingModes:[window.google.maps.drawing.OverlayType.POLYGON]}})});var a=new window.google.maps.StyledMapType([{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}],{name:"Night Mode"});t.state.davisMap.mapTypes.set("styled_davisMap",a),t.state.davisMap.setMapTypeId("styled_davisMap");var n=function(e){return new window.google.maps.MarkerImage("http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|"+e+"|40|_|%E2%80%A2",new window.google.maps.Size(21,34),new window.google.maps.Point(0,0),new window.google.maps.Point(10,34),new window.google.maps.Size(21,34))},o=n("0091ff"),r=n("FFFF24");t.setState({barMarkers:t.state.bars.map(function(e,a){return new window.google.maps.Marker({animation:window.google.maps.Animation.DROP,icon:o,id:a,map:t.state.davisMap,position:{lat:e.venue.location.lat,lng:e.venue.location.lng},title:e.venue.name,barData:e,visible:!0})})}),t.state.barMarkers.forEach(function(e,a){e.addListener("click",function(){return t.populateBarInfo(t.state.barInfo,e,t.state.davisMap)}),e.addListener("mouseover",function(){return e.setIcon(r)}),e.addListener("mouseout",function(){return e.setIcon(o)})})},t.populateBarInfo=function(e,a,n){e!==a&&t.setState({barInfo:(e.marker=a,e.setContent("<h3>".concat(a.title,"</h3><p>").concat(a.barData.venue.location.address,"</p>")),e.open(n,a),e.addListener("closeclick",function(){return e.marker=null}),e)})},t.showListings=function(){t.setState({barMarkers:t.state.barMarkers.map(function(e){return e.setMap(t.state.davisMap),t.state.bounds.extend(e.position),e.visible=!0,e})}),t.state.davisMap.fitBounds(t.state.bounds)},t.hideListings=function(){return t.setState({barMarkers:t.state.barMarkers.map(function(e){return e.setMap(null),e.visible=!1,e})})},t.handlePolygon=function(e){var a=function(e){t.setState({barMarkers:function(){for(var a=0;a<e.length;a++){window.google.maps.geometry.poly.containsLocation(e[a].position,t.state.polygon)?(e[a].setMap(t.state.davisMap),e[a].visible=!0):(e[a].setMap(null),e[a].visible=!1)}return e}()})};t.state.polygon.length>0&&(t.setState({polygon:(t.state.polygon.setMap(null),t.state.polygon)}),t.hideListings()),t.state.drawingMngr.setDrawingMode(null),t.setState({polygon:(e.overlay.setEditable(!0),e.overlay)}),a(t.state.barMarkers),t.state.polygon.getPath().addListener("set_at",a),t.state.polygon.getPath().addListener("insert_at",a)},t.toggleDrawing=function(){console.log("Here's the drawing manager object: ",t.state.drawingMngr),t.state.drawingMngr.map?(t.state.drawingMngr.setMap(null),t.state.polygon&&t.state.polygon.setMap(null)):(t.state.drawingMngr.setMap(t.state.davisMap),t.state.drawingMngr.addListener("overlaycomplete",t.handlePolygon))},t.zoomToArea=function(){var e=new window.google.maps.Geocoder,a=document.getElementById("zoom-to-area-text").value;if(""===a)window.alert("You must enter an area or address.");else{var n={address:a,componentRestrictions:{locality:"Somerville"}};e.geocode(n,function(e,a){a===window.google.maps.GeocoderStatus.OK?(t.davisMap.setCenter(e[0].geometry.location),t.davisMap.setZoom(18)):window.alert("We could not find the location. Please try entering a more specific location.")})}},t.displayMarkersWithinTime=function(e){for(var a=document.getElementById("max-duration").value,n=e.originAddresses,o=e.destinationAddresses,r=0;r<n.length;r++)for(var s=e.rows[r].elements,i=0;i<o.length;i++){var l=s[i];if("OK"===l.status){var c=l.distance.text,m=l.duration.value/60,d=l.duration.text;m<=a&&function(){t.barMarkers[r].setMap(t.davisMap),!0;var e=new window.google.maps.InfoWindow({content:d+" away "+c});e.open(t.davisMap,t.barMarkers[r]),t.barMarkers[r].infoWindow=e,window.google.maps.event.addListener(t.barMarkers[r],"click",function(){return e.close()})}()}}},t.searchWithinTime=function(){var e=new window.google.maps.DistanceMatrixService,a=document.getElementById("search-within-time-text").value;if(""===a)window.alert("Please enter an address.");else{t.hideListings();for(var n=[],o=0;o<25;o++)n[o]=t.barMarkers[o].position;var r=a,s=document.getElementById("mode").value;e.getDistanceMatrix({origins:n,destinations:[r],travelMode:window.google.maps.TravelMode[s],unitSystem:window.google.maps.UnitSystem.IMPERIAL},function(e,a){a!==window.google.maps.DistanceMatrixStatus.OK?window.alert("Error has status"+a):t.displayMarkersWithinTime(e)})}},t.listClick=function(e){t.state.barMarkers.forEach(function(a){a.barData.venue.id===e.target.id&&t.populateBarInfo(t.state.barInfo,a,t.state.davisMap)})},t.loadScript=function(e){var a=window.document.getElementsByTagName("script")[0],t=window.document.createElement("script");t.src=e,t.async=!0,t.defer=!0,a.parentNode.insertBefore(t,a)},t.loadMap=function(){console.log("loadMap fired");window.initMap=t.initMap,t.loadScript("https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyAKidTbGki0g1eG1laz79qvkDVLMYVxLOU","&libraries=").concat(["drawing","geometry","geocoder"].join(","),"&v=").concat("3","&callback=initMap"))},t.loadDetails=function(){},t.loadData=function(){var e={client_id:"W5EAA4B3DHWV1ZLG3OATVOZYTYZNI5WWG0LRLPHBHVHC3JV3",client_secret:"3ZTMTTP43WP4OXWOAKITGOYLIVPVW1NDQHPZ0I342VH4R5X0",v:20190117,ll:"".concat(t.lat,",").concat(t.lng),section:"drinks"};f.a.get("https://api.foursquare.com/v2/venues/explore?"+new URLSearchParams(e)).then(function(e){return t.setState({bars:e.data.response.groups[0].items},t.loadMap)}).catch(function(e){return console.log(e)})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this;return o.a.createElement(p.a,{basename:"bars-of-davis"},o.a.createElement("div",{className:"App"},o.a.createElement(b,null),o.a.createElement(u.a,null,o.a.createElement(g.a,{exact:!0,path:"/",render:function(){return o.a.createElement(T,{barMarkers:e.state.barMarkers,showListings:e.showListings,hideListings:e.hideListings,toggleDrawing:e.toggleDrawing,zoomToArea:e.zoomToArea,searchWithinTime:e.searchWithinTime,listClick:e.listClick})}}),o.a.createElement(g.a,{exact:!0,path:"/About",component:x}),o.a.createElement(g.a,{render:function(a){return o.a.createElement(I,Object.assign({},a,{theLocation:e.props.location}))}})),o.a.createElement(v,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,a,t){e.exports=t.p+"static/media/oms-960x340.e7283396.jpg"},98:function(e,a,t){e.exports=t(219)}},[[98,2,1]]]);
//# sourceMappingURL=main.839f49b7.chunk.js.map