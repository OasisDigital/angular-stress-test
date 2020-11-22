export function moduleBuildContents(
  name: string,
  sourcefileNames: string[],
  assetFileNames: string[]
) {

  const str = data => JSON.stringify(data, undefined, 2);

  return `load("//tools:angular_ts_library.bzl", "ng_ts_library")

package(default_visibility = ["//:__subpackages__"])

ng_ts_library(
    name = ${str(name)},
    srcs = ${str(sourcefileNames)},
    angular_assets = ${str(assetFileNames)},
    tsconfig = "//src:tsconfig.json",
    deps = [
      "@npm//@angular/core",
      "@npm//@angular/common",
  ],
)
`;
}
