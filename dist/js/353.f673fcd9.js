"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[353],{3777:function(l,n,t){t.r(n),t.d(n,{default:function(){return W}});var a=t(3396),e=t(7139);const r={class:"home",style:{"text-decoration":"none",padding:"5%"}},o={style:{width:"100%",margin:"auto","border-radius":"0"}},i=(0,a._)("label",{for:""},"Current balance : ",-1),u={href:"",style:{"margin-left":"5px"}},d=(0,a._)("br",null,null,-1),s=(0,a._)("br",null,null,-1),b={style:{padding:"5%",width:"30.33%",margin:"1.5%","border-radius":"5px",float:"left",border:"solid 1px lightgrey","margin-bottom":"0"}},c=(0,a._)("h5",{style:{color:"black"}},"50 Coins",-1),h=(0,a._)("h6",null,"100,000 IRT",-1),y=(0,a._)("h6",null,"validity duration :‌ 30 Days",-1),_=(0,a._)("br",null,null,-1),g={style:{padding:"5%",width:"30.33%",margin:"1.5%","border-radius":"5px",float:"left",border:"solid 1px lightgrey","margin-bottom":"0"}},p=(0,a._)("h5",{style:{color:"black"}},"150 Coins",-1),m=(0,a._)("h6",null,"200,000 IRT",-1),f=(0,a._)("h6",null,"validity duration :‌ 30 Days",-1),k=(0,a._)("br",null,null,-1),v={style:{padding:"5%",width:"30.33%",margin:"1.5%","border-radius":"5px",float:"left",border:"solid 1px lightgrey","margin-bottom":"0"}},w=(0,a._)("h5",{style:{color:"black"}},"1000 Coins",-1),C=(0,a._)("h6",null,"800,000 IRT",-1),x=(0,a._)("h6",null,"validity duration :‌ 30 Days",-1),D=(0,a._)("br",null,null,-1),Z=(0,a._)("div",{style:{clear:"both"}},null,-1),B=(0,a._)("br",null,null,-1);function I(l,n,t,I,R,T){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",o,[i,(0,a._)("a",u,(0,e.zw)(R.balance),1),d,s,(0,a._)("div",b,[c,h,y,_,(0,a._)("button",{onClick:n[0]||(n[0]=l=>T.buyplan(1e5)),class:"btn btn-dark"},"Buy")]),(0,a._)("div",g,[p,m,f,k,(0,a._)("button",{onClick:n[1]||(n[1]=l=>T.buyplan(2e5)),class:"btn btn-dark"},"Buy")]),(0,a._)("div",v,[w,C,x,D,(0,a._)("button",{onClick:n[2]||(n[2]=l=>T.buyplan(8e5)),class:"btn btn-dark"},"Buy")]),Z,B])])}var R=t(1562),T=t(1076),H=t(264),q=t.n(H),z={name:"HomeView",components:{HelloWorld:R.Z,CircleProgress:q()},data(){return{imagines:[],plan:"",balance:""}},mounted(){this.get_balance()},methods:{async get_balance(){await T.Z.get("/charge").then((l=>l.data)).then((l=>{this.balance=l}))},async buyplan(l){await T.Z.post("/request",{amount:l}).then((l=>l.data)).then((l=>{this.balance=l,console.log(l)}))}}},P=t(89);const V=(0,P.Z)(z,[["render",I]]);var W=V}}]);
//# sourceMappingURL=353.f673fcd9.js.map