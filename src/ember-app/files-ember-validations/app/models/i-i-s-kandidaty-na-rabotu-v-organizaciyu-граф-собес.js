import {
  defineNamespace,
  defineProjections,
  Model as ГрафСобесMixin
} from '../mixins/regenerated/models/i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГрафСобесMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
