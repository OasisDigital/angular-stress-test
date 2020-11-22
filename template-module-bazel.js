"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleBuildContents = void 0;
function moduleBuildContents(name, sourcefileNames, assetFileNames) {
    var str = function (data) { return JSON.stringify(data, undefined, 2); };
    return "load(\"//tools:angular_ts_library.bzl\", \"ng_ts_library\")\n\npackage(default_visibility = [\"//:__subpackages__\"])\n\nng_ts_library(\n    name = " + str(name) + ",\n    srcs = " + str(sourcefileNames) + ",\n    angular_assets = " + str(assetFileNames) + ",\n    tsconfig = \"//src:tsconfig.json\",\n    deps = [\n      \"@npm//@angular/core\",\n      \"@npm//@angular/common\",\n  ],\n)\n";
}
exports.moduleBuildContents = moduleBuildContents;
//# sourceMappingURL=template-module-bazel.js.map