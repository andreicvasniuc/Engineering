export default (deviceDetector) => {
  if ( deviceDetector.isiPad() && deviceDetector.isiPhone()) {
    FastClick.attach(document.body); // Fast Click for ( Mobiles/Tablets )
  }
}