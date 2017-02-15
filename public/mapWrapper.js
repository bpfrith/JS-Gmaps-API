var MapWrapper = function(coords, zoom, container){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      console.log(event)
      // var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
      var position =  event.latLng;
      this.addMarker(position);
    }.bind(this));
  },

  gotoWollongong: function(){
    var wollongong = {lat: -34.43333, lng: 150.88333};
    this.googleMap.setCenter(wollongong);
  },

  getCurrentLocation: function(button) {
    button.onclick = function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {lat: position.coords.latitude, lng: position.coords.longitude};

        this.googleMap.setCenter(pos);
        this.googleMap.setZoom(17);
      }.bind(this));
    }.bind(this);
  }
}