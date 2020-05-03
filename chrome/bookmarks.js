import{html,Polymer,Base,dom,templatize,afterNextRender,flush,useShadow,Templatizer,OptionalMutableDataBehavior,animationFrame,microTask,idlePeriod,Debouncer as Debouncer$1,enqueueDebouncer,matches,translate,calculateSplices}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{loadTimeData}from"chrome://resources/js/load_time_data.m.js";import{addWebUIListener,removeWebUIListener,isIOS,isWindows,isMac,sendWithPromise,addSingletonGetter,isChromeOS,isLinux}from"chrome://resources/js/cr.m.js";import"chrome://bookmarks/strings.m.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template=html`<custom-style>
  <style is="custom-style" css-build="shadow">[hidden] {
  display: none !important;
}

</style>
</custom-style>
<custom-style>
  <style is="custom-style" css-build="shadow">html {
  --layout_-_display:  flex;;

      --layout-inline_-_display:  inline-flex;;

      --layout-horizontal_-_display:  var(--layout_-_display); --layout-horizontal_-_flex-direction:  row;;

      --layout-horizontal-reverse_-_display:  var(--layout_-_display); --layout-horizontal-reverse_-_flex-direction:  row-reverse;;

      --layout-vertical_-_display:  var(--layout_-_display); --layout-vertical_-_flex-direction:  column;;

      --layout-vertical-reverse_-_display:  var(--layout_-_display); --layout-vertical-reverse_-_flex-direction:  column-reverse;;

      --layout-wrap_-_flex-wrap:  wrap;;

      --layout-wrap-reverse_-_flex-wrap:  wrap-reverse;;

      --layout-flex-auto_-_flex:  1 1 auto;;

      --layout-flex-none_-_flex:  none;;

      --layout-flex_-_flex:  1; --layout-flex_-_flex-basis:  0.000000001px;;

      --layout-flex-2_-_flex:  2;;

      --layout-flex-3_-_flex:  3;;

      --layout-flex-4_-_flex:  4;;

      --layout-flex-5_-_flex:  5;;

      --layout-flex-6_-_flex:  6;;

      --layout-flex-7_-_flex:  7;;

      --layout-flex-8_-_flex:  8;;

      --layout-flex-9_-_flex:  9;;

      --layout-flex-10_-_flex:  10;;

      --layout-flex-11_-_flex:  11;;

      --layout-flex-12_-_flex:  12;;

      

      --layout-start_-_align-items:  flex-start;;

      --layout-center_-_align-items:  center;;

      --layout-end_-_align-items:  flex-end;;

      --layout-baseline_-_align-items:  baseline;;

      

      --layout-start-justified_-_justify-content:  flex-start;;

      --layout-center-justified_-_justify-content:  center;;

      --layout-end-justified_-_justify-content:  flex-end;;

      --layout-around-justified_-_justify-content:  space-around;;

      --layout-justified_-_justify-content:  space-between;;

      --layout-center-center_-_align-items:  var(--layout-center_-_align-items); --layout-center-center_-_justify-content:  var(--layout-center-justified_-_justify-content);;

      

      --layout-self-start_-_align-self:  flex-start;;

      --layout-self-center_-_align-self:  center;;

      --layout-self-end_-_align-self:  flex-end;;

      --layout-self-stretch_-_align-self:  stretch;;

      --layout-self-baseline_-_align-self:  baseline;;

      

      --layout-start-aligned_-_align-content:  flex-start;;

      --layout-end-aligned_-_align-content:  flex-end;;

      --layout-center-aligned_-_align-content:  center;;

      --layout-between-aligned_-_align-content:  space-between;;

      --layout-around-aligned_-_align-content:  space-around;;

      

      --layout-block_-_display:  block;;

      --layout-invisible_-_visibility:  hidden !important;;

      --layout-relative_-_position:  relative;;

      --layout-fit_-_position:  absolute; --layout-fit_-_top:  0; --layout-fit_-_right:  0; --layout-fit_-_bottom:  0; --layout-fit_-_left:  0;;

      --layout-scroll_-_-webkit-overflow-scrolling:  touch; --layout-scroll_-_overflow:  auto;;

      --layout-fullbleed_-_margin:  0; --layout-fullbleed_-_height:  100vh;;

      

      --layout-fixed-top_-_position:  fixed; --layout-fixed-top_-_top:  0; --layout-fixed-top_-_left:  0; --layout-fixed-top_-_right:  0;;

      --layout-fixed-right_-_position:  fixed; --layout-fixed-right_-_top:  0; --layout-fixed-right_-_right:  0; --layout-fixed-right_-_bottom:  0;;

      --layout-fixed-bottom_-_position:  fixed; --layout-fixed-bottom_-_right:  0; --layout-fixed-bottom_-_bottom:  0; --layout-fixed-bottom_-_left:  0;;

      --layout-fixed-left_-_position:  fixed; --layout-fixed-left_-_top:  0; --layout-fixed-left_-_bottom:  0; --layout-fixed-left_-_left:  0;;
}

</style>
</custom-style>`;template.setAttribute("style","display: none;");document.head.appendChild(template.content);var style=document.createElement("style");style.textContent="[hidden] { display: none !important; }";document.head.appendChild(style);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class IronMeta{constructor(options){IronMeta[" "](options);this.type=options&&options.type||"default";this.key=options&&options.key;if(options&&"value"in options){this.value=options.value}}get value(){var type=this.type;var key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}set value(value){var type=this.type;var key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(value==null){delete type[key]}else{type[key]=value}}}get list(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map(function(key){return metaDatas[this.type][key]},this)}}byKey(key){this.key=key;return this.value}}IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;Polymer({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:true},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:true},__computeMeta:function(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==undefined&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(self){if(self){this.value=this}},byKey:function(key){return new IronMeta({type:this.type,key:key}).value}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`<!--css-build:shadow--><style scope="iron-icon">:host {
  display: var(--layout-inline_-_display);
        align-items: var(--layout-center-center_-_align-items); justify-content: var(--layout-center-center_-_justify-content);
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        ;
}

:host([hidden]) {
  display: none;
}

</style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function(src){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(this._iconName===""){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=false}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$1=html`<custom-style>
  <style is="custom-style" css-build="shadow">html {
  --google-red-100-rgb: 244, 199, 195;  
      --google-red-100: rgb(var(--google-red-100-rgb));
      --google-red-300-rgb: 230, 124, 115;  
      --google-red-300: rgb(var(--google-red-300-rgb));
      --google-red-500-rgb: 219, 68, 55;  
      --google-red-500: rgb(var(--google-red-500-rgb));
      --google-red-700-rgb: 197, 57, 41;  
      --google-red-700: rgb(var(--google-red-700-rgb));

      --google-blue-100-rgb: 198, 218, 252;  
      --google-blue-100: rgb(var(--google-blue-100-rgb));
      --google-blue-300-rgb: 123, 170, 247;  
      --google-blue-300: rgb(var(--google-blue-300-rgb));
      --google-blue-500-rgb: 66, 133, 244;  
      --google-blue-500: rgb(var(--google-blue-500-rgb));
      --google-blue-700-rgb: 51, 103, 214;  
      --google-blue-700: rgb(var(--google-blue-700-rgb));

      --google-green-100-rgb: 183, 225, 205;  
      --google-green-100: rgb(var(--google-green-100-rgb));
      --google-green-300-rgb: 87, 187, 138;  
      --google-green-300: rgb(var(--google-green-300-rgb));
      --google-green-500-rgb: 15, 157, 88;  
      --google-green-500: rgb(var(--google-green-500-rgb));
      --google-green-700-rgb: 11, 128, 67;  
      --google-green-700: rgb(var(--google-green-700-rgb));

      --google-yellow-100-rgb: 252, 232, 178;  
      --google-yellow-100: rgb(var(--google-yellow-100-rgb));
      --google-yellow-300-rgb: 247, 203, 77;  
      --google-yellow-300: rgb(var(--google-yellow-300-rgb));
      --google-yellow-500-rgb: 244, 180, 0;  
      --google-yellow-500: rgb(var(--google-yellow-500-rgb));
      --google-yellow-700-rgb: 240, 147, 0;  
      --google-yellow-700: rgb(var(--google-yellow-700-rgb));

      --google-grey-100-rgb: 245, 245, 245;  
      --google-grey-100: rgb(var(--google-grey-100-rgb));
      --google-grey-300-rgb: 224, 224, 224;  
      --google-grey-300: rgb(var(--google-grey-300-rgb));
      --google-grey-500-rgb: 158, 158, 158;  
      --google-grey-500: rgb(var(--google-grey-500-rgb));
      --google-grey-700-rgb: 97, 97, 97;  
      --google-grey-700: rgb(var(--google-grey-700-rgb));

      

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; 
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; 
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;
}

</style>
</custom-style>
`;template$1.setAttribute("style","display: none;");document.head.appendChild(template$1.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:false},useGlobalRtlAttribute:{type:Boolean,value:false}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){this._icons=this._createIconMap();return Object.keys(this._icons).map(function(n){return this.name+":"+n},this)},applyIcon:function(element,iconName){this.removeIcon(element);var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},createIcon:function(iconName,targetIsRTL){return this._cloneIcon(iconName,this.rtlMirroring&&targetIsRTL)},removeIcon:function(element){if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},_targetIsRTL:function(target){if(this.__targetIsRTL==null){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=globalElement.getAttribute("dir")==="rtl"}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&window.getComputedStyle(target)["direction"]==="rtl"}}return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach(function(icon){icons[icon.id]=icon});return icons},_cloneIcon:function(id,mirrorAllowed){this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},_prepareSvgClone:function(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(true),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});const template$2=html`<iron-iconset-svg name="cr20" size="20">
  <svg>
    <defs>
      <!--
      Keep these in sorted order by id="". See also http://goo.gl/Y1OdAq
      -->
      <g id="domain"><path d="M2,3 L2,17 L11.8267655,17 L13.7904799,17 L18,17 L18,7 L12,7 L12,3 L2,3 Z M8,13 L10,13 L10,15 L8,15 L8,13 Z M4,13 L6,13 L6,15 L4,15 L4,13 Z M8,9 L10,9 L10,11 L8,11 L8,9 Z M4,9 L6,9 L6,11 L4,11 L4,9 Z M12,9 L16,9 L16,15 L12,15 L12,9 Z M12,11 L14,11 L14,13 L12,13 L12,11 Z M8,5 L10,5 L10,7 L8,7 L8,5 Z M4,5 L6,5 L6,7 L4,7 L4,5 Z"></path></g>
      <g id="kite"><path d="M 10.32 2 L 4.63 8 l 4.92 7.5 l -0.4 0.6 c -0.04 0.07 -0.09 0.12 -0.14 0.18 c -0.24 0.25 -0.56 0.39 -0.9 0.39 c -0.34 0 -0.65 -0.13 -0.9 -0.39 a 1.35 1.35 0 0 1 -0.37 -0.94 a 2.72 2.72 0 0 0 -0.74 -1.88 a 2.44 2.44 0 0 0 -1.78 -0.78 H 4 v 1.38 h 0.33 c 0.34 0 0.65 0.14 0.9 0.39 c 0.24 0.26 0.37 0.59 0.37 0.95 c 0 0.71 0.26 1.38 0.74 1.88 c 0.48 0.5 1.11 0.78 1.78 0.78 c 0.67 0 1.31 -0.28 1.78 -0.78 c 0.11 -0.11 0.2 -0.23 0.28 -0.35 l 1.27 -1.94 L 16 8 L 10.32 2 z"></path></g>
      <g id="menu"><path d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"></path></g>
  </defs></svg>
</iron-iconset-svg>
<iron-iconset-svg name="cr" size="24">
  <svg>
    <defs>
      <!--
      These icons are copied from Polymer's iron-icons and kept in sorted order.
      See http://goo.gl/Y1OdAq for instructions on adding additional icons.
      -->
      <g id="account-child-invert" viewBox="0 0 48 48"><path d="M24 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"></path><path fill="none" d="M0 0h48v48H0V0z"></path><circle fill="none" cx="24" cy="26" r="4"></circle><path d="M24 18c-6.16 0-13 3.12-13 7.23v11.54c0 2.32 2.19 4.33 5.2 5.63 2.32 1 5.12 1.59 7.8 1.59.66 0 1.33-.06 2-.14v-5.2c-.67.08-1.34.14-2 .14-2.63 0-5.39-.57-7.68-1.55.67-2.12 4.34-3.65 7.68-3.65.86 0 1.75.11 2.6.29 2.79.62 5.2 2.15 5.2 4.04v4.47c3.01-1.31 5.2-3.31 5.2-5.63V25.23C37 21.12 30.16 18 24 18zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></g>
      <g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
      <g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
      <g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
      <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
      <g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
      <g id="arrow-right"><path d="M10 7l5 5-5 5z"></path></g>

      <g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
      <g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
      <g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
      <g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
      <g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
      <g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
      <g id="computer"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path></g>
      <g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
      <g id="domain"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></g>
      <g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
      <g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
      <g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
      <g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
      <g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
      <g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>

      <g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
      <g id="group"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
      <g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
      <g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
      <g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
      <g id="insert-drive-file"><path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"></path></g>
      <g id="location-on"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
      <g id="mic"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
      <g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
      <g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
      <g id="person"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
      <g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
      <g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
      <g id="security"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></g>

      <!-- The <g> IDs are exposed as global variables in Vulcanized mode, which
        conflicts with the "settings" namespace of MD Settings. Using an "_icon"
        suffix prevents the naming conflict. -->
      <g id="settings_icon"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
      <g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
      <g id="supervisor-account" viewBox="0 0 48 48"><path d="M0 0h48v48H0z" fill="none"></path><path d="M33 24c2.76 0 4.98-2.24 4.98-5s-2.22-5-4.98-5c-2.76 0-5 2.24-5 5s2.24 5 5 5zm-15-2c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm15 6c-3.67 0-11 1.84-11 5.5V38h22v-4.5c0-3.66-7.33-5.5-11-5.5zm-15-2c-4.67 0-14 2.34-14 7v5h14v-4.5c0-1.7.67-4.67 4.74-6.94C21 26.19 19.31 26 18 26z"></path></g>
      <g id="sync"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></g>
      <g id="videocam"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></g>
      <g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$2.content);const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<custom-style>\n<style is="custom-style" css-build="shadow">html {\n  --google-blue-50-rgb: 232, 240, 254;  \n    --google-blue-50: rgb(var(--google-blue-50-rgb));\n    --google-blue-200-rgb: 174, 203, 250;  \n    --google-blue-200: rgb(var(--google-blue-200-rgb));\n    --google-blue-600-rgb: 26, 115, 232;  \n    --google-blue-600: rgb(var(--google-blue-600-rgb));\n\n    --google-grey-200-rgb: 232, 234, 237;  \n    --google-grey-200: rgb(var(--google-grey-200-rgb));\n    --google-grey-400-rgb: 189, 193, 198;  \n    --google-grey-400: rgb(var(--google-grey-400-rgb));\n    --google-grey-600-rgb: 128, 134, 139;  \n    --google-grey-600: rgb(var(--google-grey-600-rgb));\n    --google-grey-800-rgb: 60, 64, 67;  \n    --google-grey-800: rgb(var(--google-grey-800-rgb));\n    --google-grey-900-rgb: 32, 33, 36;  \n    --google-grey-900: rgb(var(--google-grey-900-rgb));\n    \n    --google-grey-900-white-4-percent: #292a2d;\n\n    --google-red-600-rgb: 217, 48, 37;  \n    --google-red-600: rgb(var(--google-red-600-rgb));\n\n    \n    --google-blue-refresh-100-rgb: 210, 227, 252;  \n    --google-blue-refresh-100: rgb(var(--google-blue-refresh-100-rgb));\n    --google-blue-refresh-300-rgb: 138, 180, 248;  \n    --google-blue-refresh-300: rgb(var(--google-blue-refresh-300-rgb));\n    --google-blue-refresh-500-rgb: 66, 133, 244;  \n    --google-blue-refresh-500: rgb(var(--google-blue-refresh-500-rgb));\n    --google-blue-refresh-700-rgb: 25, 103, 210;  \n    --google-blue-refresh-700: rgb(var(--google-blue-refresh-700-rgb));\n\n    --google-green-refresh-300-rgb: 129, 201, 149;  \n    --google-green-refresh-300: rgb(var(--google-green-refresh-300-rgb));\n    --google-green-refresh-700-rgb: 24, 128, 56;  \n    --google-green-refresh-700: rgb(var(--google-green-refresh-700-rgb));\n\n    --google-grey-refresh-100-rgb: 241, 243, 244;  \n    --google-grey-refresh-100: rgb(var(--google-grey-refresh-100-rgb));\n    --google-grey-refresh-300-rgb: 218, 220, 224;  \n    --google-grey-refresh-300: rgb(var(--google-grey-refresh-300-rgb));\n    --google-grey-refresh-500-rgb: 154, 160, 166;  \n    --google-grey-refresh-500: rgb(var(--google-grey-refresh-500-rgb));\n    --google-grey-refresh-700-rgb: 95, 99, 104;  \n    --google-grey-refresh-700: rgb(var(--google-grey-refresh-700-rgb));\n\n    --google-red-refresh-300-rgb: 242, 139, 130;  \n    --google-red-refresh-300: rgb(var(--google-red-refresh-300-rgb));\n\n    --google-yellow-refresh-300-rgb: 253, 214, 51;  \n    --google-yellow-refresh-300: rgb(var(--google-yellow-refresh-300-rgb));\n\n    --cr-primary-text-color: var(--google-grey-900);\n    --cr-secondary-text-color: var(--google-grey-refresh-700);\n\n    --cr-card-background-color: white;\n    --cr-card-shadow-color-rgb: var(--google-grey-800-rgb);\n\n    --cr-card-shadow: rgba(var(--cr-card-shadow-color-rgb), .3) 0 1px 2px 0,\n                      rgba(var(--cr-card-shadow-color-rgb), .15) 0 1px 3px 1px;\n\n    \n    --cr-card-elevation_-_box-shadow:  var(--cr-card-shadow);\n\n    --cr-checked-color: var(--google-blue-600);\n    --cr-focused-item-color: var(--google-grey-300);\n    --cr-form-field-label-color: var(--google-grey-refresh-700);\n    --cr-hairline-rgb: 0, 0, 0;\n    --cr-link-color: var(--google-blue-700);\n    --cr-menu-background-color: white;\n    --cr-menu-background-focus-color: var(--google-grey-200);\n    --cr-menu-shadow: 0 2px 6px var(--paper-grey-500);\n    --cr-separator-color: rgba(0, 0, 0, .06);\n    --cr-title-text-color: rgb(90, 90, 90);\n    --cr-toggle-color: var(--google-blue-500);\n    --cr-toolbar-background-color: var(--google-blue-700);\n}\n\n@media (prefers-color-scheme: dark) {\nhtml {\n  --cr-primary-text-color: var(--google-grey-200);\n      --cr-secondary-text-color: var(--google-grey-refresh-500);\n\n      --cr-card-background-color: var(--google-grey-900-white-4-percent);\n      --cr-card-shadow-color-rgb: 0, 0, 0;\n\n      --cr-checked-color: var(--google-blue-refresh-300);\n      --cr-form-field-label-color: var(--dark-secondary-color);\n      --cr-hairline-rgb: 255, 255, 255;\n      --cr-link-color: var(--google-blue-refresh-300);\n      --cr-menu-background-color: var(--google-grey-900);\n      --cr-menu-background-focus-color: rgba(var(--google-grey-800-rgb), .6);\n      --cr-menu-background-sheen: rgba(255, 255, 255, .06);  \n      --cr-menu-shadow: rgba(0, 0, 0, .3) 0 1px 2px 0,\n                        rgba(0, 0, 0, .15) 0 3px 6px 2px;\n      --cr-separator-color: rgba(255, 255, 255, .1);\n      \n      --cr-title-text-color: var(--cr-primary-text-color);\n      --cr-toolbar-background-color: var(--google-grey-900-white-4-percent);\n}\n\n}\n\nhtml {\n  --cr-button-edge-spacing: 12px;\n    --cr-button-height: 32px;\n\n    \n    --cr-controlled-by-spacing: 24px;\n\n    \n    --cr-default-input-max-width: 264px;\n\n    \n    --cr-icon-ripple-size: 36px;\n    --cr-icon-ripple-padding: 8px;\n\n    --cr-icon-size: 20px;\n\n    --cr-icon-height-width_-_height:  var(--cr-icon-size); --cr-icon-height-width_-_width:  var(--cr-icon-size);\n\n    --cr-icon-button-margin-start: 16px;\n\n    --cr-icon-ripple-margin: calc(var(--cr-icon-ripple-padding) * -1);\n\n    --cr-paper-icon-button-margin_-_margin-inline-end:  var(--cr-icon-ripple-margin); --cr-paper-icon-button-margin_-_margin-inline-start:  var(--cr-icon-button-margin-start);\n\n    --cr-secondary-text_-_color:  var(--cr-secondary-text-color); --cr-secondary-text_-_font-weight:  400;\n\n    \n    \n    --cr-section-min-height: 48px;\n    --cr-section-two-line-min-height: 64px;\n    --cr-section-three-line-min-height: 84px;\n\n    --cr-section-padding: 20px;\n    --cr-section-vertical-padding: 12px;\n    --cr-section-indent-width: 40px;\n    --cr-section-indent-padding: calc(\n        var(--cr-section-padding) + var(--cr-section-indent-width));\n\n    --cr-section_-_align-items:  center; --cr-section_-_border-top:  var(--cr-separator-line); --cr-section_-_display:  flex; --cr-section_-_min-height:  var(--cr-section-min-height); --cr-section_-_padding:  0 var(--cr-section-padding);\n\n    --cr-section-vertical-margin: 21px;\n\n    --cr-centered-card-max-width: 680px;\n    --cr-centered-card-width-percentage: 0.96;\n    --cr-centered-card-container_-_box-sizing:  border-box; --cr-centered-card-container_-_display:  block; --cr-centered-card-container_-_height: apply-shim-inherit; --cr-centered-card-container_-_margin:  0 auto; --cr-centered-card-container_-_max-width:  var(--cr-centered-card-max-width); --cr-centered-card-container_-_min-width:  550px; --cr-centered-card-container_-_position:  relative; --cr-centered-card-container_-_width:  calc(100% * var(--cr-centered-card-width-percentage));\n\n    --cr-text-elide_-_overflow:  hidden; --cr-text-elide_-_text-overflow:  ellipsis; --cr-text-elide_-_white-space:  nowrap;\n\n    --cr-tooltip_-_font-size:  92.31%; --cr-tooltip_-_font-weight:  500; --cr-tooltip_-_max-width:  330px; --cr-tooltip_-_min-width:  200px; --cr-tooltip_-_padding:  10px 8px;\n\n    --cr-selectable-focus_-_background-color:  var(--cr-focused-item-color); --cr-selectable-focus_-_outline:  none;\n\n    --cr-hairline: 1px solid rgba(var(--cr-hairline-rgb), .14);\n\n    --cr-separator-height: 1px;\n    --cr-separator-line: var(--cr-separator-height) solid\n        var(--cr-separator-color);\n\n    --cr-toolbar-overlay-animation-duration: 150ms;\n    --cr-toolbar-height: 56px;\n\n    --cr-container-shadow-height: 6px;\n    --cr-container-shadow-margin: calc(-1 * var(--cr-container-shadow-height));\n\n    --cr-container-shadow-max-opacity: 1;\n\n    \n    --cr-card-border-radius: 4px;\n    --cr-disabled-opacity: .38;\n    --cr-form-field-bottom-spacing: 16px;\n    --cr-form-field-label-font-size: .625rem;\n    --cr-form-field-label-height: 1em;\n    --cr-form-field-label-line-height: 1em;\n}\n\n</style>\n</custom-style>\n`;document.head.appendChild($_documentContainer.content);// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const parseHtmlSubset=function(){const allowedAttributes={href(node,value){return node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://"))},target(node,value){return node.tagName==="A"&&value==="_blank"}};const allowedTags=["A","B","SPAN","STRONG"];function merge(var_args){const clone={};for(let i=0;i<arguments.length;++i){if(typeof arguments[i]==="object"){for(const key in arguments[i]){if(arguments[i].hasOwnProperty(key)){clone[key]=arguments[i][key]}}}}return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(tags.indexOf(node.tagName)===-1){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue;if(!attrs.hasOwnProperty(n)||!attrs[n](node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}return function(s,opt_extraTags,opt_extraAttrs){const extraTags=(opt_extraTags||[]).map(function(str){return str.toUpperCase()});const tags=allowedTags.concat(extraTags);const attrs=merge(allowedAttributes,opt_extraAttrs||{});const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);const df=r.createContextualFragment(s);walk(df,function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}});return df}}();// Copyright 2015 The Chromium Authors. All rights reserved.
const I18nBehavior={properties:{locale:{type:String,value:""}},i18nRaw_(id,var_args){return arguments.length===1?loadTimeData.getString(id):loadTimeData.getStringF.apply(loadTimeData,arguments)},i18n(id,var_args){const rawString=this.i18nRaw_.apply(this,arguments);return parseHtmlSubset("<b>"+rawString+"</b>").firstChild.textContent},i18nAdvanced(id,opts){opts=opts||{};const args=[id].concat(opts.substitutions||[]);const rawString=this.i18nRaw_.apply(this,args);return loadTimeData.sanitizeInnerHtml(rawString,opts)},i18nDynamic(locale,id,var_args){return this.i18n.apply(this,Array.prototype.slice.call(arguments,1))},i18nRecursive(locale,id,var_args){let args=Array.prototype.slice.call(arguments,2);if(args.length>0){const self=this;args=args.map(function(str){return self.i18nExists(str)?loadTimeData.getString(str):str})}return this.i18nDynamic.apply(this,[locale,id].concat(args))},i18nExists(id){return loadTimeData.valueExists(id)},i18nUpdateLocale(){this.locale=undefined;this.locale=loadTimeData.getString("language")}};// Copyright 2016 The Chromium Authors. All rights reserved.
var WebUIListenerBehavior={properties:{webUIListeners_:{type:Array,value(){return[]}}},addWebUIListener(eventName,callback){this.webUIListeners_.push(addWebUIListener(eventName,callback))},detached(){while(this.webUIListeners_.length>0){removeWebUIListener(this.webUIListeners_.pop())}}};// Copyright 2018 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="managed-footnote">:host {
  align-items: center;
        border-top: 1px solid var(--cr-separator-color);
        color: var(--cr-secondary-text-color);
        display: none;
        
        font-size: 0.8125rem;
        justify-content: center;
        padding: 0 24px;
}

:host([is-managed_]) {
  display: flex;
}

a[href] {
  color: var(--cr-link-color);
        text-decoration: none;
}

iron-icon {
  align-self: flex-start;
        flex-shrink: 0;
        height: 20px;
        padding-inline-end: var(--managed-footnote-icon-padding, 8px);
        width: 20px;
}

</style>

    <template is="dom-if" if="[[isManaged_]]">
      <iron-icon icon="cr:domain"></iron-icon>
      <div id="content" inner-h-t-m-l="[[getManagementString_(showDeviceInfo)]]">
      </div>
    </template>
<!--_html_template_end_-->`,is:"managed-footnote",behaviors:[I18nBehavior,WebUIListenerBehavior],properties:{isManaged_:{reflectToAttribute:true,type:Boolean,value(){return loadTimeData.getBoolean("isManaged")}},showDeviceInfo:{type:Boolean,value:false}},ready(){this.addWebUIListener("is-managed-changed",managed=>{loadTimeData.overrideValues({isManaged:managed});this.isManaged_=managed})},getManagementString_(){
// 
return this.i18nAdvanced("browserManagedByOrg")}});chrome.send("observeManagedUI");// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CLASS_NAME="focus-outline-visible";const docsToManager=new Map;class FocusOutlineManager{constructor(doc){this.focusByKeyboard_=true;this.classList_=doc.documentElement.classList;const onEvent=function(focusByKeyboard,e){if(this.focusByKeyboard_===focusByKeyboard){return}this.focusByKeyboard_=focusByKeyboard;this.updateVisibility()};doc.addEventListener("keydown",onEvent.bind(this,true),true);doc.addEventListener("mousedown",onEvent.bind(this,false),true);this.updateVisibility()}updateVisibility(){this.visible=this.focusByKeyboard_}set visible(visible){this.classList_.toggle(CLASS_NAME,visible)}get visible(){return this.classList_.contains(CLASS_NAME)}static forDocument(doc){let manager=docsToManager.get(doc);if(!manager){manager=new FocusOutlineManager(doc);docsToManager.set(doc,manager)}return manager}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"};var KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"};var MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"};var KEY_CHAR=/[a-z0-9*]/;var IDENT_CHAR=/U\+/;var ARROW_KEY=/^arrow/;var SPACE_KEY=/^space(bar)?/;var ESC_KEY=/^escape$/;function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(lKey===" "||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(lKey.length==1){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if(lKey=="multiply"){validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=String.fromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(Number(keyCode)){if(keyCode>=65&&keyCode<=90){validKey=String.fromCharCode(32+keyCode)}else if(keyCode>=112&&keyCode<=123){validKey="f"+(keyCode-112+1)}else if(keyCode>=48&&keyCode<=57){validKey=String(keyCode-48)}else if(keyCode>=96&&keyCode<=105){validKey=String(keyCode-96)}else{validKey=KEY_CODE[keyCode]}}return validKey}function normalizedKeyForEvent(keyEvent,noSpecialChars){if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(keyComboString.length===1){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce(function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":");var keyName=eventParts[0];var event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=true;parsedKeyCombo.hasModifiers=true}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo},{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map(function(keyComboString){return parseKeyComboString(keyComboString)})}const IronA11yKeysBehavior={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:false},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(event,eventString){var keyCombos=parseEventString(eventString);for(var i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return true}}return false},_collectKeyBindings:function(){var keyBindings=this.behaviors.map(function(behavior){return behavior.keyBindings});if(keyBindings.indexOf(this.keyBindings)===-1){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function(){this._keyBindings={};this._collectKeyBindings().forEach(function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}},this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}for(var eventName in this._keyBindings){this._keyBindings[eventName].sort(function(kb1,kb2){var b1=kb1[0].hasModifiers;var b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1})}},_addKeyBinding:function(eventString,handlerName){parseEventString(eventString).forEach(function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach(function(eventName){var keyBindings=this._keyBindings[eventName];var boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)},this)},_unlistenKeyEventListeners:function(){var keyHandlerTuple;var keyEventTarget;var eventName;var boundKeyHandler;while(this._boundKeyHandlers.length){keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0];var handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);if(event.defaultPrevented){return}}}},_triggerKeyHandler:function(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:true});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};var MAX_RADIUS_PX=300;var MIN_DURATION_MS=800;var distance=function(x1,y1,x2,y2){var xDelta=x1-x2;var yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)};Polymer({_template:html`<!--css-build:shadow--><style scope="paper-ripple">:host {
  border-radius: inherit;
        bottom: 0;
        display: block;
        left: 0;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        
        transform: translate3d(0, 0, 0);
}

