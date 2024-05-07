/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenApiDefinition);
  }
}(this, function(expect, OpenApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenApiDefinition.PersonDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PersonDto', function() {
    it('should create an instance of PersonDto', function() {
      // uncomment below and update the code to test PersonDto
      //var instance = new OpenApiDefinition.PersonDto();
      //expect(instance).to.be.a(OpenApiDefinition.PersonDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new OpenApiDefinition.PersonDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new OpenApiDefinition.PersonDto();
      //expect(instance).to.be();
    });

    it('should have the property speciality (base name: "speciality")', function() {
      // uncomment below and update the code to test the property speciality
      //var instance = new OpenApiDefinition.PersonDto();
      //expect(instance).to.be();
    });

    it('should have the property rateAvg (base name: "rateAvg")', function() {
      // uncomment below and update the code to test the property rateAvg
      //var instance = new OpenApiDefinition.PersonDto();
      //expect(instance).to.be();
    });

    it('should have the property services (base name: "services")', function() {
      // uncomment below and update the code to test the property services
      //var instance = new OpenApiDefinition.PersonDto();
      //expect(instance).to.be();
    });

    it('should have the property opinions (base name: "opinions")', function() {
      // uncomment below and update the code to test the property opinions
      //var instance = new OpenApiDefinition.PersonDto();
      //expect(instance).to.be();
    });

  });

}));
