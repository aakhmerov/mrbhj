
// Require.js allows us to configure shortcut alias
// Their usage will become more apparent further along in the tutorial.
require.config({
    baseUrl: '/src/main/webapp/js',
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        handlebars: 'libs/handlebars/handlebars',
        text: 'libs/require/text',
        jasmine : 'libs/jasmine/jasmine-html'
    },
    shim: {
        jquery : {
            exports : 'jQuery'
        },

        underscore : {
            exports : '_'
        },

        backbone : {
            deps: ['jquery','underscore'],
            exports : 'Backbone'
        },

        handlebars: {
            exports: 'Handlebars'
        }
    }

});


//mock console for old browsers and headless environment
if ("undefined" === typeof window.console) {
    window.console = {
        "log": function () {
        }
    };
}

//endswith function to string class
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

console.log('running test main')

require(['jquery','handlebars'], function ($) {
    $.ajax = jasmine.createSpy("spyAjax").andCallFake(function(params) {
        return null;
    });
    Handlebars.registerHelper('ifEquals', function (v1, v2, options) {
        if (v1 == v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    Handlebars.registerHelper('ifNotEquals', function (v1, v2, options) {
        if (v1 != v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });
});


