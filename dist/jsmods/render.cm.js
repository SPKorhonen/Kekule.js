var exporter = require("../kekule.moduleEnvInits.cm.js");
require("../kekule.js");
require("../mins/root.min.js");
require("../mins/localization.min.js");
require("../mins/common.min.js");
require("../mins/data.min.js");
require("../mins/core.min.js");
require("../mins/html.min.js");
require("../mins/render.min.js");
module.exports = exporter();
Kekule.ArrayUtils.pushUnique(Kekule.scriptSrcInfo.modules, ["lan", "root", "localization", "localizationData", "common", "data", "core", "html", "render"]);
if (typeof(Kekule) !== 'undefined') { Kekule._loaded(); }