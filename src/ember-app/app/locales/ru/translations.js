import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKandidaty_na_rabotu_v_organizaciyuВакантДолжнLForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-l';
import IISKandidaty_na_rabotu_v_organizaciyuГрафСобесLForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-l';
import IISKandidaty_na_rabotu_v_organizaciyuОрганизацияLForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-l';
import IISKandidaty_na_rabotu_v_organizaciyuПланирСобесLForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-l';
import IISKandidaty_na_rabotu_v_organizaciyuРегРезультLForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-l';
import IISKandidaty_na_rabotu_v_organizaciyuРегистАнкетыLForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-l';
import IISKandidaty_na_rabotu_v_organizaciyuСотрудLForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-l';
import IISKandidaty_na_rabotu_v_organizaciyuСотрудникиLForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-l';
import IISKandidaty_na_rabotu_v_organizaciyuВакантДолжнEForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-e';
import IISKandidaty_na_rabotu_v_organizaciyuГрафСобесEForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-e';
import IISKandidaty_na_rabotu_v_organizaciyuОрганизацияEForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-e';
import IISKandidaty_na_rabotu_v_organizaciyuПланирСобесEForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-e';
import IISKandidaty_na_rabotu_v_organizaciyuРегРезультEForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-e';
import IISKandidaty_na_rabotu_v_organizaciyuРегистАнкетыEForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-e';
import IISKandidaty_na_rabotu_v_organizaciyuСотрудEForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-e';
import IISKandidaty_na_rabotu_v_organizaciyuСотрудникиEForm from './forms/i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-e';
import IISKandidaty_na_rabotu_v_organizaciyuВакантДолжнModel from './models/i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн';
import IISKandidaty_na_rabotu_v_organizaciyuГрафСобесModel from './models/i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес';
import IISKandidaty_na_rabotu_v_organizaciyuОрганизацияModel from './models/i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация';
import IISKandidaty_na_rabotu_v_organizaciyuПланирСобесModel from './models/i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес';
import IISKandidaty_na_rabotu_v_organizaciyuРегРезультModel from './models/i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ';
import IISKandidaty_na_rabotu_v_organizaciyuРегистАнкетыModel from './models/i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты';
import IISKandidaty_na_rabotu_v_organizaciyuСотрудModel from './models/i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд';
import IISKandidaty_na_rabotu_v_organizaciyuСотрудникиModel from './models/i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники';
import IISKandidaty_na_rabotu_v_organizaciyuТЧГрафСобесModel from './models/i-i-s-kandidaty-na-rabotu-v-organizaciyu-т-ч-граф-собес';
import IISKandidaty_na_rabotu_v_organizaciyuТЧРегРезультModel from './models/i-i-s-kandidaty-na-rabotu-v-organizaciyu-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн': IISKandidaty_na_rabotu_v_organizaciyuВакантДолжнModel,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес': IISKandidaty_na_rabotu_v_organizaciyuГрафСобесModel,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация': IISKandidaty_na_rabotu_v_organizaciyuОрганизацияModel,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес': IISKandidaty_na_rabotu_v_organizaciyuПланирСобесModel,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ': IISKandidaty_na_rabotu_v_organizaciyuРегРезультModel,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты': IISKandidaty_na_rabotu_v_organizaciyuРегистАнкетыModel,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд': IISKandidaty_na_rabotu_v_organizaciyuСотрудModel,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники': IISKandidaty_na_rabotu_v_organizaciyuСотрудникиModel,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-т-ч-граф-собес': IISKandidaty_na_rabotu_v_organizaciyuТЧГрафСобесModel,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-т-ч-рег-результ': IISKandidaty_na_rabotu_v_organizaciyuТЧРегРезультModel
  },

  'application-name': 'Kandidaty_na_rabotu_v_organizaciyu',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kandidaty_na_rabotu_v_organizaciyu',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kandidaty_na_rabotu_v_organizaciyu',
          title: 'Kandidaty_na_rabotu_v_organizaciyu'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'kandidaty-na-rabotu-v-organizaciyu': {
          caption: 'Kandidaty_na_rabotu_v_organizaciyu',
          title: 'Kandidaty_na_rabotu_v_organizaciyu',
          'i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-l': {
            caption: 'Вакант должн',
            title: ''
          },
          'i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          },
          'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-l': {
            caption: 'Граф собес',
            title: ''
          },
          'i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          },
          'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-l': {
            caption: 'Сотруд',
            title: ''
          },
          'i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-l': IISKandidaty_na_rabotu_v_organizaciyuВакантДолжнLForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-l': IISKandidaty_na_rabotu_v_organizaciyuГрафСобесLForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-l': IISKandidaty_na_rabotu_v_organizaciyuОрганизацияLForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-l': IISKandidaty_na_rabotu_v_organizaciyuПланирСобесLForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-l': IISKandidaty_na_rabotu_v_organizaciyuРегРезультLForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-l': IISKandidaty_na_rabotu_v_organizaciyuРегистАнкетыLForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-l': IISKandidaty_na_rabotu_v_organizaciyuСотрудLForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-l': IISKandidaty_na_rabotu_v_organizaciyuСотрудникиLForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-вакант-должн-e': IISKandidaty_na_rabotu_v_organizaciyuВакантДолжнEForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-граф-собес-e': IISKandidaty_na_rabotu_v_organizaciyuГрафСобесEForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-организация-e': IISKandidaty_na_rabotu_v_organizaciyuОрганизацияEForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-планир-собес-e': IISKandidaty_na_rabotu_v_organizaciyuПланирСобесEForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-рег-результ-e': IISKandidaty_na_rabotu_v_organizaciyuРегРезультEForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-регист-анкеты-e': IISKandidaty_na_rabotu_v_organizaciyuРегистАнкетыEForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотруд-e': IISKandidaty_na_rabotu_v_organizaciyuСотрудEForm,
    'i-i-s-kandidaty-na-rabotu-v-organizaciyu-сотрудники-e': IISKandidaty_na_rabotu_v_organizaciyuСотрудникиEForm
  },

});

export default translations;
