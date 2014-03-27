(function() {
  Discourse.EasySignupRoute = Discourse.Route.extend({
    beforeModel: function() {
      this.transitionTo('discovery.latest').then(function(e) {
        Ember.run.next(function() {
          Discourse.Route.showModal(e, 'easySignup');
        });
      });
    } 
  });
  
  Discourse.Route.buildRoutes(function() {
    this.route('easy_signup', {path: '/signup'});
  });

/**
  This view updates the create account modal view

  @class EasySignupView
  @extends Discourse.CreateAccountView
  @namespace Discourse
  @module Discourse
**/
Discourse.EasySignupView = Discourse.CreateAccountView.extend({
  templateName: 'javascripts/templates/modal/easy_signup_create_account',
  title: I18n.t('create_account.title'),
  classNames: ['easy_signup']
});

Discourse.EasySignupController = Discourse.CreateAccountController.extend({
  needs: ["create_account", "login"],
  
  actions: {
    showLoginExternal: function(loginMethod) {
       this.send('showLogin');
       this.get("controllers.login").send('externalLogin', loginMethod);
    }
  },

  /**
   Determines whether at least one login button is enabled
  **/
  hasAtLeastOneLoginButton: function() {
    return Em.get("Discourse.LoginMethod.all").length > 0;
  }.property("Discourse.LoginMethod.all.@each"),

}); 

})();
