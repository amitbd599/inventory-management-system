"use strict";(self.webpackChunkclient_side=self.webpackChunkclient_side||[]).push([[183],{989:(t,a,e)=>{e.d(a,{J3:()=>p,_C:()=>A,iW:()=>W,ky:()=>m,pY:()=>u,rI:()=>g,sz:()=>f});var s=e(854),i=e.n(s),n=e(7716),r=e(8322),c=e(5316),o=e(8965),d=e(3606),l=e(267);const h={headers:{token:(0,o.gf)()}};async function p(t,a){try{r.A.dispatch((0,c.P6)());let e=l.X+"/Login",s={email:t,password:a};return await i().post(e,s,{withCredentials:!0}).then((t=>(console.log(t.data.status),"success"===t.data.status?((0,o.WG)(t.data.token),(0,o.m5)(t.data.data),(0,n.rQ)("Login Success"),r.A.dispatch((0,c.W9)()),!0):((0,n.Qp)("Invalid Email or Password"),r.A.dispatch((0,c.W9)()),!1))))}catch(e){return r.A.dispatch((0,c.W9)()),(0,n.Qp)("Invalid Email or Password"),!1}}async function u(t,a,e,s,o,d){try{r.A.dispatch((0,c.P6)());let h=l.X+"/Registration",p={email:t,firstName:a,lastName:e,mobile:s,password:o,photo:d},u=await i().post(h,p);return r.A.dispatch((0,c.W9)()),200===u.status?"fail"===u.data.status?1===u.data.data.keyPattern.email?((0,n.Qp)("Email Already Exist"),!1):((0,n.Qp)("Something Went Wrong"),!1):((0,n.rQ)("Registration Success"),!0):((0,n.Qp)("Something Went Wrong"),!1)}catch(h){return r.A.dispatch((0,c.W9)()),(0,n.Qp)("Something Went Wrong"),!1}}async function m(){try{r.A.dispatch((0,c.P6)());let t=l.X+"/ProfileDetails",a=await i().get(t,h);r.A.dispatch((0,c.W9)()),200===a.status?r.A.dispatch((0,d.OY)(a.data.data[0])):(0,n.Qp)("Something Went Wrong")}catch(t){r.A.dispatch((0,c.W9)()),(0,n.Qp)("Something Went Wrong")}}async function W(t,a,e,s,d,p){try{r.A.dispatch((0,c.P6)());let u=l.X+"/ProfileUpdate",m={email:t,firstName:a,lastName:e,mobile:s,password:d,photo:p},W={email:t,firstName:a,lastName:e,mobile:s,photo:p},g=await i().post(u,m,h);return r.A.dispatch((0,c.W9)()),200===g.status?((0,n.rQ)("Profile Update Success"),(0,o.m5)(W),!0):((0,n.Qp)("Something Went Wrong"),!1)}catch(u){return(0,n.Qp)("Something Went Wrong"),r.A.dispatch((0,c.W9)()),!1}}async function g(t){try{r.A.dispatch((0,c.P6)());let a=l.X+"/RecoverVerifyEmail/"+t,e=await i().get(a);return r.A.dispatch((0,c.W9)()),200===e.status?"fail"===e.data.status?((0,n.Qp)("No user found"),!1):((0,o.xI)(t),(0,n.rQ)("A 6 Digit verification code has been sent to your email address. "),!0):((0,n.Qp)("Something Went Wrong"),!1)}catch(a){return(0,n.Qp)("Something Went Wrong"),r.A.dispatch((0,c.W9)()),!1}}async function f(t,a){try{r.A.dispatch((0,c.P6)());let e=l.X+"/RecoverVerifyOTP/"+t+"/"+a,s=await i().get(e);return r.A.dispatch((0,c.W9)()),200===s.status?"fail"===s.data.status?((0,n.Qp)("Code Verification Fail"),!1):((0,o.ot)(a),(0,n.rQ)("Code Verification Success"),!0):((0,n.Qp)("Something Went Wrong"),!1)}catch(e){return(0,n.Qp)("Something Went Wrong"),r.A.dispatch((0,c.W9)()),!1}}async function A(t,a,e){try{r.A.dispatch((0,c.P6)());let s=l.X+"/RecoverResetPass",d={email:t,OTP:a,password:e},h=await i().post(s,d);return r.A.dispatch((0,c.W9)()),200===h.status?"fail"===h.data.status?((0,n.Qp)(h.data.data),!1):((0,o.ot)(a),(0,n.rQ)("NEW PASSWORD CREATED"),!0):((0,n.Qp)("Something Went Wrong"),!1)}catch(s){return(0,n.Qp)("Something Went Wrong"),r.A.dispatch((0,c.W9)()),!1}}},2183:(t,a,e)=>{e.r(a),e.d(a,{default:()=>o});var s=e(5043),i=e(7716),n=e(989),r=e(6971),c=e(579);const o=()=>{let t=(0,s.useRef)(),a=(0,r.Zp)();return(0,c.jsx)(s.Fragment,{children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row d-flex justify-content-center",children:(0,c.jsx)("div",{className:"col-md-7 col-lg-6 center-screen",children:(0,c.jsx)("div",{className:"card w-90",children:(0,c.jsxs)("div",{className:"card-body text-start",children:[(0,c.jsx)("h4",{children:"EMAIL ADDRESS"}),(0,c.jsx)("hr",{}),(0,c.jsx)("label",{children:"Your email address"}),(0,c.jsx)("input",{ref:a=>t=a,placeholder:"User Email",className:"form-control",type:"email"}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{onClick:async()=>{let e=t.value;if((0,i.jA)(e))(0,i.Qp)("Valid Email Address Required !");else{!0===await(0,n.rI)(e)&&a("/VerifyOTP")}},className:"btn w-100 btn-success",children:"Next"})]})})})})})})}}}]);
//# sourceMappingURL=183.e218ed11.chunk.js.map