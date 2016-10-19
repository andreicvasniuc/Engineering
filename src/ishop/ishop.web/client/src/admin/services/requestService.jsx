class RequestService {
  constructor(router, routeUrls) {
    this.router = router;
    this.routeUrls = routeUrls;
  }

  ajax(serviceOperation, request, successCallback, errorCallback) {
    serviceOperation(request, successCallback, (response) => {
      if(response.status == 401) { // "Unauthorized"
        this.router.goTo(this.routeUrls.authentication);
        return;
      }

      if (errorCallback) errorCallback(response);
    })
  }
}

export default RequestService