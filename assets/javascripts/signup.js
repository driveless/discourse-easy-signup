(function() {

  Discourse.Route.buildRoutes(function() {
    this.route('signup', {path: '/signup'});
  });

  Discourse.SignupRoute = Discourse.Route.extend({
    beforeModel: function() {
      this.transitionTo('/').then(function(e) {
        Ember.run.next(function() {
          e.send('showCreateAccount');
        });
      });
    }
  })

})();
