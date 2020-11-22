"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appModuleBuildContents = void 0;
function appModuleBuildContents(moduleNames) {
    var deps = moduleNames
        .map(function (name) { return '//src/app/' + name; });
    return "load(\"//tools:angular_ts_library.bzl\", \"ng_ts_library\")\n\npackage(default_visibility = [\"//:__subpackages__\"])\n\nng_ts_library(\n    name = \"app\",\n    srcs = glob(\n        include = [\"*.ts\"],\n        exclude = [\"app.server.module.ts\"],\n    ),\n    angular_assets = [\"app.component.html\"],\n    tsconfig = \"//src:tsconfig.json\",\n    deps = [\n        \"@npm//@angular/common\",\n        \"@npm//@angular/core\",\n        \"@npm//@angular/platform-browser\",\n        \"@npm//@angular/router\",\n        \"@npm//@angular/service-worker\",\n        \"@npm//rxjs\",\n    ] + " + JSON.stringify(deps, undefined, 4) + ",\n)\n\nng_ts_library(\n    name = \"app_server\",\n    srcs = [\"app.server.module.ts\"],\n    tsconfig = \"//src:tsconfig-server\",\n    deps = [\n        \":app\",\n        \"@npm//@angular/core\",\n        \"@npm//@angular/platform-server\",\n    ],\n)\n";
}
exports.appModuleBuildContents = appModuleBuildContents;
//# sourceMappingURL=template-app-module-build.js.map