.ripple {
  background-color: currentcolor;
        left: 0;
        opacity: var(--paper-ripple-opacity, 0.25);
        pointer-events: none;
        position: absolute;
        will-change: height, transform, width;
}

.ripple, :host(.circle) {
  border-radius: 50%;
}

</style>
`,is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{center:{type:Boolean,value:false},holdDown:{type:Boolean,value:false,observer:"_holdDownChanged"},recenters:{type:Boolean,value:false},noink:{type:Boolean,value:false}},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},created:function(){this.ripples=[]},attached:function(){this.keyEventTarget=this.parentNode.nodeType==11?dom(this).getOwnerRoot().host:this.parentNode;this.keyEventTarget=this.keyEventTarget;this.listen(this.keyEventTarget,"up","uiUpAction");this.listen(this.keyEventTarget,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},simulatedRipple:function(){this.downAction();this.async(function(){this.upAction()}.bind(this),1)},uiDownAction:function(e){if(!this.noink)this.downAction(e)},downAction:function(e){if(this.ripples.length&&this.holdDown)return;this.debounce("show ripple",function(){this.__showRipple(e)},1)},clear:function(){this.__hideRipple();this.holdDown=false},showAndHoldDown:function(){this.ripples.forEach(ripple=>{ripple.remove()});this.ripples=[];this.holdDown=true},__showRipple:function(e){var rect=this.getBoundingClientRect();var roundedCenterX=function(){return Math.round(rect.width/2)};var roundedCenterY=function(){return Math.round(rect.height/2)};var centered=!e||this.center;if(centered){var x=roundedCenterX();var y=roundedCenterY()}else{var sourceEvent=e.detail.sourceEvent;var x=Math.round(sourceEvent.clientX-rect.left);var y=Math.round(sourceEvent.clientY-rect.top)}var corners=[{x:0,y:0},{x:rect.width,y:0},{x:0,y:rect.height},{x:rect.width,y:rect.height}];var cornerDistances=corners.map(function(corner){return Math.round(distance(x,y,corner.x,corner.y))});var radius=Math.min(MAX_RADIUS_PX,Math.max.apply(Math,cornerDistances));var startTranslate=x-radius+"px, "+(y-radius)+"px";if(this.recenters&&!centered){var endTranslate=roundedCenterX()-radius+"px, "+(roundedCenterY()-radius)+"px"}else{var endTranslate=startTranslate}var ripple=document.createElement("div");ripple.classList.add("ripple");ripple.style.height=ripple.style.width=2*radius+"px";this.ripples.push(ripple);this.shadowRoot.appendChild(ripple);ripple.animate({transform:["translate("+startTranslate+") scale(0)","translate("+endTranslate+") scale(1)"]},{duration:Math.max(MIN_DURATION_MS,Math.log(radius)*radius)||0,easing:"cubic-bezier(.2, .9, .1, .9)",fill:"forwards"})},uiUpAction:function(e){if(!this.noink)this.upAction()},upAction:function(e){if(!this.holdDown)this.debounce("hide ripple",function(){this.__hideRipple()},1)},__hideRipple:function(){Promise.all(this.ripples.map(function(ripple){return new Promise(function(resolve){var removeRipple=function(){ripple.remove();resolve()};var opacity=getComputedStyle(ripple).opacity;if(!opacity.length){removeRipple()}else{var animation=ripple.animate({opacity:[opacity,0]},{duration:150,fill:"forwards"});animation.addEventListener("finish",removeRipple);animation.addEventListener("cancel",removeRipple)}})})).then(function(){this.fire("transitionend")}.bind(this));this.ripples=[]},_onEnterKeydown:function(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(newHoldDown,oldHoldDown){if(oldHoldDown===undefined)return;if(newHoldDown)this.downAction();else this.upAction()}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronButtonStateImpl={properties:{pressed:{type:Boolean,readOnly:true,value:false,reflectToAttribute:true,observer:"_pressedChanged"},toggles:{type:Boolean,value:false,reflectToAttribute:true},active:{type:Boolean,value:false,notify:true,reflectToAttribute:true},pointerDown:{type:Boolean,readOnly:true,value:false},receivedFocusFromKeyboard:{type:Boolean,readOnly:true},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){if(this.toggles){this._userActivate(!this.active)}else{this.active=false}},_focusChanged:function(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(false)}},_detectKeyboardFocus:function(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},_userActivate:function(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function(event){this._setPointerDown(true);this._setPressed(true);this._setReceivedFocusFromKeyboard(false)},_upHandler:function(){this._setPointerDown(false);this._setPressed(false)},_spaceKeyDownHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(true)},_spaceKeyUpHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;if(this.pressed){this._asyncClick()}this._setPressed(false)},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function(){if(this.disabled){this._setPressed(false)}else{this._changedButtonState()}},_changedButtonState:function(){if(this._buttonStateChanged){this._buttonStateChanged()}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperRippleBehavior={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){if(this.focused){this.ensureRipple()}},_downHandler:function(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},ensureRipple:function(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},getRipple:function(){this.ensureRipple();return this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){var element=document.createElement("paper-ripple");return element},_noinkChanged:function(noink){if(this.hasRipple()){this._ripple.noink=noink}}};const template$3=document.createElement("template");template$3.innerHTML=`<dom-module id="cr-hidden-style" assetpath="chrome://resources/">\n  <template>\n    <style scope="cr-hidden-style">[hidden], :host([hidden]) {\n  display: none !important;\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template$3.content.cloneNode(true));// Copyright 2019 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style" scope="cr-button">:host {
  --active-shadow-rgb: var(--google-grey-800-rgb);
        --active-shadow-action-rgb: var(--google-blue-refresh-500-rgb);
        --bg-action: var(--google-blue-600);
        --border-color: var(--google-grey-refresh-300);
        --disabled-bg-action: var(--google-grey-refresh-100);
        --disabled-bg: white;
        --disabled-border-color: var(--google-grey-refresh-100);
        --focus-shadow-color: rgba(var(--google-blue-600-rgb), .4);
        --hover-bg-action: rgba(var(--google-blue-600-rgb), .9);
        --hover-bg-color: rgba(var(--google-blue-refresh-500-rgb), .04);
        --hover-border-color: var(--google-blue-refresh-100);
        --hover-shadow-action-rgb: var(--google-blue-refresh-500-rgb);
        --ink-color-action: white;
        
        --ink-color: var(--google-blue-600);
        --ripple-opacity-action: .32;
        --ripple-opacity: .1;
        --text-color-action: white;
        --text-color: var(--google-blue-600);
}

@media (prefers-color-scheme: dark) {
:host {
  --active-bg: black linear-gradient(rgba(255, 255, 255, .06),
                                             rgba(255, 255, 255, .06));
          --active-shadow-rgb: 0, 0, 0;
          --active-shadow-action-rgb: var(--google-blue-refresh-500-rgb);
          --bg-action: var(--google-blue-refresh-300);
          --border-color: var(--google-grey-refresh-700);
          --disabled-bg-action: var(--google-grey-800);
          
          --disabled-bg: transparent;
          --disabled-border-color: var(--google-grey-800);
          --focus-shadow-color: rgba(var(--google-blue-refresh-300-rgb), .5);
          --hover-bg-action: var(--bg-action)
              linear-gradient(rgba(0, 0, 0, .08), rgba(0, 0, 0, .08));
          --hover-bg-color: rgba(var(--google-blue-refresh-300-rgb), .08);
          --ink-color-action: black;
          --ink-color: var(--google-blue-refresh-300);
          --ripple-opacity-action: .16;
          --ripple-opacity: .16;
          --text-color-action: var(--google-grey-900);
          --text-color: var(--google-blue-refresh-300);
}

}

:host {
  --paper-ripple-opacity: var(--ripple-opacity);
        -webkit-tap-highlight-color: transparent;
        align-items: center;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        box-sizing: border-box;
        color: var(--text-color);
        cursor: pointer;
        display: inline-flex;
        flex-shrink: 0;
        font-weight: 500;
        height: var(--cr-button-height);
        justify-content: center;
        min-width: 5.14em;
        outline-width: 0;
        padding: 8px 16px;
        position: relative;
        user-select: none;
}

:host-context(.focus-outline-visible):host(:focus) {
  box-shadow: 0 0 0 2px var(--focus-shadow-color);
}

:host(:active) {
  background: var(--active-bg);
        box-shadow:
            0 1px 2px 0 rgba(var(--active-shadow-rgb), .3),
            0 3px 6px 2px rgba(var(--active-shadow-rgb), .15);
}

:host(:hover) {
  background-color: var(--hover-bg-color);
}

@media (prefers-color-scheme: light) {
:host(:hover) {
  border-color: var(--hover-border-color);
}

}

:host(.action-button) {
  --ink-color: var(--ink-color-action);
        --paper-ripple-opacity: var(--ripple-opacity-action);
        background-color: var(--bg-action);
        border: none;
        color: var(--text-color-action);
}

:host(.action-button:active) {
  box-shadow:
            0 1px 2px 0 rgba(var(--active-shadow-action-rgb), .3),
            0 3px 6px 2px rgba(var(--active-shadow-action-rgb), .15);
}

:host(.action-button:hover) {
  background: var(--hover-bg-action);
}

@media (prefers-color-scheme: light) {
:host(.action-button:not(:active):hover) {
  box-shadow:
              0 1px 2px 0 rgba(var(--hover-shadow-action-rgb), .3),
              0 1px 3px 1px rgba(var(--hover-shadow-action-rgb), .15);
}

}

:host([disabled]) {
  background-color: var(--disabled-bg);
        border-color: var(--disabled-border-color);
        color: var(--google-grey-600);
        cursor: auto;
        pointer-events: none;
}

:host(.action-button[disabled]) {
  background-color: var(--disabled-bg-action);
        border-color: transparent;
}

:host(.cancel-button) {
  margin-inline-end: 8px;
}

:host(.action-button), :host(.cancel-button) {
  line-height: 154%;
}

paper-ripple {
  color: var(--ink-color);
        height: var(--paper-ripple-height);
        width: var(--paper-ripple-width);
        
        left: var(--paper-ripple-left, 0);
        top: var(--paper-ripple-top, 0);
}

</style>
    <slot></slot>
<!--_html_template_end_-->`,is:"cr-button",behaviors:[PaperRippleBehavior],properties:{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},circleRipple:{type:Boolean,value:false}},hostAttributes:{"aria-disabled":"false",role:"button",tabindex:0},listeners:{click:"onClick_",keydown:"onKeyDown_",keyup:"onKeyUp_",pointerdown:"onPointerDown_",tap:"onTap_"},timeoutIds_:null,ready(){FocusOutlineManager.forDocument(document);this.timeoutIds_=new Set},detached(){this.timeoutIds_.forEach(clearTimeout);this.timeoutIds_.clear()},setTimeout_(fn,delay){if(!this.isConnected){return}const id=setTimeout(()=>{this.timeoutIds_.delete(id);fn()},delay);this.timeoutIds_.add(id)},disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",Boolean(this.disabled));this.setAttribute("tabindex",this.disabled?-1:0)},onClick_(e){if(this.disabled){e.stopImmediatePropagation()}},onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}this.getRipple().uiDownAction();if(e.key==="Enter"){this.click();this.setTimeout_(()=>this.getRipple().uiUpAction(),100)}},onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.key===" "){this.click();this.getRipple().uiUpAction()}},onPointerDown_(){this.ensureRipple()},onTap_(){},_createRipple(){const ripple=PaperRippleBehavior._createRipple();if(this.circleRipple){ripple.setAttribute("center","");ripple.classList.add("circle")}return ripple}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var IronA11yAnnouncer=Polymer({_template:html`<!--css-build:shadow--><style scope="iron-a11y-announcer">:host {
  display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
}

</style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=this}document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(text){this._text="";this.async(function(){this._text=text},100)},_onIronAnnounce:function(event){if(event.detail&&event.detail.text){this.announce(event.detail.text)}}});IronA11yAnnouncer.instance=null;IronA11yAnnouncer.requestAvailability=function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=document.createElement("iron-a11y-announcer")}document.body.appendChild(IronA11yAnnouncer.instance)};// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(condition,opt_message){if(!condition){let message="Assertion failed";if(opt_message){message=message+": "+opt_message}const error=new Error(message);const global=function(){const thisOrSelf=this||self;thisOrSelf.traceAssertionsForTesting;return thisOrSelf}();if(global.traceAssertionsForTesting){console.warn(error.stack)}throw error}return condition}function assertNotReached(opt_message){assert(false,opt_message||"Unreachable code hit")}function assertInstanceof(value,type,opt_message){if(!(value instanceof type)){assertNotReached(opt_message||"Value "+value+" is not a[n] "+(type.name||typeof type))}return value}// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var EventTracker=class{constructor(){this.listeners_=[]}add(target,eventType,listener,opt_capture){const capture=!!opt_capture;const h={target:target,eventType:eventType,listener:listener,capture:capture};this.listeners_.push(h);target.addEventListener(eventType,listener,capture)}remove(target,eventType){this.listeners_=this.listeners_.filter(listener=>{if(listener.target===target&&(!eventType||listener.eventType===eventType)){EventTracker.removeEventListener(listener);return false}return true})}removeAll(){this.listeners_.forEach(listener=>EventTracker.removeEventListener(listener));this.listeners_=[]}static removeEventListener(entry){entry.target.removeEventListener(entry.eventType,entry.listener,entry.capture)}};// Copyright 2017 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-toast">:host {
  --cr-toast-background: #323232;
        --cr-toast-button-color: var(--google-blue-300);
        --cr-toast-text-color: #fff;
}

@media (prefers-color-scheme: dark) {
:host {
  --cr-toast-background: var(--google-grey-900)
              linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));
          --cr-toast-button-color: var(--google-blue-refresh-300);
          --cr-toast-text-color: var(--google-grey-200);
}

}

:host {
  align-items: center;
        background: var(--cr-toast-background);
        border-radius: 4px;
        bottom: 0;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.28);
        box-sizing: border-box;
        display: flex;
        margin: 24px;
        max-width: 568px;
        min-height: 52px;
        min-width: 288px;
        opacity: 0;
        padding: 0 24px;
        position: fixed;
        transform: translateY(100px);
        transition: opacity 300ms, transform 300ms, visibility 300ms;
        visibility: hidden;
        z-index: 1;
}

:host([open]) {
  opacity: 1;
        transform: translateY(0);
        visibility: visible;
}

:host ::slotted(*) {
  color: var(--cr-toast-text-color);
}

:host ::slotted(cr-button) {
  background-color: transparent !important;
        border: none !important;
        color: var(--cr-toast-button-color) !important;
        margin-inline-start: 32px !important;
        min-width: 52px !important;
        padding: 8px !important;
}

:host ::slotted(cr-button:hover) {
  background-color: transparent !important;
}

</style>
    <slot></slot>
<!--_html_template_end_-->`,is:"cr-toast",properties:{duration:{type:Number,value:0},open:{type:Boolean,value:false,reflectToAttribute:true}},hostAttributes:{role:"alert"},observers:["resetAutoHide_(duration, open)"],hideTimeoutId_:null,resetAutoHide_(){if(this.hideTimeoutId_!==null){window.clearTimeout(this.hideTimeoutId_);this.hideTimeoutId_=null}if(this.open&&this.duration!==0){this.hideTimeoutId_=window.setTimeout(()=>{this.open=false},this.duration)}},show(duration){let shouldResetAutoHide=true;if(typeof duration!=="undefined"&&duration>=0&&this.duration!==duration){this.duration=duration;shouldResetAutoHide=false}if(!this.open){this.open=true;shouldResetAutoHide=false}if(shouldResetAutoHide){this.resetAutoHide_()}},hide(){this.open=false}});// Copyright 2019 The Chromium Authors. All rights reserved.
let toastManagerInstance=null;function getToastManager(){return assert(toastManagerInstance)}function setInstance(instance){assert(!instance||!toastManagerInstance);toastManagerInstance=instance}let CrToastManagerElement=Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-toast-manager">#content {
  display: flex;
        flex: 1;
}

.collapsible {
  overflow: hidden;
        text-overflow: ellipsis;
}

span {
  white-space: pre;
}

.elided-text {
  overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
}

</style>
    <cr-toast id="toast" duration="[[duration]]">
      <div id="content" class="elided-text"></div>
      <slot></slot>
    </cr-toast>
<!--_html_template_end_-->`,is:"cr-toast-manager",properties:{duration:{type:Number,value:0}},get isToastOpen(){return this.$.toast.open},attached(){setInstance(this)},detached(){setInstance(null)},show(label){this.$.content.textContent=label;this.showInternal_()},showForStringPieces(pieces){const content=this.$.content;content.textContent="";pieces.forEach(function(p){if(p.value.length===0){return}const span=document.createElement("span");span.textContent=p.value;if(p.collapsible){span.classList.add("collapsible")}content.appendChild(span)});this.showInternal_()},showInternal_(){IronA11yAnnouncer.requestAvailability();this.fire("iron-announce",{text:this.$.content.textContent});this.$.toast.show()},hide(){this.$.toast.hide()}});// Copyright 2019 The Chromium Authors. All rights reserved.
Polymer({is:"cr-splitter",_template:null,properties:{resizeNextElement:{type:Boolean,value:false}},listeners:{mousedown:"onMouseDown_",touchstart:"onTouchStart_"},handlers_:null,startX_:0,attached(){this.handlers_=new Map},detached(){this.removeAllHandlers_();this.handlers_=null},startDrag(clientX,isTouchEvent){if(this.handlers_){this.endDrag_()}if(isTouchEvent){const endDragBound=this.endDrag_.bind(this);this.handlers_.set("touchmove",this.handleTouchMove_.bind(this));this.handlers_.set("touchend",endDragBound);this.handlers_.set("touchcancel",endDragBound);this.handlers_.set("touchstart",endDragBound)}else{this.handlers_.set("mousemove",this.handleMouseMove_.bind(this));this.handlers_.set("mouseup",this.handleMouseUp_.bind(this))}const doc=this.ownerDocument;for(const[eventType,handler]of this.handlers_){doc.addEventListener(eventType,handler,true)}this.startX_=clientX;this.handleSplitterDragStart_()},removeAllHandlers_(){const doc=this.ownerDocument;const handlers=this.handlers_;for(const[eventType,handler]of handlers){doc.removeEventListener(eventType,handler,true)}this.handlers_.clear()},endDrag_(){this.removeAllHandlers_();this.handleSplitterDragEnd_()},getResizeTarget_(){return this.resizeNextElement?this.nextElementSibling:this.previousElementSibling},calcDeltaX_(deltaX){return this.resizeNextElement?-deltaX:deltaX},onMouseDown_(e){e=e;if(e.button){return}this.startDrag(e.clientX,false);e.preventDefault()},onTouchStart_(e){e=e;if(e.touches.length===1){this.startDrag(e.touches[0].clientX,true);e.preventDefault()}},handleMouseMove_(e){this.handleMove_(e.clientX)},handleTouchMove_(e){if(e.touches.length===1){this.handleMove_(e.touches[0].clientX)}},handleMove_(clientX){const deltaX=this.matches(":host-context([dir=rtl]) cr-splitter")?this.startX_-clientX:clientX-this.startX_;this.handleSplitterDragMove_(deltaX)},handleMouseUp_(e){this.endDrag_()},handleSplitterDragStart_(){const targetElement=this.getResizeTarget_();const doc=targetElement.ownerDocument;this.startWidth_=parseFloat(doc.defaultView.getComputedStyle(targetElement).width)+targetElement.offsetWidth-targetElement.clientWidth;this.classList.add("splitter-active")},handleSplitterDragMove_(deltaX){const targetElement=this.getResizeTarget_();const newWidth=this.startWidth_+this.calcDeltaX_(deltaX);targetElement.style.width=newWidth+"px";this.dispatchEvent(new CustomEvent("dragmove"))},handleSplitterDragEnd_(){const targetElement=this.getResizeTarget_();const doc=targetElement.ownerDocument;const computedWidth=parseFloat(doc.defaultView.getComputedStyle(targetElement).width);if(this.startWidth_!==computedWidth){this.dispatchEvent(new CustomEvent("resize"))}this.classList.remove("splitter-active")}});// Copyright 2018 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-icon-button">:host {
  --cr-icon-button-fill-color: var(--google-grey-refresh-700);
        --cr-icon-button-fill-color-focus: white;
        --cr-icon-button-icon-start-offset: 0;
        --cr-icon-button-icon-size: 20px;
        --cr-icon-button-size: 36px;
        --cr-icon-button-height: var(--cr-icon-button-size);
        --cr-icon-button-transition: 150ms ease-in-out;
        --cr-icon-button-width: var(--cr-icon-button-size);
        
        -webkit-tap-highlight-color: transparent;
        border-radius: 4px;
        color: var(--cr-icon-button-stroke-color,
            var(--cr-icon-button-fill-color));
        cursor: pointer;
        display: inline-flex;
        flex-shrink: 0;
        height: var(--cr-icon-button-height);
        margin-inline-end: var(--cr-icon-button-margin-end,
            var(--cr-icon-ripple-margin));
        margin-inline-start: var(--cr-icon-button-margin-start);
        outline: none;
        user-select: none;
        vertical-align: middle;
        width: var(--cr-icon-button-width);
}

:host([disabled]) {
  cursor: initial;
        opacity: var(--cr-disabled-opacity);
        pointer-events: none;
}

:host(.no-overlap) {
  --cr-icon-button-margin-end: 0;
        --cr-icon-button-margin-start: 0;
}

:host-context([dir=rtl]) {
  transform: scaleX(-1);
}

:host(:not([iron-icon])) #maskedImage {
  -webkit-mask-image: var(--cr-icon-image);
        -webkit-mask-position: center;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-size: var(--cr-icon-button-icon-size);
        background-color: var(--cr-icon-button-fill-color);
        height: 100%;
        transition: background-color var(--cr-icon-button-transition);
        width: 100%;
        z-index: 1;
}

:host-context([a11y-enhanced]):host([ripple-showing_]) #maskedImage {
  background-color: var(--cr-icon-button-fill-color-focus);
}

#icon {
  align-items: center;
        border-radius: 4px;
        display: flex;
        height: 100%;
        justify-content: center;
        padding-inline-start: var(--cr-icon-button-icon-start-offset);
        
        position: relative;
        width: 100%;
}

iron-icon {
  --iron-icon-fill-color: var(--cr-icon-button-fill-color);
        --iron-icon-stroke-color: var(--cr-icon-button-stroke-color, none);
        --iron-icon-height: var(--cr-icon-button-icon-size);
        --iron-icon-width: var(--cr-icon-button-icon-size);
        transition: fill var(--cr-icon-button-transition),
            stroke var(--cr-icon-button-transition);
        z-index: 1;
}

:host-context([a11y-enhanced]):host([ripple-showing_]) iron-icon {
  --iron-icon-fill-color: var(--cr-icon-button-fill-color-focus);
        --iron-icon-stroke-color: var(--cr-icon-button-stroke-color-focus,
            none);
}

paper-ripple {
  --paper-ripple-opacity: var(--cr-icon-button-ripple-opacity, .21);
}

@media (prefers-color-scheme: dark) {
:host {
  --cr-icon-button-fill-color: var(--google-grey-refresh-500);
          --cr-icon-button-fill-color-focus: var(--google-grey-900);
}

paper-ripple {
  --paper-ripple-opacity: var(--cr-icon-button-ripple-opacity, .4);
}

}

:host-context([a11y-enhanced]) paper-ripple {
  --paper-ripple-opacity: 1;
        opacity: 0;
        transition: opacity var(--cr-icon-button-transition);
}

:host-context([a11y-enhanced]):host([ripple-showing_]) paper-ripple {
  opacity: 1;
}

