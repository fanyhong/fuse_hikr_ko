
// require() 로 FuseJS의 Observable 모듈을 가져옴
var Observable = require("FuseJS/Observable");

// Parameter Observable 을 전달받아 hike 에 할당 (router 를 통해 이동시 함께 전달받은 인자)
var hike = this.Parameter;

// hike.value 에 값이 들어오면 해당 값의 name, location 등을 리턴하는 함수를 map()에 전달하여 Observable 처럼 양방향 데이터 바인딩
var name = hike.map(function(x) { return x.name; });
var location = hike.map(function(x) { return x.location; });
var distance = hike.map(function(x) { return x.distance; });
var rating = hike.map(function(x) { return x.rating; });
var comments = hike.map(function(x) { return x.comments; });

function goBack(){
    router.goBack();    // router.goBack() 을 사용하여 뒤로가기 (이전에 push로 이동했기때문에 가능)
};

// 외부에서 접근이 가능하도록 내보내기
module.exports = {
    name: name,
    location: location,
    distance: distance,
    rating: rating,
    comments: comments,
    goBack: goBack
};