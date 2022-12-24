import exporter from "../kekule.moduleEnvInits.esm.mjs";
import "../kekule.js";
import "../mins/root.min.js";
import "../mins/localization.min.js";
import "../mins/common.min.js";
import "../mins/data.min.js";
import "../mins/core.min.js";
let { Kekule, Class, ClassEx, ObjectEx, DataType} = exporter();
export { Kekule, Class, ClassEx, ObjectEx, DataType};
Kekule.ArrayUtils.pushUnique(Kekule.scriptSrcInfo.modules, ["lan", "root", "localization", "localizationData", "common", "data", "core"]);
if (typeof(Kekule) !== 'undefined') { Kekule._loaded(); }