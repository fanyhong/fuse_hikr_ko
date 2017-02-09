// 백엔드로 부터 hikes 데이터를 가져 올 Context 모듈을 import
var Context = require("Modules/Context"); 

// Each 안의 버튼이 클릭되면 호출 (이때 arg 를 인수로 받을 수 있음)
function goHike(arg){
    // console.log(arg);
    var hike = arg.data;  // arg.data 는 Each 에서 선택된 데이터
 
    router.push("editHike", hike);    // router.push() 로 원하는 경로로 이동, 두번째 인자를 통해 hike를 함께 전달하면 이동된 페이지에서 this.Parameter 로 접근하여 사용
};

// 외부에서 접근이 가능하도록 내보내기
module.exports = {
    hikes: Context.hikes,

    goHike: goHike
};