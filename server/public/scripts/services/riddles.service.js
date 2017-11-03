myApp.service('RiddleService', function($http) {
    console.log('riddle service sourced');
    var self = this;
    self.newRiddle = {};
    self.riddles = {data: []};

 

    self.addRiddle = function(newRiddle) {
        console.log('form submitted');
        $http.post('/riddles', newRiddle).then(function(response) {
            console.log(response);
            self.refreshRiddles();
        }).catch(function(err) {
            console.log('post didn\'t work!', err);
        })
    }

    self.refreshRiddles = function() {
        $http.get('/riddles').then(function(response) {
            console.log('found riddles', response);
            self.riddles.data = response.data;
        }).catch(function(err) {
            console.log('get didn\'t work!', err);
        })
    }

    self.refreshRiddles();
})