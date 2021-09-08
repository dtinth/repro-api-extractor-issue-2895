const assert = require('assert');
const api = require('./tmp/api/repro.api.json')

assert.equal(api.members[0].members[0].name, 'invariant')