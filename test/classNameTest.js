// Uncomment if using Node
// var chai = require('chai');
var assert = chai.assert;

// var className = require('../js/className.js');
// var addClass = className.addClass;

var TEST_CLASS = 'test-class';
var NEW_CLASS = 'new-class'

describe('addClass', function() {
  var element;

  beforeEach(function(done) {
    element = document.createElement('div');
    done();
  });

  it('should add class into element', function() {
    addClass(element, TEST_CLASS);

    assert.equal(element.classList.contains(TEST_CLASS), true);
  });

  it('should not add a class which already exists in element', function() {
    addClass(element, TEST_CLASS);
    addClass(element, TEST_CLASS);

    var numClasses = element.classList.length;
    assert.equal(numClasses, 1);
  });

  it('should append new class after existing one', function() {
    addClass(element, TEST_CLASS);
    addClass(element, NEW_CLASS);

    assert.equal(element.classList.contains(TEST_CLASS), true);
    assert.equal(element.classList.contains(NEW_CLASS), true);
  });
});

describe('removeClass', function() {
  var element;

  beforeEach(function(done) {
    element = document.createElement('div');
    element.classList.add(TEST_CLASS);
    done();
  });

  it('should remove a class which already exists', function() {
    removeClass(element, TEST_CLASS);

    assert.equal(element.classList.contains(TEST_CLASS), false);
  });

  it('should not affect other classes', function() {
    removeClass(element, NEW_CLASS);

    assert.equal(element.classList.contains(TEST_CLASS), true);
  });
});

describe('toggleClass', function() {
  var element;

  beforeEach(function(done) {
    element = document.createElement('div');
    element.classList.add(TEST_CLASS);
    done();
  });

  it('should remove a class that exists when no state is specified', function() {
    toggleClass(element, TEST_CLASS);

    assert.equal(element.classList.contains(TEST_CLASS), false);
  });

  it('should add a class that exists when no state is specified', function() {
    toggleClass(element, NEW_CLASS);

    assert.equal(element.classList.contains(NEW_CLASS), true);
  });

  it('should add / keep class if toState is true', function() {
    toggleClass(element, TEST_CLASS, true);

    assert.equal(element.classList.contains(TEST_CLASS), true);
  });

  it('should remove / not add a class if toState is false', function() {
    toggleClass(element, NEW_CLASS, false);

    assert.equal(element.classList.contains(NEW_CLASS), false);
  });
});
