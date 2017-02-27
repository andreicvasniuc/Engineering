class DeviceDetector {
  constructor($window) {
    this.platform = $window.navigator.platform;
  }

  // iPad and iPod detection  
  isiPad () {
    return this.platform.indexOf("iPad") != -1;
  }

  isiPhone () {
    return (this.platform.indexOf("iPhone") != -1) || (this.platform.indexOf("iPod") != -1);
  }
}

export default DeviceDetector