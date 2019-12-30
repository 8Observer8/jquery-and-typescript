define(["require", "exports", "jquery"], function (require, exports, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Playground: https://next.plnkr.co/edit/CoBEcB8vlZfQqAfz?preview
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            console.log("Hello Main");
        };
        return Program;
    }());
    Program.Main();
    $(document).ready(function () {
        console.log("Hello jQuery");
    });
});
//# sourceMappingURL=Program.js.map