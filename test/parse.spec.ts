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
});
