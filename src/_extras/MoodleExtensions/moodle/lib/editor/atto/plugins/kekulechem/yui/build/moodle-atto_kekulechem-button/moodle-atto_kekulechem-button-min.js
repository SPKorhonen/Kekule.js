YUI.add("moodle-atto_kekulechem-button",function(e,t){var o=e.namespace("M.atto_kekulechem");o.Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{BTN_NAME_OBJ_INSERT:"kekuleChemObjInsert",BTN_NAME_SPECTRUM_INSERT:"kekuleSpectrumObjInsert",CHEM_OBJ_INSERTER_CLASS:"KekuleChemObjInserter",CHEM_OBJ_VIEWER_CLASS:"KekuleChemObjViewer",SPECTRUM_INSPECTOR_CLASS:"KekuleSpectrumInspector",CHEM_OBJ_TAGNAME:"img",initializer:function(){var e,t,r;this._preparingForSubmit=!1,this.get("attoKekulePluginPath"),this.addButton({buttonName:this.BTN_NAME_OBJ_INSERT,title:"captionKekuleChemObj",icon:"icons/kekulechem",iconComponent:"atto_kekulechem",callback:this._executeChemObjInserter}),this.get("attoKekulePluginPath"),this.addButton({buttonName:this.BTN_NAME_SPECTRUM_INSERT,title:"captionKekuleSpectrum",icon:"icons/kekulespectrum",iconComponent:"atto_kekulechem",callback:this._executeSpectrumObjInserter}),this._addEssentialFiles(),e=this.get("host"),t=this,r=e.textarea.getDOMNode().form,"undefined"!=typeof Kekule&&(Kekule.X.domReady(function(){t._setEditorConfigs()}),Kekule.X.domReady(function(){t._prepareForDisplay()})),r.onsubmit=function(){t._prepareForSubmit()},e.on("change",function(){t._prepareForDisplay()})},_setEditorConfigs:function(){Kekule.Editor.ChemSpaceEditorConfigs&&Kekule.Editor.ChemSpaceEditorConfigs.getInstance&&Kekule.Editor.ChemSpaceEditorConfigs.getInstance().getInteractionConfigs().setAllowUnknownAtomSymbol(!1)},_getPurifyHtml:function(){var e=this.get("purifyHtml");return Kekule.StrUtils.strToBool(e)},_addEssentialFiles:function(){var e=this.get("kekuleCssUrl"),t=this.get("kekuleMoodleCssUrl");this._addCssUrl(e),this._addCssUrl(t)},_addCssUrl:function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",e),document.head.appendChild(t)},_prepareForDisplay:function(){var e,t,r;if("undefined"!=typeof Kekule&&!this._preparingForSubmit&&this._getPurifyHtml())for(t=(e=this._getEditorRootElem().getElementsByTagName(o.ChemObjDataWrapperUtils.CHEM_OBJ_WRAPPER_TAGNAME)).length-1;0<=t;--t)(r=e[t])&&Kekule.HtmlElementUtils.hasClass(r,o.ChemObjDataWrapperUtils.CHEM_OBJ_WRAPPER_CLASSNAME)&&o.ChemObjDataWrapperUtils.replaceDataWrappersWithImg(r)},_prepareForSubmit:function(){var e,t,r,l;if(this._getPurifyHtml()){this._preparingForSubmit=!0;try{for(t=(e=this._getEditorRootElem().getElementsByTagName(this.CHEM_OBJ_TAGNAME)).length-1;0<=t;--t)(r=e[t])&&Kekule.HtmlElementUtils.hasClass(r,this.CHEM_OBJ_VIEWER_CLASS)&&o.ChemObjDataWrapperUtils.replaceImgsWithDataWrapper(r);this.markUpdated()}finally{l=this,function(){l._preparingForSubmit=!1}.defer()}}},_getSelectedInserterTargetNode:function(l,i){var e=this.get("host"),t=e.getSelectedNodes(),r=e.getSelection()[0],n=[],a=this;return!r||r.collapsed?null:(t.some(function(e){var t=null,r=e.getDOMNode();if(r&&r.tagName&&(t=a._getParentKekuleWidgetPlaceholderElement(r,a._getEditorRootElem(),l,i)),t&&(n.push(t),1<n.length))return!0}),1<=n.length?n[0]:null)},_getSelectedChemObjTarget:function(){return this._getSelectedInserterTargetNode(this.CHEM_OBJ_VIEWER_CLASS,"ChemWidget.Viewer")},_getSelectedSpectrumObjTarget:function(){return this._getSelectedInserterTargetNode(this.SPECTRUM_INSPECTOR_CLASS,"ChemWidget.SpectrumInspector")},_getEditorRootElem:function(){return this.get("host").editor.getDOMNode()},_getParentKekuleWidgetPlaceholderElement:function(e,t,r,l){return Kekule.HtmlElementUtils.hasClass(e,r)||0<=(e.getAttribute("data-kekule-widget")||"").indexOf(l)?e:e!==t?this._getParentChemObjElement(e.parentNode,t):null},_getParentChemObjElement:function(e,t){return this._getParentKekuleWidgetPlaceholderElement(e,t,this.CHEM_OBJ_VIEWER_CLASS,"ChemWidget.Viewer")},_getParentSpectrumObjElement:function(e,t){return this._getParentKekuleWidgetPlaceholderElement(e,t,this.SPECTRUM_INSPECTOR_CLASS,"ChemWidget.SpectrumInspector")},_executeChemObjInserter:function(){var e=this._getSelectedChemObjTarget();this._targetElem=e||null,this._setEditorConfigs(),this._openChemObjInserterDialog(e)},_executeSpectrumObjInserter:function(){var e=this._getSelectedSpectrumObjTarget();this._targetElem=e||null,this._openSpectrumObjInserterDialog(e)},_openInserterDialog:function(e,t,r,l,i){var n=null,a=this.buttons[t];return a&&(n=a.getDOMNode()),r.openModal(function(e){e===Kekule.Widget.DialogButtons.OK&&i()},n),e?l.importFromElem(e):l.setChemObj(null),function(){l.resized()}.bind(this).delay(),r},_openChemObjInserterDialog:function(e){var t,r;return this._chemObjInserterDialog||(this._chemObjInserterDialog=this._createChemObjInserterDialog()),t=this._chemObjInserterDialog,r=e?M.util.get_string("captionEditChemObj","atto_kekulechem"):M.util.get_string("captionAddChemObj","atto_kekulechem"),t.setCaption(r),this._openInserterDialog(e,this.BTN_NAME_OBJ_INSERT,t,this._chemObjInserter,this._submitChemObj.bind(this,e))},_openSpectrumObjInserterDialog:function(e){var t,r;return this._spectrumObjInserterDialog||(this._spectrumObjInserterDialog=this._createSpectrumObjInserterDialog()),t=this._spectrumObjInserterDialog,r=e?M.util.get_string("captionModifySpectrum","atto_kekulechem"):M.util.get_string("captionAddSpectrum","atto_kekulechem"),t.setCaption(r),this._openInserterDialog(e,this.BTN_NAME_SPECTRUM_INSERT,t,this._spectrumObjInserter,this._submitSpectrumObj.bind(this,e))},_createDialogForInsert:function(){var e,t=new Kekule.Widget.Dialog(document);return t.setButtons([Kekule.Widget.DialogButtons.OK,Kekule.Widget.DialogButtons.CANCEL]),(e=t.getClientElem()).style.minWidth="500px",e.style.minHeight="250px",t},_createChemObjInserterDialog:function(){var e=this._createDialogForInsert(),t=new Kekule.ChemWidget.ChemObjInserter(document);return t.setResizable(!0),t.getViewer().setEditorProperties({predefinedSetting:"fullFunc",commonToolButtons:null,chemToolButtons:null,allowCreateNewChild:!0}),t.appendToWidget(e),this._chemObjInserter=t,e},_createSpectrumObjInserterDialog:function(){
var e=this._createDialogForInsert(),t=new Kekule.ChemWidget.SpectrumObjInserter(document);return t.setResizable(!0),t.appendToWidget(e),this._spectrumObjInserter=t,e},_submitChemObj:function(l){var i=this,e=this._chemObjInserter;e.getExportImgElemAttributesAsync(null,null,function(e){var t,r;e["class"]||(e["class"]=""),e["class"]=" "+i.CHEM_OBJ_VIEWER_CLASS+" K-Transparent-Background",(t=i.get("host")).focus(),l?Kekule.DomUtils.setElemAttributes(l,e):(r=i._getNormalHtmlCode(e),t.insertContentAtFocusPoint(r)),i.markUpdated()})},_submitSpectrumObj:function(l){var i=this,e=this._spectrumObjInserter;e.getExportImgElemAttributesAsync(null,null,function(e){var t,r;e["class"]||(e["class"]=""),e["class"]=" "+i.SPECTRUM_INSPECTOR_CLASS+" K-Transparent-Background",(t=i.get("host")).focus(),l?Kekule.DomUtils.setElemAttributes(l,e):(r=i._getNormalHtmlCode(e),t.insertContentAtFocusPoint(r)),i.markUpdated()})},_getNormalHtmlCode:function(e){return this._generateElemHtmlCode(this.CHEM_OBJ_TAGNAME,null,e)},_generateElemHtmlCode:function(e,t,r){var l,i,n,a,s="<"+e,o=Kekule.ObjUtils.getOwnedFieldNames(r);for(l=0,i=o.length;l<i;++l)(n=o[l])&&(a=r[n],"className"===n&&(n="class"),s+=" "+n+"='"+(a=a&&(a=(a=(a=(a=a.toString()).replace('/"/g',"&quot;")).replace("/'/g","&#039;")).replace("/</g","&lt;")).replace("/>/g","&gt;"))+"'");return s+=">",t&&(s+=t),s+="</"+e+">"},_generateHtmlElemsCode:function(e){var t,r,l,i=e.children||[],n=e.tagName,a=e.content||"",s=Object.extend({},e);for(delete s.tagName,delete s.content,delete s.children,t="",r=0,l=i.length;r<l;++r)t+=this._generateHtmlElemsCode(i[r]);return this._generateElemHtmlCode(n,a+t,s)}},{ATTRS:{kekuleCssUrl:{value:""},kekuleMoodleCssUrl:{value:""},attoKekulePluginPath:{value:""},purifyHtml:{value:!1}}}),o.ChemObjDataWrapperUtils={CHEM_OBJ_WRAPPER_TAGNAME:"span",CHEM_OBJ_DATA_TAGNAME:"span",CHEM_OBJ_IMG_TAGNAME:"img",CHEM_OBJ_WRAPPER_CLASSNAME:"Kekule-ChemObj-Wrapper",CHEM_OBJ_DATA_CLASSNAME:"Kekule-ChemObj-Wrapper-Data",CHEM_OBJ_IMG_CLASSNAME:"Kekule-ChemObj-Wrapper-Img",getWrapperDetails:function(e){var t,r,l,i,n,a;if(Kekule.HtmlElementUtils.hasClass(e,o.ChemObjDataWrapperUtils.CHEM_OBJ_WRAPPER_CLASSNAME)){if(t={},(r=Kekule.DomUtils.getDirectChildElems(e))&&r.length)for(l=0,i=r.length;l<i;++l)n=r[l],Kekule.HtmlElementUtils.hasClass(n,o.ChemObjDataWrapperUtils.CHEM_OBJ_DATA_CLASSNAME)?t.dataElement=n:Kekule.HtmlElementUtils.hasClass(n,o.ChemObjDataWrapperUtils.CHEM_OBJ_IMG_CLASSNAME)&&(t.imgElement=n);a=t.dataElement||e,t.srcData=Kekule.DomUtils.getElementText(a);try{t.data=JSON.parse(t.srcData)}catch(s){}return t}return null},updateWrapperElem:function(e,t){var r,l,i,n=o.ChemObjDataWrapperUtils.getWrapperDetails(e);n&&(r=e.ownerDocument,n.dataElement||(Kekule.DomUtils.setElementText(e,""),n.dataElement=r.createElement(o.ChemObjDataWrapperUtils.CHEM_OBJ_DATA_TAGNAME),n.dataElement.className=o.ChemObjDataWrapperUtils.CHEM_OBJ_DATA_CLASSNAME,e.appendChild(n.dataElement)),n.imgElement||(n.imgElement=r.createElement(o.ChemObjDataWrapperUtils.CHEM_OBJ_IMG_TAGNAME),n.imgElement.className=o.ChemObjDataWrapperUtils.CHEM_OBJ_IMG_CLASSNAME,e.appendChild(n.imgElement))),Kekule.HtmlElementUtils.addClass(n.dataElement,KekuleMoodle.WidgetDataWrapper.WRAPPER_DATA_HTML_CLASS),Kekule.DomUtils.setElementText(n.dataElement,JSON.stringify(t)),Kekule.StyleUtils.setDisplay(n.dataElement,"none"),l=n.imgElement,i={width:t.width,height:t.height,style:t.style,src:t.src},Kekule.DomUtils.setElemAttributes(l,i),Kekule.HtmlElementUtils.addClass(e,KekuleMoodle.WidgetDataWrapper.WRAPPER_HTML_CLASS)},createWrapperElem:function(e,t){var r=e.createElement(o.ChemObjDataWrapperUtils.CHEM_OBJ_WRAPPER_TAGNAME);return r.className=o.ChemObjDataWrapperUtils.CHEM_OBJ_WRAPPER_CLASSNAME,o.ChemObjDataWrapperUtils.updateWrapperElem(r,t),r},replaceDataWrappersWithImg:function(e){var t=o.ChemObjDataWrapperUtils.getWrapperDetails(e),r=Object.extend({dataWidget:t.widget},t.data),l=e.ownerDocument,i=e.parentNode,n=l.createElement("img");return Kekule.DomUtils.setElemAttributes(n,r),i.insertBefore(n,e),i.removeChild(e),n},replaceImgsWithDataWrapper:function(e){var t=e.ownerDocument,r=e.parentNode,l=Kekule.DomUtils.fetchAttributeValuesToJson(e),i=o.ChemObjDataWrapperUtils.createWrapperElem(t,l);return r.insertBefore(i,e),r.removeChild(e),i}}},"@VERSION@",{requires:["moodle-editor_atto-plugin","kekule","local_kekulejs","local_kekulejs/kekuleInitials"]});