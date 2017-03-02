export default ($document) => {
  return (scope, element, attrs) => {
    let scopeExpression = attrs.outsideClick;
    let exceptSelector = attrs.exceptSelector;

    let isChildOrSelf = (elements, target) => elements.find(target).length > 0 || _.some(elements, (item) => item === target);

    let onDocumentClick = (event) => {
        var isChild = isChildOrSelf(element, event.target) || isChildOrSelf(angular.element(exceptSelector), event.target);

        if (isChild) return;

        scope.$apply(scopeExpression);
    };

    $document.on('click', onDocumentClick);

    element.on('$destroy', () => $document.off('click', onDocumentClick));
  }; 
};
