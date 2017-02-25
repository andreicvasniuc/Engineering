class TreeProcessor {
  constructor() {}

  proceedTree(item, listPropertyName, callback) {
    if(item == null) return;

    callback(item);

    if(!item[listPropertyName] || !angular.isArray(item[listPropertyName])) return;

    item[listPropertyName].forEach((child) => this.proceedTree(child, listPropertyName, callback));
  }
}

export default TreeProcessor