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

    console.log('translationIds', translationIds);

    this.$translate(translationIds).then((translation) => {
        this.treeProcessor.proceedTree(item, listPropertyName, (treeItem) => {
          if(!treeItem[translatePropertyName]) return;
          treeItem[translatePropertyName] = translation[treeItem[translatePropertyName]];
          console.log(treeItem[translatePropertyName]);
        });
    });
  }
}

export default Translator