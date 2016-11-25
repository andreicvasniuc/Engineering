class LoginNotifier {
  constructor(notifier) {
    this.notifier = notifier;
  }

  showErrorLoginMessage() {
    this.notifier.error('The email or password you have entered is incorrect.', null, { timeOut: 0, extendedTimeOut: 0, closeButton: true });
  }
}

export default LoginNotifier