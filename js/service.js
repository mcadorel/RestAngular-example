app.service("service",['Restangular',
function(Restangular)
{
  this.message = "<Pas de message>";

  this.getMessage = function(key)
  {
    var dict = {
      Birth: 'http://foaas.com/greed/RestAngular/Maël',
      Childhood: 'http://foaas.com/mornin/Maël',
      Study: 'http://foaas.com/zayn/Maël',
      Phd: 'http://foaas.com/diabetes/Maël',
      Career: 'http://foaas.com/caniuse/RestAngular/Maël 	',
      WorkingLife: 'http://foaas.com/nugget/Bob/Maël',
      Pension: 'http://foaas.com/because/Maël',
      Death: 'http://foaas.com/field/Bob/Charlie/Is. 2, 14'
    };
    var singleSearch = Restangular.oneUrl('betaSearch', dict[key]);

    this.message = singleSearch.get().then(function(response){
      return response.message;
    })
  };
}]
);
