'use strict';


function is_older(y1, m1, d1, y2, m2, d2) {
  return y1 < y2
    || (y1 == y2 && m1 < m2)
    || (y1 == y2 && m1 == m2 && d1 < d2)
    || false;
}
