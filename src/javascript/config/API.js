define(['C','U'],function(C,U){
    var api = {};
    var urlBase = document.location.origin;
    var apiVersion = '2.0';
    var apiPrefix = {
        'Test':urlBase + '/',
        'Data': urlBase + '/' + apiVersion + '/',
        'OrgUsers': urlBase + '/' + apiVersion + '/orgUsers',
        'Analytics': urlBase + '/' + apiVersion + '/ana/apps/',
        'Files': urlBase + '/' +apiVersion + '/files',

        /* Adv */
        'Organization':urlBase + '/' +apiVersion + '/orgs',
        'Campaign':urlBase + '/' + apiVersion + '/adCampaigns',
        'Schedule':urlBase + '/' + apiVersion + '/adSchedules',
        'Creative':urlBase + '/' + apiVersion + '/adCreatives',
        'Country':urlBase + '/' + apiVersion + '/location/country',
        'Lang':urlBase + '/' + apiVersion + '/location/lang',
        'Snake':urlBase + '/' + apiVersion + '/snake/sql'
    };

    var apiSuffix = {
        App:function(){
            return 'apps/';
        },
        AllApp:function(){
            return 'apps/all/';
        },
        collection:function(){
            return 'get_collection';
        },
        LoadAdvertisement:function(){
            return 'load_ad';
        },
        LoadSchedule:function(){
            return 'load_schedule';
        },
        LoadData:function(){
            return C.get('User.AppId') + '/load_data';
        },
        LoadVersion:function(){
            return C.get('User.AppId') + '/load_versions';
        },
        LoadSegment:function(){
            return C.get('User.AppId') + '/load_segments';
        },
        LoadChannel:function(){
            return C.get('User.AppId') + '/load_channels';
        },
        Schema:function(){
            return '/schemas/'
        }

    };

    api.get = function(key){
        var arr = key.split('.');
        return apiPrefix[arr[0]] + (arr[1]?apiSuffix[arr[1]]():'');
    };

    return api;
});