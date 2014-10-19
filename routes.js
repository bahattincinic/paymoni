Router.map(function() {

  this.route('home', {
    path: '/'
  });

  this.route('dashboard', {
    path: '/dashboard',
    loginRequired: 'login',
    redirectOnLogin: true,
    waitOn: function() {
      return this.subscribe("domain");
    },
    data: {
      domains: Domain.find({})
    },
    onAfterAction: function() {
      SEO.set({
        title: 'Dashboard | ' + SEO.settings.title
      });
    }
  });

  this.route('login', {
      path: '/account/login',
      onAfterAction: function() {
        SEO.set({
          title: 'Login | ' + SEO.settings.title
        });
      }
  });

  this.route('register', {
      path: '/account/register',
      onAfterAction: function() {
        SEO.set({
          title: 'Register | ' + SEO.settings.title
        });
      }
  });

});
