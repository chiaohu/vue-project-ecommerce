(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c220b04"],{"4a2f":function(t,e,s){"use strict";s("b1d9")},"56a6":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-alert"},t._l(t.messages,(function(e,a){return s("div",{key:a,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v(" "+t._s(e.message)+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(a)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},r=[],o=(s("a434"),s("159b"),{name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(t,e){var s=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:s}),this.removeMessageWithTiming(s)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(s,a){s.timestamp===t&&e.messages.splice(a,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("message:push",(function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,s)}))}}),i=o,n=(s("4a2f"),s("2877")),c=Object(n["a"])(i,a,r,!1,null,null,null);e["a"]=c.exports},8418:function(t,e,s){"use strict";var a=s("c04e"),r=s("9bf2"),o=s("5c6c");t.exports=function(t,e,s){var i=a(e);i in t?r.f(t,i,o(0,s)):t[i]=s}},"8cd9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("AlertMessage"),s("h2",{staticClass:"mt-3 ml-3 h2 font-weight-bold"},[t._v("購物車清單")]),s("div",{staticClass:"col-md-8 ml-auto mr-auto shoppingcar"},[t.cart.carts.length<1?s("div",{staticClass:"text-center bg-warning text-light"},[t._v(" 無商品 ")]):t._e(),s("table",{staticClass:"table mt-4"},[t._m(0),s("tbody",t._l(t.cart.carts,(function(e){return s("tr",{key:e.id},[s("td",{staticClass:"d-flex"},[s("div",{staticClass:"mr-1",staticStyle:{height:"50px",width:"100px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.product.image+")"}}),t._v(" "+t._s(e.product.title)+" "),e.coupon?s("div",{staticClass:"text-success ml-1"},[t._v(" 已套用優惠券 ")]):t._e()]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(e.product.price))+" ")]),s("td",{staticClass:"text-center"},[t._v(" "+t._s(e.qty)+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(e.product.price*e.qty))+" ")]),s("td",[s("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.removeCartItem(e.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])])])})),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.cart.total))])]),t.cart.final_total!==t.cart.total?s("tr",[s("td",{staticClass:"text-right text-success",attrs:{colspan:"4"}},[t._v("折扣後價格")]),s("td",{staticClass:"text-right text-success"},[t._v(t._s(t.cart.final_total))])]):t._e()])]),s("div",{staticClass:"input-group mb-3 input-group-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:function(e){return t.addCouponCode()}}},[t._v(" 套用優惠碼 ")])])]),s("div",{staticClass:"my-5 row justify-content-center"},[s("validation-observer",{staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[s("form",[s("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("*Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:r,attrs:{id:"email",type:"email",name:"email",placeholder:"請輸入電子信箱"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])])]}}],null,!0)}),s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("*收件人姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:r,attrs:{id:"username",type:"text",name:"name",placeholder:"請輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])])]}}],null,!0)}),s("validation-provider",{attrs:{rules:"required|numeric"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"usertel"}},[t._v("*收件人電話")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:r,attrs:{id:"usertel",type:"tel",name:"tel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])])]}}],null,!0)}),s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"usertel"}},[t._v("*收件人地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:r,attrs:{id:"useraddress",type:"address",name:"address",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])])]}}],null,!0)}),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"useraddress"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button",disabled:a},on:{click:function(e){return e.preventDefault(),t.creatOrder()}}},[t._v(" 送出訂單 ")])])],1)]}}])})],1)])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"text-center"},[s("th",[t._v("產品名稱")]),s("th",{attrs:{width:"120"}},[t._v("售價")]),s("th",{attrs:{width:"100"}},[t._v("數量")]),s("th",{attrs:{width:"100"}},[t._v("合計")]),s("th",{attrs:{width:"80"}},[t._v("刪除")])])])}],o=(s("99af"),s("56a6")),i={data:function(){return{cart:{},isLoading:!1,coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("chiaohu","/cart");this.$http.get(e).then((function(e){t.cart=e.data.data}))},removeCartItem:function(t){var e=this,s=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("chiaohu","/cart/").concat(t);this.$http.delete(a).then((function(t){s.getCart(),e.$bus.$emit("message:push","已成功移除商品","success")})),s.checkCart()},checkCart:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("chiaohu","/cart");t.$http.get(e).then((function(e){t.cart=e.data.data.carts}))},addCouponCode:function(){var t=this,e=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("chiaohu","/coupon"),a={code:e.coupon_code};e.isLoading=!0,e.$http.post(s,{data:a}).then((function(s){s.data.success?t.$bus.$emit("message:push","成功套用優惠券","success"):t.$bus.$emit("message:push","優惠券套用失敗請重新確認","danger"),e.getCart(),e.isLoading=!1}))},creatOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("chiaohu","/order"),s=t.form;t.isLoading=!0,t.$http.post(e,{data:s}).then((function(e){console.log(e.data),e.data.success?(t.$bus.$emit("message:push","建立訂單","success"),t.isLoading=!1,t.$router.push("/customer_checkout/".concat(e.data.orderId))):t.$bus.$emit("message:push","建立訂單失敗，請重新確認","danger")}))}},components:{AlertMessage:o["a"]},created:function(){this.getCart()}},n=i,c=s("2877"),u=Object(c["a"])(n,a,r,!1,null,null,null);e["default"]=u.exports},"99af":function(t,e,s){"use strict";var a=s("23e7"),r=s("d039"),o=s("e8b5"),i=s("861d"),n=s("7b0b"),c=s("50c4"),u=s("8418"),l=s("65f0"),d=s("1dde"),m=s("b622"),p=s("2d00"),f=m("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",g=p>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),_=d("concat"),b=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},C=!g||!_;a({target:"Array",proto:!0,forced:C},{concat:function(t){var e,s,a,r,o,i=n(this),d=l(i,0),m=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?i:arguments[e],b(o)){if(r=c(o.length),m+r>v)throw TypeError(h);for(s=0;s<r;s++,m++)s in o&&u(d,m,o[s])}else{if(m>=v)throw TypeError(h);u(d,m++,o)}return d.length=m,d}})},a434:function(t,e,s){"use strict";var a=s("23e7"),r=s("23cb"),o=s("a691"),i=s("50c4"),n=s("7b0b"),c=s("65f0"),u=s("8418"),l=s("1dde"),d=l("splice"),m=Math.max,p=Math.min,f=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var s,a,l,d,h,g,_=n(this),b=i(_.length),C=r(t,b),x=arguments.length;if(0===x?s=a=0:1===x?(s=0,a=b-C):(s=x-2,a=p(m(o(e),0),b-C)),b+s-a>f)throw TypeError(v);for(l=c(_,a),d=0;d<a;d++)h=C+d,h in _&&u(l,d,_[h]);if(l.length=a,s<a){for(d=C;d<b-a;d++)h=d+a,g=d+s,h in _?_[g]=_[h]:delete _[g];for(d=b;d>b-a+s;d--)delete _[d-1]}else if(s>a)for(d=b-a;d>C;d--)h=d+a-1,g=d+s-1,h in _?_[g]=_[h]:delete _[g];for(d=0;d<s;d++)_[d+C]=arguments[d+2];return _.length=b-a+s,l}})},b1d9:function(t,e,s){}}]);
//# sourceMappingURL=chunk-3c220b04.5f554e14.js.map