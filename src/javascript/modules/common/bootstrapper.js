define([
        'app',
        'dispatcher',
        'core/functions/UI',
        'other/Account',
        'data/DataRepository',
        'data/Store',
        'data/Task',
        'jquery',
        'API',
        'U',
        'C'
    ],
    function (AppCube,Dispatcher,UI,Account,DataRepository,Store,Task,$,API,U,C){

        return {
            init:function(){
                $('#common-loader').fadeOut();
                AppCube.DataRepository = DataRepository.create();
                AppCube.DataRepository.start();
                AppCube.User = Account.create();
                UI.initDialog();
            }
        };
    });