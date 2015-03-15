angular.module('firebase.config', [])
  .constant('FBURL', 'https://electionhack.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','twitter'])

  .constant('loginRedirectPath', '/login');
