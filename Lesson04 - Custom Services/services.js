// METHOD 1
// angular.module('MyServices', [])

// .factory('CarDTO', function() {

//     function CarDTO() {
//         this.make = "Ford";
//         this.model = "Escort";
//         this.year = 1960;
//         this.age = 55;
//         this.color = 'red';

//         this.setColor = function(color){
//             this.color = color;
//             console.log(this.color);
//         }
//     }

//     CarDTO.prototype.setYear = function(year) {
//        this.year = year;
//        this.age = 2015 - year;
//        console.log(this.year);
       
//     }

//     return CarDTO;
// });



// METHOD 2
// (function(app){

//     app.factory('CarDTO', function() {

//         function CarDTO() {
//             this.make = "Ford";
//             this.model = "Escort";
//             this.year = 1960;
//             this.age = 55;
//             this.color = 'red';

//             this.setColor = function(color){
//                 this.color = color;
//                 console.log(this.color);
//             }
//         }

//         CarDTO.prototype.setYear = function(year) {
//            this.year = year;
//            this.age = 2015 - year;
//            console.log(this.year);
//         }

//         return CarDTO;
//     });







// })(angular.module('MyCarModule', []));



//METHOD 3 (RECOMMENDED)

angular.module('MyServicesModule', [])


.service('CalculatorService', function(){

    function mult(a, b){
        return a * b;
    }

    // public
    this.sum = function(a, b){
        return a + b;
    }

    this.multiply = mult;

})





.value('FOLDERS', [

    {name: 'Pictures', size: '12 KB' },
    {name: 'Movies', size: '15 KB' },
    {name: 'Personal', size: '52 KB' }

])

.value('FOLDERS', [
    {name: 'Pictures', size: '12 KB'},
    {name: 'Movies', size: '15 KB'},
    {name: 'Personal', size: '52 KB'},
])

 .factory('CarDTO', function() {

    function CarDTO() {
        this.make = "Ford";
        this.model = "Escort";
        this.year = 1960;
        this.age = 55;
        this.color = 'red';

        this.setColor = function(color){
            this.color = color;
            console.log(this.color);
        }
    }

    CarDTO.prototype.setYear = function(year) {
       this.year = year;
       this.age = 2015 - year;
       console.log(this.year);
       
    }

    return CarDTO;
});












