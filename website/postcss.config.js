module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("postcss-import")({
      addModulesDirectories: ["_sass", "node_modules/tidgrid/build"]
    }),
    require("autoprefixer"),
    require("cssnano")({ preset: "default" })
  ]
};
