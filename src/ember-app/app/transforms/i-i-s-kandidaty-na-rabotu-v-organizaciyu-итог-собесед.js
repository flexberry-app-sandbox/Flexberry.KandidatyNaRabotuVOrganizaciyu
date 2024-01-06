import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ИтогСобеседEnum from '../enums/i-i-s-kandidaty-na-rabotu-v-organizaciyu-итог-собесед';

export default FlexberryEnum.extend({
  enum: ИтогСобеседEnum,
  sourceType: 'IIS.Kandidaty_na_rabotu_v_organizaciyu.ИтогСобесед'
});
