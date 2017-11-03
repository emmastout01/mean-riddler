myApp.controller('ViewRiddleController', function(RiddleService) {
    console.log('ViewRiddleController created.');
    var vm = this;
    vm.riddles = RiddleService.riddles;

    console.log('riddles from add riddle controller', vm.riddles);

    RiddleService.refreshRiddles();
    
});