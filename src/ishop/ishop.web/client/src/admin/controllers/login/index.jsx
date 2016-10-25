class LoginController {
  constructor($cookies) {
    this.$cookies = $cookies;

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

    console.log('signin', this.email, this.password, this.remember);
  }
}

export default LoginController