</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`,is:"cr-icon-button",behaviors:[PaperRippleBehavior],properties:{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},ironIcon:{type:String,observer:"onIronIconChanged_",reflectToAttribute:true},rippleShowing_:{type:Boolean,value:false,reflectToAttribute:true}},hostAttributes:{"aria-disabled":"false",role:"button",tabindex:0},listeners:{blur:"hideRipple_",click:"onClick_",down:"showRipple_",focus:"showRipple_",keydown:"onKeyDown_",keyup:"onKeyUp_",pointerdown:"ensureRipple",up:"hideRipple_"},hideRipple_(){if(this.hasRipple()){this.getRipple().clear();this.rippleShowing_=false}},showRipple_(){if(!this.noink&&!this.disabled){this.getRipple().showAndHoldDown();this.rippleShowing_=true}},disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.setAttribute("tabindex",this.disabled?"-1":"0")},onClick_(e){if(this.disabled){e.stopImmediatePropagation()}},onIronIconChanged_(){this.shadowRoot.querySelectorAll("iron-icon").forEach(el=>el.remove());if(!this.ironIcon){return}const icons=(this.ironIcon||"").split(",");icons.forEach(icon=>{const element=document.createElement("iron-icon");element.icon=icon;this.$.icon.appendChild(element)});if(!this.hasRipple()){return}if(icons.length>1){this.getRipple().classList.remove("circle")}else{this.getRipple().classList.add("circle")}},onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}},onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(e.key===" "){this.click()}},_createRipple(){this._rippleContainer=this.$.icon;const ripple=PaperRippleBehavior._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");if(!(this.ironIcon||"").includes(",")){ripple.classList.add("circle")}return ripple}});// Copyright 2019 The Chromium Authors. All rights reserved.
const $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML=`\x3c!--_html_template_start_--\x3e<custom-style>\n<style css-build="shadow">html {\n  --card-max-width: 960px;\n    --card-padding-side: 32px;\n    --folder-icon-color: #757575;\n    --folder-inactive-color: #5a5a5a;\n    --highlight-color: var(--google-blue-50);\n    --interactive-color: var(--google-blue-500);\n    --iron-icon-height: 20px;\n    --iron-icon-width: 20px;\n    --min-sidebar-width: 256px;\n    --splitter-width: 15px;\n}\n\n@media (prefers-color-scheme: dark) {\nhtml {\n  --folder-icon-color: var(--google-grey-refresh-500);\n      --folder-inactive-color: var(--google-grey-refresh-500);\n      --highlight-color: var(--google-blue-refresh-300);\n      --interactive-color: var(--google-blue-refresh-300);\n}\n\n}\n\n</style>\n</custom-style>\n\x3c!--_html_template_end_--\x3e`;document.head.appendChild($_documentContainer$1.content);const template$4=document.createElement("template");template$4.innerHTML=`<dom-module id="cr-icons" assetpath="chrome://resources/">\n  <template>\n    <style scope="cr-icons">.icon-arrow-back {\n  --cr-icon-image: url(../images/icon_arrow_back.svg);\n}\n\n.icon-arrow-dropdown {\n  --cr-icon-image: url(../images/icon_arrow_dropdown.svg);\n}\n\n.icon-cancel {\n  --cr-icon-image: url(../images/icon_cancel.svg);\n}\n\n.icon-clear {\n  --cr-icon-image: url(../images/icon_clear.svg);\n}\n\n.icon-copy-content {\n  --cr-icon-image: url(../images/icon_copy_content.svg);\n}\n\n.icon-delete-gray {\n  --cr-icon-image: url(../images/icon_delete_gray.svg);\n}\n\n.icon-picture-delete {\n  --cr-icon-image: url(../images/icon_picture_delete.svg);\n}\n\n.icon-expand-less {\n  --cr-icon-image: url(../images/icon_expand_less.svg);\n}\n\n.icon-expand-more {\n  --cr-icon-image: url(../images/icon_expand_more.svg);\n}\n\n.icon-external {\n  --cr-icon-image: url(../images/open_in_new.svg);\n}\n\n.icon-more-vert {\n  --cr-icon-image: url(../images/icon_more_vert.svg);\n}\n\n.icon-refresh {\n  --cr-icon-image: url(../images/icon_refresh.svg);\n}\n\n.icon-search {\n  --cr-icon-image: url(../images/icon_search.svg);\n}\n\n.icon-settings {\n  --cr-icon-image: url(../images/icon_settings.svg);\n}\n\n.icon-visibility {\n  --cr-icon-image: url(../images/icon_visibility.svg);\n}\n\n.icon-visibility-off {\n  --cr-icon-image: url(../images/icon_visibility_off.svg);\n}\n\n.subpage-arrow {\n  --cr-icon-image: url(../images/arrow_right.svg);\n}\n\n.cr-icon {\n  margin-inline-end: var(--cr-paper-icon-button-margin_-_margin-inline-end); margin-inline-start: var(--cr-paper-icon-button-margin_-_margin-inline-start);\n        -webkit-mask-image: var(--cr-icon-image);\n        -webkit-mask-position: center;\n        -webkit-mask-repeat: no-repeat;\n        -webkit-mask-size: var(--cr-icon-size);\n        background-color: var(--google-grey-refresh-700);\n        flex-shrink: 0;\n        height: var(--cr-icon-ripple-size);\n        user-select: none;\n        width: var(--cr-icon-ripple-size);\n}\n\n:host-context([dir=rtl]) .cr-icon {\n  transform: scaleX(-1);\n}\n\n.cr-icon.no-overlap {\n  margin-inline-end: 0;\n        margin-inline-start: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n.cr-icon {\n  background-color: var(--google-grey-refresh-500);\n}\n\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template$4.content.cloneNode(true));const template$5=document.createElement("template");template$5.innerHTML=`<dom-module id="cr-shared-style" assetpath="chrome://resources/">\n  <template>\n    <style include="cr-hidden-style cr-icons" scope="cr-shared-style">html, :host {\n  --scrollable-border-color: var(--google-grey-refresh-300);\n}\n\n@media (prefers-color-scheme: dark) {\nhtml, :host {\n  --scrollable-border-color: var(--google-grey-refresh-700);\n}\n\n}\n\n[actionable] {\n  cursor: pointer;\n}\n\n.hr {\n  border-top: var(--cr-separator-line);\n}\n\niron-list.cr-separators > *:not([first]) {\n  border-top: var(--cr-separator-line);\n}\n\n[scrollable] {\n  border-color: transparent;\n        border-style: solid;\n        border-width: 1px 0;\n        overflow-y: auto;\n}\n\n[scrollable].is-scrolled {\n  border-top-color: var(--scrollable-border-color);\n}\n\n[scrollable].can-scroll:not(.scrolled-to-bottom) {\n  border-bottom-color: var(--scrollable-border-color);\n}\n\n[scrollable] iron-list > :not(.no-outline):focus {\n  ;\n        background-color: var(--cr-selectable-focus_-_background-color); outline: var(--cr-selectable-focus_-_outline);\n}\n\n.scroll-container {\n  display: flex;\n        flex-direction: column;\n        min-height: 1px;\n}\n\n[selectable]:focus, [selectable] > :focus {\n  background-color: var(--cr-selectable-focus_-_background-color); outline: var(--cr-selectable-focus_-_outline);\n}\n\n[selectable] > * {\n  cursor: pointer;\n}\n\n.cr-container-shadow {\n  box-shadow: inset 0 5px 6px -3px rgba(0, 0, 0, .4);\n        height: var(--cr-container-shadow-height);\n        left: 0;\n        margin: 0 0 var(--cr-container-shadow-margin);\n        opacity: 0;\n        pointer-events: none;\n        position: relative;\n        right: 0;\n        top: 0;\n        transition: opacity 500ms;\n        z-index: 1;\n}\n\n#cr-container-shadow-bottom {\n  margin-bottom: 0;\n        margin-top: var(--cr-container-shadow-margin);\n        transform: scaleY(-1);\n}\n\n#cr-container-shadow-top.has-shadow, #cr-container-shadow-bottom.has-shadow {\n  opacity: var(--cr-container-shadow-max-opacity);\n}\n\n.cr-title-text {\n  color: var(--cr-title-text-color);\n        font-size: 107.6923%; \n        font-weight: 500;\n}\n\n.cr-form-field-label {\n  color: var(--cr-form-field-label-color);\n        display: block;\n        font-size: var(--cr-form-field-label-font-size);\n        font-weight: 500;\n        letter-spacing: .4px;\n        line-height: var(--cr-form-field-label-line-height);\n        margin-bottom: 8px;\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template$5.content.cloneNode(true));// Copyright 2019 The Chromium Authors. All rights reserved.
const template$6=document.createElement("template");template$6.innerHTML=`<dom-module id="shared-style">\x3c!--_html_template_start_--\x3e\n<template>\n  <style include="cr-shared-style" scope="shared-style">hr {\n  background: rgba(0, 0, 0, 0.11);\n      border-width: 0;\n      height: 1px;\n      margin: 8px 0;\n}\n\n@media (prefers-color-scheme: dark) {\nhr {\n  background: var(--cr-separator-color);\n}\n\n}\n\n.drag-above::before, .drag-below::after {\n  background-clip: padding-box;\n      background-color: var(--interactive-color);\n      border: 3px solid var(--interactive-color);\n      border-bottom-color: transparent;\n      border-radius: 0;\n      border-top-color: transparent;\n      box-sizing: border-box;\n      content: '';\n      display: block;\n      height: 8px;\n      left: 0;\n      position: absolute;\n      right: 0;\n      z-index: 1;\n}\n\n.drag-above::before {\n  top: 0;\n      transform: translateY(-50%);\n}\n\n.drag-below::after {\n  bottom: 0;\n      transform: translateY(50%);\n}\n\n.drag-on {\n  background-color: var(--highlight-color);\n}\n\n:host-context([hide-focus-ring]) [tabindex]:focus {\n  outline: none;\n}\n\n.folder-icon {\n  content: url(chrome://theme/IDR_FOLDER_CLOSED);\n      height: 20px;\n      min-width: 20px;\n      width: 20px;\n}\n\n.folder-icon[open] {\n  content: url(chrome://theme/IDR_FOLDER_OPEN);\n}\n\n:host-context([dir=rtl]) .folder-icon {\n  transform: scaleX(-1);\n}\n\n.website-icon {\n  background-repeat: no-repeat;\n      height: 16px;\n      margin: 2px;\n      width: 16px;\n}\n\n</style>\n</template>\n\x3c!--_html_template_end_--\x3e</dom-module>\n`;document.body.appendChild(template$6.content.cloneNode(true));// Copyright 2018 The Chromium Authors. All rights reserved.
class Store{constructor(emptyState,reducer){this.data=emptyState;this.reducer_=reducer;this.initialized_=false;this.queuedActions_=[];this.observers_=[];this.batchMode_=false}init(initialState){this.data=initialState;this.queuedActions_.forEach(action=>{this.dispatchInternal_(action)});this.initialized_=true;this.notifyObservers_(this.data)}isInitialized(){return this.initialized_}addObserver(observer){this.observers_.push(observer)}removeObserver(observer){const index=this.observers_.indexOf(observer);this.observers_.splice(index,1)}beginBatchUpdate(){this.batchMode_=true}endBatchUpdate(){this.batchMode_=false;this.notifyObservers_(this.data)}dispatchAsync(action){if(!this.initialized_){this.queuedActions_.push(action);return}this.dispatchInternal_(action)}dispatch(action){this.dispatchAsync(function(dispatch){dispatch(action)})}dispatchInternal_(action){action(this.reduce_.bind(this))}reduce_(action){if(!action){return}this.data=this.reducer_(this.data,action);if(this.isInitialized()&&!this.batchMode_){this.notifyObservers_(this.data)}}notifyObservers_(state){this.observers_.forEach(function(o){o.onStateChanged(state)})}}// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DropPosition={NONE:0,ABOVE:1,ON:2,BELOW:4};const Command={EDIT:0,COPY_URL:1,SHOW_IN_FOLDER:2,DELETE:3,OPEN_NEW_TAB:4,OPEN_NEW_WINDOW:5,OPEN_INCOGNITO:6,UNDO:7,REDO:8,OPEN:9,SELECT_ALL:10,DESELECT_ALL:11,COPY:12,CUT:13,PASTE:14,SORT:15,ADD_BOOKMARK:16,ADD_FOLDER:17,IMPORT:18,EXPORT:19,HELP_CENTER:20,OPEN_BOOKMARK:21,OPEN_FOLDER:22,MAX_VALUE:23};const MenuSource={NONE:0,ITEM:1,TREE:2,TOOLBAR:3,LIST:4,NUM_VALUES:5};const IncognitoAvailability={ENABLED:0,DISABLED:1,FORCED:2};const LOCAL_STORAGE_FOLDER_STATE_KEY="folderOpenState";const LOCAL_STORAGE_TREE_WIDTH_KEY="treeWidth";const ROOT_NODE_ID="0";const BOOKMARKS_BAR_ID="1";const OPEN_CONFIRMATION_LIMIT=15;const FOLDER_OPEN_BY_DEFAULT_DEPTH=1;// Copyright 2017 The Chromium Authors. All rights reserved.
function getDisplayedList(state){if(isShowingSearch(state)){return assert(state.search.results)}return assert(state.nodes[state.selectedFolder].children)}function normalizeNode(treeNode){const node=Object.assign({},treeNode);delete node.index;if(!("url"in node)){node.children=(node.children||[]).map(function(child){return child.id})}return node}function normalizeNodes(rootNode){const nodeMap={};const stack=[];stack.push(rootNode);while(stack.length>0){const node=stack.pop();nodeMap[node.id]=normalizeNode(node);if(!node.children){continue}node.children.forEach(function(child){stack.push(child)})}return nodeMap}function createEmptyState(){return{nodes:{},selectedFolder:BOOKMARKS_BAR_ID,folderOpenState:new Map,prefs:{canEdit:true,incognitoAvailability:IncognitoAvailability.ENABLED},search:{term:"",inProgress:false,results:null},selection:{items:new Set,anchor:null}}}function isShowingSearch(state){return state.search.results!=null}function canEditNode(state,itemId){return itemId!==ROOT_NODE_ID&&state.nodes[itemId].parentId!==ROOT_NODE_ID&&!state.nodes[itemId].unmodifiable&&state.prefs.canEdit}function canReorderChildren(state,itemId){return itemId!==ROOT_NODE_ID&&!state.nodes[itemId].unmodifiable&&state.prefs.canEdit}function hasChildFolders(id,nodes){const children=nodes[id].children;for(let i=0;i<children.length;i++){if(nodes[children[i]].children){return true}}return false}function getDescendants(nodes,baseId){const descendants=new Set;const stack=[];stack.push(baseId);while(stack.length>0){const id=stack.pop();const node=nodes[id];if(!node){continue}descendants.add(id);if(!node.children){continue}node.children.forEach(function(childId){stack.push(childId)})}return descendants}function removeIdsFromObject(map,ids){const newObject=Object.assign({},map);ids.forEach(function(id){delete newObject[id]});return newObject}function removeIdsFromMap(map,ids){const newMap=new Map(map);ids.forEach(function(id){newMap.delete(id)});return newMap}function removeIdsFromSet(set,ids){const difference=new Set(set);ids.forEach(function(id){difference.delete(id)});return difference}// Copyright 2017 The Chromium Authors. All rights reserved.
function createBookmark(id,treeNode){return{name:"create-bookmark",id:id,parentId:treeNode.parentId,parentIndex:treeNode.index,node:normalizeNode(treeNode)}}function editBookmark(id,changeInfo){return{name:"edit-bookmark",id:id,changeInfo:changeInfo}}function moveBookmark(id,parentId,index,oldParentId,oldIndex){return{name:"move-bookmark",id:id,parentId:parentId,index:index,oldParentId:oldParentId,oldIndex:oldIndex}}function reorderChildren(id,newChildIds){return{name:"reorder-children",id:id,children:newChildIds}}function removeBookmark(id,parentId,index,nodes){const descendants=getDescendants(nodes,id);return{name:"remove-bookmark",id:id,descendants:descendants,parentId:parentId,index:index}}function refreshNodes(nodeMap){return{name:"refresh-nodes",nodes:nodeMap}}function selectFolder(id,nodes){if(nodes&&(id===ROOT_NODE_ID||!nodes[id]||nodes[id].url)){console.warn("Tried to select invalid folder: "+id);return null}return{name:"select-folder",id:id}}function changeFolderOpen(id,open){return{name:"change-folder-open",id:id,open:open}}function clearSearch(){return{name:"clear-search"}}function deselectItems(){return{name:"deselect-items"}}function selectItem(id,state,config){assert(!config.toggle||!config.range);assert(!config.toggle||!config.clear);const anchor=state.selection.anchor;const toSelect=[];let newAnchor=id;if(config.range&&anchor){const displayedList=getDisplayedList(state);const selectedIndex=displayedList.indexOf(id);assert(selectedIndex!==-1);let anchorIndex=displayedList.indexOf(anchor);if(anchorIndex===-1){anchorIndex=selectedIndex}newAnchor=displayedList[anchorIndex];const startIndex=Math.min(anchorIndex,selectedIndex);const endIndex=Math.max(anchorIndex,selectedIndex);for(let i=startIndex;i<=endIndex;i++){toSelect.push(displayedList[i])}}else{toSelect.push(id)}return{name:"select-items",clear:config.clear,toggle:config.toggle,anchor:newAnchor,items:toSelect}}function selectAll(ids,state,anchor){return{name:"select-items",clear:true,toggle:false,anchor:anchor?anchor:state.selection.anchor,items:ids}}function updateAnchor(id){return{name:"update-anchor",anchor:id}}function setSearchTerm(term){if(!term){return clearSearch()}return{name:"start-search",term:term}}function setSearchResults(ids){return{name:"finish-search",results:ids}}function setIncognitoAvailability(availability){assert(availability!==IncognitoAvailability.FORCED);return{name:"set-incognito-availability",value:availability}}function setCanEditBookmarks(canEdit){return{name:"set-can-edit",value:canEdit}}// Copyright (c) 2012 The Chromium Authors. All rights reserved.
function getDeepActiveElement(){let a=document.activeElement;while(a&&a.shadowRoot&&a.shadowRoot.activeElement){a=a.shadowRoot.activeElement}return a}function isRTL(){return document.documentElement.dir==="rtl"}//   /* is_ios */
function hasKeyModifiers(e){return!!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)}function isTextInputElement(el){return el.tagName==="INPUT"||el.tagName==="TEXTAREA"}// Copyright 2014 The Chromium Authors. All rights reserved.
class FocusRow{constructor(root,boundary,delegate){this.root=root;this.boundary_=boundary||document.documentElement;this.delegate=delegate;this.eventTracker=new EventTracker}static isFocusable(element){if(!element||element.disabled){return false}let current=element;while(true){assertInstanceof(current,Element);const style=window.getComputedStyle(current);if(style.visibility==="hidden"||style.display==="none"){return false}const parent=current.parentNode;if(!parent){return false}if(parent===current.ownerDocument||parent instanceof DocumentFragment){return true}current=parent}}static getFocusableElement(element){if(element.getFocusableElement){return element.getFocusableElement()}return element}addItem(type,selectorOrElement){assert(type);let element;if(typeof selectorOrElement==="string"){element=this.root.querySelector(selectorOrElement)}else{element=selectorOrElement}if(!element){return false}element.setAttribute("focus-type",type);element.tabIndex=this.isActive()?0:-1;this.eventTracker.add(element,"blur",this.onBlur_.bind(this));this.eventTracker.add(element,"focus",this.onFocus_.bind(this));this.eventTracker.add(element,"keydown",this.onKeydown_.bind(this));this.eventTracker.add(element,"mousedown",this.onMousedown_.bind(this));return true}destroy(){this.eventTracker.removeAll()}getCustomEquivalent(sampleElement){return assert(this.getFirstFocusable())}getElements(){return Array.from(this.root.querySelectorAll("[focus-type]")).map(FocusRow.getFocusableElement)}getEquivalentElement(sampleElement){if(this.getFocusableElements().indexOf(sampleElement)>=0){return sampleElement}const sampleFocusType=this.getTypeForElement(sampleElement);if(sampleFocusType){const sameType=this.getFirstFocusable(sampleFocusType);if(sameType){return sameType}}return this.getCustomEquivalent(sampleElement)}getFirstFocusable(opt_type){const element=this.getFocusableElements().find(el=>!opt_type||el.getAttribute("focus-type")===opt_type);return element||null}getFocusableElements(){return this.getElements().filter(FocusRow.isFocusable)}getTypeForElement(element){return element.getAttribute("focus-type")||""}isActive(){return this.root.classList.contains(FocusRow.ACTIVE_CLASS)}makeActive(active){if(active===this.isActive()){return}this.getElements().forEach(function(element){element.tabIndex=active?0:-1});this.root.classList.toggle(FocusRow.ACTIVE_CLASS,active)}onBlur_(e){if(!this.boundary_.contains(e.relatedTarget)){return}const currentTarget=e.currentTarget;if(this.getFocusableElements().indexOf(currentTarget)>=0){this.makeActive(false)}}onFocus_(e){if(this.delegate){this.delegate.onFocus(this,e)}}onMousedown_(e){if(e.button){return}if(!e.currentTarget.disabled){e.currentTarget.tabIndex=0}}onKeydown_(e){const elements=this.getFocusableElements();const currentElement=FocusRow.getFocusableElement(e.currentTarget);const elementIndex=elements.indexOf(currentElement);assert(elementIndex>=0);if(this.delegate&&this.delegate.onKeydown(this,e)){return}const isShiftTab=!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="Tab";if(hasKeyModifiers(e)&&!isShiftTab){return}let index=-1;let shouldStopPropagation=true;if(isShiftTab){index=elementIndex-1;if(index<0){return}}else if(e.key==="ArrowLeft"){index=elementIndex+(isRTL()?1:-1)}else if(e.key==="ArrowRight"){index=elementIndex+(isRTL()?-1:1)}else if(e.key==="Home"){index=0}else if(e.key==="End"){index=elements.length-1}else{shouldStopPropagation=false}const elementToFocus=elements[index];if(elementToFocus){this.getEquivalentElement(elementToFocus).focus();e.preventDefault()}if(shouldStopPropagation){e.stopPropagation()}}}FocusRow.ACTIVE_CLASS="focus-row-active";// Copyright 2017 The Chromium Authors. All rights reserved.
let hideInk=false;assert(!isIOS,"pointerdown doesn't work on iOS");document.addEventListener("pointerdown",function(){hideInk=true},true);document.addEventListener("keydown",function(){hideInk=false},true);const focusWithoutInk=function(toFocus){if(!("noink"in toFocus)||!hideInk){toFocus.focus();return}assert(document===toFocus.ownerDocument);const{noink:noink}=toFocus;toFocus.noink=true;toFocus.focus();toFocus.noink=noink};// Copyright 2016 The Chromium Authors. All rights reserved.
const AnchorAlignment={BEFORE_START:-2,AFTER_START:-1,CENTER:0,BEFORE_END:1,AFTER_END:2};const DROPDOWN_ITEM_CLASS="dropdown-item";const AFTER_END_OFFSET=10;function getStartPointWithAnchor(start,end,menuLength,anchorAlignment,min,max){let startPoint=0;switch(anchorAlignment){case AnchorAlignment.BEFORE_START:startPoint=-menuLength;break;case AnchorAlignment.AFTER_START:startPoint=start;break;case AnchorAlignment.CENTER:startPoint=(start+end-menuLength)/2;break;case AnchorAlignment.BEFORE_END:startPoint=end-menuLength;break;case AnchorAlignment.AFTER_END:startPoint=end;break}if(startPoint+menuLength>max){startPoint=end-menuLength}if(startPoint<min){startPoint=start}startPoint=Math.max(min,Math.min(startPoint,max-menuLength));return startPoint}function getDefaultShowConfig(){return{top:0,left:0,height:0,width:0,anchorAlignmentX:AnchorAlignment.AFTER_START,anchorAlignmentY:AnchorAlignment.AFTER_START,minX:0,minY:0,maxX:0,maxY:0}}Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-action-menu">:host dialog {
  background-color: var(--cr-menu-background-color);
        border: none;
        border-radius: 4px;
        box-shadow: var(--cr-menu-shadow);
        margin: 0;
        min-width: 128px;
        outline: none;
        padding: 0;
}

:host dialog::backdrop {
  background-color: transparent;
}

:host ::slotted(.dropdown-item) {
  -webkit-tap-highlight-color: transparent;
        background: none;
        border: none;
        border-radius: 0;
        box-sizing: border-box;
        color: var(--cr-primary-text-color);
        font: inherit;
        min-height: 32px;
        padding: 0 24px;
        text-align: start;
        user-select: none;
        width: 100%;
}

:host ::slotted(.dropdown-item:not([hidden])) {
  align-items: center;
        display: flex;
}

:host ::slotted(.dropdown-item[disabled]) {
  opacity: var(--cr-action-menu-disabled-item-opacity, 0.65);
}

:host ::slotted(.dropdown-item:not([disabled])) {
  cursor: pointer;
}

:host ::slotted(.dropdown-item:focus) {
  background-color: var(--cr-menu-background-focus-color);
        outline: none;
}

.item-wrapper {
  background: var(--cr-menu-background-sheen);
        outline: none;
        padding: 8px 0;
}

</style>
    <dialog id="dialog" on-close="onNativeDialogClose_" role="application" aria-roledescription$="[[roleDescription]]">
      <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1">
        <slot id="contentNode"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`,is:"cr-action-menu",anchorElement_:null,boundClose_:null,hasMousemoveListener_:false,contentObserver_:null,resizeObserver_:null,lastConfig_:null,properties:{autoReposition:{type:Boolean,value:false},open:{type:Boolean,value:false},roleDescription:String},listeners:{keydown:"onKeyDown_",mouseover:"onMouseover_",click:"onClick_"},detached(){this.removeListeners_()},getDialog(){return this.$.dialog},removeListeners_(){window.removeEventListener("resize",this.boundClose_);window.removeEventListener("popstate",this.boundClose_);if(this.contentObserver_){dom(this.$.contentNode).unobserveNodes(this.contentObserver_);this.contentObserver_=null}if(this.resizeObserver_){this.resizeObserver_.disconnect();this.resizeObserver_=null}},onNativeDialogClose_(e){if(e.target!==this.$.dialog){return}e.stopPropagation();this.fire("close")},onClick_(e){if(e.target===this){this.close();e.stopPropagation()}},onKeyDown_(e){e.stopPropagation();if(e.key==="Tab"||e.key==="Escape"){this.close();e.preventDefault();return}if(e.key!=="Enter"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown"){return}const query=".dropdown-item:not([disabled]):not([hidden])";const options=Array.from(this.querySelectorAll(query));if(options.length===0){return}const focused=getDeepActiveElement();const index=options.findIndex(option=>FocusRow.getFocusableElement(option)===focused);if(e.key==="Enter"){if(index!==-1){return}if(isWindows||isMac){this.close();e.preventDefault();return}}e.preventDefault();this.updateFocus_(options,index,e.key!=="ArrowUp");if(!this.hasMousemoveListener_){this.hasMousemoveListener_=true;this.addEventListener("mousemove",e=>{this.onMouseover_(e);this.hasMousemoveListener_=false},{once:true})}},onMouseover_(e){const query=".dropdown-item:not([disabled])";const item=e.composedPath().find(el=>el.matches&&el.matches(query));(item||this.$.wrapper).focus()},updateFocus_(options,focusedIndex,next){const numOptions=options.length;assert(numOptions>0);let index;if(focusedIndex===-1){index=next?0:numOptions-1}else{const delta=next?1:-1;index=(numOptions+focusedIndex+delta)%numOptions}options[index].focus()},close(){this.removeListeners_();this.$.dialog.close();this.open=false;if(this.anchorElement_){focusWithoutInk(assert(this.anchorElement_));this.anchorElement_=null}if(this.lastConfig_){this.lastConfig_=null}},showAt(anchorElement,opt_config){this.anchorElement_=anchorElement;this.anchorElement_.scrollIntoViewIfNeeded();const rect=this.anchorElement_.getBoundingClientRect();let height=rect.height;if(opt_config&&opt_config.anchorAlignmentY===AnchorAlignment.AFTER_END){height-=AFTER_END_OFFSET}this.showAtPosition(Object.assign({top:rect.top,left:rect.left,height:height,width:rect.width,anchorAlignmentX:AnchorAlignment.BEFORE_END},opt_config));this.$.wrapper.focus()},showAtPosition(config){const doc=document.scrollingElement;const scrollLeft=doc.scrollLeft;const scrollTop=doc.scrollTop;this.resetStyle_();this.$.dialog.showModal();this.open=true;config.top+=scrollTop;config.left+=scrollLeft;this.positionDialog_(Object.assign({minX:scrollLeft,minY:scrollTop,maxX:scrollLeft+doc.clientWidth,maxY:scrollTop+doc.clientHeight},config));doc.scrollTop=scrollTop;doc.scrollLeft=scrollLeft;this.addListeners_()},resetStyle_(){this.$.dialog.style.left="";this.$.dialog.style.right="";this.$.dialog.style.top="0"},positionDialog_(config){this.lastConfig_=config;const c=Object.assign(getDefaultShowConfig(),config);const top=c.top;const left=c.left;const bottom=top+c.height;const right=left+c.width;const rtl=getComputedStyle(this).direction==="rtl";if(rtl){c.anchorAlignmentX*=-1}const offsetWidth=this.$.dialog.offsetWidth;const menuLeft=getStartPointWithAnchor(left,right,offsetWidth,c.anchorAlignmentX,c.minX,c.maxX);if(rtl){const menuRight=document.scrollingElement.clientWidth-menuLeft-offsetWidth;this.$.dialog.style.right=menuRight+"px"}else{this.$.dialog.style.left=menuLeft+"px"}const menuTop=getStartPointWithAnchor(top,bottom,this.$.dialog.offsetHeight,c.anchorAlignmentY,c.minY,c.maxY);this.$.dialog.style.top=menuTop+"px"},addListeners_(){this.boundClose_=this.boundClose_||function(){if(this.$.dialog.open){this.close()}}.bind(this);window.addEventListener("resize",this.boundClose_);window.addEventListener("popstate",this.boundClose_);this.contentObserver_=dom(this.$.contentNode).observeNodes(info=>{info.addedNodes.forEach(node=>{if(node.classList&&node.classList.contains(DROPDOWN_ITEM_CLASS)&&!node.getAttribute("role")){node.setAttribute("role","menuitem")}})});if(this.autoReposition){this.resizeObserver_=new ResizeObserver(()=>{if(this.lastConfig_){this.positionDialog_(this.lastConfig_);this.fire("cr-action-menu-repositioned")}});this.resizeObserver_.observe(this.$.dialog)}}});// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><slot></slot>
<!--_html_template_end_-->`,is:"cr-lazy-render",child_:null,instance_:null,get(){if(!this.child_){this.render_()}return this.child_},getIfExists(){return this.child_},render_(){const template=this.getContentChildren()[0];const TemplateClass=templatize(template,this,{mutableData:false,forwardHostProp:this._forwardHostPropV2});const parentNode=this.parentNode;if(parentNode&&!this.child_){this.instance_=new TemplateClass;this.child_=this.instance_.root.firstElementChild;parentNode.insertBefore(this.instance_.root,this)}},_forwardHostPropV2(prop,value){if(this.instance_){this.instance_.forwardHostProp(prop,value)}}});// Copyright 2017 The Chromium Authors. All rights reserved.
const CrContainerShadowSide={TOP:"top",BOTTOM:"bottom"};const CrContainerShadowBehavior={intersectionObserver_:null,dropShadows_:null,intersectionProbes_:null,sides_:null,ready(){this.dropShadows_=new Map;this.intersectionProbes_=new Map},attached(){const hasBottomShadow=this.$.container.hasAttribute("show-bottom-shadow");this.sides_=hasBottomShadow?[CrContainerShadowSide.TOP,CrContainerShadowSide.BOTTOM]:[CrContainerShadowSide.TOP];this.sides_.forEach(side=>{const shadow=document.createElement("div");shadow.id=`cr-container-shadow-${side}`;shadow.classList.add("cr-container-shadow");this.dropShadows_.set(side,shadow);this.intersectionProbes_.set(side,document.createElement("div"))});this.$.container.parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP),this.$.container);this.$.container.prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));if(hasBottomShadow){this.$.container.parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM),this.$.container.nextSibling);this.$.container.append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM))}this.enableShadowBehavior(true)},detached(){this.enableShadowBehavior(false)},getIntersectionObserver_(){const callback=entries=>{for(const entry of entries){const target=entry.target;this.sides_.forEach(side=>{if(target===this.intersectionProbes_.get(side)){this.dropShadows_.get(side).classList.toggle("has-shadow",entry.intersectionRatio===0)}})}};return new IntersectionObserver(callback,{root:this.$.container,threshold:0})},enableShadowBehavior(enable){if(enable===!!this.intersectionObserver_){return}if(!enable){this.intersectionObserver_.disconnect();this.intersectionObserver_=null;return}this.intersectionObserver_=this.getIntersectionObserver_();window.setTimeout(()=>{if(this.intersectionObserver_){this.intersectionProbes_.forEach(probe=>{this.intersectionObserver_.observe(probe)})}})},showDropShadows(){assert(!this.intersectionObserver_);assert(this.sides_);for(const side of this.sides_){this.dropShadows_.get(side).classList.toggle("has-shadow",true)}}};// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style cr-icons" scope="cr-dialog">dialog {
  --scroll-border-color: var(--paper-grey-300);
        --scroll-border: 1px solid var(--scroll-border-color);
        border: 0;
        border-radius: 8px;
        bottom: 50%;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.12),
                    0 16px 16px rgba(0, 0, 0, 0.24);
        color: inherit;
        overflow-y: hidden;
        padding: 0;
        top: 50%;
        width: 512px;

        
        ;
}

@media (prefers-color-scheme: dark) {
dialog {
  --scroll-border-color: var(--google-grey-refresh-700);
          background-color: var(--google-grey-900);
          
          background-image: linear-gradient(rgba(255, 255, 255, .04),
                                            rgba(255, 255, 255, .04));
}

}

dialog[open] #content-wrapper {
  display: flex;
        flex-direction: column;
        max-height: 100vh;
        overflow: auto;
}

.top-container, :host ::slotted([slot=button-container]), :host ::slotted([slot=footer]) {
  flex-shrink: 0;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.6);
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
}

:host ::slotted([slot=body]) {
  color: var(--cr-secondary-text-color);
        padding: 0 20px;
}

:host ::slotted([slot=title]) {
  color: var(--cr-primary-text-color);
        flex: 1;
        font-size: calc(15 / 13 * 100%);
        line-height: 1;
        padding-bottom: 16px;
        padding-inline-end: 20px;
        padding-inline-start: 20px;
        padding-top: 20px;
}

:host ::slotted([slot=button-container]) {
  display: flex;
        justify-content: flex-end;
        padding-bottom: 16px;
        padding-inline-end: 16px;
        padding-inline-start: 16px;
        padding-top: 24px;
}

:host ::slotted([slot=footer]) {
  border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
        border-top: 1px solid #dbdbdb;
        margin: 0;
        padding: 16px 20px;
}

@media (prefers-color-scheme: dark) {
:host ::slotted([slot=footer]) {
  border-top-color: var(--cr-separator-color);
}

}

.body-container {
  box-sizing: border-box;
        display: flex;
        flex-direction: column;
        min-height: 1.375rem; 
        overflow: auto;
}

:host {
  --transparent-border: 1px solid transparent;
}

#cr-container-shadow-top {
  border-bottom: var(--cr-dialog-body-border-top,
            var(--transparent-border));
}

#cr-container-shadow-bottom {
  border-bottom: var(--cr-dialog-body-border-bottom,
            var(--transparent-border));
}

#cr-container-shadow-top.has-shadow, #cr-container-shadow-bottom.has-shadow {
  border-bottom: var(--scroll-border);
}

.top-container {
  align-items: flex-start;
        display: flex;
        min-height: var(--cr-dialog-top-container-min-height, 31px);
}

.title-container {
  display: flex;
        flex: 1;
        outline: none;
}

#close {
  align-self: flex-start;
        margin-inline-end: 4px;
        margin-top: 4px;
}

