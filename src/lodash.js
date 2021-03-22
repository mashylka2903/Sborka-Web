let compact = require('lodash/compact');
let users = [
  {id: "abcd", name: "Vasya"},
  {id: "defa", name: "Petya"},
  {id: "1234", name: "Masha"},
  false
];
console.log( compact(users) );