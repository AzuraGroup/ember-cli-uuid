/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-uuid',

  included: function(app) {
    if (app.constructor.name === 'CoreObject') {
      while (!app.app && app.parent) {
        app = app.parent;
      }
      app = app.app;
    }
    
    this._super.included(app);

    app.import(app.bowerDirectory + '/node-uuid/uuid.js');
  }

};
