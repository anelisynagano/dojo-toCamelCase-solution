var assert = require('assert');
var toCamelCase = require('./toCamelCase.js');

describe('To Camel Case', function(){

    it('Should be loaded', function(){
        console.log(toCamelCase);
        assert.equal(typeof toCamelCase, 'function');
    })

    it('Should return a string', function(){
        assert.equal(typeof toCamelCase('hello'), 'string');
    })

    it('Should return \'camelCase\' from \'camel case\'', function(){
        assert.equal(toCamelCase("camel case"), "camelCase");
    })

    it('Should return \'camel_Case\' from \'camel-case\'', function(){
        assert.equal(toCamelCase("camel-case"), "camel_Case");
    })

    it('Should return \'camelCaseIsCool\' from \'camel case is cool\'', function(){
        assert.equal(toCamelCase("camel case is cool"), "camelCaseIsCool");
    })

    it('Should return \'camelCase_Is_Cool\' from \'camel case-is-cool\'', function(){
        assert.equal(toCamelCase("camel case-is-cool"), "camelCase_Is_Cool");
    })
})