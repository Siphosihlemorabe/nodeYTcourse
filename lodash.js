const lo = require("lodash");
const items = [1, 2, [11, 22]];
const newItems = lo.flattenDeep(items);
console.log(newItems);
