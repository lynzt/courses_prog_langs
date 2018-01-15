'use strict';
const def = x => typeof x !== 'undefined';

exports.is_older = function([y1, m1, d1], [y2, m2, d2]) {
  return y1 < y2
    || (y1 == y2 && m1 < m2)
    || (y1 == y2 && m1 == m2 && d1 < d2)
    || false;
}

exports.number_in_month = function([d, ...ds], m) {
  if (!def(d)) return 0;
  return d[1] == m ? 1 + this.number_in_month(ds, m) : this.number_in_month(ds, m);
}

exports.number_in_months = function(ds, [m, ...ms]) {
  return def(m) ? this.number_in_month(ds, m) + this.number_in_months(ds, ms) : 0;
}

exports.dates_in_month = function([d, ...ds], m) {
  if (!def(d)) return [];

  return d[1] == m ? [d, ...this.dates_in_month(ds, m)] : [...this.dates_in_month(ds, m)]


  // if (ds.length == 0)
  //   return [];
  // else if (ds[0][1] == m) {
  //   return ds[0].push(this.dates_in_month(ds.slice(1), m));
  // }
}
