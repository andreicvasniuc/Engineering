export default ($window, deviceDetector, mobileMenuService) => {
  if ( deviceDetector.isiPad() && deviceDetector.isiPhone()) {
    FastClick.attach(document.body); // Fast Click for ( Mobiles/Tablets )
  }

  mobileMenuService.initialize();
  $($window).resize(() => mobileMenuService.mobileMenu());
}