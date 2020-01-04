 //地图
 var map = new AMap.Map('container', {
 	resizeEnable: true,
 	zoom: 11,
 	center: [118.795565, 32.089259]
 });
var marker = new AMap.Marker({
    position: map.getCenter(),
    draggable: true,
    cursor: 'move',
    raiseOnDrag: true
});

marker.setMap(map);
    //为地图注册click事件获取鼠标点击出的经纬度坐标
    var clickEventListener = map.on('click', function(e) {
        document.getElementById("lon").value = e.lnglat.getLng();
        document.getElementById("lat").value = e.lnglat.getLat();
        
        marker.setPosition([e.lnglat.getLng(), e.lnglat.getLat()]); //
    });

    var auto = new AMap.Autocomplete({
        input: "tipinput"
    });

    AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
    
    function select(e) {
        if (e.poi && e.poi.location) {
            map.setZoom(15);
            map.setCenter(e.poi.location);
        }
    }

