
let fib = require('./fib');
let mergeSort = require('./merge-sort');
let quickSort = require('./quick-sort');

exports.handler = function(event, context, callback){
    /*
        we will try to add as many logical things as possible to make it take up as much lines of code as possible
    */

    //create an array of values, using fibonacci
    var values = fib();
    merged = mergeSort(values);
    quick = quickSort(values);
    console.log(merged);
}