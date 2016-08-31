// Reddit constructor function to encapsulate HTTP and pagination logic
angular.module('RotApp').factory('Reddit', function($http) {
  
  // Cria o objeto infinite scroll Reddit
    var Reddit = function() {
      this.items = [];
      this.busy = false;
      this.after = '';
    };

    //
    Reddit.prototype.nextPage = function() {
      if (this.busy) return;
      this.busy = true;

      var url = "backend/getDestinos.php";
     
      $http.get('http://localhost/rotappv1/backend/getDestinos.php').success(function(data) {
        var items = data;

        console.log(items);

        for (var i = 0; i < items.length; i++) {
          this.items.push(items[i]);
          console.log(items);
        };
        // this.after = "t3_" + this.items[this.items.length - 1].id;
         this.busy = false;
      }.bind(this)).error(function(data, status){
        console.log('Erro...');
      });

    };

    return Reddit;
  });