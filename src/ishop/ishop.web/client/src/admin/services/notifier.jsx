class NotifierService {
  constructor(toastr) {
    this.toastr = toastr;
  }

  success(message) {
    this.toastr.success(message);
  }
}

export default NotifierService