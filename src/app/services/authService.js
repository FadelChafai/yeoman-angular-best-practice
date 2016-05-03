(function() {
    'use strict';
/**
 * Created by mchafai on 04/05/2016.
 */
var ngModule = angular.module('myApp');

ngModule.factory('authService', authService);

//Inject dependencies
authService.$inject = ['__env', '$http', '$q', '$rootScope'];

// Inject __env so we can access environment variables
function authService(__env, $http, $q, $rootScope){
	$rootScope.user = null;

    if (window.localStorage.getItem('user')) {
    	try{
            $rootScope.user = JSON.parse(window.localStorage.getItem('user'));
        } catch(e)  {
            $rootScope.user = null;
            console.log('user json is invalid');
        }
    }

    return  {
        login: function () {
            window.location.href = __env.openIdServerUrl + '/oauth/authorize/?response_type=token&client_id=' + __env.openIdClientId + '&redirect_uri=' + window.location.protocol + '//' +document.location.host+'/cockpit/callback.html';
        },
        logout: function () {
            //window.localStorage.clear();
        	window.localStorage.setItem('user', false);
            $rootScope.user = null;
            return true;
        },
        isLoggedIn: function(){

            var $expire = false;

            if ($rootScope.user) {
                $expire = ($rootScope.user.oauth.expires_in - Math.floor(Date.now() / 1000)) > 0;
            }

            return ($rootScope.user && $rootScope.user.email && $expire) ? true : false;
        },
        getUser: function () {
            return $rootScope.user;
        },
        setUser: function () {

            if (!$rootScope.user || typeof $rootScope.user === 'undefined') {
                console.error('user is undefined');
                return $q.reject('user is undefined');
            } else {
                var $accessToken = $rootScope.user.oauth.access_token;
                if (!$rootScope.user.hasOwnProperty('email')) {
                    return $http.get(window.location.protocol + '//' + document.location.host +'/cockpit/user.php?access_token=' + $accessToken)
                        .then(function (response) {
                            $rootScope.user.email = response.data.user_email;
                            $rootScope.user.display_name = response.data.displayName;
                            window.localStorage.setItem('user', JSON.stringify($rootScope.user));
                            return $rootScope.user;
                        }, function (response) {
                            console.error(response);
                            return $q.reject(response.status);
                        });
                }else{
                    return $q.reject();
                }
            }
        }
    };
}
})();
