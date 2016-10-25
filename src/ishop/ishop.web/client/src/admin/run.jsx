export default ($rootScope, authManager) => { // authManager MUST be injected in order the redirection to work
  console.log('authManager', authManager);

  authManager.redirectWhenUnauthenticated(); // automatically redirect to login page if the request is not authenticated

  // authManager.checkAuthOnRefresh();
  // $rootScope.$on('tokenHasExpired', function() {
  //   console.log('Your session has expired!');
  // });
}