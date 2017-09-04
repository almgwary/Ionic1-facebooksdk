angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {


  $scope.isLoggedIn =  false  ;
  $scope.data =  {}  ;
  var me = $scope ;

  $scope.facebookLogin = function () {

    if(facebookConnectPlugin) {
      facebookConnectPlugin.login([], function (res) {
        console.log('done log in', res);
        me.isLoggedIn = true;
        me.data = res;


      }, function (e) {
        console.log('error log in', e);
        me.isLoggedIn = false;
      });

    }else {
      console.error('facebookConnectPlugin not available please run in device ')
    }

  };


  $scope.facebookLogOut = function () {
    if(facebookConnectPlugin){
         facebookConnectPlugin.logout(
           function (res) {
           console.log('done log out',res)
           me.isLoggedIn =  false  ;
             me.data =  {}  ;


           }, function (e) {
           console.log('error log out',e)
             me.isLoggedIn =  false  ;
         });
    }else {
      console.error('facebookConnectPlugin not available please run in device ')
    }
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
