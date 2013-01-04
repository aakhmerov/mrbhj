/**
 *
 * User: dervish
 * Date: 12/12/12
 * Time: 1:45 PM
 *
 *
 *
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/layout/navigationTemplate.html' ,
    //dirty hack for handlebars loading wait
    'handlebars'
], function($, _, Backbone,navigationTemplate){

    var NavigationHeader = Backbone.View.extend({

        template : Handlebars.compile(navigationTemplate),

        initialize : function() {
//            nothing to do here
        },

        render: function(){
            //compile handlebars template
            //TODO: make menu items backed by some collection and models
            this.$el.html(this.template());
            return this;
        }

    });

    return NavigationHeader;

});