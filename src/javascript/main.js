require.config({
    baseUrl: '/javascript',
    waitSeconds: 90000,
    //urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        //lib
        jquery: 'lib/jquery/jquery',
        underscore: 'lib/underscore/underscore',
        Q: 'lib/q/q',
        backbone: 'lib/backbone/backbone',
        wreqr:'lib/backbone.wreqr/src/build/backbone.wreqr',
        tpl: 'lib/requirejs-tpl/tpl',
        text: 'lib/requirejs-text/text',
        marionette: 'lib/backbone.marionette/lib/backbone.marionette',
        bootstrap: 'lib/bootstrap/dist/js/bootstrap',
        jquery_ui: 'vendor/jquery-ui/jquery-ui',
        jquery_event_drag: 'lib/slickgrid/lib/jquery.event.drag-2.2',
        slickgrid_core: 'lib/slickgrid/slick.core',
        slickgrid: 'lib/slickgrid/slick.grid',
        slick_rowselect: 'lib/slickgrid/plugins/slick.rowselectionmodel',
        slick_checkbox: 'lib/slickgrid/plugins/slick.checkboxselectcolumn',
        fastclick: 'vendor/fastclick/lib/fastclick',
        transitionize: 'vendor/transitionize/transitionize',
        switchery: 'vendor/switchery/switchery',
        moment: 'lib/moment/moment',
        zeroclipboard: 'lib/zeroclipboard/dist/ZeroClipboard',
        datetimepicker: "lib/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker",
        daterangepicker: "lib/bootstrap-daterangepicker/daterangepicker",
        metisMenu: "lib/metisMenu/dist/metisMenu.min",
        highcharts: "lib/highcharts-release/highcharts.src",
        pnotify: "vendor/pnotify/pnotify.custom",
        Snap:'lib/snap.svg/dist/snap.svg-min',
        d3: "lib/d3/d3.min",
        select2:"lib/select2/select2",
        //common
        basic:"core/basic",
        data:"core/basic/data",
        event:"core/basic/event",
        net:"core/basic/net",
        view:"core/basic/view",
        other:"core/basic/other",


        dispatcher:"core/functions/Dispatcher",
        U:'core/functions/Utils',
        Cookie:'core/functions/Cookie',
        Logger:'core/functions/Logger',
        app:"core/functions/App",
        formatter:"core/functions/Formatter",

        layout:"core/layout",
        container:"core/container",
        component:"core/component",
        store:"core/store",
        extend:"core/extend",

        ui:"core/extend/ui",

        C:"config/Config",
        API:"config/API"
    },
    shim: {
        main: {
            deps: [],
            exports: 'main'
        },
        extra: {
            deps: ['main'],
            exports: 'extra'
        },
        jquery: {
            deps: [],
            exports: 'jQuery'
        },
        bootstrap: {
            deps: ['jquery']
        },
        underscore: {
            deps: [],
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        wreqr: {
            deps: ['backbone']
        },
        metisMenu: {
            deps: ['jquery']
        },
//        validate: {
//            deps: ['jquery'],
//            exports: 'validate'
//        },
//        i18n: {
//            deps: ['jquery'],
//            exports: 'i18n'
//        },
//        jquery_ui: {
//            deps: ['jquery']
//        },
//        jquery_event_drag: {
//            deps: ['jquery']
//        },
        select2: {
            deps: ['jquery']
        },
        switchery: {
            deps: ['transitionize', 'fastclick'],
            exports: 'Switchery'
        },
//        slickgrid_core: {
//            deps: ['jquery'],
//            exports: 'slickgrid_core'
//        },
//        slickgrid: {
//            deps: ['jquery_ui', 'slickgrid_core', 'jquery_event_drag'],
//            exports: 'Slick'
//        },
//        slick_rowselect: {
//            deps: ['slickgrid']
//        },
//        slick_checkbox: {
//            deps: ['slickgrid']
//        },
//        datetimepicker: {
//            deps: ['bootstrap']
//        },
//        metisMenu: {
//            deps: ['bootstrap']
//        },
        highcharts: {
            deps: [ "jquery"],
            exports: 'Highcharts'
        }
    }
});