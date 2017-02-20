class LoginNotifier {
  constructor(notifier) {
    this.notifier = notifier;
  }

  showErrorLoginMessage() {
    this.notifier.error('INCORRECT_EMAIL_OR_PASSWORD', null, { timeOut: 0, extendedTimeOut: 0, closeButton: true });
  }
}

export default LoginNotifier