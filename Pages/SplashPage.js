function goToHomePage(){
    // router.goto() 를 사용하여 이동하면 히스토리 추적이 안되므로 뒤로가기 불가
    router.goto("home");
};

module.exports = {
    goToHomePage: goToHomePage
};