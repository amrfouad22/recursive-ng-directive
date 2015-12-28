

(function () {
  angular
    .module('RecursiveSampleApp')
    .controller('MainController', MainController);
    
  /**
   * The MainController code.
   */
  function MainController($http,$log,$rootScope) {
    var vm=this;
    vm.leafClicked=false;
      /**
     * initalise function get helper operations data
     */
     (function init() {
       var request={method:'GET',url:'/data/operations.json'};
       $http(request).then(
         function(response){
         vm.rootNode=response.data.root;
         $log.debug(vm.rootNode);
       },function(error){
         vm.operations={};
         $log.debug('Error loading operations..')
         
       });
    })();
    $rootScope.$on('node:clicked',function(event,param){
      vm.leafClicked=true;
      vm.leafNode=param.node.name;
    })
  }
})();