var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");

var hikes = Observable();

// 앱 시작시 Backend 로 부터 hikes 데이터를 가져옴
Backend.getHikes()
    .then(function(newHikes){
        hikes.replaceAll(newHikes);
    })
    .catch(function(error){
        console.log("Couldn't get hikes: " + error);
    });

// hike 수정시 로컬 hikes의 해당 데이터를 변경하고, Backend 데이터 역시 변경되도록 updateHike() 호출
function updateHike(id, name, location, distance, rating, comments){
    for(var i = 0; i < hikes.length; i++){
        var hike = hikes.getAt(i);
        if(hike.id == id){
            hike.name = name;
            hike.location = location;
            hike.distance = distance;
            hike.rating = rating;
            hike.comments = comments;
            
            hikes.replaceAt(i, hike);   // 해당 배열 인덱스를 새로운 값으로 교체하여 업데이트

            break;
        }
    }

    // Backend 의 데이터를 업데이트
    Backend.updateHike(id, name, location, distance, rating, comments)
        .catch(function(error){
            console.log("Couldn't update hike: " + id);
        });
};

module.exports = {
    hikes: hikes,
    updateHike: updateHike
}