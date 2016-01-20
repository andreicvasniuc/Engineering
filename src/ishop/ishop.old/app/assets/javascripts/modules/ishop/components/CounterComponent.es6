class CounterComponentController {
  constructor() {
    //console.log('this.count',this.count);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

class CounterComponentView {
  constructor($element, $attrs) {
    this.$element = $element;
    this.$attrs = $attrs;
    this.createTemplate();
  }

  createTemplate(){
    this.template = 
              `<div class="todo">ola view template ${this.$attrs.count}
                <input type="text" ng-model="counter.count">
                <button type="button" ng-click="counter.decrement();">-</button>
                <button type="button" ng-click="counter.increment();">+</button>
              </div>`;
  }
}

let CounterComponent = {
  bindings: { count: '=' },
  controller: CounterComponentController,
  template: ($element, $attrs) => new CounterComponentView($element, $attrs).template
};

export { CounterComponent }