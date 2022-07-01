const fs = require("fs-extra");

console.log(`Copying packages into node_modules`);
fs.copySync("package-with-exports", "node_modules/package-with-exports", {
    overwrite: true,
    recursive: true,
});
fs.copySync("package-with-main", "node_modules/package-with-main", {
    overwrite: true,
    recursive: true,
});