</style>
    <dialog id="dialog" on-close="onNativeDialogClose_" on-cancel="onNativeDialogCancel_" part="dialog" aria-labelledby="title">
      <!-- This wrapper is necessary, such that the "pulse" animation is not
        erroneously played when the user clicks on the outer-most scrollbar. -->
      <div id="content-wrapper" part="wrapper">
        <div class="top-container">
          <div id="title" class="title-container" tabindex="-1">
            <slot name="title"></slot>
          </div>
          <cr-icon-button id="close" class="icon-clear" hidden$="[[!showCloseButton]]" aria-label$="[[closeText]]" on-click="cancel" on-keypress="onCloseKeypress_">
          </cr-icon-button>
        </div>
        <slot name="header"></slot>
        <div class="body-container" id="container" show-bottom-shadow="" part="body-container">
          <slot name="body"></slot>
        </div>
        <slot name="button-container"></slot>
        <slot name="footer"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`,is:"cr-dialog",behaviors:[CrContainerShadowBehavior],properties:{open:{type:Boolean,value:false,reflectToAttribute:true},closeText:String,ignorePopstate:{type:Boolean,value:false},ignoreEnterKey:{type:Boolean,value:false},consumeKeydownEvent:{type:Boolean,value:false},noCancel:{type:Boolean,value:false},showCloseButton:{type:Boolean,value:false},showOnAttach:{type:Boolean,value:false}},listeners:{pointerdown:"onPointerdown_"},intersectionObserver_:null,mutationObserver_:null,boundKeydown_:null,ready(){window.addEventListener("popstate",function(){if(!this.ignorePopstate&&this.$.dialog.open){this.cancel()}}.bind(this));if(!this.ignoreEnterKey){this.addEventListener("keypress",this.onKeypress_.bind(this))}},attached(){const mutationObserverCallback=function(){if(this.$.dialog.open){this.enableShadowBehavior(true);this.addKeydownListener_()}else{this.enableShadowBehavior(false);this.removeKeydownListener_()}}.bind(this);this.mutationObserver_=new MutationObserver(mutationObserverCallback);this.mutationObserver_.observe(this.$.dialog,{attributes:true,attributeFilter:["open"]});mutationObserverCallback();if(this.showOnAttach){this.showModal()}},detached(){this.removeKeydownListener_();if(this.mutationObserver_){this.mutationObserver_.disconnect();this.mutationObserver_=null}},addKeydownListener_(){if(!this.consumeKeydownEvent){return}this.boundKeydown_=this.boundKeydown_||this.onKeydown_.bind(this);this.addEventListener("keydown",this.boundKeydown_);document.body.addEventListener("keydown",this.boundKeydown_)},removeKeydownListener_(){if(!this.boundKeydown_){return}this.removeEventListener("keydown",this.boundKeydown_);document.body.removeEventListener("keydown",this.boundKeydown_);this.boundKeydown_=null},showModal(){this.$.dialog.showModal();assert(this.$.dialog.open);this.open=true;this.fire("cr-dialog-open")},cancel(){this.fire("cancel");this.$.dialog.close();assert(!this.$.dialog.open);this.open=false},close(){this.$.dialog.close("success");assert(!this.$.dialog.open);this.open=false},setTitleAriaLabel(title){this.$.dialog.removeAttribute("aria-labelledby");this.$.dialog.setAttribute("aria-label",title)},onCloseKeypress_(e){e.stopPropagation()},onNativeDialogClose_(e){if(e.target!==this.getNative()){return}e.stopPropagation();this.fire("close")},onNativeDialogCancel_(e){if(e.target!==this.getNative()){return}if(this.noCancel){e.preventDefault();return}this.open=false;this.fire("cancel")},getNative(){return this.$.dialog},onKeypress_(e){if(e.key!=="Enter"){return}const accept=e.target===this||e.composedPath().some(el=>el.tagName==="CR-INPUT"&&el.type!=="search");if(!accept){return}const actionButton=this.querySelector(".action-button:not([disabled]):not([hidden])");if(actionButton){actionButton.click();e.preventDefault()}},onKeydown_(e){assert(this.consumeKeydownEvent);if(!this.getNative().open){return}if(this.ignoreEnterKey&&e.key==="Enter"){return}e.stopPropagation()},onPointerdown_(e){if(e.button!==0||e.composedPath()[0].tagName!=="DIALOG"){return}this.$.dialog.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.02)",offset:.4},{transform:"scale(1.02)",offset:.6},{transform:"scale(1)",offset:1}],{duration:180,easing:"ease-in-out",iterations:1});e.preventDefault()},focus(){this.$$(".title-container").focus()}});const template$7=document.createElement("template");template$7.innerHTML=`<dom-module id="cr-input-style" assetpath="chrome://resources/">\n  <template>\n    <style scope="cr-input-style">:host {\n  --cr-input-background-color: var(--google-grey-refresh-100);\n        --cr-input-color: var(--cr-primary-text-color);\n        --cr-input-error-color: var(--google-red-600);\n        --cr-input-focus-color: var(--google-blue-600);\n        --cr-input-placeholder-color: var(--cr-secondary-text-color);\n        display: block;\n        \n        outline: none;\n}\n\n@media (prefers-color-scheme: dark) {\n:host {\n  --cr-input-background-color: rgba(0, 0, 0, .3);\n          --cr-input-error-color: var(--google-red-refresh-300);\n          --cr-input-focus-color: var(--google-blue-refresh-300);\n}\n\n}\n\n:host([focused_]:not([readonly]):not([invalid])) #label {\n  color: var(--cr-input-focus-color);\n}\n\n#input-container {\n  border-radius: var(--cr-input-border-radius, 4px);\n        overflow: hidden;\n        position: relative;\n        width: var(--cr-input-width, 100%);\n}\n\n#inner-input-container {\n  background-color: var(--cr-input-background-color);\n        box-sizing: border-box;\n        padding: 0;\n}\n\n#input {\n  -webkit-appearance: none;\n        \n        background-color: transparent;\n        border: none;\n        box-sizing: border-box;\n        caret-color: var(--cr-input-focus-color);\n        color: var(--cr-input-color);\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        min-height: var(--cr-input-min-height, auto);\n        outline: none;\n\n        \n        padding-bottom: var(--cr-input-padding-bottom, 6px);\n        padding-inline-end: var(--cr-input-padding-end, 8px);\n        padding-inline-start: var(--cr-input-padding-start, 8px);\n        padding-top: var(--cr-input-padding-top, 6px);\n\n        text-align: inherit;\n        text-overflow: ellipsis;\n        width: 100%;\n\n        \n         ;\n}\n\n#underline {\n  border-bottom: 2px solid var(--cr-input-focus-color);\n        bottom: 0;\n        box-sizing: border-box;\n        left: 0;\n        margin: auto;\n        opacity: 0;\n        position: absolute;\n        right: 0;\n        transition: opacity 120ms ease-out, width 0s linear 180ms;\n        width: 0;\n}\n\n:host([invalid]) #underline, :host([force-underline]) #underline, :host([focused_]:not([readonly])) #underline {\n  opacity: 1;\n        transition: width 180ms ease-out, opacity 120ms ease-in;\n        width: 100%;\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template$7.content.cloneNode(true));// Copyright 2018 The Chromium Authors. All rights reserved.
const SUPPORTED_INPUT_TYPES=new Set(["number","password","search","text","url"]);Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style cr-input-style cr-shared-style" scope="cr-input">:host([disabled]) :-webkit-any(#label, #error, #input-container) {
  opacity: var(--cr-disabled-opacity);
        pointer-events: none;
}

:host ::slotted(cr-button[slot=suffix]) {
  margin-inline-start: var(--cr-button-edge-spacing) !important;
}

:host([invalid]) #label {
  color: var(--cr-input-error-color);
}

#input {
  border-bottom: var(--cr-input-border-bottom, none);
}

#input::placeholder {
  color: var(--cr-input-placeholder-color);
        letter-spacing: var(--cr-input-placeholder-letter-spacing);
}

:host([invalid]) #input {
  caret-color: var(--cr-input-error-color);
}

:host([readonly]) #input {
  opacity: 0.6;
}

:host([invalid]) #underline {
  border-color: var(--cr-input-error-color);
}

#error {
  color: var(--cr-input-error-color);
        display: var(--cr-input-error-display, block);
        font-size: var(--cr-form-field-label-font-size);
        height: var(--cr-form-field-label-height);
        line-height: var(--cr-form-field-label-line-height);
        margin: 8px 0;
        visibility: hidden;
}

:host([invalid]) #error {
  visibility: visible;
}

#row-container, #inner-input-container {
  align-items: center;
        display: flex;
        
        justify-content: space-between;
        position: relative;
}

#input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

:host-context([dir=rtl]) #input[type=url] {
  text-align: right;
}

#input[type=url] {
  direction: ltr;
}

</style>
    <div id="label" class="cr-form-field-label" hidden="[[!label]]" aria-hidden="true">
      [[label]]
    </div>
    <div id="row-container" part="row-container">
      <div id="input-container">
        <div id="inner-input-container">
          <slot name="prefix"></slot>
          <!-- Only attributes that are named inconsistently between html and js
              need to use attr$="", such as |tabindex| vs .tabIndex and
              |readonly| vs .readOnly. -->
          <input id="input" disabled="[[disabled]]" autofocus="[[autofocus]]" value="{{value::input}}" tabindex$="[[tabindex]]" type="[[type]]" readonly$="[[readonly]]" maxlength$="[[maxlength]]" pattern$="[[pattern]]" required="[[required]]" minlength$="[[minlength]]" aria-label$="[[getAriaLabel_(ariaLabel, label, placeholder)]]" aria-invalid$="[[getAriaInvalid_(invalid)]]" max="[[max]]" min="[[min]]" on-focus="onInputFocus_" on-blur="onInputBlur_" on-change="onInputChange_" on-keydown="onInputKeydown_" part="input">
        </div>
        <div id="underline"></div>
      </div>
      <slot name="suffix"></slot>
    </div>
    <!--
      Note: role="alert" is not working as expected because screen readers
      expect live regions to be in the DOM at time of document loading.
      cr-input will automatically fire iron-announce for the error message.
      Also aria-hidden="true" to avoid noise for screen reader users.
    -->
    <div id="error" aria-hidden="true">[[errorMessage]]</div>
