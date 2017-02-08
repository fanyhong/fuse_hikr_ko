var hikes = require("hikes"); // hikes.js 를 import

// Each 안의 버튼이 클릭되면 호출 (이때 arg 를 인수로 받을 수 있음)
function chooseHike(arg){
    console.log(arg);
    hike.value = arg.data;  // arg.data 는 Each 에서 선택된 데이터
};

// 외부에서 접근이 가능하도록 내보내기
module.exports = {
    hikes: hikes,

    chooseHike: chooseHike
};