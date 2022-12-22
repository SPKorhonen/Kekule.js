var exporter = require("../kekule.moduleEnvInits.cm.js");
require("../kekule.js");
require("../mins/root.min.js");
require("../mins/localization.min.js");
require("../mins/common.min.js");
require("../mins/data.min.js");
require("../mins/core.min.js");
require("../mins/emscripten.min.js");
require("../mins/algorithm.min.js");
require("../mins/io.min.js");
require("../mins/indigo.min.js");
Kekule.ArrayUtils.pushUnique(Kekule.scriptSrcInfo.modules, ["lan", "root", "localization", "localizationData", "common", "data", "core", "emscripten", "algorithm", "io", "indigo"]);
if (typeof(Kekule) !== 'undefined') { Kekule._loaded(); }
module.exports = exporter();