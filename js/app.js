// Combinaison de ui-router avec RestAngular : lorsqu'on appelle
// un nouvel état (via bouton / changement d'URL), le stateProvider
// fait appel au service pour obtenir un message de FOAAS.

var app = angular.module("myApp", ['ui.router','restangular']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/birth');

  $stateProvider

  .state('birth', {
    url: '/birth',
    controller: 'myCtrl',
    resolve: {
      myApp: ['service',
      function(service) {
        return service.getMessage('Birth');
      }
    ],
  },
  template: '<div class="col-md-12">Birth<br><button ui-sref="birth.childhood" class="col-md-12">childhood</button><div ui-view></div></div>'
})

.state('birth.childhood', {
  url: '/childhood',
  controller: 'myCtrl',
  resolve: {
    myApp: ['service',
    function(service) {
      return service.getMessage('Childhood');
    }
  ],
},
template: '<div class="col-md-12 study">Childhood<br><button ui-sref="birth.childhood.study" class="col-md-6">study</button><button ui-sref="birth.childhood.career" class="col-md-6">career</button><div ui-view></div></div>'
})

.state('birth.childhood.study', {
  url: '/study',
  controller: 'myCtrl',
  resolve: {
    myApp: ['service',
    function(service) {
      return service.getMessage('Study');
    }
  ],
},
template: '<div class="col-md-12 study">Study<br><button ui-sref=".phd" class="col-md-6">phd</button> <button ui-sref=".workinglife" class="col-md-6">workinglife</button><div ui-view></div></div>'
})

.state('birth.childhood.study.phd', {
  url: '/phd',
  controller: 'myCtrl',
  resolve: {
    myApp: ['service',
    function(service) {
      return service.getMessage('Phd');
    }
  ],
},
template: '<div class="col-md-12 study">PhD<br><button ui-sref=".workinglife" class="col-md-12">workinglife</button><div ui-view></div></div>'
})

.state('birth.childhood.career', {
  url: '/career',
  controller: 'myCtrl',
  resolve: {
    myApp: ['service',
    function(service) {
      return service.getMessage('Career');
    }
  ],
},
template: '<div class="col-md-12 study">Career<br><button ui-sref=".workinglife" class="col-md-12">workinglife</button><div ui-view></div></div>'
});

// allow multiple parents
addWorkingLife($stateProvider, 'birth.childhood.study');
addWorkingLife($stateProvider, 'birth.childhood.study.phd');
addWorkingLife($stateProvider, 'birth.childhood.career');

function addWorkingLife($stateProvider, parent){
  $stateProvider.state(parent + '.workinglife', {
    url: '/worklife',
    controller: 'myCtrl',
    resolve: {
      myApp: ['service',
      function(service) {
        return service.getMessage('WorkingLife');
      }
    ],
  },
  template: '<div class="col-md-12 study">Working life<br><button ui-sref=".pension" class="col-md-12">pension</button><div ui-view></div></div>'
})
.state(parent + '.workinglife.pension', {
  url: '/pension',
  controller: 'myCtrl',
  resolve: {
    myApp: ['service',
    function(service) {
      return service.getMessage('Pension');
    }
  ],
},
template: '<div class="col-md-12 study">Pension<br><button ui-sref=".death" class="col-md-12">death</button><div ui-view></div></div>'
})
.state(parent + '.workinglife.pension.death', {
  url: '/death',
  controller: 'myCtrl',
  resolve: {
    myApp: ['service',
    function(service) {
      return service.getMessage('Death');
    }
  ],
},
template: '<div class="col-md-12 study">Death<br><button ui-sref="birth" class="col-md-12">birth</button></div>'
});
}

});
