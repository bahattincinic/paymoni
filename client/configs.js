Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',

  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  },

  onAfterAction: function() {
    $(document).scrollTop(0);
  }
});

Router.onBeforeAction('loading');
