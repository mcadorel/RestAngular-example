app.service("service",['Restangular',
    function(Restangular)
    {
        this.message = "<Pas de message>";

        this.getMessage = function(key)
        {
          var map = {
            Birth: 'http://foaas.com/off/Alice/Bob',
            Childhood: 'http://foaas.com/everyone/Charlie',
            Study: 'http://foaas.com/cool/Daniel',
            Phd: 'http://foaas.com/yoda/Emeric/François',
            Career: 'http://foaas.com/what/Gautier',
            WorkingLife: 'http://foaas.com/xmas/Honoré',
            Pension: 'http://foaas.com/tucker/Isabelle',
            Death: 'http://foaas.com/keepcalm/Joséphine'
          };
          var singleSearch = Restangular.oneUrl('betaSearch', map[key]);

          this.message = singleSearch.get().then(function(response){
            return response.message;
          })
        };
    }]
);
