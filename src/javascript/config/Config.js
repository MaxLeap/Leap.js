define([
    'config/User',
    'config/Ajax',
    'config/UI',
    'U'
],function(user,ajax,ui,U){
    var config = {
        'Ajax':ajax,
        'User':user,
        'UI':ui
    };
    var Config = {};

    function _get(object,arr,i){
        if(typeof object[arr[i]] == 'undefined')return false;
        if(typeof arr[i+1] != 'undefined'){
            return _get(object[arr[i]]||{},arr,i+1);
        }else{
            return object[arr[i]];
        }
    }

    function _set(object,value,arr,i){
        if(typeof object[arr[i]] == 'undefined')object[arr[i]] = {};
        if(typeof arr[i+1] != 'undefined'){
            _set(object[arr[i]]||{},value,arr,i+1);
        }else{
            object[arr[i]] = value;
            return value;
        }
    }

    Config.set = function(key,value){
        var array = key.split('.');
        return _set(config,value,array,0);
    };

    Config.get = function(key,bool){
        var array = key.split('.');
        var tmp = _get(config,array,0);
        return bool?U.Clone(tmp):tmp;
    };

    return Config;
});