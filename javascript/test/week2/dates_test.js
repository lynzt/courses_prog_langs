'use strict';
const chai = require('chai');
const expect = chai.expect;
const dates = require('../../week2/dates');

describe('test date fcns', function() {
  describe('test is_older', function() {
    it('should return formatted durations', function() {
      expect(dates.is_older([1,2,3], [2,3,4])).to.be.true;
      expect(dates.is_older([1,2,3], [1,3,4])).to.be.true;
      expect(dates.is_older([1,2,3], [1,2,4])).to.be.true;

      expect(dates.is_older([5,6,7], [2,3,4])).to.be.false;
      expect(dates.is_older([2,6,7], [2,3,4])).to.be.false;
      expect(dates.is_older([2,3,7], [2,3,4])).to.be.false;

      expect(dates.is_older([1,2,3], [1,2,3])).to.be.false;
    });
  });

  describe('test number_in_month', function() {
    it('should return formatted durations', function() {
      expect(dates.number_in_month([[2017,2,28], [2018,1,2]], 2)).to.equal(1);
      expect(dates.number_in_month([[2017,2,28], [2018,1,2], [2018,2,2]], 2)).to.equal(2);
      expect(dates.number_in_month([[2016,2,28], [2017,2,2], [2018,2,2]], 2)).to.equal(3);
      expect(dates.number_in_month([[2016,3,28], [2017,4,2], [2018,12,2]], 2)).to.equal(0);
    });
  });

  describe('test number_in_months', function() {
    it('should return formatted durations', function() {
      expect(dates.number_in_months([[2017,2,28], [2018,12,1], [2018,3,31],[2011,4,28]], [2,3,4])).to.equal(3);
    });
  });

  describe('test dates_in_month', function() {
    it('should return formatted durations', function() {
      // console.dir(dates.dates_in_month([[2017,2,28], [2018,12,1], [2018,3,31],[2011,4,28]], 2));
      expect(dates.dates_in_month([[2017,2,28], [2018,12,1], [2018,3,31],[2011,4,28]], 2)).to.equal([[2017,2,28]]);
    });
  });

});
