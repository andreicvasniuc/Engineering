class LoginController {
  constructor($cookies, loginService, router, loginNotifier) {
    this.$cookies = $cookies;
    this.loginService = loginService;
    this.router = router;
    this.loginNotifier = loginNotifier;

    this.getCookies();
  }

  getCookies() {
    let email = this.$cookies.get('email');
    let password = this.$cookies.get('password');

    if (!email || !password) return;

    this.email = email;
    this.password = password;
    this.remember = true;
  }

  setCookies() {
    let email = '';
    let password = '';

    if(this.remember) {
      email = this.email;
      password = this.password;
    }

    this.$cookies.put('email', email);
    this.$cookies.put('password', password);
  }

  signin() {
    if (this.form.$invalid) {
      this.form.email.$setDirty();
      this.form.password.$setDirty();
      return;
    }

    this.setCookies();

    this.loginService.signin( this.email, this.password,
      (response) => {
        sessionStorage.setItem('auth_token', response.data.jwt);
        this.router.goTo(this.loginService.redirectToUrl);
      },
      (data, status, headers, config) => {
        if(status == 404) {
          this.loginNotifier.showErrorLoginMessage();
        }
      }
    );
  }
}

export default LoginController