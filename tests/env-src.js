const pathSrc = !!process.env["LIB"] ? "lib" : "src";

module.exports = require("../" + pathSrc);
