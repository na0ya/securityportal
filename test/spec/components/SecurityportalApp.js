'use strict';

describe('Main', function () {
  var SecurityportalApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SecurityportalApp = require('../../../src/scripts/components/SecurityportalApp.jsx');
    component = SecurityportalApp();
  });

  it('should create a new instance of SecurityportalApp', function () {
    expect(component).toBeDefined();
  });
});
