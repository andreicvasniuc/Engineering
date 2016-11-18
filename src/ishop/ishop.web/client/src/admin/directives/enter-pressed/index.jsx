export default () => {
  return (scope, element, attrs) => {
    element.bind('keydown keypress', (event) => {
      if (event.which !== 13) return;

      scope.$apply(() => {
          scope.$eval(attrs.enterPressed);
      });

      event.preventDefault();
    });
  }; 
};
