requirejs.config({
    baseUrl: "js",
    paths: {
        "jquery": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min"
    },
    shim: {
        "jquery": {
            exports: "$"
        }
    }
});
requirejs(["Program"], function () { });
//# sourceMappingURL=RequireConfig.js.map