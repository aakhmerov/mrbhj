// Filename: router.js
/**
 * Base router of the application
 * all pages urls should be aggregated here and actions
 * taken appropriately
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/layout/PageLayoutView'
], function($, _, Backbone,PageLayoutView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            '': 'showDefault',

            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function(){

        var app_router = new AppRouter;

        app_router.on('route:showDefault', function () {
            // Call render on the module with default layout options
            var defaultPage = new PageLayoutView({
                //element which will get all html produced during layout rendering
                el: '#page'
            });
            //invoke actual rendering
            defaultPage.render();
        });

        app_router.on('route:defaultAction', function (actions) {
            //nothing to do here, just page action invoked
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
