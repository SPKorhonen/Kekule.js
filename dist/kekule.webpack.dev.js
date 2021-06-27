require("../src/widgets/themes/default/kekule.css");
require("../src/lan/classes.js");
require("../src/lan/xmlJsons.js");
require("../src/lan/serializations.js");
require("../src/core/kekule.root.js");
require("../src/localization/kekule.localizations.js");
require("../src/localization/en/kekule.localize.general.en.js");
require("../src/localization/en/kekule.localize.widget.en.js");
require("../src/localization/en/kekule.localize.objDefines.en.js");
require("../src/localization/zh/kekule.localize.general.zh.js");
require("../src/localization/zh/kekule.localize.widget.zh.js");
require("../src/core/kekule.common.js");
require("../src/core/kekule.exceptions.js");
require("../src/utils/kekule.utils.js");
require("../src/utils/kekule.domHelper.js");
require("../src/utils/kekule.domUtils.js");
require("../src/core/kekule.externalResMgr.js");
require("../src/core/kekule.configs.js");
require("../src/core/kekule.elements.js");
require("../src/core/kekule.electrons.js");
require("../src/core/kekule.valences.js");
require("../src/core/kekule.structures.js");
require("../src/core/kekule.structureBuilder.js");
require("../src/core/kekule.reactions.js");
require("../src/core/kekule.chemUtils.js");
require("../src/chemdoc/kekule.glyph.base.js");
require("../src/chemdoc/kekule.glyph.utils.js");
require("../src/chemdoc/kekule.glyph.pathGlyphs.js");
require("../src/chemdoc/kekule.glyph.lines.js");
require("../src/chemdoc/kekule.glyph.chemGlyphs.js");
require("../src/chemdoc/kekule.contentBlocks.js");
require("../src/chemdoc/kekule.attachedMarkers.js");
require("../src/chemdoc/kekule.commonChemMarkers.js");
require("../src/xbrowsers/kekule.x.js");
require("../src/html/kekule.nativeServices.js");
require("../src/html/kekule.predefinedResLoaders.js");
require("../src/utils/kekule.htmlDomUtils.js");
require("../src/utils/kekule.textHelper.js");
require("../src/io/kekule.io.js");
require("../src/io/cml/kekule.io.cml.js");
require("../src/io/mdl/kekule.io.mdlBase.js");
require("../src/io/mdl/kekule.io.mdl2000.js");
require("../src/io/mdl/kekule.io.mdl3000.js");
require("../src/io/mdl/kekule.io.mdlIO.js");
require("../src/io/smiles/kekule.io.smiles.js");
require("../src/io/native/kekule.io.native.js");
require("../src/render/kekule.render.extensions.js");
require("../src/render/kekule.render.base.js");
require("../src/render/kekule.render.renderColorData.js");
require("../src/render/kekule.render.utils.js");
require("../src/render/kekule.render.configs.js");
require("../src/render/kekule.render.baseTextRender.js");
require("../src/render/kekule.render.boundInfoRecorder.js");
require("../src/render/2d/kekule.render.renderer2D.js");
require("../src/render/2d/kekule.render.glyphRender2D.js");
require("../src/render/2d/kekule.render.canvasRenderer.js");
require("../src/render/2d/kekule.render.raphaelRenderer.js");
require("../src/render/3d/kekule.render.renderer3D.js");
require("../src/render/3d/kekule.render.threeRenderer.js");
require("../src/render/kekule.render.painter.js");
require("../src/lib/hammer.js/hammer.min.js");
require("../src/widgets/operation/kekule.operations.js");
require("../src/widgets/operation/kekule.actions.js");
require("../src/widgets/kekule.widget.root.js");
require("../src/widgets/kekule.widget.bindings.js");
require("../src/widgets/kekule.widget.events.js");
require("../src/widgets/kekule.widget.base.js");
require("../src/widgets/kekule.widget.sys.js");
require("../src/widgets/kekule.widget.keys.js");
require("../src/widgets/kekule.widget.clipboards.js");
require("../src/widgets/kekule.widget.helpers.js");
require("../src/widgets/kekule.widget.styleResources.js");
require("../src/widgets/kekule.widget.autoLaunchers.js");
require("../src/widgets/transitions/kekule.widget.transitions.js");
require("../src/widgets/transitions/kekule.widget.transMgr.js");
require("../src/widgets/commonCtrls/kekule.widget.resizers.js");
require("../src/widgets/commonCtrls/kekule.widget.movers.js");
require("../src/widgets/commonCtrls/kekule.widget.images.js");
require("../src/widgets/commonCtrls/kekule.widget.containers.js");
require("../src/widgets/commonCtrls/kekule.widget.menus.js");
require("../src/widgets/commonCtrls/kekule.widget.buttons.js");
require("../src/widgets/commonCtrls/kekule.widget.formControls.js");
require("../src/widgets/commonCtrls/kekule.widget.nestedContainers.js");
require("../src/widgets/commonCtrls/kekule.widget.treeViews.js");
require("../src/widgets/commonCtrls/kekule.widget.listViews.js");
require("../src/widgets/commonCtrls/kekule.widget.dialogs.js");
require("../src/widgets/commonCtrls/kekule.widget.msgPanels.js");
require("../src/widgets/commonCtrls/kekule.widget.tabViews.js");
require("../src/widgets/advCtrls/kekule.widget.valueListEditors.js");
require("../src/widgets/advCtrls/kekule.widget.colorPickers.js");
require("../src/widgets/advCtrls/kekule.widget.textEditors.js");
require("../src/widgets/advCtrls/kekule.widget.widgetGrids.js");
require("../src/widgets/advCtrls/objInspector/kekule.widget.objInspectors.js");
require("../src/widgets/advCtrls/objInspector/kekule.widget.objInspector.propEditors.js");
require("../src/widgets/advCtrls/objInspector/kekule.widget.objInspector.operations.js");
require("../src/widgets/advCtrls/kekule.widget.configurators.js");
require("../src/widgets/advCtrls/grids/kekule.widget.dataSets.js");
require("../src/widgets/advCtrls/grids/kekule.widget.dataGrids.js");
require("../src/widgets/sys/kekule.widget.sysMsgs.js");
require("../src/widgets/operation/kekule.operHistoryTreeViews.js");
require("../src/widgets/chem/kekule.chemWidget.base.js");
require("../src/widgets/chem/kekule.chemWidget.dialogs.js");
require("../src/widgets/chem/periodicTable/kekule.chemWidget.periodicTables.js");
require("../src/widgets/chem/kekule.chemWidget.chemObjDisplayers.js");
require("../src/widgets/chem/structureTreeView/kekule.chemWidget.structureTreeViews.js");
require("../src/widgets/chem/uiMarker/kekule.chemWidget.uiMarkers.js");
require("../src/widgets/chem/viewer/kekule.chemWidget.viewers.js");
require("../src/widgets/chem/viewer/kekule.chemWidget.viewerGrids.js");
require("../src/widgets/chem/viewer/kekule.chemWidget.chemObjInserters.js");
require("../src/widgets/chem/editor/kekule.chemEditor.extensions.js");
require("../src/widgets/chem/editor/kekule.chemEditor.baseEditors.js");
require("../src/widgets/chem/editor/kekule.chemEditor.operations.js");
require("../src/widgets/chem/editor/kekule.chemEditor.editorUtils.js");
require("../src/widgets/chem/editor/kekule.chemEditor.configs.js");
require("../src/widgets/chem/editor/kekule.chemEditor.repositoryData.js");
require("../src/widgets/chem/editor/kekule.chemEditor.repositories.js");
require("../src/widgets/chem/editor/kekule.chemEditor.utilWidgets.js");
require("../src/widgets/chem/editor/kekule.chemEditor.chemSpaceEditors.js");
require("../src/widgets/chem/editor/kekule.chemEditor.nexus.js");
require("../src/widgets/chem/editor/kekule.chemEditor.actions.js");
require("../src/widgets/chem/editor/kekule.chemEditor.trackParser.js");
require("../src/widgets/chem/editor/kekule.chemEditor.objModifiers.js");
require("../src/widgets/chem/editor/modifiers/kekule.chemEditor.styleModifiers.js");
require("../src/widgets/chem/editor/modifiers/kekule.chemEditor.textModifiers.js");
require("../src/widgets/chem/editor/modifiers/kekule.chemEditor.structureModifiers.js");
require("../src/widgets/chem/editor/modifiers/kekule.chemEditor.glyphModifiers.js");
require("../src/chemdoc/issueCheckers/kekule.issueCheckers.js");
require("../src/widgets/chem/editor/issueInspectors/kekule.chemEditor.issueCheckers.js");
require("../src/widgets/chem/editor/issueInspectors/kekule.chemEditor.issueInspectors.js");
require("../src/widgets/advCtrls/objInspector/kekule.widget.objInspector.chemPropEditors.js");
require("../src/widgets/chem/editor/kekule.chemEditor.composers.js");
require("../src/webComponents/kekule.webComponent.base.js");
require("../src/webComponents/kekule.webComponent.widgetWrappers.js");
require("../src/algorithm/kekule.graph.js");
require("../src/algorithm/kekule.structures.helpers.js");
require("../src/algorithm/kekule.structures.canonicalizers.js");
require("../src/algorithm/kekule.structures.ringSearches.js");
require("../src/algorithm/kekule.structures.aromatics.js");
require("../src/algorithm/kekule.structures.standardizers.js");
require("../src/algorithm/kekule.structures.searches.js");
require("../src/algorithm/kekule.structures.stereos.js");
require("../src/calculation/kekule.calc.base.js");
require("../src/data/kekule.chemicalElementsData.js");
require("../src/data/kekule.isotopesData.organSet.js");
require("../src/data/kekule.structGenAtomTypesData.js");
require("../src/data/kekule.dataUtils.js");
require("../src/_extras/kekule.emscriptenUtils.js");
require("../src/localization/en/kekule.localize.extras.openbabel.en.js");
require("../src/_extras/OpenBabel/kekule.openbabel.base.js");
require("../src/_extras/OpenBabel/kekule.openbabel.io.js");
require("../src/_extras/OpenBabel/kekule.openbabel.structures.js");
require("../src/_extras/Indigo/kekule.indigo.base.js");
require("../src/_extras/Indigo/kekule.indigo.io.js");
require("../src/_extras/Indigo/kekule.indigo.structures.js");
require("../src/_extras/InChI/kekule.inchi.js");
require("../src/kekule.loaded.js");
module.exports = Kekule;