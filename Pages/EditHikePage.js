
// require() 로 FuseJS의 Observable 모듈을 가져옴
var Observable = require("FuseJS/Observable");

var hikes = require("hikes"); // hikes.js 를 import

var hike = Observable();

// hike.value 에 값이 들어오면 해당 값의 name, location 등을 리턴하는 함수를 map()에 전달하여 Observable 처럼 양방향 데이터 바인딩
var name = hike.map(function(x) { return x.name; });
var location = hike.map(function(x) { return x.location; });
var distance = hike.map(function(x) { return x.distance; });
var rating = hike.map(function(x) { return x.rating; });
var comments = hike.map(function(x) { return x.comments; });

// Each 안의 버튼이 클릭되면 호출 (이때 arg 를 인수로 받을 수 있음)
function chooseHike(arg){
    console.log(arg);
    hike.value = arg.data;  // arg.data 는 Each 에서 선택된 데이터
};

// 외부에서 접근이 가능하도록 내보내기
module.exports = {
    hikes: hikes,

    name: name,
    location: location,
    distance: distance,
    rating: rating,
    comments: comments,

    chooseHike: chooseHike
};