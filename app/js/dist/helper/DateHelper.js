System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DateHelper;
    return {
        setters: [],
        execute: function () {
            DateHelper = class DateHelper {
                static textFromDate(date) {
                    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                }
                static dateFromText(text) {
                    return new Date(text.replace(/-/g, ','));
                }
            };
            exports_1("DateHelper", DateHelper);
        }
    };
});
