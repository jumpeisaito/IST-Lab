function LightsOut() {
    var self = this;
    self.lightRows = ko.observableArray();
    for (var i = 0; i < 5; i++) {
        self.lightRows.push({
            c0: ko.observable(false),
            c1: ko.observable(false),
            c2: ko.observable(false),
            c3: ko.observable(false),
            c4: ko.observable(false)
        });
    }
    self.clickCell = function (data, event) {
        var row = _.parseInt(event.currentTarget.attributes.row.value);
        var col = _.parseInt(event.currentTarget.attributes.col.value);
        switch (col) {
            case 0:
                self.lightRows()[row].c0(!self.lightRows()[row].c0());
                self.lightRows()[row].c1(!self.lightRows()[row].c1());
                if (row !== 0) {
                    self.lightRows()[row - 1].c0(!self.lightRows()[row - 1].c0());
                }
                if (row !== 4) {
                    self.lightRows()[row + 1].c0(!self.lightRows()[row + 1].c0());
                }
                break;
            case 1:
                self.lightRows()[row].c0(!self.lightRows()[row].c0());
                self.lightRows()[row].c1(!self.lightRows()[row].c1());
                self.lightRows()[row].c2(!self.lightRows()[row].c2());
                if (row !== 0) {
                    self.lightRows()[row - 1].c1(!self.lightRows()[row - 1].c1());
                }
                if (row !== 4) {
                    self.lightRows()[row + 1].c1(!self.lightRows()[row + 1].c1());
                }
                break;
            case 2:
                self.lightRows()[row].c1(!self.lightRows()[row].c1());
                self.lightRows()[row].c2(!self.lightRows()[row].c2());
                self.lightRows()[row].c3(!self.lightRows()[row].c3());
                if (row !== 0) {
                    self.lightRows()[row - 1].c2(!self.lightRows()[row - 1].c2());
                }
                if (row !== 4) {
                    self.lightRows()[row + 1].c2(!self.lightRows()[row + 1].c2());
                }
                break;
            case 3:
                self.lightRows()[row].c2(!self.lightRows()[row].c2());
                self.lightRows()[row].c3(!self.lightRows()[row].c3());
                self.lightRows()[row].c4(!self.lightRows()[row].c4());
                if (row !== 0) {
                    self.lightRows()[row - 1].c3(!self.lightRows()[row - 1].c3());
                }
                if (row !== 4) {
                    self.lightRows()[row + 1].c3(!self.lightRows()[row + 1].c3());
                }
                break;
            case 4:
                self.lightRows()[row].c3(!self.lightRows()[row].c3());
                self.lightRows()[row].c4(!self.lightRows()[row].c4());
                if (row !== 0) {
                    self.lightRows()[row - 1].c4(!self.lightRows()[row - 1].c4());
                }
                if (row !== 4) {
                    self.lightRows()[row + 1].c4(!self.lightRows()[row + 1].c4());
                }
                break;
            default:
        }
        self.lightsCheck();
    };

    self.lightsCheck = function () {
        var count = 0;

        _.forEach(self.lightRows(), function (row) {
            if (row.c0() && row.c1() && row.c2() && row.c3() && row.c4()) {
                count++;
            } else {
                return false;
            }
        });
        if (count === 5) {
            window.alert("clear!!");
        }
    };
}

$(document).ready(function () {
    ko.applyBindings(new LightsOut());
});
