(function(D) {
/*
======== A Handy Little QUnit Reference ========
http://api.qunitjs.com/

Test methods:
  module(name, {[setup][ ,teardown]})
  test(name, callback)
  expect(numberOfAssertions)
  stop(increment)
  start(decrement)
Test assertions:
  ok(value, [message])
  equal(actual, expected, [message])
  notEqual(actual, expected, [message])
  deepEqual(actual, expected, [message])
  notDeepEqual(actual, expected, [message])
  strictEqual(actual, expected, [message])
  notStrictEqual(actual, expected, [message])
  throws(block, [expected], [message])
*/

    module("user API");

    test("RandomX presence", function() {
        equal(typeof RandomX, "function", "constructor");
    });

    test("RandomX tag", function() {
        var tag = D.query('random-x');
        ok(tag, 'have tag in fixture');
        if (D.registerElement) {
          ok(tag instanceof RandomX, "is a RandomX instance");
        }
        Object.getOwnPropertyNames(RandomX.prototype)
        .forEach(function(prop) {
          if (prop !== "constructor") {
            equal(typeof RandomX.prototype[prop], typeof tag[prop], 'should have same "'+prop+'" as RandomX.prototype');
          }
        });
    });

}(document));

