(this.webpackJsonpusers=this.webpackJsonpusers||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(4),i=s.n(c),r=(s(14),s(3)),d=s.n(r),j=s(5),l=s(6),u=s(7),h=s(9),o=s(8),b=(s(16),s(0)),v=Object(b.jsxs)("div",{className:"lds-ellipsis",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]}),O=function(e){Object(h.a)(s,e);var t=Object(o.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={users:[],loading:!1},n}return Object(u.a)(s,[{key:"getUsers",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({users:[],loading:!0}),e.next=3,fetch("https://reqres.in/api/users?page=1");case 3:return e.next=5,e.sent.json();case 5:t=e.sent.data,this.setState({users:t,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"nav",children:Object(b.jsx)("button",{onClick:function(){return e.getUsers()},children:"Get Users"})}),!0===this.state.loading&&Object(b.jsx)("div",{className:"loading",children:v}),Object(b.jsx)("div",{className:"users",children:this.state.users.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"user_avatar",width:"128",height:"128",children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:e.avatar})})}),Object(b.jsxs)("div",{className:"user_details",children:[Object(b.jsx)("div",{className:"first_name",children:e.first_name}),Object(b.jsx)("div",{className:"last_name",children:e.last_name}),Object(b.jsx)("div",{className:"user_email",children:e.email})]})]},e.id)}))})]})}}]),s}(n.Component),x=O,m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.dbd70d8a.chunk.js.map