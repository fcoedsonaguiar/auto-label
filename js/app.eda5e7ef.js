(function(e){function t(t){for(var o,l,r=t[0],i=t[1],c=t[2],d=0,p=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},s=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/auto-label/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("h1",[e._v("\n        Auto Label\n      ")])]),n("v-spacer"),n("LocaleChange"),n("v-btn",{attrs:{href:"https://github.com/Renato66/auto-label",target:"_blank",icon:""}},[n("v-icon",[e._v("\n        mdi-github\n      ")])],1)],1),n("v-content",[n("router-view")],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"content-class":"br-8","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-btn",e._g({attrs:{icon:"",large:"",ripple:!1,"aria-label":"Choose language"}},o),[n("v-avatar",{attrs:{size:"24",tile:""}},[n("v-img",{attrs:{src:e.selectedLocale.flag}})],1)],1)]}}])},[n("v-list",{attrs:{dense:""}},e._l(e.filteredLocales,(function(t){return n("v-list-item",{key:t.id,attrs:{"aria-label":"Choose "+t.name+" language"},on:{click:function(n){return e.selectLocale(t.id)}}},[n("v-avatar",{attrs:{size:"24",tile:""}},[n("v-img",{attrs:{src:t.flag}})],1),n("div",{staticClass:"ml-2"},[e._v("\n        "+e._s(t.name)+"\n      ")])],1)})),1)],1)},r=[],i=(n("7514"),{data:function(){return{supportedLocales:[{id:"pt",name:"Português",flag:"https://www.countryflags.io/BR/flat/24.png"},{id:"en",name:"English",flag:"https://www.countryflags.io/US/flat/24.png"}]}},computed:{selectedLocale:function(){var e=this;return this.supportedLocales.find((function(t){return t.id===e.$i18n.locale}))},filteredLocales:function(){var e=this;return this.supportedLocales.filter((function(t){return t.id!==e.$i18n.locale}))}},methods:{selectLocale:function(e){this.$i18n.locale=e}}}),c=i,u=n("2877"),d=n("6544"),p=n.n(d),f=n("8212"),m=n("8336"),b=n("adda"),h=n("8860"),y=n("da13"),v=n("e449"),g=Object(u["a"])(c,l,r,!1,null,null,null),w=g.exports;p()(g,{VAvatar:f["a"],VBtn:m["a"],VImg:b["a"],VList:h["a"],VListItem:y["a"],VMenu:v["a"]});var x={name:"App",components:{LocaleChange:w},mounted:function(){document.dispatchEvent(new Event("render-event"))}},_=x,k=n("7496"),C=n("40dc"),S=n("a75b"),L=n("132d"),$=n("2fa4"),A=Object(u["a"])(_,a,s,!1,null,null,null),O=A.exports;p()(A,{VApp:k["a"],VAppBar:C["a"],VBtn:m["a"],VContent:S["a"],VIcon:L["a"],VSpacer:$["a"]});var V=n("8c4f"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pt-8"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm5:"","px-2":""}},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",[e._v("\n              "+e._s(e.$t("types.title"))+"\n            ")])]),n("v-flex",[n("v-radio-group",{attrs:{row:""},model:{value:e.types,callback:function(t){e.types=t},expression:"types"}},[n("v-radio",{attrs:{label:e.$t("types.opened"),value:"['opened']"}}),n("v-radio",{attrs:{label:e.$t("types.edited"),value:"['edited']"}}),n("v-radio",{attrs:{label:e.$t("types.both"),value:"['opened', 'edited']"}})],1)],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",[e._v("\n              "+e._s(e.$t("secret.title"))+"\n            ")]),n("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.$t("secret.details."+e.secret))}})]),n("v-flex",{attrs:{xs12:""}},[n("v-radio-group",{attrs:{row:""},model:{value:e.secret,callback:function(t){e.secret=t},expression:"secret"}},[n("v-radio",{attrs:{label:e.$t("secret.token"),value:"GITHUB_TOKEN"}}),n("v-radio",{attrs:{label:e.$t("secret.userToken"),value:"GITHUB_USER_TOKEN"}})],1)],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",[e._v("\n              "+e._s(e.$t("ignoreComments.title"))+"\n            ")])]),n("v-flex",{attrs:{xs12:""}},[n("v-switch",{attrs:{inset:"",label:e.$t("ignoreComments."+e.ignoreComments)},model:{value:e.ignoreComments,callback:function(t){e.ignoreComments=t},expression:"ignoreComments"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",[e._v("\n              "+e._s(e.$t("repo.title"))+"\n            ")]),n("p",{},[e._v("\n              "+e._s(e.$t("repo.details"))+"\n            ")])]),n("v-flex",{attrs:{xs8:""}},[n("v-text-field",{attrs:{label:e.$t("repo.label"),solo:"","prepend-inner-icon":"mdi-github",loading:e.loading,disabled:0!==e.labelList.length,hint:"https://www.github.com/"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchLabels(t)}},scopedSlots:e._u([{key:"message",fn:function(){return[e._v("\n              https://www.github.com/"),n("span",{staticClass:"primary--text"},[e._v(":owner")]),e._v("/"),n("span",{staticClass:"primary--text"},[e._v(":repo")])]},proxy:!0}]),model:{value:e.repo,callback:function(t){e.repo=t},expression:"repo"}})],1),n("v-flex",{attrs:{xs3:"","pt-2":"","pl-4":""}},[0===e.labelList.length?n("v-btn",{attrs:{icon:"",color:"primary"},on:{click:e.searchLabels}},[n("v-icon",[e._v("\n                mdi-magnify\n              ")])],1):n("v-btn",{attrs:{icon:"",color:"primary"},on:{click:e.clearRepo}},[n("v-icon",[e._v("\n                mdi-close\n              ")])],1)],1)],1),0!==e.labelList.length?n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",[e._v("\n              "+e._s(e.$t("lables.title"))+"\n            ")]),n("p",{},[e._v("\n              "+e._s(e.$t("lables.details"))+"\n            ")])]),e._l(e.labelList,(function(t,o){return n("v-flex",{key:o,attrs:{xs12:""}},[n("v-checkbox",{attrs:{"value-comparator":function(){return e.isAllowed(t.name)},inset:"",color:"primary",value:t.name},on:{change:function(n){return e.toggleLabel(t.name)}},scopedSlots:e._u([{key:"label",fn:function(){return[n("v-hover",{attrs:{"open-delay":"100"},scopedSlots:e._u([{key:"default",fn:function(o){var a=o.hover;return[n("div",[n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:a,expression:"hover"}],staticStyle:{position:"absolute","padding-top":"26px","z-index":"1",width:"100%"}},[n("v-btn",{staticClass:"text-none",attrs:{rounded:"",dark:"","x-small":"",color:"primary"},on:{click:function(n){return n.stopPropagation(),e.openSynonyms(t.name)}}},[n("v-icon",{attrs:{"x-small":"",left:""}},[e._v("\n                            mdi-plus\n                          ")]),e._v("\n                          Add synonyms\n                        ")],1),n("v-btn",{staticClass:"ml-2 text-none",attrs:{rounded:"",dark:"","x-small":"",color:"primary"},on:{click:function(n){return n.stopPropagation(),e.toggleDefault(t.name)}}},[n("v-icon",{attrs:{"x-small":"",left:""}},[e._v("\n                            mdi-plus\n                          ")]),e._v("\n                          Set default\n                        ")],1)],1)]),e._v("\n                    "+e._s(t.name)+"\n                    "),e.isDefault(t.name)?n("span",{staticClass:"ml-1 caption primary--text"},[e._v("(Default)")]):e._e(),e.labelsSynonyms[t.name]?n("span",{staticClass:"ml-1 caption primary--text"},[e._v("("+e._s("+ "+e.labelsSynonyms[t.name].length+" Synonyms")+")")]):e._e()],1)]}}],null,!0)})]},proxy:!0}],null,!0)})],1)}))],2):e._e()],1)],1),n("v-flex",{attrs:{xs12:"",sm7:"","px-2":""}},[n("YmlTransform",{attrs:{fields:e.fields}})],1)],1),n("ModalSynonyms",{attrs:{label:e.label,synonyms:e.labelsSynonyms[e.label]},on:{"update:label":function(t){e.label=t},"update:synonyms":function(t){return e.$set(e.labelsSynonyms,e.label,t)}}})],1)},T=[],j=(n("a481"),n("ac6a"),n("28a5"),n("6762"),n("2fdb"),n("96cf"),n("3b8d")),E=n("75fc"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",{staticStyle:{overflow:"scroll"}},[n("div",{staticClass:"text-none overline mb-4"},[e._v(".github/workflows/issue.yml")]),n("code",{ref:"code",staticClass:"px-4",staticStyle:{width:"100%"}},[e._v("\nname: Labeling new issue\non:\n  issues:\n      types: "+e._s(e.fields.types)+"\njobs:\n  build:\n    runs-on: ubuntu-latest\n  steps:\n    - uses: Renato66/auto-label@v2.0.0\n      with:\n        repo-token: "+e._s("{{ secrets."+e.fields.secret+" }}")+e._s(e.fields.ignoreComments?"":"\n        ignore-comments: "+e.fields.ignoreComments)+e._s("{}"===e.fields.labelsSynonyms?"":"\n        labels-synonyms: '"+e.fields.labelsSynonyms+"'")+e._s("[]"===e.fields.labelsNotAllowed?"":"\n        labels-not-allowed: '"+e.fields.labelsNotAllowed+"'")+e._s("[]"===e.fields.defaultLabels?"":"\n        default-labels: '"+e.fields.defaultLabels+"'")+"\n")])]),n("v-card-actions",{staticClass:"pb-4 pt-0"},[n("v-spacer"),n("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("span",e._g({staticClass:"white--text"},o),[e._v("x")]),n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:e.copyCode}},[e._v("\n            "+e._s(e.$t("yml.copy"))+"\n          ")])]}}]),model:{value:e.copied,callback:function(t){e.copied=t},expression:"copied"}},[n("span",[e._v(e._s(e.$t("yml.copied")))])]),n("v-spacer")],1),n("textarea",{staticStyle:{position:"absolute",top:"0","z-index":"-1"},attrs:{type:"hidden",id:"testing-code"},domProps:{value:e.code}})],1)},B=[],R={props:{fields:{type:Object}},data:function(){return{code:"",copied:!1}},methods:{copyCode:function(){var e=this;this.code=this.$refs.code.innerHTML.replace("\n",""),setTimeout((function(){var t=document.querySelector("#testing-code");t.setAttribute("type","text"),t.select();try{var n=document.execCommand("copy");e.copied=n,setTimeout((function(){e.copied=!1}),1500)}catch(o){alert("Oops, unable to copy")}t.setAttribute("type","hidden"),window.getSelection().removeAllRanges()}),500)}}},P=R,F=n("b0af"),U=n("99d9"),H=n("3a2f"),G=Object(u["a"])(P,I,B,!1,null,null,null),D=G.exports;p()(G,{VBtn:m["a"],VCard:F["a"],VCardActions:U["a"],VCardText:U["b"],VSpacer:$["a"],VTooltip:H["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"450"},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[n("v-card",[n("v-card-title",{staticClass:"headline primary white--text"},[n("div",{staticClass:"mx-auto",staticStyle:{"text-align":"center","word-break":"break-word"}},[e._v('\n        "'+e._s(e.label)+'"\n      ')])]),n("v-card-text",{staticClass:"mt-4"},[n("h2",[e._v("\n        "+e._s(e.$t("modal.title"))+"\n      ")]),n("p",[e._v("\n        "+e._s(e.$t("modal.text"))+"\n      ")]),e._l(e.synonyms,(function(t,o){return n("v-chip",{key:o,staticClass:"mr-2 mt-2",attrs:{color:"primary",dark:"",close:""},on:{"click:close":function(n){return e.remove(t)}}},[e._v("\n        "+e._s(t)+"\n      ")])})),n("v-text-field",{staticClass:"mt-4",attrs:{label:e.$t("modal.label"),hint:e.$t("modal.hint"),"error-messages":e.error},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addSynonym(t)},focus:function(t){e.error=[]}},model:{value:e.newSynonym,callback:function(t){e.newSynonym=t},expression:"newSynonym"}})],2),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.close}},[e._v("\n        "+e._s(e.$t("modal.done"))+"\n      ")])],1)],1)],1)},q=[],Y=(n("55dd"),{props:{label:{type:String},synonyms:{type:Array,default:function(){return[]}}},data:function(){return{newSynonym:"",error:[]}},methods:{close:function(){0===this.error.length&&""!==this.newSynonym?this.error=[this.$t("modal.error",{text:this.newSynonym})]:this.open=!1},remove:function(e){var t=this.synonyms.filter((function(t){return t!==e}));0===t.length?this.$emit("update:synonyms",void 0):this.$emit("update:synonyms",t)},addSynonym:function(){var e=[].concat(Object(E["a"])(this.synonyms),[this.newSynonym]).sort();this.$emit("update:synonyms",e),this.newSynonym=""}},computed:{open:{get:function(){return""!==this.label},set:function(){this.error=[],this.newSynonym="",this.$emit("update:label","")}}}}),J=Y,K=n("cc20"),z=n("169a"),Q=n("8654"),W=Object(u["a"])(J,M,q,!1,null,null,null),X=W.exports;p()(W,{VBtn:m["a"],VCard:F["a"],VCardActions:U["a"],VCardText:U["b"],VCardTitle:U["c"],VChip:K["a"],VDialog:z["a"],VSpacer:$["a"],VTextField:Q["a"]});var Z={name:"Home",components:{YmlTransform:D,ModalSynonyms:X},data:function(){return{label:"",repo:"",labelList:[],loading:!1,secret:"GITHUB_TOKEN",types:"['opened']",ignoreComments:!0,labelsSynonyms:{},labelsNotAllowed:[],defaultLabels:[],compiled:{labelsSynonyms:"",labelsNotAllowed:"",defaultLabels:""}}},methods:{clearRepo:function(){this.repo="",this.labelList="",this.$set(this,"labelsSynonyms",{}),this.$set(this,"labelsNotAllowed",[]),this.$set(this,"defaultLabels",[]),this.ymlCompile("labelsSynonyms"),this.ymlCompile("labelsNotAllowed"),this.ymlCompile("defaultLabels")},openSynonyms:function(e){this.label=e},toggleDefault:function(e){this.isDefault(e)?this.defaultLabels=this.defaultLabels.filter((function(t){return t!==e})):(this.$set(this.labelsSynonyms,e,void 0),this.ymlCompile("labelsSynonyms"),this.defaultLabels=[].concat(Object(E["a"])(this.defaultLabels),[e]),this.labelsNotAllowed=this.labelsNotAllowed.filter((function(t){return t!==e}))),this.ymlCompile("defaultLabels")},toggleLabel:function(e){this.isAllowed(e)?(this.$set(this.labelsSynonyms,e,void 0),this.defaultLabels=this.defaultLabels.filter((function(t){return t!==e})),this.ymlCompile("labelsSynonyms"),this.labelsNotAllowed=[].concat(Object(E["a"])(this.labelsNotAllowed),[e])):this.labelsNotAllowed=this.labelsNotAllowed.filter((function(t){return t!==e})),this.ymlCompile("labelsNotAllowed")},isAllowed:function(e){return!this.labelsNotAllowed.some((function(t){return t===e}))},isDefault:function(e){return this.defaultLabels.some((function(t){return t===e}))},getIssueYml:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n,o,a,s,l,r,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://raw.githubusercontent.com/".concat(this.repo,"/master/.github/workflows/issue.yml"));case 3:if(t=e.sent,!t.ok){e.next=16;break}return e.next=7,t.text();case 7:n=e.sent,o=function(e,t){return!t.includes(e.text)||(i.$set(i,e.field,t.split(": {{ secrets.")[1].split(" }}")[0]),!1)},a=function(e,t){return!t.includes(e.text)||(i.$set(i,e.field,t.split(": ")[1]),!1)},s=function(e,t){return!t.includes(e.text)||(i.$set(i,e.field,JSON.parse(t.split(": ")[1])),!1)},l=function(e,t){if(t.includes(e.text)){var n=t.split(": ")[1];return i.$set(i,e.field,JSON.parse(n.substring(1,n.length-1))),!1}return!0},r=[{text:"types:",field:"types",setFunction:a},{text:"repo-token:",field:"secret",setFunction:o},{text:"ignore-comments:",field:"ignoreComments",setFunction:s},{text:"labels-synonyms:",field:"labelsSynonyms",setFunction:l},{text:"labels-not-allowed:",field:"labelsNotAllowed",setFunction:l},{text:"default-labels:",field:"defaultLabels",setFunction:l}],n.split("\n").forEach((function(e){r=r.filter((function(t){return t.setFunction(t,e)}))})),e.next=17;break;case 16:console.log("not found");case 17:e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](0),console.log(e.t0),alert(this.$t("repo.error"));case 23:case"end":return e.stop()}}),e,this,[[0,19]])})));function t(){return e.apply(this,arguments)}return t}(),searchLabels:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.loading=!0,0===this.labelList.length){e.next=4;break}return e.abrupt("return");case 4:if(2===this.repo.split("/").length){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,fetch("https://api.github.com/repos/".concat(this.repo,"/labels"));case 8:if(t=e.sent,!t.ok){e.next=19;break}return e.next=12,t.json();case 12:return n=e.sent,this.labelList=n,e.next=16,this.getIssueYml();case 16:this.loading=!1,e.next=20;break;case 19:throw new Error(t.status);case 20:e.next=27;break;case 22:e.prev=22,e.t0=e["catch"](0),this.loading=!1,console.log(e.t0),alert(this.$t("repo.error"));case 27:case"end":return e.stop()}}),e,this,[[0,22]])})));function t(){return e.apply(this,arguments)}return t}(),ymlCompile:function(e){this.$set(this.compiled,e,JSON.stringify(this[e]).replace(/'/g,"''"))}},watch:{label:function(e,t){""===e&&(this.isDefault(t)&&(this.defaultLabels=this.defaultLabels.filter((function(e){return e!==t}))),this.isAllowed(t)||(this.labelsNotAllowed=this.labelsNotAllowed.filter((function(e){return e!==t}))),this.ymlCompile("labelsSynonyms"))},labelsNotAllowed:function(){this.ymlCompile("labelsNotAllowed")},defaultLabels:function(){this.ymlCompile("defaultLabels")}},computed:{fields:function(){return{secret:this.secret,types:this.types,ignoreComments:this.ignoreComments,labelsSynonyms:this.compiled.labelsSynonyms,labelsNotAllowed:this.compiled.labelsNotAllowed,defaultLabels:this.compiled.defaultLabels}}},mounted:function(){this.ymlCompile("labelsSynonyms"),this.ymlCompile("labelsNotAllowed"),this.ymlCompile("defaultLabels")}},ee=Z,te=(n("cccb"),n("ac7c")),ne=n("a523"),oe=n("0789"),ae=n("0e8f"),se=n("ce87"),le=n("a722"),re=n("67b6"),ie=n("43a6"),ce=n("b73d"),ue=Object(u["a"])(ee,N,T,!1,null,null,null),de=ue.exports;p()(ue,{VBtn:m["a"],VCheckbox:te["a"],VContainer:ne["a"],VExpandTransition:oe["a"],VFlex:ae["a"],VHover:se["a"],VIcon:L["a"],VLayout:le["a"],VRadio:re["a"],VRadioGroup:ie["a"],VSwitch:ce["a"],VTextField:Q["a"]}),o["a"].use(V["a"]);var pe=new V["a"]({mode:"history",base:"/auto-label/",routes:[{path:"/",name:"home",component:de}]}),fe=n("2f62");o["a"].use(fe["a"]);var me=new fe["a"].Store({state:{},mutations:{},actions:{}}),be=n("9483");Object(be["a"])("".concat("/auto-label/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var he=n("f309");o["a"].use(he["a"]);var ye=new he["a"]({}),ve=n("a925"),ge=n("edd4"),we=n("5d67");o["a"].use(ve["a"]);var xe=new ve["a"]({locale:"en",fallbackLocale:"en",messages:{en:ge,pt:we}});o["a"].config.productionTip=!1,new o["a"]({router:pe,store:me,vuetify:ye,i18n:xe,render:function(e){return e(O)}}).$mount("#app")},"5d67":function(e){e.exports=JSON.parse('{"repo":{"title":"Configurações avançadas","details":"Por padrão todas as labels podem ser tageadas, se você quiser mais customizações, insira seu repositório:","label":"autor/repositório","error":"Um erro ocorreu, por favor reporte no github"},"types":{"title":"Quando as labels serão adiconadas","opened":"Nova issue","edited":"Issue editada","both":"Nova e editada"},"secret":{"title":"Quem irá adicionar as labels","token":"Github bot","userToken":"Sua conta do github","details":{"GITHUB_TOKEN":"O repositório irá providenciar um token de accesso para adicionar labels automaticamente","GITHUB_USER_TOKEN":"Você precisará gerar um token de usuário, mais informações <a href=\'https://help.github.com/pt/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line\' target=\'_blank\'>aqui</a>, e precisará adicionar o token como um secret no repositório mais informações <a href=\'https://help.github.com/pt/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets\' target=\'_blank\'>aqui</a>"}},"ignoreComments":{"title":"Irá ignorar os comentário dentro da issue","true":"Ignorar","false":"Verificar"},"lables":{"title":"Labels do repositório","details":"Você pode selecionar / desselecionar as labels desejadas, e pode adicionar sinônimos as labels"},"modal":{"title":"Adicionar sinônimos","text":"Inserir os textos que quando encontrados na issue irão acionar a label","done":"Ok","label":"Inserir texto","hint":"Pressione enter para adicionar","error":"O texto `{text}` não foi adicionado"},"yml":{"copy":"Copiar","copied":"Arquivo yml copiado!"}}')},cccb:function(e,t,n){"use strict";var o=n("ff99"),a=n.n(o);a.a},edd4:function(e){e.exports=JSON.parse('{"repo":{"title":"Advanced configuration","details":"By default all labels are allowed to be tagged, if you want to customize more, insert your repository:","label":"owner/repo","error":"An error happened, report to our issue"},"types":{"title":"Select when labels will be added","opened":"Opened","edited":"Edited","both":"Opened and edited"},"secret":{"title":"Who will add the labels","token":"Github bot","userToken":"Your github account","details":{"GITHUB_TOKEN":"The repository will provide access to write in labels automatic","GITHUB_USER_TOKEN":"You will need to generate an user token more info <a href=\'https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line\' target=\'_blank\'>here</a> and add it as a secret in your repository more info <a href=\'https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets\' target=\'_blank\'>here</a>"}},"ignoreComments":{"title":"Will igonre labels inside comments","true":"Ignore","false":"Verify"},"lables":{"title":"Repository lables","details":"You can check and uncheck the disired label, and add synonyms to labels"},"modal":{"title":"Adding synonyms","text":"Insert texts that when found on a issue will trigger the label","done":"Done","label":"Insert text","hint":"Press enter to add","error":"The `{text}` was not added"},"yml":{"copy":"Copy","copied":"Yml file copied!"}}')},ff99:function(e,t,n){}});
//# sourceMappingURL=app.eda5e7ef.js.map