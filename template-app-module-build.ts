export function appModuleBuildContents(moduleNames: string[]) {

  const deps = moduleNames
    .map(name => '//src/' + name);

  return `package(default_visibility = ["//visibility:public"])

load("@angular//:index.bzl", "ng_module")

ng_module(
    name = "src",
    srcs = glob(["*.ts"]),
    assets = glob(["*.html"]),
    tsconfig = ":tsconfig.json",
    deps = ${JSON.stringify(deps)},
)

# Needed because the devserver only loads static files that appear under this
# package.
genrule(
    name = "zone.js",
    srcs = ["//:node_modules/zone.js/dist/zone.min.js"],
    outs = ["zone.min.js"],
    cmd = "cp $< $@",
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_devserver")

ts_devserver(
    name = "devserver",
    entry_module = "angular_bazel_example/src/main",
    scripts = ["//:angular_bundles"],
    serving_path = "/bundle.min.js",
    static_files = [
        ":zone.js",
        "index.html",
    ],
    deps = ["//src"],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "rollup_bundle", "nodejs_binary")

rollup_bundle(
    name = "bundle",
    entry_point = "src/main",
    deps = ["//src"],
)

nodejs_binary(
    name = "prodserver",
    args = ["./src"],
    data = [
        "index.html",
        ":bundle",
        ":zone.js",
    ],
    entry_point = "http-server/bin/http-server",
)
`;
}