<!--_html_template_end_-->`,is:"cr-input",properties:{ariaLabel:{type:String,value:""},autofocus:{type:Boolean,value:false,reflectToAttribute:true},autoValidate:Boolean,disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},errorMessage:{type:String,value:"",observer:"errorMessageChanged_"},focused_:{type:Boolean,value:false,reflectToAttribute:true},invalid:{type:Boolean,value:false,notify:true,reflectToAttribute:true},max:{type:Number,reflectToAttribute:true},min:{type:Number,reflectToAttribute:true},maxlength:{type:Number,reflectToAttribute:true},minlength:{type:Number,reflectToAttribute:true},pattern:{type:String,reflectToAttribute:true},label:{type:String,value:""},placeholder:{type:String,value:null,observer:"placeholderChanged_"},readonly:{type:Boolean,reflectToAttribute:true},required:{type:Boolean,reflectToAttribute:true},tabindex:{type:Number,value:0,reflectToAttribute:true},type:{type:String,value:"text",observer:"onTypeChanged_"},value:{type:String,value:"",notify:true,observer:"onValueChanged_"}},hostAttributes:{"aria-disabled":"false"},listeners:{focus:"onFocus_",pointerdown:"onPointerDown_"},originalTabIndex_:null,attached(){if(this.disabled){this.reconcileTabindex_()}},onTypeChanged_(){assert(SUPPORTED_INPUT_TYPES.has(this.type))},get inputElement(){return this.$.input},getAriaLabel_(ariaLabel,label,placeholder){return ariaLabel||label||placeholder},getAriaInvalid_(invalid){return invalid?"true":"false"},disabledChanged_(current,previous){this.setAttribute("aria-disabled",this.disabled?"true":"false");this.focused_=false;if(previous!==undefined){this.reconcileTabindex_()}},errorMessageChanged_(){IronA11yAnnouncer.requestAvailability();this.fire("iron-announce",{text:this.errorMessage})},reconcileTabindex_(){if(this.disabled){this.recordAndUnsetTabIndex_()}else{this.restoreTabIndex_()}},placeholderChanged_(){if(this.placeholder||this.placeholder===""){this.inputElement.setAttribute("placeholder",this.placeholder)}else{this.inputElement.removeAttribute("placeholder")}},onFocus_(){if(!this.focusInput()){return}this.inputElement.select()},focusInput(){if(this.shadowRoot.activeElement===this.inputElement){return false}this.inputElement.focus();return true},recordAndUnsetTabIndex_(){if(this.originalTabIndex_===null){this.originalTabIndex_=this.tabindex}this.tabindex=null},restoreTabIndex_(){this.tabindex=this.originalTabIndex_;this.originalTabIndex_=null},onPointerDown_(e){if(this.disabled){return}if(e.path[0].tagName!=="INPUT"){this.recordAndUnsetTabIndex_();setTimeout(()=>{if(!this.disabled){this.restoreTabIndex_()}},0)}},onInputKeydown_(e){if(e.shiftKey&&e.key==="Tab"){this.focus()}},onValueChanged_(newValue,oldValue){if(!newValue&&!oldValue){return}if(this.autoValidate){this.validate()}},onInputChange_(e){this.fire("change",{sourceEvent:e})},onInputFocus_(){this.focused_=true},onInputBlur_(){this.focused_=false},select(start,end){this.focusInput();if(start!==undefined&&end!==undefined){this.inputElement.setSelectionRange(start,end)}else{assert(start===undefined&&end===undefined);this.inputElement.select()}},validate(){this.invalid=!this.inputElement.checkValidity();return!this.invalid}});// Copyright 2019 The Chromium Authors. All rights reserved.
class BrowserProxy{getIncognitoAvailability(){return sendWithPromise("getIncognitoAvailability")}getCanEditBookmarks(){return sendWithPromise("getCanEditBookmarks")}getPluralString(messageName,itemCount){return sendWithPromise("getPluralString",messageName,itemCount)}recordInHistogram(histogram,bucket,maxBucket){chrome.send("metricsHandler:recordInHistogram",[histogram,bucket,maxBucket])}}addSingletonGetter(BrowserProxy);// Copyright 2016 The Chromium Authors. All rights reserved.
var PromiseResolver=class{constructor(){this.resolve_;this.reject_;this.isFulfilled_=false;this.promise_=new Promise((resolve,reject)=>{this.resolve_=(resolution=>{resolve(resolution);this.isFulfilled_=true});this.reject_=(reason=>{reject(reason);this.isFulfilled_=true})})}get isFulfilled(){return this.isFulfilled_}set isFulfilled(i){assertNotReached()}get promise(){return this.promise_}set promise(p){assertNotReached()}get resolve(){return this.resolve_}set resolve(r){assertNotReached()}get reject(){return this.reject_}set reject(s){assertNotReached()}};// Copyright 2017 The Chromium Authors. All rights reserved.
class Debouncer{constructor(callback){this.callback_=callback;this.timerProxy_=window;this.timer_=null;this.boundTimerCallback_=this.timerCallback_.bind(this);this.isDone_=false;this.promiseResolver_=new PromiseResolver}restartTimeout(delay){assert(!this.isDone_);this.cancelTimeout_();this.timer_=this.timerProxy_.setTimeout(this.boundTimerCallback_,delay||0)}done(){return this.isDone_}get promise(){return this.promiseResolver_.promise}reset(){this.isDone_=false;this.promiseResolver_=new PromiseResolver;this.cancelTimeout_()}cancelTimeout_(){if(this.timer_){this.timerProxy_.clearTimeout(this.timer_)}}timerCallback_(){this.isDone_=true;this.callback_.call();this.promiseResolver_.resolve()}}// Copyright 2017 The Chromium Authors. All rights reserved.
function selectItems(selectionState,action){let newItems=new Set;if(!action.clear){newItems=new Set(selectionState.items)}action.items.forEach(function(id){let add=true;if(action.toggle){add=!newItems.has(id)}if(add){newItems.add(id)}else{newItems.delete(id)}});return Object.assign({},selectionState,{items:newItems,anchor:action.anchor})}function deselectAll(selectionState){return{items:new Set,anchor:null}}function deselectItems$1(selectionState,deleted){return Object.assign({},selectionState,{items:removeIdsFromSet(selectionState.items,deleted),anchor:!selectionState.anchor||deleted.has(selectionState.anchor)?null:selectionState.anchor})}function updateAnchor$1(selectionState,action){return Object.assign({},selectionState,{anchor:action.anchor})}function updateSelection(selection,action){switch(action.name){case"clear-search":case"finish-search":case"select-folder":case"deselect-items":return deselectAll();case"select-items":return selectItems(selection,action);case"remove-bookmark":return deselectItems$1(selection,action.descendants);case"move-bookmark":if(action.parentId!==action.oldParentId&&selection.items.has(action.id)){return deselectItems$1(selection,new Set([action.id]))}return selection;case"update-anchor":return updateAnchor$1(selection,action);default:return selection}}function startSearch(search,action){return{term:action.term,inProgress:true,results:search.results}}function finishSearch(search,action){return Object.assign({},search,{inProgress:false,results:action.results})}function clearSearch$1(){return{term:"",inProgress:false,results:null}}function removeDeletedResults(search,deletedIds){if(!search.results){return search}const newResults=[];search.results.forEach(function(id){if(!deletedIds.has(id)){newResults.push(id)}});return Object.assign({},search,{results:newResults})}function updateSearch(search,action){switch(action.name){case"start-search":return startSearch(search,action);case"select-folder":case"clear-search":return clearSearch$1();case"finish-search":return finishSearch(search,action);case"remove-bookmark":return removeDeletedResults(search,action.descendants);default:return search}}function modifyNode(nodes,id,callback){const nodeModification={};nodeModification[id]=callback(nodes[id]);return Object.assign({},nodes,nodeModification)}function createBookmark$1(nodes,action){const nodeModifications={};nodeModifications[action.id]=action.node;const parentNode=nodes[action.parentId];const newChildren=parentNode.children.slice();newChildren.splice(action.parentIndex,0,action.id);nodeModifications[action.parentId]=Object.assign({},parentNode,{children:newChildren});return Object.assign({},nodes,nodeModifications)}function editBookmark$1(nodes,action){if(!nodes[action.id].url&&action.changeInfo.url){delete action.changeInfo.url}return modifyNode(nodes,action.id,function(node){return Object.assign({},node,action.changeInfo)})}function moveBookmark$1(nodes,action){const nodeModifications={};const id=action.id;nodeModifications[id]=Object.assign({},nodes[id],{parentId:action.parentId});const oldParentId=action.oldParentId;const oldParentChildren=nodes[oldParentId].children.slice();oldParentChildren.splice(action.oldIndex,1);nodeModifications[oldParentId]=Object.assign({},nodes[oldParentId],{children:oldParentChildren});const parentId=action.parentId;const parentChildren=oldParentId===parentId?oldParentChildren:nodes[parentId].children.slice();parentChildren.splice(action.index,0,action.id);nodeModifications[parentId]=Object.assign({},nodes[parentId],{children:parentChildren});return Object.assign({},nodes,nodeModifications)}function removeBookmark$1(nodes,action){const newState=modifyNode(nodes,action.parentId,function(node){const newChildren=node.children.slice();newChildren.splice(action.index,1);return Object.assign({},node,{children:newChildren})});return removeIdsFromObject(newState,action.descendants)}function reorderChildren$1(nodes,action){return modifyNode(nodes,action.id,function(node){return Object.assign({},node,{children:action.children})})}function updateNodes(nodes,action){switch(action.name){case"create-bookmark":return createBookmark$1(nodes,action);case"edit-bookmark":return editBookmark$1(nodes,action);case"move-bookmark":return moveBookmark$1(nodes,action);case"remove-bookmark":return removeBookmark$1(nodes,action);case"reorder-children":return reorderChildren$1(nodes,action);case"refresh-nodes":return action.nodes;default:return nodes}}function isAncestorOf(nodes,ancestorId,childId){let currentId=childId;while(currentId){if(currentId===ancestorId){return true}currentId=nodes[currentId].parentId}return false}function updateSelectedFolder(selectedFolder,action,nodes){switch(action.name){case"select-folder":return action.id;case"change-folder-open":if(!action.open&&selectedFolder&&isAncestorOf(nodes,action.id,selectedFolder)){return action.id}return selectedFolder;case"remove-bookmark":if(selectedFolder&&isAncestorOf(nodes,action.id,selectedFolder)){return assert(nodes[action.id].parentId)}return selectedFolder;default:return selectedFolder}}function openFolderAndAncestors(folderOpenState,id,nodes){const newFolderOpenState=new Map(folderOpenState);for(let currentId=id;currentId;currentId=nodes[currentId].parentId){newFolderOpenState.set(currentId,true)}return newFolderOpenState}function changeFolderOpen$1(folderOpenState,action){const newFolderOpenState=new Map(folderOpenState);newFolderOpenState.set(action.id,action.open);return newFolderOpenState}function updateFolderOpenState(folderOpenState,action,nodes){switch(action.name){case"change-folder-open":return changeFolderOpen$1(folderOpenState,action);case"select-folder":return openFolderAndAncestors(folderOpenState,nodes[action.id].parentId,nodes);case"move-bookmark":if(!nodes[action.id].children){return folderOpenState}return openFolderAndAncestors(folderOpenState,action.parentId,nodes);case"remove-bookmark":return removeIdsFromMap(folderOpenState,action.descendants);default:return folderOpenState}}function updatePrefs(prefs,action){switch(action.name){case"set-incognito-availability":return Object.assign({},prefs,{incognitoAvailability:action.value});case"set-can-edit":return Object.assign({},prefs,{canEdit:action.value});default:return prefs}}function reduceAction(state,action){return{nodes:updateNodes(state.nodes,action),selectedFolder:updateSelectedFolder(state.selectedFolder,action,state.nodes),folderOpenState:updateFolderOpenState(state.folderOpenState,action,state.nodes),prefs:updatePrefs(state.prefs,action),search:updateSearch(state.search,action),selection:updateSelection(state.selection,action)}}// Copyright 2017 The Chromium Authors. All rights reserved.
class Store$1 extends Store{constructor(){super(createEmptyState(),reduceAction)}}addSingletonGetter(Store$1);// Copyright 2017 The Chromium Authors. All rights reserved.
let trackUpdates=false;let updatedItems=[];let debouncer;function batchUIUpdates(){if(!debouncer){debouncer=new Debouncer(()=>Store$1.getInstance().endBatchUpdate())}if(debouncer.done()){Store$1.getInstance().beginBatchUpdate();debouncer.reset()}debouncer.restartTimeout()}function trackUpdatedItems(){trackUpdates=true}function highlightUpdatedItemsImpl(){if(!trackUpdates){return}document.dispatchEvent(new CustomEvent("highlight-items",{detail:updatedItems}));updatedItems=[];trackUpdates=false}function highlightUpdatedItems(){assert(debouncer);debouncer.promise.then(highlightUpdatedItemsImpl)}function dispatch(action){Store$1.getInstance().dispatch(action)}function onBookmarkChanged(id,changeInfo){dispatch(editBookmark(id,changeInfo))}function onBookmarkCreated(id,treeNode){batchUIUpdates();if(trackUpdates){updatedItems.push(id)}dispatch(createBookmark(id,treeNode))}function onBookmarkRemoved(id,removeInfo){batchUIUpdates();const nodes=Store$1.getInstance().data.nodes;dispatch(removeBookmark(id,removeInfo.parentId,removeInfo.index,nodes))}function onBookmarkMoved(id,moveInfo){batchUIUpdates();if(trackUpdates){updatedItems.push(id)}dispatch(moveBookmark(id,moveInfo.parentId,moveInfo.index,moveInfo.oldParentId,moveInfo.oldIndex))}function onChildrenReordered(id,reorderInfo){dispatch(reorderChildren(id,reorderInfo.childIds))}function onImportBegan(){chrome.bookmarks.onCreated.removeListener(onBookmarkCreated)}function onImportEnded(){chrome.bookmarks.getTree(function(results){dispatch(refreshNodes(normalizeNodes(results[0])))});chrome.bookmarks.onCreated.addListener(onBookmarkCreated)}function onIncognitoAvailabilityChanged(availability){dispatch(setIncognitoAvailability(availability))}function onCanEditBookmarksChanged(canEdit){dispatch(setCanEditBookmarks(canEdit))}const listeners=[{api:chrome.bookmarks.onChanged,fn:onBookmarkChanged},{api:chrome.bookmarks.onChildrenReordered,fn:onChildrenReordered},{api:chrome.bookmarks.onCreated,fn:onBookmarkCreated},{api:chrome.bookmarks.onMoved,fn:onBookmarkMoved},{api:chrome.bookmarks.onRemoved,fn:onBookmarkRemoved},{api:chrome.bookmarks.onImportBegan,fn:onImportBegan},{api:chrome.bookmarks.onImportEnded,fn:onImportEnded}];let incognitoAvailabilityListener=null;let canEditBookmarksListener=null;function init(){listeners.forEach(listener=>listener.api.addListener(listener.fn));const browserProxy=BrowserProxy.getInstance();browserProxy.getIncognitoAvailability().then(onIncognitoAvailabilityChanged);incognitoAvailabilityListener=addWebUIListener("incognito-availability-changed",onIncognitoAvailabilityChanged);browserProxy.getCanEditBookmarks().then(onCanEditBookmarksChanged);canEditBookmarksListener=addWebUIListener("can-edit-bookmarks-changed",onCanEditBookmarksChanged)}function destroy(){listeners.forEach(listener=>listener.api.removeListener(listener.fn));if(incognitoAvailabilityListener){removeWebUIListener(incognitoAvailabilityListener)}if(canEditBookmarksListener){removeWebUIListener(canEditBookmarksListener)}}// Copyright 2017 The Chromium Authors. All rights reserved.
class DialogFocusManager{constructor(){this.previousFocusElement_=null;this.dialogs_=new Set}showDialog(dialog,showFn){if(!showFn){showFn=function(){dialog.showModal()}}if(!this.dialogs_.size||this.dialogs_.has(dialog)&&this.dialogs_.size===1){this.updatePreviousFocus_()}if(!this.dialogs_.has(dialog)){dialog.addEventListener("close",this.getCloseListener_(dialog));this.dialogs_.add(dialog)}showFn()}hasOpenDialog(){return this.dialogs_.size>0}clearFocus(){this.previousFocusElement_=null}updatePreviousFocus_(){this.previousFocusElement_=this.getFocusedElement_()}getFocusedElement_(){let focus=document.activeElement;while(focus.root&&focus.root.activeElement){focus=focus.root.activeElement}return focus}getCloseListener_(dialog){const closeListener=e=>{if(dialog.open){return}assert(this.dialogs_.delete(dialog));if(!this.hasOpenDialog()&&this.previousFocusElement_){this.previousFocusElement_.focus()}dialog.removeEventListener("close",closeListener)};return closeListener}}addSingletonGetter(DialogFocusManager);// Copyright 2017 The Chromium Authors. All rights reserved.
Polymer({is:"bookmarks-edit-dialog",_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-shared-style" scope="bookmarks-edit-dialog"></style>
<cr-dialog id="dialog">
  <div slot="title">
    [[getDialogTitle_(isFolder_, isEdit_)]]
  </div>
  <div slot="body">
    <cr-input id="name" label="åç¨±" value="{{titleValue_}}" autofocus="">
    </cr-input>
    <cr-input id="url" type="url" label="ç¶²å€" error-message="ç¶²å€ç„¡æ•ˆ" value="{{urlValue_}}" hidden$="[[isFolder_]]" required="">
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelButtonTap_">
      å–æ¶ˆ
    </cr-button>
    <cr-button id="saveButton" class="action-button" on-click="onSaveButtonTap_">
      å„²å­˜
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`,properties:{isFolder_:Boolean,isEdit_:Boolean,editItem_:Object,parentId_:String,titleValue_:String,urlValue_:String},showAddDialog(isFolder,parentId){this.reset_();this.isEdit_=false;this.isFolder_=isFolder;this.parentId_=parentId;DialogFocusManager.getInstance().showDialog(this.$.dialog)},showEditDialog(editItem){this.reset_();this.isEdit_=true;this.isFolder_=!editItem.url;this.editItem_=editItem;this.titleValue_=editItem.title;if(!this.isFolder_){this.urlValue_=assert(editItem.url)}DialogFocusManager.getInstance().showDialog(this.$.dialog)},reset_(){this.editItem_=null;this.parentId_=null;this.$.url.invalid=false;this.titleValue_="";this.urlValue_=""},getDialogTitle_(isFolder,isEdit){let title;if(isEdit){title=isFolder?"renameFolderTitle":"editBookmarkTitle"}else{title=isFolder?"addFolderTitle":"addBookmarkTitle"}return loadTimeData.getString(title)},validateUrl_(){const urlInput=this.$.url;const originalValue=this.urlValue_;if(urlInput.validate()){return true}this.urlValue_="http://"+originalValue;if(urlInput.validate()){return true}this.urlValue_=originalValue;return false},onSaveButtonTap_(){const edit={title:this.titleValue_};if(!this.isFolder_){if(!this.validateUrl_()){return}edit["url"]=this.urlValue_}if(this.isEdit_){chrome.bookmarks.update(this.editItem_.id,edit)}else{edit["parentId"]=this.parentId_;trackUpdatedItems();chrome.bookmarks.create(edit,highlightUpdatedItems)}this.$.dialog.close()},onCancelButtonTap_(){this.$.dialog.cancel()}});// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class KeyboardShortcut{constructor(shortcut){this.useKeyCode_=false;this.mods_={};this.key_=null;this.keyCode_=null;shortcut.split("|").forEach(part=>{const partLc=part.toLowerCase();switch(partLc){case"alt":case"ctrl":case"meta":case"shift":this.mods_[partLc+"Key"]=true;break;default:if(this.key_){throw Error("Invalid shortcut")}this.key_=part;if(part.match(/^[a-z]$/)){this.useKeyCode_=true;this.keyCode_=part.toUpperCase().charCodeAt(0)}}})}matchesEvent(e){if(this.useKeyCode_&&e.keyCode===this.keyCode_||e.key===this.key_){const mods=this.mods_;return["altKey","ctrlKey","metaKey","shiftKey"].every(function(k){return e[k]===!!mods[k]})}return false}}class KeyboardShortcutList{constructor(shortcuts){this.shortcuts_=shortcuts.split(/\s+/).map(function(shortcut){return new KeyboardShortcut(shortcut)})}matchesEvent(e){return this.shortcuts_.some(function(keyboardShortcut){return keyboardShortcut.matchesEvent(e)})}}// Copyright 2018 The Chromium Authors. All rights reserved.
const StoreClient={created(){this.watches_=[]},attached(){this.getStore().addObserver(this)},detached(){this.getStore().removeObserver(this)},watch_(localProperty,valueGetter){this.watches_.push({localProperty:localProperty,valueGetter:valueGetter})},dispatch(action){this.getStore().dispatch(action)},dispatchAsync(action){this.getStore().dispatchAsync(action)},onStateChanged(newState){this.watches_.forEach(watch=>{const oldValue=this[watch.localProperty];const newValue=watch.valueGetter(newState);if(oldValue===newValue||newValue===undefined){return}this[watch.localProperty]=newValue})},updateFromStore(){if(this.getStore().isInitialized()){this.onStateChanged(this.getStore().data)}},watch(localProperty,valueGetter){assertNotReached()},getState(){assertNotReached()},getStore(){assertNotReached()}};// Copyright 2017 The Chromium Authors. All rights reserved.
const BookmarksStoreClientImpl={watch(localProperty,valueGetter){this.watch_(localProperty,valueGetter)},getState(){return this.getStore().data},getStore(){return Store$1.getInstance()}};const StoreClient$1=[StoreClient,BookmarksStoreClientImpl];// Copyright 2017 The Chromium Authors. All rights reserved.
const CommandManager=Polymer({is:"bookmarks-command-manager",_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="shared-style" scope="bookmarks-command-manager">.label {
  flex: 1;
}

.sublabel {
  color: var(--cr-secondary-text-color);
    margin-inline-start: 8px;
    text-align: end;
    width: 3ch;
}

:host(:not([has-any-sublabel_])) .sublabel {
  display: none;
}

</style>
<cr-lazy-render id="dropdown">
  <template>
    <cr-action-menu on-mousedown="onMenuMousedown_" role-description="é¸å–®">
      <template is="dom-repeat" items="[[menuCommands_]]" as="command">
        <button class="dropdown-item" command$="[[command]]" hidden$="[[!isCommandVisible_(command, menuIds_)]]" disabled$="[[!isCommandEnabled_(command, menuIds_, canPaste_)]]" on-click="onCommandClick_">
          <span class="label">
            [[getCommandLabel_(command, menuIds_)]]
          </span>
          <span class="sublabel">
            [[getCommandSublabel_(command, menuIds_)]]
          </span>
        </button>
        <hr hidden$="[[!showDividerAfter_(command, menuIds_)]]" aria-hidden="true">
      </template>
    </cr-action-menu>
  </template>
</cr-lazy-render>
<cr-lazy-render id="editDialog">
  <template>
    <bookmarks-edit-dialog></bookmarks-edit-dialog>
  </template>
</cr-lazy-render>
<cr-lazy-render id="openDialog">
  <template>
    <cr-dialog>
      <div slot="title">é–‹å•Ÿæ‰€é¸é …ç›®</div>
      <div slot="body"></div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onOpenCancelTap_">
          å–æ¶ˆ
        </cr-button>
        <cr-button class="action-button" on-click="onOpenConfirmTap_">
          é–‹å•Ÿ
        </cr-button>
      </div>
    </cr-dialog>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`,behaviors:[StoreClient$1],properties:{menuCommands_:{type:Array,computed:"computeMenuCommands_(menuSource_)"},menuIds_:Object,hasAnySublabel_:{type:Boolean,reflectToAttribute:true,computed:"computeHasAnySublabel_(menuCommands_, menuIds_)"},menuSource_:{type:Number,value:MenuSource.NONE},canPaste_:Boolean,globalCanEdit_:Boolean},confirmOpenCallback_:null,attached(){assert(CommandManager.instance_===null);CommandManager.instance_=this;this.browserProxy_=BrowserProxy.getInstance();this.watch("globalCanEdit_",state=>state.prefs.canEdit);this.updateFromStore();this.shortcuts_=new Map;this.addShortcut_(Command.EDIT,"F2","Enter");this.addShortcut_(Command.DELETE,"Delete","Delete Backspace");this.addShortcut_(Command.OPEN,"Enter","Meta|o");this.addShortcut_(Command.OPEN_NEW_TAB,"Ctrl|Enter","Meta|Enter");this.addShortcut_(Command.OPEN_NEW_WINDOW,"Shift|Enter");this.addShortcut_(Command.UNDO,"Ctrl|z","Meta|z");this.addShortcut_(Command.REDO,"Ctrl|y Ctrl|Shift|Z","Meta|Shift|Z");this.addShortcut_(Command.SELECT_ALL,"Ctrl|a","Meta|a");this.addShortcut_(Command.DESELECT_ALL,"Escape");this.addShortcut_(Command.CUT,"Ctrl|x","Meta|x");this.addShortcut_(Command.COPY,"Ctrl|c","Meta|c");this.addShortcut_(Command.PASTE,"Ctrl|v","Meta|v");this.boundListeners_=new Map;const addDocumentListener=(eventName,handler)=>{assert(!this.boundListeners_.has(eventName));const boundListener=handler.bind(this);this.boundListeners_.set(eventName,boundListener);document.addEventListener(eventName,boundListener)};addDocumentListener("open-command-menu",this.onOpenCommandMenu_);addDocumentListener("keydown",this.onKeydown_);const addDocumentListenerForCommand=(eventName,command)=>{addDocumentListener(eventName,e=>{if(e.path[0].tagName==="INPUT"){return}const items=this.getState().selection.items;if(this.canExecute(command,items)){this.handle(command,items)}})};addDocumentListenerForCommand("command-undo",Command.UNDO);addDocumentListenerForCommand("cut",Command.CUT);addDocumentListenerForCommand("copy",Command.COPY);addDocumentListenerForCommand("paste",Command.PASTE);afterNextRender(this,function(){IronA11yAnnouncer.requestAvailability()})},detached(){CommandManager.instance_=null;this.boundListeners_.forEach((handler,eventName)=>document.removeEventListener(eventName,handler))},openCommandMenuAtPosition(x,y,source,items){this.menuSource_=source;this.menuIds_=items||this.getState().selection.items;const dropdown=this.$.dropdown.get();flush();DialogFocusManager.getInstance().showDialog(dropdown.getDialog(),function(){dropdown.showAtPosition({top:y,left:x})})},openCommandMenuAtElement(target,source){this.menuSource_=source;this.menuIds_=this.getState().selection.items;const dropdown=this.$.dropdown.get();flush();DialogFocusManager.getInstance().showDialog(dropdown.getDialog(),function(){dropdown.showAt(target)})},closeCommandMenu(){this.menuIds_=new Set;this.menuSource_=MenuSource.NONE;this.$.dropdown.get().close()},canExecute(command,itemIds){const state=this.getState();switch(command){case Command.OPEN:return itemIds.size>0;case Command.UNDO:case Command.REDO:return this.globalCanEdit_;case Command.SELECT_ALL:case Command.DESELECT_ALL:return true;case Command.COPY:return itemIds.size>0;case Command.CUT:return itemIds.size>0&&!this.containsMatchingNode_(itemIds,function(node){return!canEditNode(state,node.id)});case Command.PASTE:return state.search.term===""&&canReorderChildren(state,state.selectedFolder);default:return this.isCommandVisible_(command,itemIds)&&this.isCommandEnabled_(command,itemIds)}},isCommandVisible_(command,itemIds){switch(command){case Command.EDIT:return itemIds.size===1&&this.globalCanEdit_;case Command.PASTE:return this.globalCanEdit_;case Command.CUT:case Command.COPY:return itemIds.size>=1&&this.globalCanEdit_;case Command.COPY_URL:return this.isSingleBookmark_(itemIds);case Command.DELETE:return itemIds.size>0&&this.globalCanEdit_;case Command.SHOW_IN_FOLDER:return this.menuSource_===MenuSource.ITEM&&itemIds.size===1&&this.getState().search.term!==""&&!this.containsMatchingNode_(itemIds,function(node){return!node.parentId||node.parentId===ROOT_NODE_ID});case Command.OPEN_NEW_TAB:case Command.OPEN_NEW_WINDOW:case Command.OPEN_INCOGNITO:return itemIds.size>0;case Command.ADD_BOOKMARK:case Command.ADD_FOLDER:case Command.SORT:case Command.EXPORT:case Command.IMPORT:case Command.HELP_CENTER:return true}return assert(false)},isCommandEnabled_(command,itemIds){const state=this.getState();switch(command){case Command.EDIT:case Command.DELETE:return!this.containsMatchingNode_(itemIds,function(node){return!canEditNode(state,node.id)});case Command.OPEN_NEW_TAB:case Command.OPEN_NEW_WINDOW:return this.expandUrls_(itemIds).length>0;case Command.OPEN_INCOGNITO:return this.expandUrls_(itemIds).length>0&&state.prefs.incognitoAvailability!==IncognitoAvailability.DISABLED;case Command.SORT:return this.canChangeList_()&&state.nodes[state.selectedFolder].children.length>1;case Command.ADD_BOOKMARK:case Command.ADD_FOLDER:return this.canChangeList_();case Command.IMPORT:return this.globalCanEdit_;case Command.PASTE:return this.canPaste_;default:return true}},canChangeList_(){const state=this.getState();return state.search.term===""&&canReorderChildren(state,state.selectedFolder)},handle(command,itemIds){const state=this.getState();switch(command){case Command.EDIT:{const id=Array.from(itemIds)[0];this.$.editDialog.get().showEditDialog(state.nodes[id]);break}case Command.COPY_URL:case Command.COPY:{const idList=Array.from(itemIds);chrome.bookmarkManagerPrivate.copy(idList,()=>{let labelPromise;if(command===Command.COPY_URL){labelPromise=Promise.resolve(loadTimeData.getString("toastUrlCopied"))}else if(idList.length===1){labelPromise=Promise.resolve(loadTimeData.getString("toastItemCopied"))}else{labelPromise=this.browserProxy_.getPluralString("toastItemsCopied",idList.length)}this.showTitleToast_(labelPromise,state.nodes[idList[0]].title,false)});break}case Command.SHOW_IN_FOLDER:{const id=Array.from(itemIds)[0];this.dispatch(selectFolder(assert(state.nodes[id].parentId),state.nodes));DialogFocusManager.getInstance().clearFocus();this.fire("highlight-items",[id]);break}case Command.DELETE:{const idList=Array.from(this.minimizeDeletionSet_(itemIds));const title=state.nodes[idList[0]].title;let labelPromise;if(idList.length===1){labelPromise=Promise.resolve(loadTimeData.getString("toastItemDeleted"))}else{labelPromise=this.browserProxy_.getPluralString("toastItemsDeleted",idList.length)}chrome.bookmarkManagerPrivate.removeTrees(idList,()=>{this.showTitleToast_(labelPromise,title,true)});break}case Command.UNDO:chrome.bookmarkManagerPrivate.undo();getToastManager().hide();break;case Command.REDO:chrome.bookmarkManagerPrivate.redo();break;case Command.OPEN_NEW_TAB:case Command.OPEN_NEW_WINDOW:case Command.OPEN_INCOGNITO:this.openUrls_(this.expandUrls_(itemIds),command);break;case Command.OPEN:if(this.isFolder_(itemIds)){const folderId=Array.from(itemIds)[0];this.dispatch(selectFolder(folderId,state.nodes))}else{this.openUrls_(this.expandUrls_(itemIds),command)}break;case Command.SELECT_ALL:const displayedIds=getDisplayedList(state);this.dispatch(selectAll(displayedIds,state));break;case Command.DESELECT_ALL:this.dispatch(deselectItems());break;case Command.CUT:chrome.bookmarkManagerPrivate.cut(Array.from(itemIds));break;case Command.PASTE:const selectedFolder=state.selectedFolder;const selectedItems=state.selection.items;trackUpdatedItems();chrome.bookmarkManagerPrivate.paste(selectedFolder,Array.from(selectedItems),highlightUpdatedItems);break;case Command.SORT:chrome.bookmarkManagerPrivate.sortChildren(assert(state.selectedFolder));getToastManager().querySelector("dom-if").if=true;getToastManager().show(loadTimeData.getString("toastFolderSorted"));this.fire("iron-announce",{text:loadTimeData.getString("undoDescription")});break;case Command.ADD_BOOKMARK:this.$.editDialog.get().showAddDialog(false,assert(state.selectedFolder));break;case Command.ADD_FOLDER:this.$.editDialog.get().showAddDialog(true,assert(state.selectedFolder));break;case Command.IMPORT:chrome.bookmarks.import();break;case Command.EXPORT:chrome.bookmarks.export();break;case Command.HELP_CENTER:window.open("https://support.google.com/chrome/?p=bookmarks");break;default:assert(false)}this.recordCommandHistogram_(itemIds,"BookmarkManager.CommandExecuted",command)},handleKeyEvent(e,itemIds){for(const commandTuple of this.shortcuts_){const command=commandTuple[0];const shortcut=commandTuple[1];if(shortcut.matchesEvent(e)&&this.canExecute(command,itemIds)){this.handle(command,itemIds);this.recordCommandHistogram_(itemIds,"BookmarkManager.CommandExecutedFromKeyboard",command);e.stopPropagation();e.preventDefault();return true}}return false},addShortcut_(command,shortcut,macShortcut){shortcut=isMac&&macShortcut?macShortcut:shortcut;this.shortcuts_.set(command,new KeyboardShortcutList(shortcut))},minimizeDeletionSet_(itemIds){const minimizedSet=new Set;const nodes=this.getState().nodes;itemIds.forEach(function(itemId){let currentId=itemId;while(currentId!==ROOT_NODE_ID){currentId=assert(nodes[currentId].parentId);if(itemIds.has(currentId)){return}}minimizedSet.add(itemId)});return minimizedSet},openUrls_(urls,command){assert(command===Command.OPEN||command===Command.OPEN_NEW_TAB||command===Command.OPEN_NEW_WINDOW||command===Command.OPEN_INCOGNITO);if(urls.length===0){return}const openUrlsCallback=function(){const incognito=command===Command.OPEN_INCOGNITO;if(command===Command.OPEN_NEW_WINDOW||incognito){chrome.windows.create({url:urls,incognito:incognito})}else{if(command===Command.OPEN){chrome.tabs.create({url:urls.shift(),active:true})}urls.forEach(function(url){chrome.tabs.create({url:url,active:false})})}};if(urls.length<=OPEN_CONFIRMATION_LIMIT){openUrlsCallback();return}this.confirmOpenCallback_=openUrlsCallback;const dialog=this.$.openDialog.get();dialog.querySelector("[slot=body]").textContent=loadTimeData.getStringF("openDialogBody",urls.length);DialogFocusManager.getInstance().showDialog(this.$.openDialog.get())},expandUrls_(itemIds){const urls=[];const nodes=this.getState().nodes;itemIds.forEach(function(id){const node=nodes[id];if(node.url){urls.push(node.url)}else{node.children.forEach(function(childId){const childNode=nodes[childId];if(childNode.url){urls.push(childNode.url)}})}});return urls},containsMatchingNode_(itemIds,predicate){const nodes=this.getState().nodes;return Array.from(itemIds).some(function(id){return predicate(nodes[id])})},isSingleBookmark_(itemIds){return itemIds.size===1&&this.containsMatchingNode_(itemIds,function(node){return!!node.url})},isFolder_(itemIds){return itemIds.size===1&&this.containsMatchingNode_(itemIds,node=>!node.url)},getCommandLabel_(command){const multipleNodes=this.menuIds_.size>1||this.containsMatchingNode_(this.menuIds_,function(node){return!node.url});let label;switch(command){case Command.EDIT:if(this.menuIds_.size!==1){return""}const id=Array.from(this.menuIds_)[0];const itemUrl=this.getState().nodes[id].url;label=itemUrl?"menuEdit":"menuRename";break;case Command.CUT:label="menuCut";break;case Command.COPY:label="menuCopy";break;case Command.COPY_URL:label="menuCopyURL";break;case Command.PASTE:label="menuPaste";break;case Command.DELETE:label="menuDelete";break;case Command.SHOW_IN_FOLDER:label="menuShowInFolder";break;case Command.OPEN_NEW_TAB:label=multipleNodes?"menuOpenAllNewTab":"menuOpenNewTab";break;case Command.OPEN_NEW_WINDOW:label=multipleNodes?"menuOpenAllNewWindow":"menuOpenNewWindow";break;case Command.OPEN_INCOGNITO:label=multipleNodes?"menuOpenAllIncognito":"menuOpenIncognito";break;case Command.SORT:label="menuSort";break;case Command.ADD_BOOKMARK:label="menuAddBookmark";break;case Command.ADD_FOLDER:label="menuAddFolder";break;case Command.IMPORT:label="menuImport";break;case Command.EXPORT:label="menuExport";break;case Command.HELP_CENTER:label="menuHelpCenter";break}assert(label);return loadTimeData.getString(assert(label))},getCommandSublabel_(command){const multipleNodes=this.menuIds_.size>1||this.containsMatchingNode_(this.menuIds_,function(node){return!node.url});switch(command){case Command.OPEN_NEW_TAB:const urls=this.expandUrls_(this.menuIds_);return multipleNodes&&urls.length>0?String(urls.length):"";default:return""}},computeMenuCommands_(){switch(this.menuSource_){case MenuSource.ITEM:case MenuSource.TREE:return[Command.EDIT,Command.SHOW_IN_FOLDER,Command.DELETE,Command.CUT,Command.COPY,Command.COPY_URL,Command.PASTE,Command.OPEN_NEW_TAB,Command.OPEN_NEW_WINDOW,Command.OPEN_INCOGNITO];case MenuSource.TOOLBAR:return[Command.SORT,Command.ADD_BOOKMARK,Command.ADD_FOLDER,Command.IMPORT,Command.EXPORT,Command.HELP_CENTER];case MenuSource.LIST:return[Command.ADD_BOOKMARK,Command.ADD_FOLDER];case MenuSource.NONE:return[]}assert(false)},computeHasAnySublabel_(){if(this.menuIds_===undefined||this.menuCommands_===undefined){return false}return this.menuCommands_.some(command=>this.getCommandSublabel_(command)!=="")},showDividerAfter_(command,itemIds){switch(command){case Command.SORT:case Command.ADD_FOLDER:case Command.EXPORT:return this.menuSource_===MenuSource.TOOLBAR;case Command.DELETE:return this.globalCanEdit_;case Command.PASTE:return this.globalCanEdit_||this.isSingleBookmark_(itemIds)}return false},recordCommandHistogram_(itemIds,histogram,command){if(command===Command.OPEN){command=this.isFolder_(itemIds)?Command.OPEN_FOLDER:Command.OPEN_BOOKMARK}this.browserProxy_.recordInHistogram(histogram,command,Command.MAX_VALUE)},showTitleToast_:async function(labelPromise,title,canUndo){const label=await labelPromise;const pieces=loadTimeData.getSubstitutedStringPieces(label,title).map(function(p){p.collapsible=!!p.arg;return p});getToastManager().querySelector("dom-if").if=canUndo;getToastManager().showForStringPieces(pieces);if(canUndo){this.fire("iron-announce",{text:loadTimeData.getString("undoDescription")})}},updateCanPaste_(targetId){return new Promise(resolve=>{chrome.bookmarkManagerPrivate.canPaste(`${targetId}`,result=>{this.canPaste_=result;resolve()})})},onOpenCommandMenu_:async function(e){await this.updateCanPaste_(e.detail.source);if(e.detail.targetElement){this.openCommandMenuAtElement(e.detail.targetElement,e.detail.source)}else{this.openCommandMenuAtPosition(e.detail.x,e.detail.y,e.detail.source)}this.browserProxy_.recordInHistogram("BookmarkManager.CommandMenuOpened",e.detail.source,MenuSource.NUM_VALUES)},onCommandClick_(e){this.handle(Number(e.currentTarget.getAttribute("command")),assert(this.menuIds_));this.closeCommandMenu()},onKeydown_(e){const path=e.composedPath();if(path[0].tagName==="INPUT"){return}if((e.target===document.body||path.some(el=>el.tagName==="BOOKMARKS-TOOLBAR"))&&!DialogFocusManager.getInstance().hasOpenDialog()){this.handleKeyEvent(e,this.getState().selection.items)}},onMenuMousedown_(e){if(e.path[0].tagName!=="DIALOG"){return}this.closeCommandMenu()},onOpenCancelTap_(){this.$.openDialog.get().cancel()},onOpenConfirmTap_(){this.confirmOpenCallback_();this.$.openDialog.get().close()}});CommandManager.instance_=null;CommandManager.getInstance=function(){return assert(CommandManager.instance_)};// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({is:"bookmarks-folder-node",_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="shared-style" scope="bookmarks-folder-node">:host {
  display: block;
}

#container {
  align-items: center;
    cursor: pointer;
    display: grid;
    grid-template-areas: 'arrow folder label';
    grid-template-columns: 24px 24px auto;
    height: 40px;
    min-width: fit-content;
    overflow: hidden;
    padding-inline-start: calc(var(--node-depth, 0) * 15px);
}

#arrow {
  grid-area: arrow;
    justify-self: center;
    margin: 0;
    --cr-icon-button-size: 40px;
}

#arrow:not([is-open]) {
  transform: rotate(-90deg);
    transition: transform 150ms;
}

.folder-icon {
  grid-area: folder;
    justify-self: center;
}

.menu-label {
  color: var(--folder-inactive-color);
    font-weight: 500;
    grid-area: label;
    padding: 0 6px;
    white-space: nowrap;
}

:host([is-selected-folder_]) .menu-label, :host([is-selected-folder_]) .folder-icon {
  color: var(--interactive-color);
}

@media (prefers-color-scheme: dark) {
.drag-on .menu-label, .drag-on .folder-icon, .drag-on #arrow {
  color: var(--google-grey-refresh-700);
}

}

:host-context([dir='rtl']) #arrow:not([is-open]) {
  transform: rotate(90deg);
}

#arrow[is-open] {
  transform: initial;
}

</style>

<div id="container" on-click="selectFolder_" on-dblclick="toggleFolder_" on-contextmenu="onContextMenu_" tabindex$="[[getTabIndex_(selectedFolder_, itemId)]]" hidden="[[isRootFolder_(depth)]]" role="treeitem" aria-owns="descendants">
  <template is="dom-if" if="[[hasChildFolder_]]">
    <cr-icon-button id="arrow" iron-icon="cr:arrow-drop-down" on-click="toggleFolder_" on-mousedown="preventDefault_" tabindex="-1" is-open$="[[isOpen]]" noink="" aria-hidden="true">
    </cr-icon-button>
  </template>
  <div class="folder-icon" open$="[[isSelectedFolder_]]" no-children$="[[!hasChildFolder_]]">
  </div>
  <div class="menu-label" title="[[item_.title]]">
    [[item_.title]]
  </div>
</div>
<div id="descendants" role="group">
  <template is="dom-if" if="[[isOpen]]">
    <template is="dom-repeat" items="[[item_.children]]" as="child" filter="isFolder_">
      <bookmarks-folder-node item-id="[[child]]" draggable="true" depth="[[getChildDepth_(depth)]]">
      </bookmarks-folder-node>
    </template>
  </template>
</div>
<!--_html_template_end_-->`,behaviors:[StoreClient$1],properties:{itemId:{type:String,observer:"updateFromStore"},depth:{type:Number,observer:"depthChanged_"},isOpen:{type:Boolean,computed:"computeIsOpen_(openState_, depth)"},item_:Object,openState_:Boolean,selectedFolder_:String,searchActive_:Boolean,isSelectedFolder_:{type:Boolean,value:false,reflectToAttribute:true,computed:"computeIsSelected_(itemId, selectedFolder_, searchActive_)"},hasChildFolder_:{type:Boolean,computed:"computeHasChildFolder_(item_.children)"}},listeners:{keydown:"onKeydown_"},observers:["updateAriaExpanded_(hasChildFolder_, isOpen)","scrollIntoViewIfNeeded_(isSelectedFolder_)"],attached(){this.watch("item_",state=>{return state.nodes[this.itemId]});this.watch("openState_",state=>{const bookmarksState=state;return bookmarksState.folderOpenState.has(this.itemId)?bookmarksState.folderOpenState.get(this.itemId):null});this.watch("selectedFolder_",state=>{return state.selectedFolder});this.watch("searchActive_",state=>{return isShowingSearch(state)});this.updateFromStore()},getFocusTarget(){return this.$.container},getDropTarget(){return this.$.container},onKeydown_(e){let yDirection=0;let xDirection=0;let handled=true;if(e.key==="ArrowUp"){yDirection=-1}else if(e.key==="ArrowDown"){yDirection=1}else if(e.key==="ArrowLeft"){xDirection=-1}else if(e.key==="ArrowRight"){xDirection=1}else if(e.key===" "){this.selectFolder_()}else{handled=false}if(this.getComputedStyleValue("direction")==="rtl"){xDirection*=-1}this.changeKeyboardSelection_(xDirection,yDirection,this.root.activeElement);if(!handled){handled=CommandManager.getInstance().handleKeyEvent(e,new Set([this.itemId]))}if(!handled){return}e.preventDefault();e.stopPropagation()},changeKeyboardSelection_(xDirection,yDirection,currentFocus){let newFocusFolderNode=null;const isChildFolderNodeFocused=currentFocus&&currentFocus.tagName==="BOOKMARKS-FOLDER-NODE";if(xDirection===1){if(this.hasChildFolder_){if(!this.isOpen){this.dispatch(changeFolderOpen(this.item_.id,true))}else{yDirection=1}}}else if(xDirection===-1){if(this.hasChildFolder_&&this.isOpen){this.dispatch(changeFolderOpen(this.item_.id,false))}else{const parentFolderNode=this.getParentFolderNode_();if(parentFolderNode.itemId!==ROOT_NODE_ID){parentFolderNode.getFocusTarget().focus()}}}if(!yDirection){return}if(!isChildFolderNodeFocused&&yDirection===1&&this.isOpen){const children=this.getChildFolderNodes_();if(children.length){newFocusFolderNode=children[0]}}if(isChildFolderNodeFocused){if(!newFocusFolderNode){newFocusFolderNode=this.getNextChild_(yDirection===-1,currentFocus)}if(!newFocusFolderNode&&yDirection===-1){newFocusFolderNode=this}}if(!newFocusFolderNode){if(this.itemId!==ROOT_NODE_ID){this.getParentFolderNode_().changeKeyboardSelection_(0,yDirection,this)}return}if(newFocusFolderNode.itemId!==ROOT_NODE_ID){newFocusFolderNode.getFocusTarget().focus()}},getNextChild_(reverse,child){let newFocus=null;const children=this.getChildFolderNodes_();const index=children.indexOf(child);assert(index!==-1);if(reverse){newFocus=index===0?null:children[index-1].getLastVisibleDescendant_()}else if(index<children.length-1){newFocus=children[index+1]}return newFocus},getParentFolderNode_(){let parentFolderNode=this.parentNode;while(parentFolderNode&&parentFolderNode.tagName!=="BOOKMARKS-FOLDER-NODE"){parentFolderNode=parentFolderNode.parentNode||parentFolderNode.host}return parentFolderNode||null},getLastVisibleDescendant_(){const children=this.getChildFolderNodes_();if(!this.isOpen||children.length===0){return this}return children.pop().getLastVisibleDescendant_()},selectFolder_(){if(!this.isSelectedFolder_){this.dispatch(selectFolder(this.itemId,this.getState().nodes))}},onContextMenu_(e){e.preventDefault();this.selectFolder_();CommandManager.getInstance().openCommandMenuAtPosition(e.clientX,e.clientY,MenuSource.TREE,new Set([this.itemId]))},getChildFolderNodes_(){return Array.from(this.root.querySelectorAll("bookmarks-folder-node"))},toggleFolder_(e){this.dispatch(changeFolderOpen(this.itemId,!this.isOpen));e.stopPropagation()},preventDefault_(e){e.preventDefault()},computeIsSelected_(itemId,selectedFolder,searchActive){return itemId===selectedFolder&&!searchActive},computeHasChildFolder_(){return hasChildFolders(this.itemId,this.getState().nodes)},depthChanged_(){this.style.setProperty("--node-depth",String(this.depth));if(this.depth===-1){this.$.descendants.removeAttribute("role")}},getChildDepth_(){return this.depth+1},isFolder_(itemId){return!this.getState().nodes[itemId].url},isRootFolder_(){return this.itemId===ROOT_NODE_ID},getTabIndex_(){return this.selectedFolder_===this.itemId?"0":"-1"},updateAriaExpanded_(hasChildFolder,isOpen){if(hasChildFolder){this.getFocusTarget().setAttribute("aria-expanded",String(isOpen))}else{this.getFocusTarget().removeAttribute("aria-expanded")}},scrollIntoViewIfNeeded_(){if(!this.isSelectedFolder_){return}this.async(()=>this.$.container.scrollIntoViewIfNeeded())},computeIsOpen_(openState,depth){return openState!=null?openState:depth<=FOLDER_OPEN_BY_DEFAULT_DEPTH}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ORPHANS=new Set;const IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:false}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},notifyResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this);this._fireResize()},assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&parentResizable._interestedResizables.indexOf(this)===-1){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(index>-1){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},_subscribeIronResize:function(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(element){return true},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return}if(!useShadow){this._fireResize()}},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:false})},_onIronRequestResizeNotifications:function(event){var target=dom(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function(descendant){if(!this.isAttached){return}this._notifyingDescendant=true;descendant.notifyResize();this._notifyingDescendant=false},_requestResizeNotifications:function(){if(!this.isAttached){return}if(document.readyState==="loading"){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()})}else{this._findParent();if(!this._parentResizable){ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent()}},this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent()}},this)}}},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:true,cancelable:true});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronScrollTargetBehavior={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:true,_scrollTargetChanged:function(scrollTarget,isAttached){if(this._oldScrollTarget){this._toggleScrollListener(false,this._oldScrollTarget);this._oldScrollTarget=null}if(!isAttached){return}if(scrollTarget==="document"){this.scrollTarget=this._doc}else if(typeof scrollTarget==="string"){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector("#"+scrollTarget)}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget)}},_scrollHandler:function scrollHandler(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop}return 0},get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft}return 0},set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top}},set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left}},scroll:function(leftOrOptions,top){var left;if(typeof leftOrOptions==="object"){left=leftOrOptions.left;top=leftOrOptions.top}else{left=leftOrOptions}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top}},get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth}return 0},get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight}return 0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener("scroll",this._boundScrollHandler)}}else{if(this._boundScrollHandler){eventTarget.removeEventListener("scroll",this._boundScrollHandler);this._boundScrollHandler=null}}},toggleScrollListener:function(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);var IOS_TOUCH_SCROLLING=IOS&&IOS[1]>=8;var DEFAULT_PHYSICAL_COUNT=3;var HIDDEN_Y="-10000px";var SECRET_TABINDEX=-100;Polymer({_template:html`<!--css-build:shadow--><style scope="iron-list">:host {
  display: block;
}

@media only screen and (-webkit-max-device-pixel-ratio: 1) {
:host {
  will-change: transform;
}

}

#items {
  ;
        position: relative;
}

:host(:not([grid])) #items > ::slotted(*) {
  width: 100%;
}

#items > ::slotted(*) {
  box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
}

</style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:false,reflectToAttribute:true,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:false},selectedItem:{type:Object,notify:true},selectedItems:{type:Object,notify:true},multiSelection:{type:Boolean,value:false},scrollOffset:{type:Number,value:0},preserveFocus:{type:Boolean,value:false}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[Templatizer,IronResizableBehavior,IronScrollTargetBehavior,OptionalMutableDataBehavior],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:true,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},get _itemsParent(){return dom(dom(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(val){val=val%this._physicalCount;if(val<0){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?Infinity:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(idx==null){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems(function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}})||0;this._firstVisibleIndexVal=idx}return idx},get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(idx==null){if(this.grid){idx=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems(function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)})}this._lastVisibleIndexVal=idx}return idx},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),true)},attached:function(){this._debounce("_render",this._render,animationFrame);this.listen(this,"iron-resize","_resizeHandler");this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler");this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(scrollTarget){this.style.webkitOverflowScrolling=scrollTarget===this?"touch":"";this.style.overflowY=scrollTarget===this?"auto":"";this._lastVisibleIndexVal=null;this._firstVisibleIndexVal=null;this._debounce("_render",this._render,animationFrame)},updateViewportBoundaries:function(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=Boolean(styles.direction==="rtl");this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));var delta=scrollTop-this._scrollPosition;var isScrollingDown=delta>=0;this._scrollPosition=scrollTop;this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(Math.abs(delta)>this._physicalSize&&this._physicalSize>0){delta=delta-this._scrollOffset;var idxAdjustment=Math.round(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition);this._update()}else if(this._physicalCount>0){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),microTask)}},_getReusables:function(fromTop){var ith,lastIth,offsetContent,physicalItemHeight;var idxs=[];var protectedOffsetContent=this._hiddenContentSize*this._ratio;var virtualStart=this._virtualStart;var virtualEnd=this._virtualEnd;var physicalCount=this._physicalCount;var top=this._physicalTop+this._scrollOffset;var bottom=this._physicalBottom+this._scrollOffset;var scrollTop=this._scrollPosition;var scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;lastIth=this._physicalEnd;offsetContent=scrollTop-top}else{ith=this._physicalEnd;lastIth=this._physicalStart;offsetContent=bottom-scrollBottom}while(true){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){if(virtualEnd+idxs.length+1>=this._virtualCount){break}if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{if(virtualStart-idxs.length<=0){break}if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=ith===0?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},_update:function(itemSet,movingUp){if(itemSet&&itemSet.length===0||this._physicalCount===0){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},_createPool:function(size){this._ensureTemplatized();var i,inst;var physicalItems=new Array(size);for(i=0;i<size;i++){inst=this.stamp(null);physicalItems[i]=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}return physicalItems},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);if(this.grid){var correction=nextPhysicalCount%this._itemsPerRow;if(correction&&nextPhysicalCount-correction<=this._physicalCount){nextPhysicalCount+=this._itemsPerRow}nextPhysicalCount-=correction}var delta=nextPhysicalCount-this._physicalCount;var nextIncrease=Math.round(this._physicalCount*.5);if(delta<0){return}if(delta>0){var ts=window.performance.now();[].push.apply(this._physicalItems,this._createPool(delta));for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=Math.round(this._physicalCount*.5)}if(this._virtualEnd>=this._virtualCount-1||nextIncrease===0);else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),microTask)}else if(this._physicalSize<this._optPhysicalSize){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,nextIncrease)),idlePeriod)}},_render:function(){if(!this.isAttached||!this._isVisible){return}if(this._physicalCount!==0){var reusables=this._getReusables(true);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(this._virtualCount>0){this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},_ensureTemplatized:function(){if(this.ctor){return}this._userTemplate=this.queryEffectiveChildren("template");if(!this._userTemplate){console.warn("iron-list requires a template to be provided in light-dom")}var instanceProps={};instanceProps.__key__=true;instanceProps[this.as]=true;instanceProps[this.indexAs]=true;instanceProps[this.selectedAs]=true;instanceProps.tabIndex=true;this._instanceProps=instanceProps;this.templatize(this._userTemplate,this.mutableData)},_gridChanged:function(newGrid,oldGrid){if(typeof oldGrid==="undefined")return;this.notifyResize();flush();newGrid&&this._updateGridMetrics()},_getFocusedElement:function(){function doSearch(node,query){let result=null;let type=node.nodeType;if(type==Node.ELEMENT_NODE||type==Node.DOCUMENT_FRAGMENT_NODE)result=node.querySelector(query);if(result)return result;let child=node.firstChild;while(child!==null&&result===null){result=doSearch(child,query);child=child.nextSibling}if(result)return result;const shadowRoot=node.shadowRoot;return shadowRoot?doSearch(shadowRoot,query):null}const focusWithin=doSearch(this,":focus-within");return focusWithin?doSearch(focusWithin,":focus"):null},_itemsChanged:function(change){var rendering=/^items(\.splices){0,1}$/.test(change.path);var lastFocusedIndex,focusedElement;if(rendering&&this.preserveFocus){lastFocusedIndex=this._focusedVirtualIndex;focusedElement=this._getFocusedElement()}var preservingFocus=rendering&&this.preserveFocus&&focusedElement;if(change.path==="items"){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset&&!preservingFocus){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,animationFrame)}else if(change.path==="items.splices"){this._adjustVirtualIndex(change.value.indexSplices);this._virtualCount=this.items?this.items.length:0;var itemAddedOrRemoved=change.value.indexSplices.some(function(splice){return splice.addedCount>0||splice.removed.length>0});if(itemAddedOrRemoved){var activeElement=this._getActiveElement();if(this.contains(activeElement)){activeElement.blur()}}var affectedIndexRendered=change.value.indexSplices.some(function(splice){return splice.index+splice.addedCount>=this._virtualStart&&splice.index<=this._virtualEnd},this);if(!this._isClientFull()||affectedIndexRendered){this._debounce("_render",this._render,animationFrame)}}else if(change.path!=="items.length"){this._forwardItemPath(change.path,change.value)}if(preservingFocus){flush();focusedElement.blur();this._focusPhysicalItem(Math.min(this.items.length-1,lastFocusedIndex));if(!this._isIndexVisible(this._focusedVirtualIndex)){this.scrollToIndex(this._focusedVirtualIndex)}}},_forwardItemPath:function(path,value){path=path.slice(6);var dot=path.indexOf(".");if(dot===-1){dot=path.length}var isIndexRendered;var pidx;var inst;var offscreenInstance=this.modelForElement(this._offscreenFocusedItem);var vidx=parseInt(path.substring(0,dot),10);isIndexRendered=this._isIndexRendered(vidx);if(isIndexRendered){pidx=this._getPhysicalIndex(vidx);inst=this.modelForElement(this._physicalItems[pidx])}else if(offscreenInstance){inst=offscreenInstance}if(!inst||inst[this.indexAs]!==vidx){return}path=path.substring(dot+1);path=this.as+(path?"."+path:"");inst._setPendingPropertyOrPath(path,value,false,true);inst._flushProperties&&inst._flushProperties();if(isIndexRendered){this._updateMetrics([pidx]);this._positionItems();this._updateScrollerSize()}},_adjustVirtualIndex:function(splices){splices.forEach(function(splice){splice.removed.forEach(this._removeItem,this);if(splice.index<this._virtualStart){var delta=Math.max(splice.addedCount-splice.removed.length,splice.index-this._virtualStart);this._virtualStart=this._virtualStart+delta;if(this._focusedVirtualIndex>=0){this._focusedVirtualIndex=this._focusedVirtualIndex+delta}}},this)},_removeItem:function(item){this.$.selector.deselect(item);if(this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===item){this._removeFocusedItem()}},_iterateItems:function(fn,itemSet){var pidx,vidx,rtn,i;if(arguments.length===2&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}}},_computeVidx:function(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},_assignModels:function(itemSet){this._iterateItems(function(pidx,vidx){var el=this._physicalItems[pidx];var item=this.items&&this.items[vidx];if(item!=null){var inst=this.modelForElement(el);inst.__key__=null;this._forwardProperty(inst,this.as,item);this._forwardProperty(inst,this.selectedAs,this.$.selector.isSelected(item));this._forwardProperty(inst,this.indexAs,vidx);this._forwardProperty(inst,"tabIndex",this._focusedVirtualIndex===vidx?0:-1);this._physicalIndexForKey[inst.__key__]=pidx;inst._flushProperties&&inst._flushProperties(true);el.removeAttribute("hidden")}else{el.setAttribute("hidden","")}},itemSet)},_updateMetrics:function(itemSet){flush();var newPhysicalSize=0;var oldPhysicalSize=0;var prevAvgCount=this._physicalAverageCount;var prevPhysicalAvg=this._physicalAverage;this._iterateItems(function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0},itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=this._itemsPerRow===1?oldPhysicalSize:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200;this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200;this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var y=this._physicalTop;if(this.grid){var totalItemWidth=this._itemsPerRow*this._itemWidth;var rowOffset=(this._viewportWidth-totalItemWidth)/2;this._iterateItems(function(pidx,vidx){var modulus=vidx%this._itemsPerRow;var x=Math.floor(modulus*this._itemWidth+rowOffset);if(this._isRTL){x=x*-1}this.translate3d(x+"px",y+"px",0,this._physicalItems[pidx]);if(this._shouldRenderNextRow(vidx)){y+=this._rowHeight}})}else{const order=[];this._iterateItems(function(pidx,vidx){const item=this._physicalItems[pidx];this.translate3d(0,y+"px",0,item);y+=this._physicalSizes[pidx];const itemId=item.id;if(itemId){order.push(itemId)}});if(order.length){this.setAttribute("aria-owns",order.join(" "))}}},_getPhysicalSizeIncrement:function(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},_shouldRenderNextRow:function(vidx){return vidx%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var deltaHeight=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(deltaHeight!==0){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollPosition;if(!IOS_TOUCH_SCROLLING&&scrollTop>0){this._resetScrollPosition(scrollTop-deltaHeight)}}},_resetScrollPosition:function(pos){if(this.scrollTarget&&pos>=0){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},_updateScrollerSize:function(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||this._scrollHeight===0;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},scrollToItem:function(item){return this.scrollToIndex(this.items.indexOf(item))},scrollToIndex:function(idx){if(typeof idx!=="number"||idx<0||idx>this.items.length-1){return}flush();if(this._physicalCount===0){return}idx=this._clamp(idx,0,this._virtualCount-1);if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-this._itemsPerRow*2:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart;var currentVirtualItem=this._virtualStart;var targetOffsetTop=0;var hiddenContentSize=this._hiddenContentSize;while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(true);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},_resetAverage:function(){this._physicalAverage=0;this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(this._isVisible){this.updateViewportBoundaries();this.toggleScrollListener(true);this._resetAverage();this._render()}else{this.toggleScrollListener(false)}},animationFrame)},selectItem:function(item){return this.selectIndex(this.items.indexOf(item))},selectIndex:function(index){if(index<0||index>=this._virtualCount){return}if(!this.multiSelection&&this.selectedItem){this.clearSelection()}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);if(model){model[this.selectedAs]=true}this.updateSizeForIndex(index)}this.$.selector.selectIndex(index)},deselectItem:function(item){return this.deselectIndex(this.items.indexOf(item))},deselectIndex:function(index){if(index<0||index>=this._virtualCount){return}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);model[this.selectedAs]=false;this.updateSizeForIndex(index)}this.$.selector.deselectIndex(index)},toggleSelectionForItem:function(item){return this.toggleSelectionForIndex(this.items.indexOf(item))},toggleSelectionForIndex:function(index){var isSelected=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(index):this.$.selector.isSelected(this.items[index]);isSelected?this.deselectIndex(index):this.selectIndex(index)},clearSelection:function(){this._iterateItems(function(pidx,vidx){this.modelForElement(this._physicalItems[pidx])[this.selectedAs]=false});this.$.selector.clearSelection()},_selectionEnabledChanged:function(selectionEnabled){var handler=selectionEnabled?this.listen:this.unlisten;handler.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var model=this.modelForElement(e.target);if(!model){return}var modelTabIndex,activeElTabIndex;var target=dom(e).path[0];var activeEl=this._getActiveElement();var physicalItem=this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];if(target.localName==="input"||target.localName==="button"||target.localName==="select"){return}modelTabIndex=model.tabIndex;model.tabIndex=SECRET_TABINDEX;activeElTabIndex=activeEl?activeEl.tabIndex:-1;model.tabIndex=modelTabIndex;if(activeEl&&physicalItem!==activeEl&&physicalItem.contains(activeEl)&&activeElTabIndex!==SECRET_TABINDEX){return}this.toggleSelectionForItem(model[this.as])},_multiSelectionChanged:function(multiSelection){this.clearSelection();this.$.selector.multi=multiSelection},updateSizeForItem:function(item){return this.updateSizeForIndex(this.items.indexOf(item))},updateSizeForIndex:function(index){if(!this._isIndexRendered(index)){return null}this._updateMetrics([this._getPhysicalIndex(index)]);this._positionItems();return null},_manageFocus:function(){var fidx=this._focusedVirtualIndex;if(fidx>=0&&fidx<this._virtualCount){if(this._isIndexRendered(fidx)){this._restoreFocusedItem()}else{this._createFocusBackfillItem()}}else if(this._virtualCount>0&&this._physicalCount>0){this._focusedPhysicalIndex=this._physicalStart;this._focusedVirtualIndex=this._virtualStart;this._focusedItem=this._physicalItems[this._physicalStart]}},_convertIndexToCompleteRow:function(idx){this._itemsPerRow=this._itemsPerRow||1;return this.grid?Math.ceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_isIndexVisible:function(idx){return idx>=this.firstVisibleIndex&&idx<=this.lastVisibleIndex},_getPhysicalIndex:function(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},focusItem:function(idx){this._focusPhysicalItem(idx)},_focusPhysicalItem:function(idx){if(idx<0||idx>=this._virtualCount){return}this._restoreFocusedItem();if(!this._isIndexRendered(idx)){this.scrollToIndex(idx)}var physicalItem=this._physicalItems[this._getPhysicalIndex(idx)];var model=this.modelForElement(physicalItem);var focusable;model.tabIndex=SECRET_TABINDEX;if(physicalItem.tabIndex===SECRET_TABINDEX){focusable=physicalItem}if(!focusable){focusable=dom(physicalItem).querySelector('[tabindex="'+SECRET_TABINDEX+'"]')}model.tabIndex=0;this._focusedVirtualIndex=idx;focusable&&focusable.focus()},_removeFocusedItem:function(){if(this._offscreenFocusedItem){this._itemsParent.removeChild(this._offscreenFocusedItem)}this._offscreenFocusedItem=null;this._focusBackfillItem=null;this._focusedItem=null;this._focusedVirtualIndex=-1;this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var fpidx=this._focusedPhysicalIndex;if(this._offscreenFocusedItem||this._focusedVirtualIndex<0){return}if(!this._focusBackfillItem){var inst=this.stamp(null);this._focusBackfillItem=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}this._offscreenFocusedItem=this._physicalItems[fpidx];this.modelForElement(this._offscreenFocusedItem).tabIndex=0;this._physicalItems[fpidx]=this._focusBackfillItem;this._focusedPhysicalIndex=fpidx;this.translate3d(0,HIDDEN_Y,0,this._offscreenFocusedItem)},_restoreFocusedItem:function(){if(!this._offscreenFocusedItem||this._focusedVirtualIndex<0){return}this._assignModels();var fpidx=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex);var onScreenItem=this._physicalItems[fpidx];if(!onScreenItem){return}var onScreenInstance=this.modelForElement(onScreenItem);var offScreenInstance=this.modelForElement(this._offscreenFocusedItem);if(onScreenInstance[this.as]===offScreenInstance[this.as]){this._focusBackfillItem=onScreenItem;onScreenInstance.tabIndex=-1;this._physicalItems[fpidx]=this._offscreenFocusedItem;this.translate3d(0,HIDDEN_Y,0,this._focusBackfillItem)}else{this._removeFocusedItem();this._focusBackfillItem=null}this._offscreenFocusedItem=null},_didFocus:function(e){var targetModel=this.modelForElement(e.target);var focusedModel=this.modelForElement(this._focusedItem);var hasOffscreenFocusedItem=this._offscreenFocusedItem!==null;var fidx=this._focusedVirtualIndex;if(!targetModel){return}if(focusedModel===targetModel){if(!this._isIndexVisible(fidx)){this.scrollToIndex(fidx)}}else{this._restoreFocusedItem();if(focusedModel){focusedModel.tabIndex=-1}targetModel.tabIndex=0;fidx=targetModel[this.indexAs];this._focusedVirtualIndex=fidx;this._focusedPhysicalIndex=this._getPhysicalIndex(fidx);this._focusedItem=this._physicalItems[this._focusedPhysicalIndex];if(hasOffscreenFocusedItem&&!this._offscreenFocusedItem){this._update()}}},_keydownHandler:function(e){switch(e.keyCode){case 40:if(this._focusedVirtualIndex<this._virtualCount-1)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:if(this._focusedVirtualIndex>0)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex);if(this.selectionEnabled)this._selectionHandler(e);break}},_clamp:function(v,min,max){return Math.min(max,Math.max(min,v))},_debounce:function(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer$1.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name])},_forwardProperty:function(inst,name,value){inst._setPendingProperty(name,value)},_forwardHostPropV2:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).forwardHostProp(prop,value)}},this)},_notifyInstancePropV2:function(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.indexAs];if(prop==this.as){this.items[idx]=value}this.notifyPath(translate(this.as,"items."+idx,prop),value)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(inst,path,value){if(path.indexOf(this.as+".")===0){this.notifyPath("items."+inst.__key__+"."+path.slice(this.as.length+1),value)}},_forwardParentPath:function(path,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).notifyPath(path,value)}},this)},_forwardParentProp:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item)[prop]=value}},this)},_getActiveElement:function(){var itemsHost=this._itemsParent.node.domHost;return dom(itemsHost?itemsHost.root:document).activeElement}});// Copyright 2016 The Chromium Authors. All rights reserved.
function getSupportedScaleFactors(){const supportedScaleFactors=[];if(!isIOS){supportedScaleFactors.push(1)}if(isMac||isChromeOS||isWindows||isLinux){supportedScaleFactors.push(2)}else{supportedScaleFactors.push(window.devicePixelRatio)}return supportedScaleFactors}function getUrlForCss(s){const s2=s.replace(/(\(|\)|\,|\s|\'|\"|\\)/g,"\\$1");return`url("${s2}")`}function getImageSet(path){const supportedScaleFactors=getSupportedScaleFactors();const replaceStartIndex=path.indexOf("SCALEFACTOR");if(replaceStartIndex<0){return getUrlForCss(path)}let s="";for(let i=0;i<supportedScaleFactors.length;++i){const scaleFactor=supportedScaleFactors[i];const pathWithScaleFactor=path.substr(0,replaceStartIndex)+scaleFactor+path.substr(replaceStartIndex+"scalefactor".length);s+=getUrlForCss(pathWithScaleFactor)+" "+scaleFactor+"x";if(i!==supportedScaleFactors.length-1){s+=", "}}return"-webkit-image-set("+s+")"}function getBaseFaviconUrl(){const faviconUrl=new URL("chrome://favicon2/");faviconUrl.searchParams.set("size","16");faviconUrl.searchParams.set("scale_factor","SCALEFACTORx");return faviconUrl}function getFaviconForPageURL(url,isSyncedUrlForHistoryUi,remoteIconUrlForUma=""){const faviconUrl=getBaseFaviconUrl();faviconUrl.searchParams.set("page_url",url);const fallback=isSyncedUrlForHistoryUi?"1":"0";faviconUrl.searchParams.set("allow_google_server_fallback",fallback);if(isSyncedUrlForHistoryUi){faviconUrl.searchParams.set("icon_url",remoteIconUrlForUma)}return getImageSet(faviconUrl.toString())}// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({is:"bookmarks-item",_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="shared-style cr-icons" scope="bookmarks-item">:host {
  align-items: center;
    color: inherit;
    display: flex;
    flex-direction: row;
    height: 40px;
    padding-inline-start: 20px;
    position: relative;
    text-decoration: none;
    user-select: none;
}

:host([is-selected-item_]) {
  background-color: var(--highlight-color);
}

:host([is-selected-item_]) cr-icon-button {
  --cr-icon-button-fill-color-focus: var(--highlight-color);
}

@media (prefers-color-scheme: dark) {
:host([is-selected-item_]), :host([is-selected-item_]) .folder-icon {
  color: var(--google-grey-refresh-700);
}

}

#website-title {
  color: var(--cr-primary-text-color);
    flex: 1;
    margin-inline-start: 20px;
    text-decoration: none;
}

:host([is-selected-item_]) #website-title {
  flex: 0 auto;
}

@media (prefers-color-scheme: dark) {
:host([is-selected-item_]) #website-title {
  color: var(--google-grey-900);
}

}

#website-url {
  color: rgba(0, 0, 0, 0.54);
    display: none;
    flex: 1;
    margin-inline-start: 20px;
    min-width: 100px;
}

@media (prefers-color-scheme: dark) {
#website-url {
  color: var(--google-grey-800);
}

}

:host([is-selected-item_]) #website-url {
  display: block;
}

#icon {
  flex: none;
}

cr-icon-button {
  margin-inline-end: 12px;
}

@media (prefers-color-scheme: dark) {
:host([is-selected-item_]) cr-icon-button {
  --cr-icon-button-fill-color: var(--google-grey-700);
}

}

:host(:focus) {
  z-index: 1;
}

.elided-text {
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

</style>
<div id="icon"></div>
<div id="website-title" class="elided-text" title="[[item_.title]]">
  [[item_.title]]
</div>
<div id="website-url" class="elided-text" title="[[item_.url]]">
  [[item_.url]]
</div>
<cr-icon-button class="icon-more-vert" id="menuButton" tabindex="[[ironListTabIndex]]" title="æ›´å¤šå‹•ä½œ" aria-label$="[[getButtonAriaLabel_(item_, isSelectedItem_,
        isMultiSelect_)]]" on-click="onMenuButtonClick_" aria-haspopup="menu"></cr-icon-button>
<!--_html_template_end_-->`,behaviors:[StoreClient$1],properties:{itemId:{type:String,observer:"onItemIdChanged_"},ironListTabIndex:Number,item_:{type:Object,observer:"onItemChanged_"},isSelectedItem_:{type:Boolean,reflectToAttribute:true},isMultiSelect_:Boolean,isFolder_:Boolean,lastTouchPoints_:Number},observers:["updateFavicon_(item_.url)"],listeners:{click:"onClick_",dblclick:"onDblClick_",contextmenu:"onContextMenu_",keydown:"onKeydown_",auxclick:"onMiddleClick_",mousedown:"cancelMiddleMouseBehavior_",mouseup:"cancelMiddleMouseBehavior_",touchstart:"onTouchStart_"},attached(){this.watch("item_",store=>store.nodes[this.itemId]);this.watch("isSelectedItem_",store=>store.selection.items.has(this.itemId));this.watch("isMultiSelect_",store=>store.selection.items.size>1);this.updateFromStore()},focusMenuButton(){focusWithoutInk(this.$.menuButton)},getDropTarget(){return this},onContextMenu_(e){e.preventDefault();e.stopPropagation();if(e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents&&this.lastTouchPoints_!==2){return}this.focus();if(!this.isSelectedItem_){this.selectThisItem_()}this.fire("open-command-menu",{x:e.clientX,y:e.clientY,source:MenuSource.ITEM})},onMenuButtonClick_(e){e.stopPropagation();e.preventDefault();if(!this.isMultiSelectMenu_()){this.selectThisItem_()}this.fire("open-command-menu",{targetElement:e.target,source:MenuSource.ITEM})},selectThisItem_(){this.dispatch(selectItem(this.itemId,this.getState(),{clear:true,range:false,toggle:false}))},onItemIdChanged_(){assert(this.getState().nodes[this.itemId]);this.updateFromStore()},onItemChanged_(){this.isFolder_=!this.item_.url;this.setAttribute("aria-label",this.item_.title||this.item_.url||loadTimeData.getString("folderLabel"))},onClick_(e){if(e.detail!==2){const addKey=isMac?e.metaKey:e.ctrlKey;this.dispatch(selectItem(this.itemId,this.getState(),{clear:!addKey,range:e.shiftKey,toggle:addKey&&!e.shiftKey}))}e.stopPropagation();e.preventDefault()},onKeydown_(e){if(e.key==="ArrowLeft"){this.focus()}else if(e.key==="ArrowRight"){this.$.menuButton.focus()}},onDblClick_(e){if(!this.isSelectedItem_){this.selectThisItem_()}const commandManager=CommandManager.getInstance();const itemSet=this.getState().selection.items;if(commandManager.canExecute(Command.OPEN,itemSet)){commandManager.handle(Command.OPEN,itemSet)}},onMiddleClick_(e){if(e.button!==1){return}this.selectThisItem_();if(this.isFolder_){return}const commandManager=CommandManager.getInstance();const itemSet=this.getState().selection.items;const command=e.shiftKey?Command.OPEN:Command.OPEN_NEW_TAB;if(commandManager.canExecute(command,itemSet)){commandManager.handle(command,itemSet)}},onTouchStart_(e){this.lastTouchPoints_=e.touches.length},cancelMiddleMouseBehavior_(e){if(e.button===1){e.preventDefault()}},updateFavicon_(url){this.$.icon.className=url?"website-icon":"folder-icon";this.$.icon.style.backgroundImage=url?getFaviconForPageURL(url,false):""},getButtonAriaLabel_(){if(!this.item_){return""}if(this.isMultiSelectMenu_()){return loadTimeData.getStringF("moreActionsMultiButtonAxLabel")}return loadTimeData.getStringF("moreActionsButtonAxLabel",this.item_.title)},isMultiSelectMenu_(){return this.isSelectedItem_&&this.isMultiSelect_}});// Copyright 2018 The Chromium Authors. All rights reserved.
const ListPropertyUpdateBehavior={updateList(propertyPath,itemUidGetter,updatedList,uidBasedUpdate=false){const list=this.get(propertyPath);const splices=calculateSplices(updatedList.map(itemUidGetter),list.map(itemUidGetter));splices.forEach(splice=>{const index=splice.index;const deleteCount=splice.removed.length;splice.removed=list.slice(index,index+deleteCount);splice.object=list;splice.type="splice";const added=updatedList.slice(index,index+splice.addedCount);const spliceParams=[index,deleteCount].concat(added);list.splice.apply(list,spliceParams)});let updated=splices.length>0;if(!uidBasedUpdate){list.forEach((item,index)=>{const updatedItem=updatedList[index];if(JSON.stringify(item)!==JSON.stringify(updatedItem)){this.set([propertyPath,index],updatedItem);updated=true}})}if(splices.length>0){this.notifySplices(propertyPath,splices)}return updated}};// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({is:"bookmarks-list",_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="shared-style" scope="bookmarks-list">:host {
  color: var(--cr-secondary-text-color);
    min-width: 300px;
    overflow-y: auto;
    padding-bottom: 24px;
    padding-inline-end: var(--card-padding-side);
    padding-inline-start: calc(var(--card-padding-side) -
        var(--splitter-width));
    padding-top: 24px;
}

