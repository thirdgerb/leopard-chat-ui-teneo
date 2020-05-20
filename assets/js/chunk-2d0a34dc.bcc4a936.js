(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0a34dc"],{"0237":function(e,t,n){"use strict";n.r(t),n("4160"),n("c975"),n("d81d"),n("0d03"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("159b");var o=n("53ca"),a=n("ca6b").getLogger("AgentAssistCannedResponseForm.vue"),i={name:"AddCannedResponseForm",filters:{tagify:function(e){return e?e=e.toString().toLowerCase().replace(/\s/g,""):""}},props:{text:{type:String,required:!0}},data:function(){return{showDialog:!0,cannedResponseText:this.text,tags:[],activator:null,attach:null,colors:["green","purple","indigo","cyan","teal","orange","pink","red","blue","lime","blue-grey"],editing:null,index:-1,items:[{header:"Select an option or create one"},{text:"teneo",color:"blue"},{text:"bot",color:"red"}],nonce:1,menu:!1,x:0,search:null,y:0}},computed:{},watch:{editing:function(e,t){null!==e&&t!==e&&(e.text=e.text.toLowerCase().replace(/\s/g,""),this.editing=e)},tags:function(e,t){var n=this;e.length!==t.length&&(a.debug("val",e),this.tags=e.map((function(e){return"object"===Object(o.a)(e)?(a.debug("color :",e.color),e={text:e.text.toLowerCase().replace(/\s/g,""),color:e.color?e.color:n.colors[n.nonce-1]},n.items.push(e),e.color||(n.nonce+=1),a.debug("> nonce ++  :",n.nonce)):"string"==typeof e&&(e={text:e.toLowerCase().replace(/\s/g,""),color:n.colors[n.nonce-1]},n.items.push(e),n.nonce+=1,a.debug(">> nonce ++  :",n.nonce)),e})))}},methods:{save:function(){var e=this,t=[];this.tags.forEach((function(e){t.push(e.text)}));var n={text:this.cannedResponseText,tags:t};this.$store.dispatch("liveChatAddCannedResponse",n).then((function(){e.$emit("saved")}))},hideDialog:function(){this.$emit("hideDialog")},edit:function(e,t){this.editing?(this.editing=null,this.index=-1):(t&&t.text&&(a.debug("Item Text: ".concat(t.text)),t.text=t.text.toString().toLowerCase().replace(/\s/g,"")),this.editing=t,this.index=e)},filter:function(e,t,n){if(e.header)return!1;var o=function(e){return null!==e?e:""},a=o(n),i=o(t);return i=i.toString().toLowerCase().replace(/\s/g,""),(a=a.toString().toLowerCase().replace(/\s/g,"")).indexOf(i)>-1}}},s=n("2877"),r=n("6544"),c=n.n(r),l=n("8336"),d=n("b0af"),u=n("99d9"),p=n("cc20"),g=n("62ad"),h=n("2b5d"),f=n("a523"),v=n("169a"),x=n("132d"),m=n("da13"),b=n("1800"),C=n("0fd9"),k=n("2fa4"),w=n("8654"),_=n("a844"),y=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showDialog?n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"title"},[n("v-icon",{staticClass:"mx-2",attrs:{color:"primary"}},[e._v("mdi-book-plus")]),e._v("New canned response ")],1)]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{name:"Text of the canned response","auto-grow":"",solo:"",label:"Canned Response Text",hint:"Copied from the bot but you can change it",outlined:"","persistent-hint":"","append-icon":"mdi-tooltip-text"},model:{value:e.cannedResponseText,callback:function(t){e.cannedResponseText=t},expression:"cannedResponseText"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-combobox",{attrs:{outlined:"",filter:e.filter,"hide-no-data":!e.search,items:e.items,"search-input":e.search,"append-icon":"mdi-pound-box-outline","hide-selected":"",label:"Search for a tag",hint:"Search or add new tag","persistent-hint":"",multiple:"","small-chips":"",solo:""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},scopedSlots:e._u([{key:"no-data",fn:function(){return[n("v-list-item",[n("span",{staticClass:"subheading mr-2"},[e._v("Create")]),n("v-chip",{attrs:{color:e.colors[e.nonce-1]+" lighten-3",label:"",small:""}},[e._v(e._s(e._f("tagify")(e.search)))])],1)]},proxy:!0},{key:"selection",fn:function(t){var o=t.attrs,a=t.item,i=t.parent,s=t.selected;return[a===Object(a)?n("v-chip",e._b({attrs:{color:a.color+" lighten-3","input-value":e._f("tagify")(s),label:"",small:""}},"v-chip",o,!1),[n("v-icon",{staticClass:"mr-1",attrs:{small:"",left:""}},[e._v("mdi-pound")]),n("span",{staticClass:"pr-2"},[e._v(e._s(e._f("tagify")(a.text)))]),n("v-icon",{attrs:{small:""},on:{click:function(e){return i.selectItem(a)}}},[e._v("mdi-tag-minus")])],1):e._e()]}},{key:"item",fn:function(t){var o=t.editingIndex,a=t.item;return[e.editing===a?n("v-text-field",{attrs:{autofocus:"",flat:"","background-color":"transparent","hide-details":"",solo:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.edit(o,a)}},model:{value:e.editing.text,callback:function(t){e.$set(e.editing,"text",t)},expression:"editing.text"}}):n("v-chip",{attrs:{color:a.color+" lighten-3",dark:"",label:"",small:""}},[e._v(e._s(e._f("tagify")(a.text)))]),n("v-spacer"),n("v-list-item-action",{on:{click:function(e){e.stopPropagation()}}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.edit(o,a)}}},[n("v-icon",[e._v(e._s(e.editing!==a?"mdi-pencil":"mdi-check"))])],1)],1)]}}],null,!1,2527392618),model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.hideDialog}},[e._v("Close")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1):e._e()}),[],!1,null,null,null);t.default=y.exports,c()(y,{VBtn:l.a,VCard:d.a,VCardActions:u.a,VCardText:u.c,VCardTitle:u.d,VChip:p.a,VCol:g.a,VCombobox:h.a,VContainer:f.a,VDialog:v.a,VIcon:x.a,VListItem:m.a,VListItemAction:b.a,VRow:C.a,VSpacer:k.a,VTextField:w.a,VTextarea:_.a})}}]);
//# sourceMappingURL=chunk-2d0a34dc.bcc4a936.js.map