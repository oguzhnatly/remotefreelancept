(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],d=0,m=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/remotefreelancept/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"13fb":function(t,e,a){"use strict";a("144e")},"144e":function(t,e,a){},"327f":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-btn",{staticClass:"github-btn",attrs:{elevation:"5",fab:"",absolute:""},on:{click:function(e){return t.goToExternal("https://github.com/franciscobmacedo/remotefreelancept/")}}},[a("v-icon",[t._v("mdi-github")])],1),a("v-main",[a("v-container",{attrs:{"fill-height":t.validateCount<1}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"pt-0 mt-0"},[a("div",{staticClass:"text-center font-weight-bold",class:t.validateCount>0?"text-h6":"display-1 mb-3 mt-2"},[t._v(" Remote freelancer from Portugal 🇵🇹 ")]),a("div",{staticClass:"text-center text-h6 font-weight-light",class:t.validateCount>0?"text-caption":"text-h6 mb-3"},[t._v(" simulate your net income ")]),a("Form")],1)],1),t.valid?a("div",[t.expenses>0?a("Alert"):t._e(),a("v-row",{staticClass:"mt-3 mb-0 pb-o",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12",sm:"6"}},[a("DisplayFreqToggler")],1),a("v-col",{staticClass:"mb-0 pb-0",attrs:{cols:"12",sm:"6"}},[a("MainInfo")],1)],1),a("v-row",{staticClass:"mt-0 pt-0",attrs:{justify:"center"}},[a("v-col",{staticClass:"mt-10 mt-sm-3 pt-0",attrs:{cols:"12",md:"6"}},[a("div",{staticClass:"d-flex flex-column justify-center"},[a("span",{staticClass:"mb-2 mb-sm-0"},[a("SSDiscount")],1),t.valid?a("Chart",{attrs:{chartData:t.datacollection,chartOptions:t.options,chartType:"doughnut"}}):t._e()],1)]),a("v-col",{staticClass:"mt-0 pt-0",attrs:{cols:"12",md:"6"}},[a("Details")],1)],1)],1):t._e()],1),t.valid?a("v-footer",{staticClass:"overflow-auto",attrs:{app:"",bottom:"",fixed:"",padless:"",align:"center",justify:"center","max-height":"5em"}},[a("v-col",{attrs:{cols:"12"}},[a("v-divider"),a("div",{staticClass:"d-flex flex-column flex-md-row justify-space-around"},[a("div",{staticClass:"text-caption"},[t._v(" *Assuming "+t._s(t.YEAR_BUSINESS_DAYS)+" business days in a year and "+t._s(t.MONTH_BUSINESS_DAYS)+" business days in a month. ")]),a("div",{staticClass:"text-caption"},[t._v(" This is only valid for independent workers with green receipts (trabalhadores independentes com recibos verdes). ")]),a("div",{staticClass:"text-caption"},[t._v(" VAT (IVA) is ignored (only for foreign clients). ")])])],1)],1):t._e()],1)],1)},r=[],i=a("5530");a("d3b7"),a("25f0"),a("b680"),a("ac1f"),a("5319");function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseFloat(t).toFixed(e)}function o(t){return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return o(parseFloat(t).toFixed(e))}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return l(t,e)+"€"}function d(t){var e=parseFloat(t.replaceAll(" ","").replaceAll("€",""));return e<=0?NaN:e}var m={YEAR:"year",MONTH:"month",DAY:"day"},f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-form",{ref:"form"},[a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[t._v(" "+t._s(t.select)+" "),a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[a("v-col",{staticStyle:{position:"relative"},attrs:{cols:"8",sm:"5",md:"4"}},[a("v-text-field",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideIncomeSugestions,expression:"hideIncomeSugestions"}],attrs:{label:"Income","prepend-inner-icon":"mdi-chevron-down","append-icon":"mdi-currency-eur",rules:[function(t){return!!t&&t.length>0||"You must have some income, no...?"}]},on:{click:function(e){return t.showIncomeSugestions()},keydown:function(e){return t.hideIncomeSugestions()},input:t.validate,"click:prepend-inner":t.showIncomeSugestions},model:{value:t.income,callback:function(e){t.income=e},expression:"income"}}),t.$vuetify.breakpoint.mdAndUp?a("span",[s?a("v-btn",{staticClass:"add-btn",attrs:{"x-small":"",outlined:"",color:"primary lighten-3"},on:{click:function(e){return t.increase()}}},[t._v("+ "+t._s(t.increaseAmount.text)+"€")]):t._e(),s?a("v-btn",{staticClass:"less-btn",attrs:{"x-small":"",outlined:"",color:"primary lighten-3"},on:{click:function(e){return t.decrease()}}},[t._v("- "+t._s(t.increaseAmount.text)+"€")]):t._e()],1):t._e(),a("v-slide-y-transition",[t.showsugestions?a("div",{staticClass:"sugestion-box"},[a("v-chip-group",{staticStyle:{position:"relative"},attrs:{"center-active":"","show-arrows":"",column:""},on:{change:function(e){return t.setDefaultIncome()}},model:{value:t.defaultIncome,callback:function(e){t.defaultIncome=e},expression:"defaultIncome"}},t._l(t.defaultIncomesCurr,(function(e){return a("v-chip",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1)],1):t._e()])],1)]}}])}),t.$vuetify.breakpoint.mdAndUp?a("div",[t._v("/")]):t._e(),a("v-col",{attrs:{cols:"4",sm:"3"}},[a("v-select",{attrs:{items:t.frequencyItems,"return-object":"",rules:[function(t){return!!t||"frequency is required"}],label:"Frequency",required:""},on:{input:t.validate},model:{value:t.frequency,callback:function(e){t.frequency=e},expression:"frequency"}})],1)],1),a("v-row")],1)],1)],1)},v=[],p=(a("07ac"),a("d81d"),a("2f62")),h={data:function(){return{select:null,items:["aa","bb","cc"],showsugestions:!1,showIncrement:!1,defaultIncome:null,frequencyItems:Object.values(m)}},computed:Object(i["a"])(Object(i["a"])({},Object(p["c"])(["valid"])),{},{frequency:{get:function(){return this.$store.state.frequency},set:function(t){this.$store.commit("setFrequency",t)}},income:{get:function(){var t=this.$store.state.income;return null===t||isNaN(t)||0===t?null:l(this.$store.state.income)},set:function(t){this.$store.commit("setIncome",d(t))}},defaultIncomesCurr:function(){return this.defaultIncomes.map((function(t){return u(t)}))},increaseAmount:function(){var t;switch(this.frequency){case m.YEAR:t={value:5e3,text:"5k"};break;case m.MONTH:t={value:1e3,text:"1k"};break;case m.DAY:t={value:100,text:"100"}}return t},defaultIncomes:function(){var t;switch(this.frequency){case m.YEAR:t=[3e4,5e4,6e4,7e4,1e5];break;case m.MONTH:t=[3e3,5e3,6e3,7e3,1e4];break;case m.DAY:t=[200,300,500,700,1e3]}return t}}),methods:{validate:function(){var t=this.$refs.form.validate();t&&this.$store.state.income>0?this.$store.dispatch("validate"):this.$store.dispatch("unvalid")},round:function(t){return Math.round(100*t)/100},showIncomeSugestions:function(){this.showsugestions=!0},hideIncomeSugestions:function(){this.showsugestions=!1},setDefaultIncome:function(){var t=this;this.$store.dispatch("income",d(this.defaultIncome)).then((function(){t.validate()}))},increase:function(){var t=this;this.$store.dispatch("income",(this.$store.state.income||0)+this.increaseAmount.value).then((function(){t.validate()}))},decrease:function(){var t=this,e=this.$store.state.income-this.increaseAmount.value;e=e<=0?null:e,this.$store.dispatch("income",e).then((function(){t.validate()}))}}},b=h,x=(a("c4e7"),a("2877")),y=a("6544"),g=a.n(y),_=a("8336"),j=a("cc20"),C=a("ef9a"),w=a("62ad"),k=a("a523"),S=a("4bd4"),I=a("ce87"),T=a("0fd9"),A=a("b974"),D=a("0789"),O=a("8654"),V=a("269a"),R=a.n(V),M=a("a293"),q=Object(x["a"])(b,f,v,!1,null,null,null),E=q.exports;g()(q,{VBtn:_["a"],VChip:j["a"],VChipGroup:C["a"],VCol:w["a"],VContainer:k["a"],VForm:S["a"],VHover:I["a"],VRow:T["a"],VSelect:A["a"],VSlideYTransition:D["g"],VTextField:O["a"]}),R()(q,{ClickOutside:M["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-row justify-center align-center"},[a("div",{staticClass:"text-caption"},[t._v("Show income per")]),a("v-btn-toggle",{attrs:{tile:"",color:"primary accent-3",group:"",mandatory:!0},model:{value:t.selectedFrequency,callback:function(e){t.selectedFrequency=e},expression:"selectedFrequency"}},t._l(t.frequencyItems,(function(e,s){return a("v-btn",{key:s,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1)],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-caption text-sm-body-2",attrs:{cols:"8"}},[t._v(" Number of months to simulate your earnings ")]),a("v-col",{attrs:{cols:"2"}},[a("v-form",{ref:"form2"},[a("v-text-field",{attrs:{required:"",type:"number",rules:[function(t){return!!t&&t>0||"this can't be 0..."}]},model:{value:t.nrMonths,callback:function(e){t.nrMonths=e},expression:"nrMonths"}})],1)],1),a("v-tooltip",{attrs:{bottom:"","max-width":t.$vuetify.breakpoint.smAndUp?"360":null,color:"grey darken-3"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({},"v-icon",n,!1),s),[t._v("mdi-help-circle")])]}}])},[a("span",[t._v(" In a portugues company, you can get payed 2 extra months per year (for holidays and christmas). If you want to compare your remote salary with some local company, you should change this field to 14 months. ")])])],1)],1)},N=[],$={data:function(){return{}},computed:{frequencyItems:function(){return Object.values(m)},selectedFrequency:{get:function(){return this.$store.state.displayFreq},set:function(t){this.$store.commit("setDisplayFrequency",t)}},nrMonths:{get:function(){return this.$store.state.nrMonthsDisplay},set:function(t){this.$store.commit("setNrMonthsDisplay",t)}}}},P=$,Y=a("a609"),z=a("132d"),B=a("3a2f"),U=Object(x["a"])(P,F,N,!1,null,null,null),H=U.exports;g()(U,{VBtn:_["a"],VBtnToggle:Y["a"],VCol:w["a"],VForm:S["a"],VIcon:z["a"],VRow:T["a"],VTextField:O["a"],VTooltip:B["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center",align:"center"}},[a("span",{staticClass:"text-caption text-center d-flex align-center"},[t._v(" adjust your income for social security "),a("v-tooltip",{attrs:{bottom:"","max-width":t.$vuetify.breakpoint.smAndUp?"360":null,color:"grey darken-3"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.goToExternal("https://www.seg-social.pt/documents/10152/15974914/1009%20Trabalhador%20independente%20-%20novo%20regime/87b6e00c-523d-4718-8a88-942ea804c18a")}}},"v-btn",n,!1),s),[a("v-icon",{attrs:{small:""}},[t._v("mdi-help-circle")])],1)]}}])},[a("span",[t._v(" You can adjust your income for social security tax calculations with a minimum of -25% and a maximum of +25%. This will probably afect your retirement pension. Click in the icon for more information. ")])])],1),a("v-col",{staticClass:"my-0 py-0 mx-1",attrs:{cols:"12"}},[a("v-slider",{attrs:{"tick-labels":t.tickLabels,max:"10",step:"1","tick-size":"6",ticks:"always"},on:{change:t.setSsDiscount},model:{value:t.ssDiscount,callback:function(e){t.ssDiscount=e},expression:"ssDiscount"}})],1)],1)},K=[],X=(a("1276"),{data:function(){return{ssDiscount:5,tickLabels:["-25%","-20%","-15%","-10%","-5%","0%","5%","10%","15%","20%","25%"]}},methods:{goToExternal:function(t){window.open(t)},setSsDiscount:function(){this.$store.commit("setSsDiscount",parseInt(this.tickLabels[this.ssDiscount].split("%")[0])/100)}}}),G=X,J=(a("13fb"),a("ba0d")),W=Object(x["a"])(G,L,K,!1,null,"5c55ba16",null),Q=W.exports;g()(W,{VBtn:_["a"],VCol:w["a"],VIcon:z["a"],VRow:T["a"],VSlider:J["a"],VTooltip:B["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"px-3",attrs:{justify:"space-between"}},[a("v-col",{staticClass:"\n      green\n      lighten-5\n      text-center\n      d-flex\n      flex-column\n      justify-space-between\n    "},[a("div",{staticClass:"text-md-h6"},[t._v(" "+t._s(t.netIncomeFormat)),a("span",{staticClass:"caption"},[t._v("/"+t._s(t.displayFreq)+"*")])]),a("div",{staticClass:"font-weight-medium caption text-md-overline"},[t._v("Net income")])]),a("v-col",{staticClass:"red lighten-5 text-center offset-1"},[a("div",{staticClass:"text-md-h6 text-center"},[t._v(" "+t._s(t.taxesFormat)),a("span",{staticClass:"caption"},[t._v("/"+t._s(t.displayFreq)+"*")])]),a("div",{staticClass:"font-weight-medium caption text-md-overline"},[t._v("Taxes")]),a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"\n          caption\n          d-flex\n          align-center\n          justify-center\n          flex-wrap flex-sm-row flex-column\n          text-center\n          pt-3\n          pb-0\n          pl-0\n          pr-0\n        ",attrs:{cols:"6"}},[a("div",{staticClass:"pr-md-2"},[t._v(t._s(t.irsFormat))]),a("div",{staticClass:"text-center red--text text--lighten-1 caption"},[t._v("IRS")])]),a("v-col",{staticClass:"\n          caption\n          d-flex\n          align-center\n          justify-center\n          flex-wrap flex-sm-row flex-column\n          text-center\n          pt-3\n          pb-0\n          pl-0\n          pr-0\n        ",attrs:{cols:"6"}},[a("div",{staticClass:"pr-md-2"},[t._v(t._s(t.ssFormat))]),a("div",{staticClass:"text-center blue--text text--lighten-1 caption"},[t._v("SS")])])],1)],1)],1)},tt=[],et={computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(p["c"])(["colors","displayFreq"])),Object(p["b"])(["irsPay","ssPay","netIncome"])),{},{netIncomeFormat:function(){return u(this.netIncome[this.displayFreq])},taxesFormat:function(){return u(this.irsPay[this.displayFreq]+this.ssPay[this.displayFreq])},irsFormat:function(){return u(this.irsPay[this.displayFreq])},ssFormat:function(){return u(this.ssPay[this.displayFreq])}})},at=et,st=Object(x["a"])(at,Z,tt,!1,null,null,null),nt=st.exports;g()(st,{VCol:w["a"],VRow:T["a"]});var rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("canvas")])}],ct=(a("159b"),a("30ef")),ot=a.n(ct),lt={props:{chartType:String,chartData:Object,chartOptions:Object},data:function(){return{chart:null}},mounted:function(){var t=this.chartType,e=this.chartData,a=this.chartOptions;this.chartConstructor(t,e,a)},watch:{chartData:function(t){var e=this;t.datasets.forEach((function(t,a){e.chart.data.datasets[a].data=t.data})),this.chart.update()},chartOptions:function(t){this.chart.options=t,this.chart.update()}},methods:{chartConstructor:function(t,e,a){var s=document.querySelector("canvas");this.chart=new ot.a(s,{type:t,data:e,options:a})}}},ut=lt,dt=Object(x["a"])(ut,rt,it,!1,null,null,null),mt=dt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-alert",{staticClass:"white--text my-0",attrs:{color:"#ff5252"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"py-0 my-0 text-center",attrs:{cols:"12",md:"8"}},[t._v(" Can you have "),a("span",{staticClass:"font-weight-bold expense-text px-2 px-md-3"},[t._v(t._s(t.expensesLabelText)+" "),a("span",{staticClass:"caption"},[t._v("/year")])]),t._v(" professional related expenses to be granteed the 15% discount? ")]),a("v-col",{staticClass:"py-0 my-0",attrs:{cols:"6",md:"2"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"mr-3"},[t._v("no")]),a("v-switch",{staticClass:"white--text m-0",attrs:{label:"",inset:"",color:"primary"},model:{value:t.hasExpenses,callback:function(e){t.hasExpenses=e},expression:"hasExpenses"}}),a("div",[t._v("yes")])],1)],1),a("v-col",{staticClass:"py-0 my-0",attrs:{cols:"2",md:"1"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.goToExternal("https://www.e-konomista.pt/irs-para-quem-passa-recibos-verdes#h-quais-as-despesas-a-deduzir-no-irs-para-quem-passa-recibos-verdes")}}},"v-btn",n,!1),s),[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-help-circle ")])],1)]}}])},[a("span",[t._v("What is this?")])])],1)],1)],1)},vt=[],pt={computed:Object(i["a"])(Object(i["a"])({},Object(p["b"])(["expenses"])),{},{hasExpenses:{get:function(){return this.$store.state.hasExpenses},set:function(t){this.$store.commit("setHasExpenses",t)}},expensesLabelText:function(){return u(this.expenses)}}),methods:{goToExternal:function(t){window.open(t)}}},ht=pt,bt=(a("668d"),a("0798")),xt=a("b73d"),yt=Object(x["a"])(ht,ft,vt,!1,null,"1b9f4759",null),gt=yt.exports;g()(yt,{VAlert:bt["a"],VBtn:_["a"],VCol:w["a"],VIcon:z["a"],VRow:T["a"],VSwitch:xt["a"],VTooltip:B["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Title")]),a("th",{staticClass:"text-no-wrap text-left"},[t._v("Year")]),a("th",{staticClass:"text-left"},[t._v("Month")]),a("th",{staticClass:"text-left"},[t._v("Day")])])]),a("tbody",[a("tr",[a("td",[t._v("Gross income")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.grossIncome.year,t.decimalCases))+" ")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.grossIncome.month,t.decimalCases))+" ")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.grossIncome.day,t.decimalCases))+" ")])]),a("tr",[a("td",{staticClass:"text-center grey lighten-2",attrs:{colspan:"4"}},[a("b",[t._v("IRS estimation")]),a("span",{staticClass:"text-caption pl-1 pl-md-3"},[t._v(" tax rank level "),a("span",{staticClass:"red--text"},[t._v(t._s(t.taxRank.id))]),t._v(" (out of "+t._s(t.TAX_RANKS.length)+") "),a("v-tooltip",{attrs:{bottom:"","max-width":t.$vuetify.breakpoint.smAndUp?"360":null,color:"grey darken-3"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){t.showTaxRanksTable=!0}}},"v-btn",n,!1),s),[a("v-icon",t._g(t._b({attrs:{small:""}},"v-icon",n,!1),s),[t._v("mdi-help-circle")])],1)]}}])},[a("span",[t._v(" show tax ranks table ")])])],1)])]),a("tr",[a("td",[t._v("Specific deductions")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.specificDeductions,t.decimalCases))+" ")]),a("td",{staticClass:"grey lighten-4"}),a("td",{staticClass:"grey lighten-4"})]),a("tr",[a("td",[t._v("Expenses needed for the 15% discount")]),a("td",{staticClass:"text-no-wrap"},[t._v(t._s(t.currency(t.expenses,t.decimalCases)))]),a("td",{staticClass:"grey lighten-4"}),a("td",{staticClass:"grey lighten-4"})]),a("tr",[a("td",[t._v("Taxable income")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.taxableIncome,t.decimalCases))+" ")]),a("td",{staticClass:"grey lighten-4"}),a("td",{staticClass:"grey lighten-4"})]),a("tr",[a("td",[t._v("Taxable income for average tax")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.taxIncomeAvg,t.decimalCases))+" ")]),a("td",{staticClass:"grey lighten-4"}),a("td",{staticClass:"grey lighten-4"})]),a("tr",[a("td",[t._v("Taxable income for normal tax")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.taxIncomeNormal,t.decimalCases))+" ")]),a("td",{staticClass:"grey lighten-4"}),a("td",{staticClass:"grey lighten-4"})]),a("tr",{staticClass:"red lighten-4"},[a("td",[t._v("IRS")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.irsPay.year,t.decimalCases))+" ")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.irsPay.month,t.decimalCases))+" ")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.irsPay.day,t.decimalCases))+" ")])]),a("tr",{staticClass:"blue lighten-4"},[a("td",[t._v("Social security")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.ssPay.year,t.decimalCases))+" ")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.ssPay.month,t.decimalCases))+" ")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.ssPay.day,t.decimalCases))+" ")])]),a("tr",{staticClass:"green lighten-4"},[a("td",[t._v("Net income")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.netIncome.year,t.decimalCases))+" ")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.netIncome.month,t.decimalCases))+" ")]),a("td",{staticClass:"text-no-wrap"},[t._v(" "+t._s(t.currency(t.netIncome.day,t.decimalCases))+" ")])])])]},proxy:!0}])}),a("TaxRanksDialog",{attrs:{dialog:t.showTaxRanksTable},on:{closeDialog:function(e){t.showTaxRanksTable=!1}}})],1)},jt=[],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"700"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v("Tax Ranks")]),a("v-card-text",{staticClass:"mt-2"},[t._v(" Your taxable income ("),a("span",{staticClass:"green--text"},[t._v(t._s(t.formatCurrency(t.taxableIncome)))]),t._v(") is in level "),a("span",{staticClass:"red--text"},[t._v(t._s(t.taxRank.id))]),t._v(" ("),a("span",{domProps:{innerHTML:t._s(t.taxRankMinText)}}),a("span",{domProps:{innerHTML:t._s(t.taxRankMaxText)}}),t._v("). "),a("v-simple-table",{attrs:{"min-height":"300"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",[t._v("Level")]),a("th",[t._v("Minimum")]),a("th",[t._v("Maximum")]),a("th",[t._v("Normal Tax")]),a("th",[t._v("Average Tax")])])]),a("tbody",t._l(t.TAX_RANKS,(function(e){return a("tr",{key:e.id,class:{active:e.id===t.taxRank.id}},[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(t.formatCurrency(e.min)))]),a("td",[t._v(t._s(t.formatCurrency(e.max)))]),a("td",[t._v(t._s(t.formatPercentage(e.normalTax)))]),a("td",[t._v(t._s(t.formatPercentage(e.averageTax)))])])})),0)]},proxy:!0}])})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("closeDialog")}}},[t._v(" Close ")])],1)],1)],1)},wt=[],kt=(a("99af"),{props:{dialog:Boolean},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(p["c"])(["TAX_RANKS"])),Object(p["b"])(["taxRank","taxableIncome"])),{},{showDialog:{get:function(){return this.dialog},set:function(){this.$emit("closeDialog")}},taxRankMinText:function(){return this.taxRank.min?'bigger than <span class="text-subtitle-2">'.concat(this.formatCurrency(this.taxRank.min),"</span>"):null},taxRankMaxText:function(){var t=this.taxRankMinText?" and":"";return this.taxRank.max?"".concat(t,' lower than <span class="text-subtitle-2">').concat(this.formatCurrency(this.taxRank.max),"</span>"):null}}),methods:{formatPercentage:function(t){return t?(100*t).toFixed(2)+"%":""},formatCurrency:function(t){return t?u(t):""}}}),St=kt,It=a("b0af"),Tt=a("99d9"),At=a("169a"),Dt=a("ce7e"),Ot=a("1f4f"),Vt=a("2fa4"),Rt=Object(x["a"])(St,Ct,wt,!1,null,null,null),Mt=Rt.exports;g()(Rt,{VBtn:_["a"],VCard:It["a"],VCardActions:Tt["a"],VCardText:Tt["b"],VCardTitle:Tt["c"],VDialog:At["a"],VDivider:Dt["a"],VSimpleTable:Ot["a"],VSpacer:Vt["a"]});var qt={components:{TaxRanksDialog:Mt},data:function(){return{showTaxRanksTable:!1}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(p["c"])(["colors","displayFreq","TAX_RANKS"])),Object(p["b"])(["grossIncome","specificDeductions","expenses","irsPay","ssPay","netIncome","taxableIncome","taxIncomeAvg","taxIncomeNormal","taxRank"])),{},{decimalCases:function(){return this.$vuetify.breakpoint.smAndUp?2:0}}),methods:{currency:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return u(t,e)}}},Et=qt,Ft=Object(x["a"])(Et,_t,jt,!1,null,null,null),Nt=Ft.exports;g()(Ft,{VBtn:_["a"],VIcon:z["a"],VSimpleTable:Ot["a"],VTooltip:B["a"]});var $t={name:"App",components:{Form:E,SSDiscount:Q,DisplayFreqToggler:H,MainInfo:nt,Chart:mt,Alert:gt,Details:Nt},data:function(){return{validateCount:0}},watch:{valid:function(){this.validateCount++}},methods:{goToExternal:function(t){window.open(t)}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(p["c"])(["valid","displayFreq","YEAR_BUSINESS_DAYS","MONTH_BUSINESS_DAYS"])),Object(p["b"])(["grossIncome","irsPay","ssPay","netIncome","expenses"])),{},{datacollection:function(){return{labels:["irs","ss","net \n income"],datasets:[{label:"My First Dataset",data:[c(this.irsPay[this.displayFreq],2),c(this.ssPay[this.displayFreq],2),c(this.netIncome[this.displayFreq],2)],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","#76c479"],hoverOffset:4}]}},options:function(){var t=this;return{legend:{display:!1},tooltips:{callbacks:{label:function(t,e){var a=e.datasets[t.datasetIndex].data[t.index];return u(a,2)}}},plugins:{datalabels:{display:!0,textAlign:"center",formatter:function(e,a){return a.chart.data.labels[a.dataIndex]+"\n"+c(e/t.grossIncome[t.displayFreq]*100).toString()+"%"},color:"#fff",font:{size:"13"}},doughnutlabel:{labels:[{text:u(this.grossIncome[this.displayFreq]),font:{size:20,weight:"bold"}},{text:"gross income"}]}}}}})},Pt=$t,Yt=(a("034f"),a("7496")),zt=a("553a"),Bt=a("f6c4"),Ut=Object(x["a"])(Pt,n,r,!1,null,null,null),Ht=Ut.exports;g()(Ut,{VApp:Yt["a"],VBtn:_["a"],VCol:w["a"],VContainer:k["a"],VDivider:Dt["a"],VFooter:zt["a"],VIcon:z["a"],VMain:Bt["a"],VRow:T["a"]});var Lt=a("f309");s["a"].use(Lt["a"]);var Kt=new Lt["a"]({});a("4de4");s["a"].use(p["a"]);var Xt=.214,Gt=5318.4,Jt=new p["a"].Store({state:{valid:!1,income:null,frequency:m.YEAR,displayFreq:m.MONTH,YEAR_BUSINESS_DAYS:248,MONTH_BUSINESS_DAYS:22,TAX_RANKS:[{id:1,min:0,max:7479,normalTax:.145,averageTax:.145},{id:2,min:7479,max:11284,normalTax:.21,averageTax:.1669},{id:3,min:11284,max:15992,normalTax:.265,averageTax:.1958},{id:4,min:15992,max:20700,normalTax:.285,averageTax:.2161},{id:5,min:20700,max:26355,normalTax:.35,averageTax:.2448},{id:6,min:26355,max:38632,normalTax:.37,averageTax:.2846},{id:7,min:38632,max:50483,normalTax:.435,averageTax:.3199},{id:8,min:50483,max:78834,normalTax:.45,averageTax:.3667},{id:9,min:78834,normalTax:.48}],hasExpenses:!0,nrMonthsDisplay:12,colors:{netIncome:"#76c479",irs:"#ff6384",ss:"#36a2eb"},ssDiscount:0},getters:{ssPay:function(t,e){var a=Xt*Math.min(Gt,.7*e.grossIncome.month*(1+t.ssDiscount)),s=Xt*Math.min(12*Gt,.7*e.grossIncome.year*(1+t.ssDiscount));return{year:Math.max(s,240),month:Math.max(a,20),day:a/t.MONTH_BUSINESS_DAYS}},specificDeductions:function(t,e){return Math.max(4104,Math.min(e.ssPay.year,.1*e.grossIncome.year))},expenses:function(t,e){if(null===t.income)return null;var a=e.grossIncome.year,s=.15*a-e.specificDeductions;return s<0?0:s},taxableIncome:function(t,e){var a=e.grossIncome.year;return t.hasExpenses?.75*a:.9*a},taxRank:function(t,e){var a=e.taxableIncome;return t.TAX_RANKS.filter((function(e,s){return s==t.TAX_RANKS.length-1&&e.min<a?e:e.min<a&&e.max>=a}))[0]},taxRankAvg:function(t,e){var a=e.taxRank;if(void 0===a||1===a.id)return a;var s=a.id-1;return t.TAX_RANKS.filter((function(t){return t.id==s}))[0]},taxIncomeAvg:function(t,e){return e.taxRank.id<=1?e.taxableIncome:e.taxRankAvg.max},taxIncomeNormal:function(t,e){return e.taxRank.id<=1?0:e.taxableIncome-e.taxIncomeAvg},irsPay:function(t,e){if(void 0===e.taxRankAvg)return{};var a=e.taxIncomeAvg*e.taxRankAvg.averageTax+e.taxIncomeNormal*e.taxRank.normalTax,s=Math.max(a/t.nrMonthsDisplay,0);return{year:Math.max(a,0),month:s,day:s/t.MONTH_BUSINESS_DAYS}},netIncome:function(t,e){var a=e.grossIncome.month-e.irsPay.month-e.ssPay.month;return{year:e.grossIncome.year-e.irsPay.year-e.ssPay.year,month:a,day:a/t.MONTH_BUSINESS_DAYS}},grossIncome:function(t){var e={};if(t.nrMonthsDisplay)switch(t.frequency){case m.YEAR:e.year=t.income,e.month=t.income/t.nrMonthsDisplay,e.day=t.income/t.YEAR_BUSINESS_DAYS;break;case m.MONTH:e.year=t.income*t.nrMonthsDisplay,e.month=t.income,e.day=t.income/t.MONTH_BUSINESS_DAYS;break;case m.DAY:e.year=t.income*t.YEAR_BUSINESS_DAYS,e.month=t.income*t.MONTH_BUSINESS_DAYS*12/t.nrMonthsDisplay,e.day=t.income}return e}},mutations:{setValid:function(t,e){t.valid=e},setIncome:function(t,e){t.income=e},setFrequency:function(t,e){t.frequency=e},setHasExpenses:function(t,e){t.hasExpenses=e},setDisplayFrequency:function(t,e){t.displayFreq=e},setNrMonthsDisplay:function(t,e){console.log("setting nr months display"),t.nrMonthsDisplay=e},setSsDiscount:function(t,e){t.ssDiscount=e}},actions:{validate:function(t){t.commit("setValid",!0)},unvalid:function(t){t.commit("setValid",!1)},income:function(t,e){t.commit("setIncome",e)}}}),Wt=a("a9be"),Qt=a.n(Wt),Zt=a("1a3e"),te=a.n(Zt);s["a"].config.productionTip=!1,ot.a.plugins.register(Qt.a),ot.a.plugins.register(te.a),new s["a"]({vuetify:Kt,store:Jt,render:function(t){return t(Ht)}}).$mount("#app")},"668d":function(t,e,a){"use strict";a("327f")},"85ec":function(t,e,a){},"86b4":function(t,e,a){},c4e7:function(t,e,a){"use strict";a("86b4")}});
//# sourceMappingURL=app.54a63c5a.js.map