#list {
  box-shadow: var(--cr-card-elevation_-_box-shadow);
    background-color: var(--cr-card-background-color);
    border-radius: var(--cr-card-border-radius);
    margin: 0 auto;
    max-width: var(--card-max-width);
    padding: 8px 0;
}

.centered-message {
  align-items: center;
    color: var(--md-loading-message-color);
    cursor: default;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    height: 100%;
    justify-content: center;
    user-select: none;
    white-space: nowrap;
}

[role='row']:focus-within {
  z-index: 1;
}

</style>
<iron-list id="list" items="[[displayedList_]]" hidden$="[[isEmptyList_(displayedList_.length)]]" role="grid" aria-label="æ›¸ç±¤æ¸…å–®">
  <template>
    <div role="row" id$="bookmark_[[index]]" aria-rowindex$="[[getAriaRowindex_(index)]]">
      <bookmarks-item item-id="[[item.id]]" draggable="true" role="gridcell" tabindex$="[[tabIndex]]" iron-list-tab-index="[[tabIndex]]">
      </bookmarks-item>
    </div>
  </template>
</iron-list>
<div id="message" class="centered-message" hidden$="[[!isEmptyList_(displayedList_.length)]]">
  [[emptyListMessage_(searchTerm_)]]
</div>
<!--_html_template_end_-->`,behaviors:[StoreClient$1,ListPropertyUpdateBehavior],properties:{displayedList_:{type:Array,value(){return[]}},displayedIds_:{type:Array,observer:"onDisplayedIdsChanged_"},searchTerm_:{type:String,observer:"onDisplayedListSourceChange_"},selectedFolder_:{type:String,observer:"onDisplayedListSourceChange_"},selectedItems_:Object},listeners:{click:"deselectItems_",contextmenu:"onContextMenu_","open-command-menu":"onOpenCommandMenu_"},attached(){const list=this.$.list;list.scrollTarget=this;this.watch("displayedIds_",function(state){return getDisplayedList(state)});this.watch("searchTerm_",function(state){return state.search.term});this.watch("selectedFolder_",function(state){return state.selectedFolder});this.watch("selectedItems_",({selection:{items:items}})=>items);this.updateFromStore();this.$.list.addEventListener("keydown",this.onItemKeydown_.bind(this),true);this.boundOnHighlightItems_=this.onHighlightItems_.bind(this);document.addEventListener("highlight-items",this.boundOnHighlightItems_);afterNextRender(this,function(){IronA11yAnnouncer.requestAvailability()})},detached(){document.removeEventListener("highlight-items",this.boundOnHighlightItems_)},getDropTarget(){return this.$.message},onDisplayedIdsChanged_:async function(newValue,oldValue){const updatedList=newValue.map(id=>({id:id}));let skipFocus=false;let selectIndex=-1;if(this.matches(":focus-within")){if(this.selectedItems_.size>0){const selectedId=Array.from(this.selectedItems_)[0];skipFocus=newValue.some(id=>id===selectedId);selectIndex=this.displayedList_.findIndex(({id:id})=>selectedId===id)}if(selectIndex===-1&&updatedList.length>0){selectIndex=0}else{selectIndex=Math.min(selectIndex,updatedList.length-1)}}this.updateList("displayedList_",item=>item.id,updatedList);this.$.list.fire("iron-resize");const label=await BrowserProxy.getInstance().getPluralString("listChanged",this.displayedList_.length);this.fire("iron-announce",{text:label});if(!skipFocus&&selectIndex>-1){setTimeout(()=>{this.$.list.focusItem(selectIndex);const item=getDeepActiveElement();if(item){item.focusMenuButton()}})}},onDisplayedListSourceChange_(){this.scrollTop=0},scrollToId_(itemId){const index=this.displayedIds_.indexOf(itemId);const list=this.$.list;if(index>=0&&index<list.firstVisibleIndex||index>list.lastVisibleIndex){list.scrollToIndex(index)}},emptyListMessage_(){let emptyListMessage="noSearchResults";if(!this.searchTerm_){emptyListMessage=canReorderChildren(this.getState(),this.getState().selectedFolder)?"emptyList":"emptyUnmodifiableList"}return loadTimeData.getString(emptyListMessage)},isEmptyList_(){return this.displayedList_.length===0},deselectItems_(){this.dispatch(deselectItems())},getIndexForItemElement_(el){return this.$.list.modelForElement(el).index},onOpenCommandMenu_(e){if(e.detail.source===MenuSource.ITEM){this.scrollToId_(e.composedPath()[0].itemId)}},onHighlightItems_(e){const toHighlight=e.detail.filter(item=>this.displayedIds_.indexOf(item)!==-1);if(toHighlight.length<=0){return}const leadId=toHighlight[0];this.dispatch(selectAll(toHighlight,this.getState(),leadId));this.async(function(){this.scrollToId_(leadId);const leadIndex=this.displayedIds_.indexOf(leadId);assert(leadIndex!==-1);this.$.list.focusItem(leadIndex)})},onItemKeydown_(e){let handled=true;const list=this.$.list;let focusMoved=false;let focusedIndex=this.getIndexForItemElement_(e.target);const oldFocusedIndex=focusedIndex;const cursorModifier=isMac?e.metaKey:e.ctrlKey;if(e.key==="ArrowUp"){focusedIndex--;focusMoved=true}else if(e.key==="ArrowDown"){focusedIndex++;focusMoved=true;e.preventDefault()}else if(e.key==="Home"){focusedIndex=0;focusMoved=true}else if(e.key==="End"){focusedIndex=list.items.length-1;focusMoved=true}else if(e.key===" "&&cursorModifier){this.dispatch(selectItem(this.displayedIds_[focusedIndex],this.getState(),{clear:false,range:false,toggle:true}))}else{handled=false}if(focusMoved){focusedIndex=Math.min(list.items.length-1,Math.max(0,focusedIndex));list.focusItem(focusedIndex);if(cursorModifier&&!e.shiftKey){this.dispatch(updateAnchor(this.displayedIds_[focusedIndex]))}else{if(e.shiftKey&&this.getState().selection.anchor===null){this.dispatch(updateAnchor(this.displayedIds_[oldFocusedIndex]))}const config={clear:!cursorModifier,range:e.shiftKey,toggle:false};this.dispatch(selectItem(this.displayedIds_[focusedIndex],this.getState(),config))}}if(e.key==="Enter"){if(e.composedPath()[0].tagName==="CR-ICON-BUTTON"){return}if(e.composedPath()[0]instanceof HTMLButtonElement){handled=true}}if(!handled){handled=CommandManager.getInstance().handleKeyEvent(e,this.getState().selection.items)}if(handled){e.stopPropagation()}},onContextMenu_(e){e.preventDefault();this.deselectItems_();this.fire("open-command-menu",{x:e.clientX,y:e.clientY,source:MenuSource.LIST})},getAriaRowindex_(index){return index+1}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-location",properties:{path:{type:String,notify:true,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:true,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:true,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:""},encodeSpaceAsPlusInQuery:{type:Boolean,value:false},_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:false}},hostAttributes:{hidden:true},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged");this.listen(window,"location-changed","_urlChanged");this.listen(window,"popstate","_urlChanged");this.listen(document.body,"click","_globalOnClick");this._lastChangedAt=window.performance.now()-(this.dwellTime-200);this._initialized=true;this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged");this.unlisten(window,"location-changed","_urlChanged");this.unlisten(window,"popstate","_urlChanged");this.unlisten(document.body,"click","_globalOnClick");this._initialized=false},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=true;this._hashChanged();this.path=window.decodeURIComponent(this.__location.pathname);this.query=this.__location.search.substring(1);this._dontUpdateUrl=false;this._updateUrl()},_getUrl:function(){var partiallyEncodedPath=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F");var partiallyEncodedQuery="";if(this.query){partiallyEncodedQuery="?"+this.query.replace(/\#/g,"%23");if(this.encodeSpaceAsPlusInQuery){partiallyEncodedQuery=partiallyEncodedQuery.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+")}else{partiallyEncodedQuery=partiallyEncodedQuery.replace(/\+/g,"%2B").replace(/ /g,"%20")}}var partiallyEncodedHash="";if(this.hash){partiallyEncodedHash="#"+window.encodeURI(this.hash)}return partiallyEncodedPath+partiallyEncodedQuery+partiallyEncodedHash},_updateUrl:function(){if(this._dontUpdateUrl||!this._initialized){return}if(this.path===window.decodeURIComponent(this.__location.pathname)&&this.query===this.__location.search.substring(1)&&this.hash===window.decodeURIComponent(this.__location.hash.substring(1))){return}var newUrl=this._getUrl();var fullNewUrl=new URL(newUrl,this.__location.protocol+"//"+this.__location.host).href;var now=window.performance.now();var shouldReplace=this._lastChangedAt+this.dwellTime>now;this._lastChangedAt=now;if(shouldReplace){window.history.replaceState({},"",fullNewUrl)}else{window.history.pushState({},"",fullNewUrl)}this.fire("location-changed",{},{node:window})},_globalOnClick:function(event){if(event.defaultPrevented){return}var href=this._getSameOriginLinkHref(event);if(!href){return}event.preventDefault();if(href===this.__location.href){return}window.history.pushState({},"",href);this.fire("location-changed",{},{node:window})},_getSameOriginLinkHref:function(event){if(event.button!==0){return null}if(event.metaKey||event.ctrlKey){return null}var eventPath=dom(event).path;var anchor=null;for(var i=0;i<eventPath.length;i++){var element=eventPath[i];if(element.tagName==="A"&&element.href){anchor=element;break}}if(!anchor){return null}if(anchor.target==="_blank"){return null}if((anchor.target==="_top"||anchor.target==="_parent")&&window.top!==window){return null}if(anchor.download){return null}var href=anchor.href;var url;if(document.baseURI!=null){url=new URL(href,document.baseURI)}else{url=new URL(href)}var origin;if(this.__location.origin){origin=this.__location.origin}else{origin=this.__location.protocol+"//"+this.__location.host}var urlOrigin;if(url.origin){urlOrigin=url.origin}else{var urlHost=url.host;var urlPort=url.port;var urlProtocol=url.protocol;var isExtraneousHTTPS=urlProtocol==="https:"&&urlPort==="443";var isExtraneousHTTP=urlProtocol==="http:"&&urlPort==="80";if(isExtraneousHTTPS||isExtraneousHTTP){urlHost=url.hostname}urlOrigin=urlProtocol+"//"+urlHost}if(urlOrigin!==origin){return null}var normalizedHref=url.pathname+url.search+url.hash;if(normalizedHref[0]!=="/"){normalizedHref="/"+normalizedHref}if(this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(normalizedHref)){return null}var fullNormalizedHref=new URL(normalizedHref,this.__location.href).href;return fullNormalizedHref},_makeRegExp:function(urlSpaceRegex){return RegExp(urlSpaceRegex)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-query-params",properties:{paramsString:{type:String,notify:true,observer:"paramsStringChanged"},paramsObject:{type:Object,notify:true},_dontReact:{type:Boolean,value:false}},hostAttributes:{hidden:true},observers:["paramsObjectChanged(paramsObject.*)"],paramsStringChanged:function(){this._dontReact=true;this.paramsObject=this._decodeParams(this.paramsString);this._dontReact=false},paramsObjectChanged:function(){if(this._dontReact){return}this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27")},_encodeParams:function(params){var encodedParams=[];for(var key in params){var value=params[key];if(value===""){encodedParams.push(encodeURIComponent(key))}else if(value){encodedParams.push(encodeURIComponent(key)+"="+encodeURIComponent(value.toString()))}}return encodedParams.join("&")},_decodeParams:function(paramString){var params={};paramString=(paramString||"").replace(/\+/g,"%20");var paramList=paramString.split("&");for(var i=0;i<paramList.length;i++){var param=paramList[i].split("=");if(param[0]){params[decodeURIComponent(param[0])]=decodeURIComponent(param[1]||"")}}return params}});// Copyright 2017 The Chromium Authors. All rights reserved.
Polymer({is:"bookmarks-router",_template:html`<!--css-build:shadow--><!--_html_template_start_--><iron-location query="{{urlQuery_}}" dwell-time="200"></iron-location>
<iron-query-params params-string="{{query_}}" params-object="{{queryParams_}}"></iron-query-params>
<!--_html_template_end_-->`,behaviors:[StoreClient$1],properties:{queryParams_:Object,query_:{type:String,observer:"onQueryChanged_"},urlQuery_:{type:String,observer:"onUrlQueryChanged_"},searchTerm_:{type:String,value:""},selectedId_:String},observers:["onQueryParamsChanged_(queryParams_)","onStateChanged_(searchTerm_, selectedId_)"],attached(){this.watch("selectedId_",function(state){return state.selectedFolder});this.watch("searchTerm_",function(state){return state.search.term});this.updateFromStore()},onQueryParamsChanged_(){const searchTerm=this.queryParams_.q||"";let selectedId=this.queryParams_.id;if(!selectedId&&!searchTerm){selectedId=BOOKMARKS_BAR_ID}if(searchTerm!==this.searchTerm_){this.searchTerm_=searchTerm;this.dispatch(setSearchTerm(searchTerm))}if(selectedId&&selectedId!==this.selectedId_){this.selectedId_=selectedId;this.dispatchAsync(dispatch=>{dispatch(selectFolder(selectedId,this.getState().nodes))})}},onQueryChanged_(current,previous){if(previous!==undefined){this.urlQuery_=this.query_}},onUrlQueryChanged_(){this.query_=this.urlQuery_},onStateChanged_(){this.debounce("updateQueryParams",this.updateQueryParams_.bind(this))},updateQueryParams_(){if(this.searchTerm_){this.queryParams_={q:this.searchTerm_}}else if(this.selectedId_!==BOOKMARKS_BAR_ID){this.queryParams_={id:this.selectedId_}}else{this.queryParams_={}}}});// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrSearchFieldBehavior={properties:{label:{type:String,value:""},clearLabel:{type:String,value:""},hasSearchText:{type:Boolean,reflectToAttribute:true,value:false}},effectiveValue_:"",searchDelayTimer_:-1,getSearchInput(){},getValue(){return this.getSearchInput().value},setValue(value,opt_noEvent){const updated=this.updateEffectiveValue_(value);this.getSearchInput().value=this.effectiveValue_;if(!updated){if(value===""&&this.hasSearchText){this.hasSearchText=false}return}this.onSearchTermInput();if(!opt_noEvent){this.fire("search-changed",this.effectiveValue_)}},scheduleSearch_(){if(this.searchDelayTimer_>=0){clearTimeout(this.searchDelayTimer_)}const length=this.getValue().length;const timeoutMs=length>0?500-100*(Math.min(length,4)-1):0;this.searchDelayTimer_=setTimeout(()=>{this.getSearchInput().dispatchEvent(new CustomEvent("search",{composed:true,detail:this.getValue()}));this.searchDelayTimer_=-1},timeoutMs)},onSearchTermSearch(){this.onValueChanged_(this.getValue(),false)},onSearchTermInput(){this.hasSearchText=this.$.searchInput.value!=="";this.scheduleSearch_()},onValueChanged_(newValue,noEvent){const updated=this.updateEffectiveValue_(newValue);if(updated&&!noEvent){this.fire("search-changed",this.effectiveValue_)}},updateEffectiveValue_(value){const effectiveValue=value.replace(/\s+/g," ").replace(/^\s/,"");if(effectiveValue===this.effectiveValue_){return false}this.effectiveValue_=effectiveValue;return true}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const $_documentContainer$2=document.createElement("template");$_documentContainer$2.setAttribute("style","display: none;");$_documentContainer$2.innerHTML=`<dom-module id="paper-spinner-styles">\n  <template>\n    <style scope="paper-spinner-styles">:host {\n  display: inline-block;\n        position: relative;\n        width: 28px;\n        height: 28px;\n\n        \n        --paper-spinner-container-rotation-duration: 1568ms;\n\n        \n        --paper-spinner-expand-contract-duration: 1333ms;\n\n        \n        --paper-spinner-full-cycle-duration: 5332ms;\n\n        \n        --paper-spinner-cooldown-duration: 400ms;\n}\n\n#spinnerContainer {\n  width: 100%;\n        height: 100%;\n\n        \n        direction: ltr;\n}\n\n#spinnerContainer.active {\n  animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n}\n\n@-webkit-keyframes container-rotate {\nto {\n  -webkit-transform: rotate(360deg)\n}\n\n}\n\n@keyframes container-rotate {\nto {\n  transform: rotate(360deg)\n}\n\n}\n\n.spinner-layer {\n  position: absolute;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        white-space: nowrap;\n        color: var(--paper-spinner-color, var(--google-blue-500));\n}\n\n.layer-1 {\n  color: var(--paper-spinner-layer-1-color, var(--google-blue-500));\n}\n\n.layer-2 {\n  color: var(--paper-spinner-layer-2-color, var(--google-red-500));\n}\n\n.layer-3 {\n  color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));\n}\n\n.layer-4 {\n  color: var(--paper-spinner-layer-4-color, var(--google-green-500));\n}\n\n.active .spinner-layer {\n  animation-name: fill-unfill-rotate;\n        animation-duration: var(--paper-spinner-full-cycle-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n        opacity: 1;\n}\n\n.active .spinner-layer.layer-1 {\n  animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n}\n\n.active .spinner-layer.layer-2 {\n  animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n}\n\n.active .spinner-layer.layer-3 {\n  animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n}\n\n.active .spinner-layer.layer-4 {\n  animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n}\n\n@-webkit-keyframes fill-unfill-rotate {\n12.5% {\n  -webkit-transform: rotate(135deg)\n}\n\n25% {\n  -webkit-transform: rotate(270deg)\n}\n\n37.5% {\n  -webkit-transform: rotate(405deg)\n}\n\n50% {\n  -webkit-transform: rotate(540deg)\n}\n\n62.5% {\n  -webkit-transform: rotate(675deg)\n}\n\n75% {\n  -webkit-transform: rotate(810deg)\n}\n\n87.5% {\n  -webkit-transform: rotate(945deg)\n}\n\nto {\n  -webkit-transform: rotate(1080deg)\n}\n\n}\n\n@keyframes fill-unfill-rotate {\n12.5% {\n  transform: rotate(135deg)\n}\n\n25% {\n  transform: rotate(270deg)\n}\n\n37.5% {\n  transform: rotate(405deg)\n}\n\n50% {\n  transform: rotate(540deg)\n}\n\n62.5% {\n  transform: rotate(675deg)\n}\n\n75% {\n  transform: rotate(810deg)\n}\n\n87.5% {\n  transform: rotate(945deg)\n}\n\nto {\n  transform: rotate(1080deg)\n}\n\n}\n\n@-webkit-keyframes layer-1-fade-in-out {\n0% {\n  opacity: 1\n}\n\n25% {\n  opacity: 1\n}\n\n26% {\n  opacity: 0\n}\n\n89% {\n  opacity: 0\n}\n\n90% {\n  opacity: 1\n}\n\nto {\n  opacity: 1\n}\n\n}\n\n@keyframes layer-1-fade-in-out {\n0% {\n  opacity: 1\n}\n\n25% {\n  opacity: 1\n}\n\n26% {\n  opacity: 0\n}\n\n89% {\n  opacity: 0\n}\n\n90% {\n  opacity: 1\n}\n\nto {\n  opacity: 1\n}\n\n}\n\n@-webkit-keyframes layer-2-fade-in-out {\n0% {\n  opacity: 0\n}\n\n15% {\n  opacity: 0\n}\n\n25% {\n  opacity: 1\n}\n\n50% {\n  opacity: 1\n}\n\n51% {\n  opacity: 0\n}\n\nto {\n  opacity: 0\n}\n\n}\n\n@keyframes layer-2-fade-in-out {\n0% {\n  opacity: 0\n}\n\n15% {\n  opacity: 0\n}\n\n25% {\n  opacity: 1\n}\n\n50% {\n  opacity: 1\n}\n\n51% {\n  opacity: 0\n}\n\nto {\n  opacity: 0\n}\n\n}\n\n@-webkit-keyframes layer-3-fade-in-out {\n0% {\n  opacity: 0\n}\n\n40% {\n  opacity: 0\n}\n\n50% {\n  opacity: 1\n}\n\n75% {\n  opacity: 1\n}\n\n76% {\n  opacity: 0\n}\n\nto {\n  opacity: 0\n}\n\n}\n\n@keyframes layer-3-fade-in-out {\n0% {\n  opacity: 0\n}\n\n40% {\n  opacity: 0\n}\n\n50% {\n  opacity: 1\n}\n\n75% {\n  opacity: 1\n}\n\n76% {\n  opacity: 0\n}\n\nto {\n  opacity: 0\n}\n\n}\n\n@-webkit-keyframes layer-4-fade-in-out {\n0% {\n  opacity: 0\n}\n\n65% {\n  opacity: 0\n}\n\n75% {\n  opacity: 1\n}\n\n90% {\n  opacity: 1\n}\n\nto {\n  opacity: 0\n}\n\n}\n\n@keyframes layer-4-fade-in-out {\n0% {\n  opacity: 0\n}\n\n65% {\n  opacity: 0\n}\n\n75% {\n  opacity: 1\n}\n\n90% {\n  opacity: 1\n}\n\nto {\n  opacity: 0\n}\n\n}\n\n.circle-clipper {\n  display: inline-block;\n        position: relative;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n}\n\n.spinner-layer::after {\n  content: '';\n        left: 45%;\n        width: 10%;\n        border-top-style: solid;\n}\n\n.spinner-layer::after, .circle-clipper .circle {\n  box-sizing: border-box;\n        position: absolute;\n        top: 0;\n        border-width: var(--paper-spinner-stroke-width, 3px);\n        border-radius: 50%;\n}\n\n.circle-clipper .circle {\n  bottom: 0;\n        width: 200%;\n        border-style: solid;\n        border-bottom-color: transparent !important;\n}\n\n.circle-clipper.left .circle {\n  left: 0;\n        border-right-color: transparent !important;\n        transform: rotate(129deg);\n}\n\n.circle-clipper.right .circle {\n  left: -100%;\n        border-left-color: transparent !important;\n        transform: rotate(-129deg);\n}\n\n.active .gap-patch::after, .active .circle-clipper .circle {\n  animation-duration: var(--paper-spinner-expand-contract-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n}\n\n.active .circle-clipper.left .circle {\n  animation-name: left-spin;\n}\n\n.active .circle-clipper.right .circle {\n  animation-name: right-spin;\n}\n\n@-webkit-keyframes left-spin {\n0% {\n  -webkit-transform: rotate(130deg)\n}\n\n50% {\n  -webkit-transform: rotate(-5deg)\n}\n\nto {\n  -webkit-transform: rotate(130deg)\n}\n\n}\n\n@keyframes left-spin {\n0% {\n  transform: rotate(130deg)\n}\n\n50% {\n  transform: rotate(-5deg)\n}\n\nto {\n  transform: rotate(130deg)\n}\n\n}\n\n@-webkit-keyframes right-spin {\n0% {\n  -webkit-transform: rotate(-130deg)\n}\n\n50% {\n  -webkit-transform: rotate(5deg)\n}\n\nto {\n  -webkit-transform: rotate(-130deg)\n}\n\n}\n\n@keyframes right-spin {\n0% {\n  transform: rotate(-130deg)\n}\n\n50% {\n  transform: rotate(5deg)\n}\n\nto {\n  transform: rotate(-130deg)\n}\n\n}\n\n#spinnerContainer.cooldown {\n  animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n}\n\n@-webkit-keyframes fade-out {\n0% {\n  opacity: 1\n}\n\nto {\n  opacity: 0\n}\n\n}\n\n@keyframes fade-out {\n0% {\n  opacity: 1\n}\n\nto {\n  opacity: 0\n}\n\n}\n\n</style>\n  </template>\n</dom-module>`;document.head.appendChild($_documentContainer$2.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperSpinnerBehavior={properties:{active:{type:Boolean,value:false,reflectToAttribute:true,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:false}},__computeContainerClasses:function(active,coolingDown){return[active||coolingDown?"active":"",coolingDown?"cooldown":""].join(" ")},__activeChanged:function(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old},__altChanged:function(alt){if(alt==="loading"){this.alt=this.getAttribute("aria-label")||alt}else{this.__setAriaHidden(alt==="");this.setAttribute("aria-label",alt)}},__setAriaHidden:function(hidden){var attr="aria-hidden";if(hidden){this.setAttribute(attr,"true")}else{this.removeAttribute(attr)}},__reset:function(){this.active=false;this.__coolingDown=false}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$8=html`<style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;template$8.setAttribute("strip-whitespace","");Polymer({_template:template$8,is:"paper-spinner-lite",behaviors:[PaperSpinnerBehavior]});// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-shared-style cr-icons" scope="cr-toolbar-search-field">:host {
  align-items: center;
        display: flex;
        height: 40px;
        transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
            width 150ms cubic-bezier(0.4, 0, 0.2, 1);
        width: 44px;
}

