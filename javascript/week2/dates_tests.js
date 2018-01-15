'use strict';
const chai = require('chai');
const expect = chai.expect;
const dates = require('dates');

describe('test date fcns', function() {
  describe('test is_older', function() {
    it('should return formatted durations', function() {
      // val test1 = is_older ((1,2,3),(2,3,4)) = true
      expect(dates.is_older(1,2,3, 2,3,4)).to.be.true;


    });
  });

});
