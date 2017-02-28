class MobileMenuService {
  constructor($window, $timeout) {
    this.$window = $window;
    this.$timeout = $timeout;
  }

  initialize() {
    this.$timeout(() => {
      this.mobileMenu();
      this.mobileMenuOutsideClick();
      this.mobileBtnClick();
      this.mobileClickSubMenus();
    });
  }

    // Mobile Menu Clone ( Mobiles/Tablets )
  mobileMenu () {
    if ( $(this.$window).width() < 769 ) {
      $('html,body').addClass('fh5co-overflow');

      if ( $('#fh5co-mobile-menu').length < 1 ) {
        
        let clone = $('#fh5co-primary-menu').clone().attr({
          id: 'fh5co-mobile-menu-ul',
          class: ''
        });
        let cloneLogo = $('#fh5co-logo').clone().attr({
          id : 'fh5co-logo-mobile',
          class : ''
        });

        $('<div id="fh5co-logo-mobile-wrap">').append(cloneLogo).insertBefore('#fh5co-header-section');
        $('#fh5co-logo-mobile-wrap').append('<a href="javascript:void(0)" id="fh5co-mobile-menu-btn"><i class="ti-menu"></i></a>')
        $('<div id="fh5co-mobile-menu">').append(clone).insertBefore('#fh5co-header-section');

        $('#fh5co-header-section').hide();
        $('#fh5co-logo-mobile-wrap').show();
      } else {
        $('#fh5co-header-section').hide();
        $('#fh5co-logo-mobile-wrap').show();
      }

    } else {

      $('#fh5co-logo-mobile-wrap').hide();
      $('#fh5co-header-section').show();
      $('html,body').removeClass('fh5co-overflow');
      if ( $('body').hasClass('fh5co-mobile-menu-visible')) {
        $('body').removeClass('fh5co-mobile-menu-visible');
      }
    }
  }

  // Click outside of the Mobile Menu
  mobileMenuOutsideClick() {
    $(this.$window.document).click((e) => {
      let container = $("#fh5co-mobile-menu, #fh5co-mobile-menu-btn");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('body').removeClass('fh5co-mobile-menu-visible');
      }
    });
  }

  // Mobile Button Click
  mobileBtnClick() {
    $(this.$window.document).on('click', '#fh5co-mobile-menu-btn', (e) => {
      e.preventDefault();
      if ( $('body').hasClass('fh5co-mobile-menu-visible') ) {
        $('body').removeClass('fh5co-mobile-menu-visible'); 
      } else {
        $('body').addClass('fh5co-mobile-menu-visible');
      }
      
    });
  }

  // Superfish Sub Menu Click ( Mobiles/Tablets )
  mobileClickSubMenus() {
    $('body').on('click', '.fh5co-sub-ddown', function(event) {
      event.preventDefault();
      var $this = $(this),
        li = $this.closest('li');
      // li.find('> .fh5co-sub-menu').slideToggle(200);
      $this.find('~ .fh5co-sub-menu').slideToggle(200);
    });

  }
}

export default MobileMenuService