[hidden] {
  display: none !important;
}

cr-icon-button {
  --cr-icon-button-fill-color-focus: var(
            --cr-toolbar-search-field-input-bg-color,
            var(--cr-toolbar-background-color));
        --cr-icon-button-size: 32px;
        margin: 6px;
}

@media (prefers-color-scheme: light) {
cr-icon-button {
  --cr-icon-button-fill-color: var(
              --cr-toolbar-search-field-input-color,
              white);
}

}

@media (prefers-color-scheme: dark) {
cr-icon-button {
  --cr-icon-button-fill-color: var(
              --cr-toolbar-search-field-input-color,
              var(--google-grey-refresh-500));
}

}

#icon {
  transition: margin 150ms, opacity 200ms;
}

#prompt {
  --cr-toolbar-search-field-prompt-opacity: .7;
        opacity: 0;
}

@media (prefers-color-scheme: dark) {
#prompt {
  --cr-toolbar-search-field-prompt-opacity: 1;
}

}

paper-spinner-lite {
  height: var(--cr-icon-height-width_-_height); width: var(--cr-icon-height-width_-_width);
        --paper-spinner-color:
            var(--cr-toolbar-search-field-input-color, white);
        margin: 0 6px;
        opacity: 0;
        padding: 6px;
        position: absolute;
}

paper-spinner-lite[active] {
  opacity: 1;
}

#prompt, paper-spinner-lite {
  transition: opacity 200ms;
}

#searchTerm {
  -webkit-font-smoothing: antialiased;
        flex: 1;
        line-height: 185%;
        margin-inline-end: 2px;
        margin-inline-start: 2px;
        position: relative;
}

label {
  bottom: 0;
        cursor: text;
        left: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 0;
        white-space: nowrap;
}

:host([has-search-text]) label {
  visibility: hidden;
}

input {
  -webkit-appearance: none;
        background: transparent;
        border: none;
        color: var(--cr-toolbar-search-field-input-color, white);
        font: inherit;
        outline: none;
        padding: 0;
        position: relative;
        width: 100%;
}

input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
        margin: 0;
}

:host(:not([narrow])) {
  background:
            var(--cr-toolbar-search-field-background, rgba(0, 0, 0, 0.22));
        border-radius:
            var(--cr-toolbar-search-field-border-radius, 2px);
        cursor: text;
        padding-inline-end: 0;
        width: var(--cr-toolbar-field-width, 680px);
}

:host(:not([narrow]):not([showing-search])) #icon {
  opacity: .7;
}

:host(:not([narrow])) #prompt {
  opacity: var(--cr-toolbar-search-field-prompt-opacity);
}

:host([narrow]:not([showing-search])) #searchTerm {
  display: none;
}

:host([showing-search][spinner-active]) #icon {
  opacity: 0;
}

:host([narrow][showing-search]) {
  width: 100%;
}

:host([narrow][showing-search]) #icon, :host([narrow][showing-search]) paper-spinner-lite {
  margin-inline-start: 18px;
}

</style>
    <template is="dom-if" id="spinnerTemplate">
      <paper-spinner-lite active="[[isSpinnerShown_]]">
      </paper-spinner-lite>
    </template>
    <cr-icon-button id="icon" iron-icon="cr:search" title="[[label]]" tabindex$="[[computeIconTabIndex_(narrow, hasSearchText)]]" aria-hidden$="[[computeIconAriaHidden_(narrow, hasSearchText)]]">
    </cr-icon-button>
    <div id="searchTerm">
      <label id="prompt" for="searchInput" aria-hidden="true">[[label]]</label>
      <input id="searchInput" aria-labelledby="prompt" type="search" on-input="onSearchTermInput" on-search="onSearchTermSearch" on-keydown="onSearchTermKeydown_" on-focus="onInputFocus_" on-blur="onInputBlur_" autofocus="" spellcheck="false">
    </div>
    <template is="dom-if" if="[[hasSearchText]]">
      <cr-icon-button id="clearSearch" iron-icon="cr:cancel" title="[[clearLabel]]" on-click="clearSearch_"></cr-icon-button>
    </template>
<!--_html_template_end_-->`,is:"cr-toolbar-search-field",behaviors:[CrSearchFieldBehavior],properties:{narrow:{type:Boolean,reflectToAttribute:true},showingSearch:{type:Boolean,value:false,notify:true,observer:"showingSearchChanged_",reflectToAttribute:true},label:String,clearLabel:String,spinnerActive:{type:Boolean,reflectToAttribute:true},isSpinnerShown_:{type:Boolean,computed:"computeIsSpinnerShown_(spinnerActive, showingSearch)"},searchFocused_:{type:Boolean,value:false}},listeners:{click:"showSearch_"},getSearchInput(){return this.$.searchInput},isSearchFocused(){return this.searchFocused_},showAndFocus(){this.showingSearch=true;this.focus_()},onSearchTermInput(){CrSearchFieldBehavior.onSearchTermInput.call(this);this.showingSearch=this.hasSearchText||this.isSearchFocused()},focus_(){this.getSearchInput().focus()},computeIconTabIndex_(narrow){return narrow&&!this.hasSearchText?0:-1},computeIconAriaHidden_(narrow){return Boolean(!narrow||this.hasSearchText).toString()},computeIsSpinnerShown_(){const showSpinner=this.spinnerActive&&this.showingSearch;if(showSpinner){this.$.spinnerTemplate.if=true}return showSpinner},onInputFocus_(){this.searchFocused_=true},onInputBlur_(){this.searchFocused_=false;if(!this.hasSearchText){this.showingSearch=false}},onSearchTermKeydown_(e){if(e.key==="Escape"){this.showingSearch=false}},showSearch_(e){if(e.target!==this.$.clearSearch){this.showingSearch=true}},clearSearch_(e){this.setValue("");this.focus_();this.spinnerActive=false},showingSearchChanged_(current,previous){if(previous===undefined){return}if(this.showingSearch){this.focus_();return}this.setValue("");this.getSearchInput().blur()}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:false,readOnly:true,notify:true},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:false},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none";this.queryChanged()},detached:function(){this._remove()},_add:function(){if(this._mq){this._mq.addListener(this._boundMQHandler)}},_remove:function(){if(this._mq){this._mq.removeListener(this._boundMQHandler)}this._mq=null},queryChanged:function(){this._remove();var query=this.query;if(!query){return}if(!this.full&&query[0]!=="("){query="("+query+")"}this._mq=window.matchMedia(query);this._add();this.queryHandler(this._mq)},queryHandler:function(mq){this._setQueryMatches(mq.matches)}});// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-icons cr-hidden-style" scope="cr-toolbar">:host {
  align-items: center;
        background-color: var(--cr-toolbar-background-color);
        color: #fff;
        display: flex;
        height: var(--cr-toolbar-height);
}

@media (prefers-color-scheme: dark) {
:host {
  border-bottom: var(--cr-separator-line);
          box-sizing: border-box;
          color: var(--cr-secondary-text-color);
}

}

h1 {
  flex: 1;
        font-size: 123%;
        font-weight: var(--cr-toolbar-header-font-weight, 400);
        letter-spacing: .25px;
        line-height: normal;
        margin-inline-start: 6px;
        padding-inline-end: 12px;
}

@media (prefers-color-scheme: dark) {
h1 {
  color: var(--cr-primary-text-color);
}

}

#leftContent {
  position: relative;
        transition: opacity 100ms;
}

#leftSpacer {
  align-items: center;
        box-sizing: border-box;
        display: flex;
        
        padding-inline-start: calc(12px + 6px);
        width: var(--cr-toolbar-left-spacer-width, auto);
}

cr-icon-button {
  --cr-icon-button-fill-color-focus: var(--cr-toolbar-background-color);
        --cr-icon-button-size: 32px;
        min-width: 32px;
}

@media (prefers-color-scheme: light) {
cr-icon-button {
  --cr-icon-button-fill-color: currentColor;
}

}

#centeredContent {
  display: flex;
        flex: 1 1 0;
        justify-content: center;
}

#rightSpacer {
  padding-inline-end: 12px;
}

:host([narrow]) #centeredContent {
  justify-content: flex-end;
}

:host([has-overlay]) {
  transition: visibility var(--cr-toolbar-overlay-animation-duration);
        visibility: hidden;
}

:host([narrow][showing-search_]) #leftContent {
  opacity: 0;
        position: absolute;
}

:host(:not([narrow])) #leftContent {
  flex: 1 1 var(--cr-toolbar-field-margin, 0);
}

:host(:not([narrow])) #centeredContent {
  flex-basis: var(--cr-toolbar-center-basis, 0);
}

:host(:not([narrow])) #rightContent {
  flex: 1 1 0;
        text-align: end;
}

#menuPromo {
  align-items: center;
        background: #616161;
        border-radius: 2px;
        color: white;
        display: flex;
        font-size: 92.3%;
        font-weight: 500;
        opacity: 0;
        padding-bottom: 6px;
        padding-inline-end: 12px;
        padding-inline-start: 8px;
        padding-top: 6px;
        position: absolute;
        top: var(--cr-toolbar-height);
        white-space: nowrap;
        z-index: 2;
}

#menuPromo::before {
  background: inherit;
        
        clip-path: polygon(0 105%, 100% 105%, 50% 0);
        content: '';
        display: block;
        height: 6px;
        left: 10px;
        position: absolute;
        top: -6px;
        width: 12px;
}

:host-context([dir=rtl]) #menuPromo::before {
  left: auto;
        right: 10px;
}

#closePromo {
  -webkit-appearance: none;
        background: none;
        border: none;
        color: inherit;
        font-size: 20px;  
        line-height: 20px;
        margin-inline-start: 12px;
        padding: 0;
        width: 20px;
}

</style>
    <div id="leftContent">
      <div id="leftSpacer">
        <!-- Note: showing #menuPromo relies on this dom-if being [restamp]. -->
        <template is="dom-if" if="[[showMenu]]" restamp="">
          <cr-icon-button id="menuButton" class="no-overlap" iron-icon="cr20:menu" on-click="onMenuTap_" aria-label$="[[menuLabel]]" title="[[titleIfNotShowMenuPromo_(menuLabel, showMenuPromo)]]">
          </cr-icon-button>
          <template is="dom-if" if="[[showMenuPromo]]">
            <div id="menuPromo" role="tooltip">
              [[menuPromo]]
              <button id="closePromo" on-click="onClosePromoTap_" aria-label$="[[closeMenuPromo]]">âœ•</button>
            
          </div></template>
        </template>
        <h1>[[pageName]]</h1>
      </div>
    </div>

    <div id="centeredContent" hidden$="[[!showSearch]]">
      <cr-toolbar-search-field id="search" narrow="[[narrow]]" label="[[searchPrompt]]" clear-label="[[clearLabel]]" spinner-active="[[spinnerActive]]" showing-search="{{showingSearch_}}">
      </cr-toolbar-search-field>
      <iron-media-query query="(max-width: [[narrowThreshold]]px)" query-matches="{{narrow}}">
      </iron-media-query>
    </div>

    <div id="rightContent">
      <div id="rightSpacer">
        <slot></slot>
      </div>
    </div>
<!--_html_template_end_-->`,is:"cr-toolbar",properties:{pageName:String,searchPrompt:String,clearLabel:String,menuLabel:String,menuPromo:String,spinnerActive:Boolean,showMenu:{type:Boolean,value:false},showMenuPromo:{type:Boolean,value:false},showSearch:{type:Boolean,value:true},narrow:{type:Boolean,reflectToAttribute:true,readonly:true,notify:true},narrowThreshold:{type:Number,value:900},closeMenuPromo:String,showingSearch_:{type:Boolean,reflectToAttribute:true}},observers:["possiblyShowMenuPromo_(showMenu, showMenuPromo, showingSearch_)"],getSearchField(){return this.$.search},onClosePromoTap_(){this.fire("cr-toolbar-menu-promo-close")},onMenuTap_(){this.fire("cr-toolbar-menu-tap")},possiblyShowMenuPromo_(){afterNextRender(this,function(){if(this.showMenu&&this.showMenuPromo&&!this.showingSearch_){this.$$("#menuPromo").animate([{opacity:0},{opacity:.9}],{duration:500,fill:"forwards"});this.fire("cr-toolbar-menu-promo-shown")}}.bind(this))},titleIfNotShowMenuPromo_(title,showMenuPromo){return showMenuPromo?"":title}});// Copyright 2017 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-toolbar-selection-overlay">:host {
  background-color: white;
        border-bottom: 1px solid var(--google-grey-300);
        bottom: 0;
        color: var(--cr-primary-text-color);
        display: flex;
        left: 0;
        opacity: 0;
        padding-inline-start: var(--cr-toolbar-field-margin, 0);
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        transition: opacity var(--cr-toolbar-overlay-animation-duration),
                    visibility var(--cr-toolbar-overlay-animation-duration);
        visibility: hidden;
}

