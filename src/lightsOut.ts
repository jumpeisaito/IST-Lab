/// <reference path="../libs/knockout/knockout.d.ts" />
/// <reference path="../libs/knockout.es5/knockout.es5.d.ts" />
/// <reference path="../libs/lodash/lodash.d.ts" />
/// <reference path="../libs/jquery/jquery.d.ts" />
//this is test project
//ViewModelを定義
function LightsOut() {
  var self = this;
  self.lightRows = ko.observableArray<{
    c0: KnockoutObservable<boolean>;
    c1: KnockoutObservable<boolean>;
    c2: KnockoutObservable<boolean>;
    c3: KnockoutObservable<boolean>;
    c4: KnockoutObservable<boolean>;
  }>();
  for (var i = 0; i < 5; i++) {
    self.lightRows.push({
      c0: ko.observable(false),
      c1: ko.observable(false),
      c2: ko.observable(false),
      c3: ko.observable(false),
      c4: ko.observable(false)
    });
  }
  self.clickCell = function(data, event) {
    console.log(data);
    switch (event.currentTarget.attributes.col.value) {
      case "0":
        self.lightRows()[event.currentTarget.attributes.row.value].c0(
          !self.lightRows()[event.currentTarget.attributes.row.value].c0());
        break;
      case "1":
        self.lightRows()[event.currentTarget.attributes.row.value].c1(
          !self.lightRows()[event.currentTarget.attributes.row.value].c1());
        break;
      case "2":
        self.lightRows()[event.currentTarget.attributes.row.value].c2(
          !self.lightRows()[event.currentTarget.attributes.row.value].c2());
        break;
      case "3":
        self.lightRows()[event.currentTarget.attributes.row.value].c3(
          !self.lightRows()[event.currentTarget.attributes.row.value].c3());
        break;
      case "4":
        self.lightRows()[event.currentTarget.attributes.row.value].c4(
          !self.lightRows()[event.currentTarget.attributes.row.value].c4());
        break;
      default:
    }
  }
}
//bindingスタート
$(document).ready(function() {
  ko.applyBindings(new LightsOut());
});
