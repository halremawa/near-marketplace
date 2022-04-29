(this["webpackJsonpnear-marketplace"]=this["webpackJsonpnear-marketplace"]||[]).push([[0],{159:function(e,t){},169:function(e,t){},222:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(36),o=n.n(r),s=n(28),i=n(6),l=n(8),u=n.n(l),d=n(238),j=n(242),b=Object({NODE_ENV:"production",PUBLIC_URL:"/near-marketplace",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"demo.halremawa.testnet";var p=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:b,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:b,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},x=n(47),O=n(59),h=p("testnet");function m(){return(m=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.connect)(Object.assign({deps:{keyStore:new x.keyStores.BrowserLocalStorageKeyStore}},h));case 2:t=e.sent,window.walletConnection=new x.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new x.Contract(window.walletConnection.account(),h.contractName,{viewMethods:["getProduct","getProducts"],changeMethods:["buyProduct","setProduct","updateProduct","deleteProduct"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){window.walletConnection.requestSignIn(h.contractName)}function v(){window.walletConnection.signOut(),window.location.reload()}var y=n(240),N=n(235),C=n(245),k=n(1),P=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(y.a,{children:[Object(k.jsx)(y.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(k.jsxs)(k.Fragment,{children:[n," ",Object(k.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(k.jsx)(N.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(k.jsxs)(y.a.Menu,{className:"shadow-lg border-0",children:[Object(k.jsx)(y.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(k.jsxs)(C.a,{direction:"horizontal",gap:2,children:[Object(k.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(k.jsx)("span",{className:"font-monospace",children:t})]})}),Object(k.jsx)(y.a.Divider,{}),Object(k.jsxs)(y.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(k.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},S=n(43),I=(n(221),function(){return Object(k.jsx)(S.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),F=function(e){var t=e.text;return Object(k.jsxs)("div",{children:[Object(k.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(k.jsx)("span",{className:"text-secondary mx-1",children:t})]})},T=function(e){var t=e.text;return Object(k.jsxs)("div",{children:[Object(k.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(k.jsx)("span",{className:"text-secondary mx-1",children:t})]})},E={text:""};F.defaultProps=E,T.defaultProps=E;var U=n(2),L=n(143),A=n(239),B=n(241),D=n(145),H=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),u=l[0],d=l[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),p=b[0],x=b[1],O=Object(c.useState)(""),h=Object(i.a)(O,2),m=h[0],f=h[1],g=Object(c.useState)(0),w=Object(i.a)(g,2),v=w[0],y=w[1],N=Object(c.useState)(!1),C=Object(i.a)(N,2),P=C[0],S=C[1],I=function(){return S(!1)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(L.a,{onClick:function(){return S(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(k.jsx)("i",{class:"bi bi-plus"})}),Object(k.jsxs)(A.a,{show:P,onHide:I,centered:!0,children:[Object(k.jsx)(A.a.Header,{closeButton:!0,children:Object(k.jsx)(A.a.Title,{children:"New Product"})}),Object(k.jsx)(B.a,{children:Object(k.jsxs)(A.a.Body,{children:[Object(k.jsx)(D.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(k.jsx)(B.a.Control,{type:"text",onChange:function(e){o(e.target.value)},placeholder:"Enter name of product"})}),Object(k.jsx)(D.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(k.jsx)(B.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){d(e.target.value)}})}),Object(k.jsx)(D.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(k.jsx)(B.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){x(e.target.value)}})}),Object(k.jsx)(D.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(k.jsx)(B.a.Control,{type:"text",placeholder:"Location",onChange:function(e){f(e.target.value)}})}),Object(k.jsx)(D.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(k.jsx)(B.a.Control,{type:"text",placeholder:"Price",onChange:function(e){y(e.target.value)}})})]})}),Object(k.jsxs)(A.a.Footer,{children:[Object(k.jsx)(L.a,{variant:"outline-secondary",onClick:I,children:"Close"}),Object(k.jsx)(L.a,{variant:"dark",disabled:!(r&&u&&p&&m&&v),onClick:function(){t({name:r,image:u,description:p,location:m,price:v}),I()},children:"Save product"})]})]})]})},R=n(144),_=n(244),W=n(236),M=function(e){var t=Object(c.useState)(e.product.name),n=Object(i.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(e.product.image),s=Object(i.a)(o,2),l=s[0],u=s[1],d=Object(c.useState)(e.product.description),j=Object(i.a)(d,2),b=j[0],p=j[1],O=Object(c.useState)(e.product.location),h=Object(i.a)(O,2),m=h[0],f=h[1],g=Object(c.useState)(x.utils.format.formatNearAmount(e.product.price)),w=Object(i.a)(g,2),v=w[0],y=w[1],N=e.product.id,C=e.product.sold,P=Object(c.useState)(!1),S=Object(i.a)(P,2),I=S[0],F=S[1],T=function(){return F(!1)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(L.a,{variant:"outline-dark",onClick:function(){return F(!0)},className:"w-100 py-3",children:"Edit"}),Object(k.jsxs)(A.a,{show:I,onHide:T,centered:!0,children:[Object(k.jsx)(A.a.Header,{closeButton:!0,children:Object(k.jsx)(A.a.Title,{children:"Edit Product"})}),Object(k.jsx)(B.a,{children:Object(k.jsxs)(A.a.Body,{children:[Object(k.jsx)(D.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(k.jsx)(B.a.Control,{type:"text",onChange:function(e){r(e.target.value)},placeholder:"Name of product",value:a})}),Object(k.jsx)(D.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(k.jsx)(B.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){u(e.target.value)},value:l})}),Object(k.jsx)(D.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(k.jsx)(B.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){p(e.target.value)},value:b})}),Object(k.jsx)(D.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(k.jsx)(B.a.Control,{type:"text",placeholder:"Location",onChange:function(e){f(e.target.value)},value:m})}),Object(k.jsx)(D.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(k.jsx)(B.a.Control,{type:"text",placeholder:"Price",onChange:function(e){y(e.target.value)},value:v})})]})}),Object(k.jsxs)(A.a.Footer,{children:[Object(k.jsx)(L.a,{variant:"outline-secondary",onClick:T,children:"Close"}),Object(k.jsx)(L.a,{variant:"dark",disabled:!(a&&l&&b&&m&&v),onClick:function(){e.save({id:N,name:a,image:l,description:b,location:m,price:v,sold:C}),T()},children:"Update product"})]})]})]})},K=function(e){var t=e.productId,n=e.productName,a=e.deleteFunc,r=Object(c.useState)(!1),o=Object(i.a)(r,2),s=o[0],l=o[1],u=function(){return l(!1)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(L.a,{variant:"outline-dark",onClick:function(){return l(!0)},className:"w-100 py-3",children:"Delete"}),Object(k.jsxs)(A.a,{show:s,onHide:u,centered:!0,children:[Object(k.jsx)(A.a.Header,{closeButton:!0,children:Object(k.jsx)(A.a.Title,{children:"Delete Product"})}),Object(k.jsxs)("div",{children:['Are you sure you want to delete product "',n,'"?']}),Object(k.jsxs)(A.a.Footer,{children:[Object(k.jsx)(L.a,{variant:"dark",onClick:function(){a(t),u()},children:"Yes"}),Object(k.jsx)(L.a,{variant:"outline-secondary",onClick:u,children:"No"})]})]})]})},z=function(e){var t=e.product,n=e.buy,c=e.edit,a=e.deleteFunc,r=t.id,o=t.price,s=t.name,i=t.description,l=t.sold,u=t.location,d=t.image,j=t.owner;return Object(k.jsx)(R.a,{children:Object(k.jsxs)(_.a,{className:" h-100",children:[Object(k.jsx)(_.a.Header,{children:Object(k.jsxs)(C.a,{direction:"horizontal",gap:2,children:[Object(k.jsx)("span",{className:"font-monospace text-secondary",children:j}),Object(k.jsxs)(W.a,{bg:"secondary",className:"ms-auto",children:[l," Sold"]})]})}),Object(k.jsx)("div",{className:" ratio ratio-4x3",children:Object(k.jsx)("img",{src:d,alt:s,style:{objectFit:"cover"}})}),Object(k.jsxs)(_.a.Body,{className:"d-flex  flex-column text-center",children:[Object(k.jsx)(_.a.Title,{children:s}),Object(k.jsx)(_.a.Text,{className:"flex-grow-1 ",children:i}),Object(k.jsx)(_.a.Text,{className:"text-secondary",children:Object(k.jsx)("span",{children:u})}),Object(k.jsx)(M,{product:t,save:c}),Object(k.jsx)(K,{productName:t.name,productId:t.id,deleteFunc:a}),Object(k.jsxs)(L.a,{variant:"outline-dark",onClick:function(){n(r,o)},className:"w-100 py-3",children:["Buy for ",x.utils.format.formatNearAmount(o)," NEAR"]})]})]})},r)},J=function(){return Object(k.jsx)("div",{className:"d-flex justify-content-center",children:Object(k.jsx)(N.a,{animation:"border",role:"status",className:"opacity-25",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},q=n(237),V=n(243),Y=1e14;function G(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(s.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.price,e.next=3,window.contract.buyProduct({productId:n},Y,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.deleteProduct({productId:t});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),l=o[0],d=o[1],j=Object(c.useCallback)(Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.t0=a,e.next=5,window.contract.getProducts();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),b=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{d(!0),(n=t,n.id=Object(V.a)(),n.price=Object(O.parseNearAmount)(n.price+""),window.contract.setProduct({product:n})).then((function(e){j()})),Object(S.b)(Object(k.jsx)(F,{text:"Product added successfully."}))}catch(c){console.log({error:c}),Object(S.b)(Object(k.jsx)(T,{text:"Failed to create a product."}))}finally{d(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{d(!0),(n=t,n.price=Object(O.parseNearAmount)(n.price+""),window.contract.updateProduct({product:n})).then((function(e){j()})),Object(S.b)(Object(k.jsx)(F,{text:"Product updated successfully."}))}catch(c){console.log({error:c}),Object(S.b)(Object(k.jsx)(T,{text:c.toString()}))}finally{d(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{d(!0),X(t).then((function(e){j()})),Object(S.b)(Object(k.jsx)(F,{text:"Product deleted successfully."}))}catch(n){console.log({error:n}),Object(S.b)(Object(k.jsx)(T,{text:n.toString()}))}finally{d(!1)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G({id:t,price:n}).then((function(e){return j()}));case 3:Object(S.b)(Object(k.jsx)(F,{text:"Product bought successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(S.b)(Object(k.jsx)(T,{text:"Failed to purchase product."}));case 9:return e.prev=9,d(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(k.jsx)(k.Fragment,{children:l?Object(k.jsx)(J,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(k.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Street Food"}),Object(k.jsx)(H,{save:b})]}),Object(k.jsx)(q.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(k.jsx)(z,{product:Object(U.a)({},e),buy:h,edit:p,deleteFunc:x})}))})]})})},ee=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(k.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(k.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(k.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(k.jsx)("img",{src:c,alt:""})}),Object(k.jsx)("h1",{children:t}),Object(k.jsx)("p",{children:"Please connect your wallet to continue."}),Object(k.jsx)(L.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(k.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};ee.defaultProps={name:""};var te=ee,ne=n.p+"static/media/sandwich.2d312449.jpg",ce=(n(222),function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(i.a)(t,2),a=n[0],r=n[1],o=Object(c.useCallback)(Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,f();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){o()}),[o]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(I,{}),e.accountId?Object(k.jsxs)(d.a,{fluid:"md",children:[Object(k.jsx)(j.a,{className:"justify-content-end pt-3 pb-5",children:Object(k.jsx)(j.a.Item,{children:Object(k.jsx)(P,{address:e.accountId,amount:a,symbol:"NEAR",destroy:v})})}),Object(k.jsx)("main",{children:Object(k.jsx)($,{})})]}):Object(k.jsx)(te,{name:"Street Food",login:w,coverImg:ne})]})}),ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,246)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};n(228),n(225),n(226);window.nearInitPromise=function(){return m.apply(this,arguments)}().then((function(){o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(ce,{})}),document.getElementById("root"))})).catch(console.error),ae(console.log)}},[[227,1,2]]]);
//# sourceMappingURL=main.a54de845.chunk.js.map