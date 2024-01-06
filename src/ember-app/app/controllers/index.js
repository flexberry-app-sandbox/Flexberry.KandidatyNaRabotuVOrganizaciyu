import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.caption'),
          title: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.title'),
          children: [{
            link: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-l',
            caption: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-l.caption'),
            title: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-l',
            caption: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-l',
            caption: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-l',
            caption: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-l.caption'),
            title: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.kandidaty-na-rabotu-v-organizaciyu.i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})