/**
 *
 * User: dervish
 * Date: 12/13/12
 * Time: 12:22 PM
 *
 */

//mock console for old browsers and headless environment like HtmlUnit
if ("undefined" === typeof window.console) {
    window.console = {
        "log": function () {
        }
    };
}


//TODO: copy this header into customized runner
require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        handlebars: 'libs/handlebars/handlebars',
        bootstrap: 'libs/twitter/bootstrap.min',
        templates: '../templates',
        text: 'libs/require/text'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        }
    }

});

define(
    [
        "views/layout/PageLayoutView"
    ],
    function (PageLayoutView) {
        describe('About PageLayout', function () {
            var emptyView;

            beforeEach(function () {
                $('body').append('<div id="page"></div>');
                emptyView = new PageLayoutView({
                    //element which will get all html produced during layout rendering
                    el: '#page'
                });
            });

            afterEach(function () {
                emptyView.remove();
                $('#page').remove();
            });

            it('Should be tied to a DOM element when created, based off the property provided.', function () {
                expect(emptyView.el.tagName.toLowerCase()).toBe('div');
            });

        });
    });

