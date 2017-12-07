class LoginService {
  constructor($http, env) {
    this.$http = $http;

    this.authTokenUrl = `${env.getApiUrl()}/user_token`;
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