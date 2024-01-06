import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн', 'Unit | Model | i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн',
    'model:i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес',
    'model:i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация',
    'model:i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес',
    'model:i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ',
    'model:i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты',
    'model:i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд',
    'model:i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники',
    'model:i-i-s-kandidaty-na-rabotu-v-organizaciyu-т-ч-граф-собес',
    'model:i-i-s-kandidaty-na-rabotu-v-organizaciyu-т-ч-рег-результ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
