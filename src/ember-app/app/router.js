import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-l');
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-e',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-l');
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-e',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-l');
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-e',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-l');
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-e',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-l');
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-e',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-l');
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-e',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-l');
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-e',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-l');
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-e',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-e/new' });
});

export default Router;
