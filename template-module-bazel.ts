export function moduleBuildContents(
  name: string,
  sourcefileNames: string[],
  assetFileNames: string[]
) {

  const str = data => JSON.stringify(data, undefined, 2);

  return `package(default_visibility = ["//visibility:public"])

load("@angular//:index.bzl", "ng_module")
load("@build_bazel_rules_typescript//:defs.bzl", "ts_library", "ts_web_test")

ng_module(
    name = ${str(name)},
    srcs = ${str(sourcefileNames)},
    assets = ${str(assetFileNames)},
    tsconfig = "//src:tsconfig.json",
    deps = [
        "//src/lib",
        "@rxjs",
    ],
)

ts_library(
    name = ${str('test_' + name)},
    testonly = 1,
    srcs = glob(["*.spec.ts"]),
    deps = [${str(':' + name)}],
)

ts_web_test(
    name = "test",
    bootstrap = ["//:angular_bootstrap_scripts"],
    deps = [
        ${str(':test_' + name)},
        "//:angular_bundles",
        "//:angular_test_bundles",
    ],
)
`;

}

// Alternative:
// srcs = glob(["*.ts"]),
// assets = glob(["*.html"]),
