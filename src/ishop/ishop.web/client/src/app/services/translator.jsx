class Translator {
  constructor($translate, treeProcessor) {
    this.$translate = $translate;
    this.treeProcessor = treeProcessor;
  }

  translateDeep(item, listPropertyName, translatePropertyName) {
    let translationIds = [];

    this.treeProcessor.proceedTree(item, listPropertyName, (treeItem) => {
      if(!treeItem[translatePropertyName]) return;
      translationIds.push(treeItem[translatePropertyName])
    });

    this.$translate(translationIds).then((translation) => {
        this.treeProcessor.proceedTree(item, listPropertyName, (treeItem) => {
          if(!treeItem[translatePropertyName]) return;
          treeItem[translatePropertyName] = translation[treeItem[translatePropertyName]];
        });
    });
  }
}

export default Translator