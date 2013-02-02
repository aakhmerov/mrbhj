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
        },

        initialize : function () {
            _.bindAll(this,'showDefault','defaultAction','showPage','removeCurrentView','setView');
        },

        showPage : function (MainView,HeaderView,FooterView) {
            this.removeCurrentView();
            var pageContainer = $('<div></div>').attr({id : 'page'})
            $('body').append(pageContainer);
            this.showParams.mainContent = MainView;
            this.showParams.headerContent = HeaderView;
            var page = new PageLayoutView(this.showParams);
            page.render();
            this.setView(page);
        },

        removeCurrentView : function () {
            if (!_.isEmpty(this.view)) {
                this.view.undelegateEvents();
                this.view.remove();
            }
            this.view = null;
        },

        setView : function (view) {
            this.view = view;
        },



        showDefault : function () {
            this.showParams = {
                el:'#page'
            };
            require(['EmptyContent'],this.showPage);
        }
    });

    var initialize = function(){

        var app_router = new AppRouter;

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
