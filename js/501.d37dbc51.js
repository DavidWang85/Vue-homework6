"use strict";(self["webpackChunkweek6_homework"]=self["webpackChunkweek6_homework"]||[]).push([[501],{530:function(t,n,e){function l(t){return{all:t=t||new Map,on:function(n,e){var l=t.get(n);l?l.push(e):t.set(n,[e])},off:function(n,e){var l=t.get(n);l&&(e?l.splice(l.indexOf(e)>>>0,1):t.set(n,[]))},emit:function(n,e){var l=t.get(n);l&&l.slice().map((function(t){t(e)})),(l=t.get("*"))&&l.slice().map((function(t){t(n,e)}))}}}e.d(n,{Z:function(){return a}});const i=l();var a=i},501:function(t,n,e){e.r(n),e.d(n,{default:function(){return F}});var l=e(252),i=e(577),a=e(963);const o={class:"container"},s=(0,l._)("h2",null,"購物車",-1),d={class:"table align-middle"},u=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"圖片"),(0,l._)("th",null,"商品名稱"),(0,l._)("th",null,"價格"),(0,l._)("th")])],-1),r={style:{width:"200px"}},c={key:0,class:"h5"},p={key:1},g={class:"h6"},_={class:"h5"},h={class:"btn-group btn-group-sm"},b=["onClick","disabled"],m=["onClick","disabled"],w={class:"spinner-grow spinner-grow-sm"},k=(0,l.Uk)(" 加到購物車 "),v={class:"text-end"},y={class:"spinner-grow spinner-grow-sm"},f=(0,l.Uk)(" 清空購物車"),C={class:"table align-middle"},x=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th"),(0,l._)("th",null,"品名"),(0,l._)("th",{style:{width:"150px"}},"數量/單位"),(0,l._)("th",null,"單價")])],-1),D=["disabled","onClick"],I={class:"input-group input-group-sm"},z={class:"input-group mb-3"},L=["onUpdate:modelValue","onChange","disabled"],U=["value"],$={class:"input-group-text",id:"basic-addon2"},q={class:"text-end"},H=(0,l._)("td",{colspan:"3",class:"text-end"},"總計",-1),K={class:"text-end"};function M(t,n,e,M,P,Y){return(0,l.wg)(),(0,l.iD)("div",o,[s,(0,l._)("table",d,[u,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(P.products,(n=>((0,l.wg)(),(0,l.iD)("tr",{key:n.id},[(0,l._)("td",r,[(0,l._)("div",{style:(0,i.j5)([{backgroundImage:`url(${n.imageUrl})`},{height:"100px","background-size":"cover","background-position":"center"}])},null,4)]),(0,l._)("td",null,(0,i.zw)(n.title),1),(0,l._)("td",null,[n.price===n.origin_price?((0,l.wg)(),(0,l.iD)("div",c,(0,i.zw)(n.price)+" 元 ",1)):((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("del",g,"原價 "+(0,i.zw)(n.origin_price)+" 元",1),(0,l._)("div",_,"現在只要 "+(0,i.zw)(n.price)+" 元",1)]))]),(0,l._)("td",null,[(0,l._)("div",h,[(0,l._)("button",{type:"button",onClick:e=>t.openProductModal(n.id),disabled:P.isLoadingItem===n.id,class:"btn btn-outline-secondary"}," 查看更多 ",8,b),(0,l._)("button",{type:"button",onClick:t=>Y.addToCart(n.id),disabled:P.isLoadingItem===n.id,class:"btn btn-outline-danger"},[(0,l.wy)((0,l._)("span",w,null,512),[[a.F8,P.isLoadingItem===n.id]]),k],8,m)])])])))),128))])]),(0,l._)("div",v,[(0,l._)("button",{class:"btn btn-outline-danger",type:"button",onClick:n[0]||(n[0]=(...n)=>t.deleteAllCarts&&t.deleteAllCarts(...n))},[(0,l.wy)((0,l._)("span",y,null,512),[[a.F8,P.isLoadingItem]]),f])]),(0,l._)("table",C,[x,(0,l._)("tbody",null,[P.cartData.carts?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:0},(0,l.Ko)(P.cartData.carts,(n=>((0,l.wg)(),(0,l.iD)("tr",{key:n.id},[(0,l._)("td",null,[(0,l._)("button",{type:"button",disabled:P.isLoadingItem===n.id,onClick:e=>t.removeCartItem(n.id),class:"btn btn-outline-danger btn-sm"}," x ",8,D)]),(0,l._)("td",null,(0,i.zw)(n.product.title),1),(0,l._)("td",null,[(0,l._)("div",I,[(0,l._)("div",z,[(0,l.wy)((0,l._)("select",{id:"",class:"form-select","onUpdate:modelValue":t=>n.qty=t,onChange:e=>t.updateCartItem(n),disabled:P.isLoadingItem===n.id},[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(20,(t=>(0,l._)("option",{value:t,key:`${t}-${n.id}`},(0,i.zw)(t),9,U))),64))],40,L),[[a.bM,n.qty]]),(0,l._)("span",$,(0,i.zw)(n.product.unit),1)])])]),(0,l._)("td",q,(0,i.zw)(n.total),1)])))),128)):(0,l.kq)("",!0)]),(0,l._)("tfoot",null,[(0,l._)("tr",null,[H,(0,l._)("td",K,(0,i.zw)(P.cartData.total),1)])])])])}var P=e(530),Y={data(){return{cartData:{},products:[],isLoadingItem:""}},methods:{getProducts(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/david-frontend/products/all").then((t=>{console.log(t),this.products=t.data.products}))},addToCart(t,n=1){const e={product_id:t,qty:n};this.isLoadingItem=t,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/david-frontend/cart",{data:e}).then((t=>{console.log(t),this.isLoadingItem="",P.Z.emit("get-cart")}))}},mounted(){this.getProducts()}},Z=e(744);const A=(0,Z.Z)(Y,[["render",M]]);var F=A}}]);
//# sourceMappingURL=501.d37dbc51.js.map