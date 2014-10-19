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

  this.route('domain', {
    path: '/domain/:_id',
    loginRequired: 'login',
    redirectOnLogin: true,
    waitOn: function() {
      return [
        this.subscribe("domain"),
        this.subscribe("paymentbank", this.params._id),
        this.subscribe("subscribers", this.params._id),
        this.subscribe("transactions", this.params._id)
      ]
    },
    data: function(){
      return {
        domain: Domain.findOne({'_id':this.params._id})
      }
    },
    onAfterAction: function() {
      var domain = Domain.findOne({'_id':this.params._id});
      SEO.set({
        title: 'Domain | ' + domain.name
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


  this.route('profile', {
      path: '/account/update',
      loginRequired: 'login',
      redirectOnLogin: true,
      onAfterAction: function() {
        SEO.set({
          title: 'Profile Update | ' + SEO.settings.title
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


  this.route('notFound', {
    path: '*',
    where: 'server',
    action: function() {
      this.response.statusCode = 404;
      this.response.end(Handlebars.templates['404']());
    }
  });

});
