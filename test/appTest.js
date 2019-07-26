const assert = require('chai').assert;
//const sayHello=require('../app').sayHello;
//const addNumbers= require('../app').addNumbers;
const app=require('../app');

//Results
sayHelloResult= app.sayHello();
addNumbersResult= app.addNumbers(3,3);
describe('App', function(){
    describe('sayHello', function(){
        it('sayHello should return hello', function(){
            //let result= app.sayHello();
            assert.equal(sayHelloResult, 'Hello');
        });
    
        it('sayHello should return type String', function(){
            //let result=app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
    
        });
    })
    
    describe('AddNumbers', function(){
        it('AddNumbers should be above 5', function(){
            //let result= app.addNumbers(3,3);
            assert.isAbove(addNumbersResult, 5);
        });
    
        it('AddNumbers should return type number', function(){
            //let result= app.addNumbers(5,5);
            assert.typeOf(addNumbersResult, 'number');
    
        });
    })

});