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
    instance = new OpenApiDefinition.PostDoctorDto();
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

  describe('PostDoctorDto', function() {
    it('should create an instance of PostDoctorDto', function() {
      // uncomment below and update the code to test PostDoctorDto
      //var instance = new OpenApiDefinition.PostDoctorDto();
      //expect(instance).to.be.a(OpenApiDefinition.PostDoctorDto);
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new OpenApiDefinition.PostDoctorDto();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new OpenApiDefinition.PostDoctorDto();
      //expect(instance).to.be();
    });

    it('should have the property specialityId (base name: "specialityId")', function() {
      // uncomment below and update the code to test the property specialityId
      //var instance = new OpenApiDefinition.PostDoctorDto();
      //expect(instance).to.be();
    });

    it('should have the property degree (base name: "degree")', function() {
      // uncomment below and update the code to test the property degree
      //var instance = new OpenApiDefinition.PostDoctorDto();
      //expect(instance).to.be();
    });

    it('should have the property degreeShort (base name: "degreeShort")', function() {
      // uncomment below and update the code to test the property degreeShort
      //var instance = new OpenApiDefinition.PostDoctorDto();
      //expect(instance).to.be();
    });

  });

}));
