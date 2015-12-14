angular.module('MyServices', [])

.factory('CarDTO', function() {

    function CarDTO() {
        this.make = "Ford";
        this.model = "Escort";
        this.year = 1960;
        this.age = 55;
    }

    CarDTO.prototype.setYear = function(year) {
       this.year = year;
       this.age = 2015 - year;
    }

    return CarDTO;
});