// var publishExternalAPI = require('../src/angular_public');
// var createInjector = require('../src/injector');
// import * as _ from 'lodash';
import { parse } from '../src/main';

describe('parse', function() {

  beforeEach(function() {
    // publishExternalAPI();
    // parse = createInjector(['ng']).get('$parse');
  });

  it('can parse an integer', function() {
    const fn = parse('42');
    expect(fn).toBeDefined();
    expect(fn()).toBe(42);
  });

  it('can parse a floating point number', function() {
    let fn = parse('4.2');
    expect(fn()).toBe(4.2);

    fn = parse('.42');
    expect(fn()).toBe(0.42);
  });
});
