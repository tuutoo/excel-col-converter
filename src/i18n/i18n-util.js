// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { i18n as initI18n, i18nObject as initI18nObject, i18nString as initI18nString } from 'typesafe-i18n';
import { detectLocale as detectLocaleFn } from 'typesafe-i18n/detectors';
import { initExtendDictionary } from 'typesafe-i18n/utils';
export var baseLocale = 'en';
export var locales = [
    'en',
    'zh-cn'
];
export var isLocale = function (locale) { return locales.includes(locale); };
export var loadedLocales = {};
export var loadedFormatters = {};
export var extendDictionary = initExtendDictionary();
export var i18nString = function (locale) { return initI18nString(locale, loadedFormatters[locale]); };
export var i18nObject = function (locale) {
    return initI18nObject(locale, loadedLocales[locale], loadedFormatters[locale]);
};
export var i18n = function () {
    return initI18n(loadedLocales, loadedFormatters);
};
export var detectLocale = function () {
    var detectors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        detectors[_i] = arguments[_i];
    }
    return detectLocaleFn.apply(void 0, __spreadArray([baseLocale, locales], detectors, false));
};
