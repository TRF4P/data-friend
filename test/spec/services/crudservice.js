'use strict';

describe('Service: Crudservice', function () {

  // load the service's module
  beforeEach(module('dataAppApp'));

  // instantiate service
  var Crudservice;
  beforeEach(inject(function (_Crudservice_) {
    Crudservice = _Crudservice_;
  }));

  it('should do something', function () {
    expect(!!Crudservice).toBe(true);
  });

});
