"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function moduleBuildContents(name, sourcefileNames, assetFileNames) {
    var str = function (data) { return JSON.stringify(data, undefined, 2); };
    return "package(default_visibility = [\"//visibility:public\"])\n\nload(\"@angular//:index.bzl\", \"ng_module\")\nload(\"@build_bazel_rules_typescript//:defs.bzl\", \"ts_library\", \"ts_web_test\")\n\nng_module(\n    name = " + str(name) + ",\n    srcs = " + str(sourcefileNames) + ",\n    assets = " + str(assetFileNames) + ",\n    tsconfig = \"//src:tsconfig.json\",\n    deps = [\n        \"//src/lib\",\n        \"@rxjs\",\n    ],\n)\n\nts_library(\n    name = " + str('test_' + name) + ",\n    testonly = 1,\n    srcs = glob([\"*.spec.ts\"]),\n    deps = [" + str(':' + name) + "],\n)\n\nts_web_test(\n    name = \"test\",\n    bootstrap = [\"//:angular_bootstrap_scripts\"],\n    deps = [\n        " + str(':test_' + name) + ",\n        \"//:angular_bundles\",\n        \"//:angular_test_bundles\",\n    ],\n)\n";
}
exports.moduleBuildContents = moduleBuildContents;
// Alternative:
// srcs = glob(["*.ts"]),
// assets = glob(["*.html"]),
//# sourceMappingURL=template-module-bazel.js.map