@media (prefers-color-scheme: dark) {
:host {
  background-color: var(--google-grey-900);
          background-image: linear-gradient(rgba(255, 255, 255, .04),
                                            rgba(255, 255, 255, .04));
          border-bottom-color: var(--cr-separator-color);
}

}

:host([show]) {
  opacity: 1;
        pointer-events: initial;
        visibility: initial;
}

#overlay-content {
  align-items: center;
        display: flex;
        flex: 1;
        margin: 0 auto;
        max-width: var(--selection-overlay-max-width, initial);
        padding: 0 var(--selection-overlay-padding, 24px);
}

cr-button {
  margin-inline-start: 8px;
}

#number-selected {
  flex: 1;
}

cr-icon-button {
  height: 36px;
        margin-inline-end: 24px;
        margin-inline-start: 2px;
        width: 36px;
}

</style>
    <template is="dom-if" if="[[hasShown_]]">
      <div id="overlay-content">
        <cr-icon-button title="[[cancelLabel]]" iron-icon="cr:clear" on-click="onClearSelectionClick_"></cr-icon-button>
        <div id="number-selected">[[selectionLabel_]]</div>
        <cr-button on-click="onClearSelectionClick_">[[cancelLabel]]</cr-button>
        <cr-button id="delete" on-click="onDeleteClick_" disabled="[[deleteDisabled]]">
          [[deleteLabel]]
        </cr-button>
      </div>
    </template>
<!--_html_template_end_-->`,is:"cr-toolbar-selection-overlay",properties:{show:{type:Boolean,observer:"onShowChanged_",reflectToAttribute:true},deleteLabel:String,cancelLabel:String,selectionLabel:String,deleteDisabled:Boolean,hasShown_:Boolean,selectionLabel_:String},observers:["updateSelectionLabel_(show, selectionLabel)"],get deleteButton(){return this.$$("#delete")},onClearSelectionClick_(){this.fire("clear-selected-items")},onDeleteClick_(){this.fire("delete-selected-items")},updateSelectionLabel_(){this.debounce("updateSelectionLabel_",()=>{this.selectionLabel_=this.show?this.selectionLabel:this.selectionLabel_})},onShowChanged_(){if(this.show){this.hasShown_=true}}});// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({is:"bookmarks-toolbar",_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="shared-style" scope="bookmarks-toolbar">:host {
  position: relative;
}

cr-toolbar {
  flex: 1;
    --cr-toolbar-field-margin:
        calc(var(--sidebar-width) + var(--splitter-width));
}

cr-icon-button {
  --cr-icon-button-fill-color-focus: var(--cr-toolbar-background-color);
    justify-content: flex-end;
    margin: 4px;
}

@media (prefers-color-scheme: light) {
cr-icon-button {
  --cr-icon-button-fill-color: currentColor;
}

}

:host(:not([narrow_])) cr-toolbar-selection-overlay {
  --selection-overlay-padding: var(--card-padding-side);
    --cr-toolbar-field-margin: var(--sidebar-width);
    --selection-overlay-max-width: var(--card-max-width);
}

</style>
<cr-toolbar page-name="æ›¸ç±¤" has-overlay$="[[showSelectionOverlay]]" clear-label="æ¸…é™¤æœå°‹" search-prompt="æœå°‹æ›¸ç±¤" narrow="{{narrow_}}" on-search-changed="onSearchChanged_">
  <cr-icon-button iron-icon="cr:more-vert" id="menuButton" title="æ•´ç†" on-click="onMenuButtonOpenTap_" aria-haspopup="menu"></cr-icon-button>
</cr-toolbar>
<cr-toolbar-selection-overlay show="[[showSelectionOverlay]]" delete-label="åˆªé™¤(D)" cancel-label="å–æ¶ˆ" selection-label="[[getItemsSelectedString_(selectedItems_.size)]]" delete-disabled="[[!canDeleteSelection_(selectedItems_)]]" on-delete-selected-items="onDeleteSelectionTap_" on-clear-selected-items="onClearSelectionTap_">
</cr-toolbar-selection-overlay>
<!--_html_template_end_-->`,behaviors:[StoreClient$1],properties:{sidebarWidth:{type:String,observer:"onSidebarWidthChanged_"},showSelectionOverlay:{type:Boolean,computed:"shouldShowSelectionOverlay_(selectedItems_, globalCanEdit_)",readOnly:true},narrow_:{type:Boolean,reflectToAttribute:true},searchTerm_:{type:String,observer:"onSearchTermChanged_"},selectedItems_:Object,globalCanEdit_:Boolean},attached(){this.watch("searchTerm_",function(state){return state.search.term});this.watch("selectedItems_",function(state){return state.selection.items});this.watch("globalCanEdit_",function(state){return state.prefs.canEdit});this.updateFromStore()},get searchField(){return this.$$("cr-toolbar").getSearchField()},onMenuButtonOpenTap_(e){this.fire("open-command-menu",{targetElement:e.target,source:MenuSource.TOOLBAR})},onDeleteSelectionTap_(){const selection=this.selectedItems_;const commandManager=CommandManager.getInstance();assert(commandManager.canExecute(Command.DELETE,selection));commandManager.handle(Command.DELETE,selection)},onClearSelectionTap_(){this.dispatch(deselectItems())},onSearchChanged_(e){if(e.detail!==this.searchTerm_){this.dispatch(setSearchTerm(e.detail))}},onSidebarWidthChanged_(){this.style.setProperty("--sidebar-width",this.sidebarWidth)},onSearchTermChanged_(){this.searchField.setValue(this.searchTerm_||"")},shouldShowSelectionOverlay_(){return this.selectedItems_.size>1&&this.globalCanEdit_},canDeleteSelection_(){return this.showSelectionOverlay&&CommandManager.getInstance().canExecute(Command.DELETE,this.selectedItems_)},getItemsSelectedString_(){return loadTimeData.getStringF("itemsSelected",this.selectedItems_.size)}});// Copyright 2018 The Chromium Authors. All rights reserved.
const FindShortcutManager=(()=>{const listeners=[];let modalContextOpen=false;const shortcutCtrlF=new KeyboardShortcutList(isMac?"meta|f":"ctrl|f");const shortcutSlash=new KeyboardShortcutList("/");window.addEventListener("keydown",e=>{if(e.defaultPrevented||listeners.length===0){return}if(!shortcutCtrlF.matchesEvent(e)&&(isTextInputElement(e.path[0])||!shortcutSlash.matchesEvent(e))){return}const focusIndex=listeners.findIndex(listener=>listener.searchInputHasFocus());const index=focusIndex<=0?listeners.length-1:focusIndex-1;if(listeners[index].handleFindShortcut(modalContextOpen)){e.preventDefault()}});window.addEventListener("cr-dialog-open",()=>{modalContextOpen=true});window.addEventListener("cr-drawer-opened",()=>{modalContextOpen=true});window.addEventListener("close",e=>{if(["CR-DIALOG","CR-DRAWER"].includes(e.composedPath()[0].nodeName)){modalContextOpen=false}});return Object.freeze({listeners:listeners})})();const FindShortcutBehavior={findShortcutListenOnAttach:true,attached(){if(this.findShortcutListenOnAttach){this.becomeActiveFindShortcutListener()}},detached(){if(this.findShortcutListenOnAttach){this.removeSelfAsFindShortcutListener()}},becomeActiveFindShortcutListener(){const listeners=FindShortcutManager.listeners;assert(!listeners.includes(this),"Already listening for find shortcuts.");listeners.push(this)},handleFindShortcut(modalContextOpen){assertNotReached()},removeSelfAsFindShortcutListener(){const listeners=FindShortcutManager.listeners;const index=listeners.indexOf(this);assert(listeners.includes(this),"Find shortcut listener not found.");listeners.splice(index,1)},searchInputHasFocus(){assertNotReached()}};// Copyright 2017 The Chromium Authors. All rights reserved.
function isBookmarkItem(element){return element.tagName==="BOOKMARKS-ITEM"}function isBookmarkFolderNode(element){return element.tagName==="BOOKMARKS-FOLDER-NODE"}function isBookmarkList(element){return element.tagName==="BOOKMARKS-LIST"}function getPreviousElementSibling(element){if(isBookmarkItem(element)){const parentSibling=element.parentElement.previousElementSibling;return parentSibling?parentSibling.querySelector("bookmarks-item"):null}return element.previousElementSibling}function getNextElementSibling(element){if(isBookmarkItem(element)){const parentSibling=element.parentElement.nextElementSibling;return parentSibling?parentSibling.querySelector("bookmarks-item"):null}return element.nextElementSibling}function isClosedBookmarkFolderNode(element){return isBookmarkFolderNode(element)&&!element.isOpen}function getBookmarkElement(path){if(!path){return null}for(let i=0;i<path.length;i++){if(isBookmarkItem(path[i])||isBookmarkFolderNode(path[i])||isBookmarkList(path[i])){return path[i]}}return null}function getDragElement(path){const dragElement=getBookmarkElement(path);for(let i=0;i<path.length;i++){if(path[i].tagName==="BUTTON"){return null}}return dragElement&&dragElement.getAttribute("draggable")?dragElement:null}function getBookmarkNode(bookmarkElement){return Store$1.getInstance().data.nodes[bookmarkElement.itemId]}class DragInfo{constructor(){this.dragData=null}setNativeDragData(newDragData){this.dragData={sameProfile:newDragData.sameProfile,elements:newDragData.elements.map(x=>normalizeNode(x))}}clearDragData(){this.dragData=null}isDragValid(){return!!this.dragData}isSameProfile(){return!!this.dragData&&this.dragData.sameProfile}isDraggingFolders(){return!!this.dragData&&this.dragData.elements.some(function(node){return!node.url})}isDraggingBookmark(bookmarkId){return!!this.dragData&&this.isSameProfile()&&this.dragData.elements.some(function(node){return node.id===bookmarkId})}isDraggingChildBookmark(folderId){return!!this.dragData&&this.isSameProfile()&&this.dragData.elements.some(function(node){return node.parentId===folderId})}isDraggingFolderToDescendant(itemId,nodes){if(!this.isSameProfile()){return false}let parentId=nodes[itemId].parentId;const parents={};while(parentId){parents[parentId]=true;parentId=nodes[parentId].parentId}return!!this.dragData&&this.dragData.elements.some(function(node){return parents[node.id]})}}class AutoExpander{constructor(){this.EXPAND_FOLDER_DELAY=400;this.lastElement_=null;this.debouncer_=new Debouncer(()=>{const store=Store$1.getInstance();store.dispatch(changeFolderOpen(this.lastElement_.itemId,true));this.reset()})}update(e,overElement){const itemId=overElement?overElement.itemId:null;const store=Store$1.getInstance();if(overElement&&overElement!==this.lastElement_&&isClosedBookmarkFolderNode(overElement)&&hasChildFolders(itemId,store.data.nodes)){this.reset();this.lastElement_=overElement}if(overElement&&overElement===this.lastElement_){this.debouncer_.restartTimeout(this.EXPAND_FOLDER_DELAY);return}this.reset()}reset(){this.debouncer_.reset();this.lastElement_=null}}class DropIndicator{constructor(){this.removeDropIndicatorTimeoutId_=null;this.lastIndicatorElement_=null;this.lastIndicatorClassName_=null;this.timerProxy=window}addDropIndicatorStyle(indicatorElement,position){const indicatorStyleName=position===DropPosition.ABOVE?"drag-above":position===DropPosition.BELOW?"drag-below":"drag-on";this.lastIndicatorElement_=indicatorElement;this.lastIndicatorClassName_=indicatorStyleName;indicatorElement.classList.add(indicatorStyleName)}removeDropIndicatorStyle(){if(!this.lastIndicatorElement_||!this.lastIndicatorClassName_){return}this.lastIndicatorElement_.classList.remove(this.lastIndicatorClassName_);this.lastIndicatorElement_=null;this.lastIndicatorClassName_=null}update(dropDest){this.timerProxy.clearTimeout(this.removeDropIndicatorTimeoutId_);this.removeDropIndicatorTimeoutId_=null;const indicatorElement=dropDest.element.getDropTarget();const position=dropDest.position;this.removeDropIndicatorStyle();this.addDropIndicatorStyle(indicatorElement,position)}finish(){if(this.removeDropIndicatorTimeoutId_){return}this.removeDropIndicatorTimeoutId_=this.timerProxy.setTimeout(()=>{this.removeDropIndicatorStyle()},100)}}class DNDManager{constructor(){this.dragInfo_=null;this.dropDestination_=null;this.dropIndicator_=null;this.documentListeners_=null;this.autoExpander_=null;this.timerProxy_=window;this.lastPointerWasTouch_=false}init(){this.dragInfo_=new DragInfo;this.dropIndicator_=new DropIndicator;this.autoExpander_=new AutoExpander;this.documentListeners_={dragstart:this.onDragStart_.bind(this),dragenter:this.onDragEnter_.bind(this),dragover:this.onDragOver_.bind(this),dragleave:this.onDragLeave_.bind(this),drop:this.onDrop_.bind(this),dragend:this.clearDragData_.bind(this),mousedown:this.onMouseDown_.bind(this),touchstart:this.onTouchStart_.bind(this)};for(const event in this.documentListeners_){document.addEventListener(event,this.documentListeners_[event])}chrome.bookmarkManagerPrivate.onDragEnter.addListener(this.handleChromeDragEnter_.bind(this));chrome.bookmarkManagerPrivate.onDragLeave.addListener(this.clearDragData_.bind(this))}destroy(){for(const event in this.documentListeners_){document.removeEventListener(event,this.documentListeners_[event])}}onDragStart_(e){const dragElement=getDragElement(e.path);if(!dragElement){return}e.preventDefault();const dragData=this.calculateDragData_(dragElement);if(!dragData){this.clearDragData_();return}const state=Store$1.getInstance().data;let draggedNodes=[];if(isBookmarkItem(dragElement)){const displayingItems=assert(getDisplayedList(state));for(const itemId of displayingItems){for(const element of dragData.elements){if(element.id===itemId){draggedNodes.push(element.id);break}}}}else{draggedNodes=dragData.elements.map(item=>item.id)}assert(draggedNodes.length===dragData.elements.length);const dragNodeIndex=draggedNodes.indexOf(dragElement.itemId);assert(dragNodeIndex!==-1);chrome.bookmarkManagerPrivate.startDrag(draggedNodes,dragNodeIndex,this.lastPointerWasTouch_,e.clientX,e.clientY)}onDragLeave_(){this.dropIndicator_.finish()}onDrop_(e){if(isTextInputElement(e.path[0])){return}e.preventDefault();if(this.dropDestination_){const dropInfo=this.calculateDropInfo_(this.dropDestination_);const index=dropInfo.index!==-1?dropInfo.index:undefined;const shouldHighlight=this.shouldHighlight_(this.dropDestination_);if(shouldHighlight){trackUpdatedItems()}chrome.bookmarkManagerPrivate.drop(dropInfo.parentId,index,shouldHighlight?highlightUpdatedItems:undefined)}this.clearDragData_()}onDragEnter_(e){e.preventDefault()}onDragOver_(e){this.dropDestination_=null;if(isTextInputElement(e.path[0])){return}e.preventDefault();if(!this.dragInfo_.isDragValid()){return}const state=Store$1.getInstance().data;const items=this.dragInfo_.dragData.elements;const overElement=getBookmarkElement(e.path);this.autoExpander_.update(e,overElement);if(!overElement){this.dropIndicator_.finish();return}this.dropDestination_=this.calculateDropDestination_(e.clientY,overElement);if(!this.dropDestination_){this.dropIndicator_.finish();return}this.dropIndicator_.update(this.dropDestination_)}onMouseDown_(){this.lastPointerWasTouch_=false}onTouchStart_(){this.lastPointerWasTouch_=true}handleChromeDragEnter_(dragData){this.dragInfo_.setNativeDragData(dragData)}clearDragData_(){this.autoExpander_.reset();this.timerProxy_.setTimeout(()=>{this.dragInfo_.clearDragData();this.dropDestination_=null;this.dropIndicator_.finish()},0)}calculateDropInfo_(dropDestination){if(isBookmarkList(dropDestination.element)){return{index:0,parentId:Store$1.getInstance().data.selectedFolder}}const node=getBookmarkNode(dropDestination.element);const position=dropDestination.position;let index=-1;let parentId=node.id;if(position!==DropPosition.ON){const state=Store$1.getInstance().data;parentId=assert(node.parentId);index=state.nodes[parentId].children.indexOf(node.id);if(position===DropPosition.BELOW){index++}}return{index:index,parentId:parentId}}calculateDragData_(dragElement){const dragId=dragElement.itemId;const store=Store$1.getInstance();const state=store.data;let draggedNodes=Array.from(state.selection.items);if(isBookmarkFolderNode(dragElement)||draggedNodes.indexOf(dragId)===-1){store.dispatch(deselectItems());if(!isBookmarkFolderNode(dragElement)){store.dispatch(selectItem(dragId,state,{clear:false,range:false,toggle:false}))}draggedNodes=[dragId]}const anyUnmodifiable=draggedNodes.some(itemId=>!canEditNode(state,itemId));if(anyUnmodifiable){return null}return{elements:draggedNodes.map(id=>state.nodes[id]),sameProfile:true}}calculateDropDestination_(elementClientY,overElement){const validDropPositions=this.calculateValidDropPositions_(overElement);if(validDropPositions===DropPosition.NONE){return null}const above=validDropPositions&DropPosition.ABOVE;const below=validDropPositions&DropPosition.BELOW;const on=validDropPositions&DropPosition.ON;const rect=overElement.getDropTarget().getBoundingClientRect();const yRatio=(elementClientY-rect.top)/rect.height;if(above&&(yRatio<=.25||yRatio<=.5&&(!below||!on))){return{element:overElement,position:DropPosition.ABOVE}}if(below&&(yRatio>.75||yRatio>.5&&(!above||!on))){return{element:overElement,position:DropPosition.BELOW}}if(on){return{element:overElement,position:DropPosition.ON}}return null}calculateValidDropPositions_(overElement){const dragInfo=this.dragInfo_;const state=Store$1.getInstance().data;let itemId=overElement.itemId;if((isBookmarkList(overElement)||isBookmarkItem(overElement))&&isShowingSearch(state)){return DropPosition.NONE}if(isBookmarkList(overElement)){itemId=state.selectedFolder}if(!canReorderChildren(state,itemId)){return DropPosition.NONE}if(dragInfo.isDraggingBookmark(itemId)||dragInfo.isDraggingFolderToDescendant(itemId,state.nodes)){return DropPosition.NONE}let validDropPositions=this.calculateDropAboveBelow_(overElement);if(this.canDropOn_(overElement)){validDropPositions|=DropPosition.ON}return validDropPositions}calculateDropAboveBelow_(overElement){const dragInfo=this.dragInfo_;const state=Store$1.getInstance().data;if(isBookmarkList(overElement)){return DropPosition.NONE}if(getBookmarkNode(overElement).parentId===ROOT_NODE_ID){return DropPosition.NONE}const isOverFolderNode=isBookmarkFolderNode(overElement);if(isOverFolderNode&&!dragInfo.isDraggingFolders()){return DropPosition.NONE}let validDropPositions=DropPosition.NONE;const previousElem=getPreviousElementSibling(overElement);if(!previousElem||!dragInfo.isDraggingBookmark(previousElem.itemId)){validDropPositions|=DropPosition.ABOVE}if(isOverFolderNode&&!isClosedBookmarkFolderNode(overElement)&&hasChildFolders(overElement.itemId,state.nodes)){return validDropPositions}const nextElement=getNextElementSibling(overElement);if(!nextElement||!dragInfo.isDraggingBookmark(nextElement.itemId)){validDropPositions|=DropPosition.BELOW}return validDropPositions}canDropOn_(overElement){if(isBookmarkList(overElement)){const state=Store$1.getInstance().data;return!!state.selectedFolder&&state.nodes[state.selectedFolder].children.length===0}if(getBookmarkNode(overElement).url){return false}return!this.dragInfo_.isDraggingChildBookmark(overElement.itemId)}shouldHighlight_(dropDestination){return isBookmarkItem(dropDestination.element)||isBookmarkList(dropDestination.element)}setTimerProxyForTesting(timerProxy){this.timerProxy_=timerProxy;this.dropIndicator_.timerProxy=timerProxy}}// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HIDE_FOCUS_RING_ATTRIBUTE="hide-focus-ring";const MouseFocusBehavior={attached(){this.boundOnMousedown_=this.onMousedown_.bind(this);this.boundOnKeydown=this.onKeydown_.bind(this);document.addEventListener("mousedown",this.boundOnMousedown_,true);document.addEventListener("keydown",this.boundOnKeydown,true)},detached(){document.removeEventListener("mousedown",this.boundOnMousedown_,true);document.removeEventListener("keydown",this.boundOnKeydown,true)},onMousedown_(){this.setAttribute(HIDE_FOCUS_RING_ATTRIBUTE,"")},onKeydown_(e){if(!["Shift","Alt","Control","Meta"].includes(e.key)){this.removeAttribute(HIDE_FOCUS_RING_ATTRIBUTE)}}};// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({is:"bookmarks-app",_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="bookmarks-app">:host {
  color: var(--cr-primary-text-color);
    display: flex;
    flex-direction: column;
    height: 100%;
    line-height: 1.54;
}

#main-container {
  display: flex;
    flex-direction: row;
    flex-grow: 1;
    overflow: hidden;
}

#splitter {
  box-sizing: border-box;
    cursor: col-resize;

    
    cursor: e-resize;

    flex: 0 0 var(--splitter-width);
    opacity: 0;
}

#splitter:hover, #splitter.splitter-active {
  border-inline-start: 1px solid rgba(0, 0, 0, 0.1);
    opacity: 1;
    transition: opacity 100ms ease-out;
}

@media (prefers-color-scheme: dark) {
#splitter:hover, #splitter.splitter-active {
  border-inline-start-color: var(--cr-separator-color);
}

}

#sidebar {
  display: flex;
    flex-direction: column;
    max-width: 40%;
    min-width: var(--min-sidebar-width);
    width: var(--min-sidebar-width);
}

bookmarks-folder-node {
  flex: 1;
    overflow-y: auto;
    padding: 8px 3px 0 18px;
    user-select: none;
}

managed-footnote {
  --managed-footnote-icon-padding: 12px;
    flex: 0;
    padding-bottom: 24px;
    padding-top: 24px;
}

bookmarks-list {
  flex: 1;
    overflow-x: hidden;
}

</style>
<bookmarks-toolbar sidebar-width="[[sidebarWidth_]]" role="banner">
</bookmarks-toolbar>
<div id="main-container">
  <div id="sidebar" role="tree" aria-label="æ›¸ç±¤è³‡æ–™å¤¾æ¨¹ç‹€çµæ§‹">
    <bookmarks-folder-node item-id="0" depth="-1"></bookmarks-folder-node>
    <managed-footnote></managed-footnote>
  </div>
  <cr-splitter id="splitter"></cr-splitter>
  <bookmarks-list></bookmarks-list>
</div>
<bookmarks-router></bookmarks-router>
<bookmarks-command-manager></bookmarks-command-manager>
<cr-toast-manager duration="10000">
  <dom-if>
    <template>
      <cr-button on-click="onUndoClick_" aria-label="æŒ‰ä¸‹ Ctrl + Z å³å¯å¾©åŽŸ">
        å–æ¶ˆ(U)
      </cr-button>
    </template>
  </dom-if>
</cr-toast-manager>
<!--_html_template_end_-->`,behaviors:[MouseFocusBehavior,StoreClient$1,FindShortcutBehavior],properties:{searchTerm_:{type:String,observer:"searchTermChanged_"},folderOpenState_:{type:Object,observer:"folderOpenStateChanged_"},sidebarWidth_:String},boundUpdateSidebarWidth_:null,dndManager_:null,created(){const CANONICAL_PATH_REGEX=/(^\/)([\/-\w]+)(\/$)/;const path=location.pathname.replace(CANONICAL_PATH_REGEX,"$1$2");if(path!=="/"){window.history.replaceState(undefined,"","/")}},attached(){document.documentElement.classList.remove("loading");this.watch("searchTerm_",function(state){return state.search.term});this.watch("folderOpenState_",function(state){return state.folderOpenState});chrome.bookmarks.getTree(results=>{const nodeMap=normalizeNodes(results[0]);const initialState=createEmptyState();initialState.nodes=nodeMap;initialState.selectedFolder=nodeMap[ROOT_NODE_ID].children[0];const folderStateString=window.localStorage[LOCAL_STORAGE_FOLDER_STATE_KEY];initialState.folderOpenState=folderStateString?new Map(JSON.parse(folderStateString)):new Map;Store$1.getInstance().init(initialState);init();setTimeout(function(){chrome.metricsPrivate.recordTime("BookmarkManager.ResultsRenderedTime",Math.floor(window.performance.now()))})});this.boundUpdateSidebarWidth_=this.updateSidebarWidth_.bind(this);this.initializeSplitter_();this.dndManager_=new DNDManager;this.dndManager_.init()},detached(){window.removeEventListener("resize",this.boundUpdateSidebarWidth_);this.dndManager_.destroy();destroy()},initializeSplitter_(){const splitter=this.$.splitter;const splitterTarget=this.$.sidebar;if(LOCAL_STORAGE_TREE_WIDTH_KEY in window.localStorage){splitterTarget.style.width=window.localStorage[LOCAL_STORAGE_TREE_WIDTH_KEY]}this.sidebarWidth_=getComputedStyle(splitterTarget).width;splitter.addEventListener("resize",e=>{window.localStorage[LOCAL_STORAGE_TREE_WIDTH_KEY]=splitterTarget.style.width;this.updateSidebarWidth_()});splitter.addEventListener("dragmove",this.boundUpdateSidebarWidth_);window.addEventListener("resize",this.boundUpdateSidebarWidth_)},updateSidebarWidth_(){this.sidebarWidth_=getComputedStyle(this.$.sidebar).width},searchTermChanged_(newValue,oldValue){if(oldValue!==undefined&&!newValue){this.fire("iron-announce",{text:loadTimeData.getString("searchCleared")})}if(!this.searchTerm_){return}chrome.bookmarks.search(this.searchTerm_,results=>{const ids=results.map(function(node){return node.id});this.dispatch(setSearchResults(ids));this.fire("iron-announce",{text:ids.length>0?loadTimeData.getStringF("searchResults",this.searchTerm_):loadTimeData.getString("noSearchResults")})})},folderOpenStateChanged_(){window.localStorage[LOCAL_STORAGE_FOLDER_STATE_KEY]=JSON.stringify(Array.from(this.folderOpenState_))},handleFindShortcut(modalContextOpen){if(modalContextOpen){return false}this.$$("bookmarks-toolbar").searchField.showAndFocus();return true},searchInputHasFocus(){return this.$$("bookmarks-toolbar").searchField.isSearchFocused()},onUndoClick_(){this.fire("command-undo")}});export{BrowserProxy,Command,CommandManager,DialogFocusManager,DragInfo,DropPosition,HIDE_FOCUS_RING_ATTRIBUTE,IncognitoAvailability,LOCAL_STORAGE_FOLDER_STATE_KEY,LOCAL_STORAGE_TREE_WIDTH_KEY,MenuSource,ROOT_NODE_ID,Store$1 as Store,StoreClient$1 as StoreClient,canEditNode,canReorderChildren,changeFolderOpen,clearSearch,createBookmark,createEmptyState,deselectItems,editBookmark,getDescendants,getDisplayedList,isShowingSearch,moveBookmark,normalizeNodes,reduceAction,removeBookmark,removeIdsFromObject,removeIdsFromSet,reorderChildren,selectFolder,selectItem,setSearchResults,setSearchTerm,updateAnchor,updateFolderOpenState,updateNodes,updateSelectedFolder,updateSelection};