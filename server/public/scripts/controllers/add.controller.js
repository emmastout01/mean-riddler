myApp.controller('AddRiddleController', function(RiddleService) {
    console.log('AddRiddleController created.');

    var vm = this;
    vm.newRiddle = RiddleService.newRiddle;
    vm.riddles = RiddleService.riddles;



    vm.addRiddle = function(newRiddle) {
        RiddleService.addRiddle(newRiddle);
    }
    // vm.addRiddle = function(newRiddle) {
    //     console.log('form submitted');
    //     $http.post('/riddles', newRiddle).then(function(response) {
    //         console.log(response);
    //         vm.refreshRiddles();
    //     }).catch(function(err) {
    //         console.log('post didn\'t work!', err);
    //     })
    // }

    vm.refreshRiddles = function() {
        RiddleService.refreshRiddles();
    }
    // vm.refreshRiddles = function() {
    //     $http.get('/riddles').then(function(response) {
    //         console.log('found riddles', response);
    //         vm.riddles = response.data;
    //     }).catch(function(err) {
    //         console.log('get didn\'t work!', err);
    //     })
    // }

});