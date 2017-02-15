var initialize = function(){

  var container = document.querySelector('#main-map');
  var center = {lat: 54.364703, lng: -2.919627};
  var zoom = 10;
  var mainMap = new MapWrapper(center, zoom, container);
  var button = document.querySelector('button');
  console.log(button);

  mainMap.addMarker(center);
  mainMap.addClickEvent();

  button.onclick = mainMap.gotoWollongong.bind(mainMap);

};

window.onload = initialize;