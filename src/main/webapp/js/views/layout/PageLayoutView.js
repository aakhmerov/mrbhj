/**
 *
 * User: dervish
 * Date: 12/12/12
 * Time: 1:45 PM
 *
 * layout based on 3 sections header - content - footer
 *
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/layout/NavigationHeader',
    'views/layout/EmptyContent',
    'views/layout/EmptyFooter',
    'text!templates/layout/simpleTemplate.html' ,
    //dirty hack for handlebars loading wait
    'handlebars'
], function($, _, Backbone,NavigationHeader,EmptyContent,EmptyFooter,simpleTemplate){

    var PageLayoutView = Backbone.View.extend({

        template : Handlebars.compile(simpleTemplate),
        //defaults to NavigationHeader view function
        headerContent : NavigationHeader,
        //defaults to EmptyContent view function
        mainContent :  EmptyContent,
        //defaults to EmptyFooter view function
        footerContent : EmptyFooter,

        initialize : function(options) {

            //instantiate appropriate views based on component functions
            if (options.mainContent != undefined && options.mainContent != null) {
                this.mainContent = options.mainContent;
            }

            if (options.headerContent != undefined && options.headerContent != null) {
                this.headerContent = options.headerContent;
            }

            if (options.footerContent != undefined && options.footerContent != null) {
                this.footerContent = options.footerContent;
            }
        },

        render: function(){
            //compile handlebars template with appropriate markup of components
            var html = this.template();
            //append appropriate content to root element right away after compilation
            $(this.el).html(html);

            this.headerView = new this.headerContent({el : '#header'});

            this.mainView = new this.mainContent({el : '#mian'});

            this.footerView = new this.footerContent({el : '#footer'});

            this.headerView.render();
            this.mainView.render();
            this.footerView.render();
            return this;
        }

    });

    return PageLayoutView;

});
