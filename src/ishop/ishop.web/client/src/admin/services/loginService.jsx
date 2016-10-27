class LoginService {
  constructor($http, envService) {
    this.$http = $http;

    this.authTokenUrl = `${envService.getApiUrl()}/user_token`;
    this.redirectToUrl = null;
  }

  signin(email, password, successCallback, errorCallback){
    let request = { auth: { email, password } };

    this.$http.post(this.authTokenUrl, request)
      .success(successCallback)
      .error(errorCallback);
  }
}

export default LoginService