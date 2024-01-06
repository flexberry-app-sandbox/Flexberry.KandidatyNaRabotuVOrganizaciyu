import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд', 'Unit | Serializer | i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kandidaty-na-rabotu-v-organizaciyu-итог-собесед',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
