(function() {
  'use strict';

  angular
    .module('zetaFood')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider, $mdThemingProvider, $provide, $windowProvider) {

    /*$compileProvider.debugInfoEnable(false);
    $httpProvider.useApplyAsync(true);*/

    var $window = $windowProvider.$get();

    if($window.location.origin.indexOf('localhost') == -1) {
      $provide.value('IMAGE_URL', $window.location.origin);
    } else {
      $provide.value('IMAGE_URL', 'http://localhost:8080');
    }


    console.log($window.location.origin);

    $httpProvider.defaults.useXDomain = true;
    /*delete $httpProvider.defaults.headers.common['X-Requested-With'];*/

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    //Set headers
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

    //$httpProvider.interceptors.push('httpInterceptor');
    // Enable log
    $logProvider.debugEnabled(true);


    /*$mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 512)
      .icon("hangouts", "./assets/svg/hangouts.svg", 512)
      .icon("twitter", "./assets/svg/twitter.svg", 512)
      .icon("phone", "./assets/svg/phone.svg", 512);
*/
    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .accentPalette('orange', {
        'default': '500' // use shade 200 for default, and keep all other shades the same
      });


  }

})();
