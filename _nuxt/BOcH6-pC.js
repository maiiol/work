import{i as n,H as x,c as r,a as u,E as v,G as d,f as m,K as k,F as c,r as _,o as i,t as h}from"./DIneU_vK.js";const w={__name:"messages",setup(y){let o=n([]),p=n("danya"),g=n(!1),t=n(""),s=null;s=x("ws://localhost:3000"),g.value=!0,s.on("initial",e=>{o.value=e}),s.on("chat message",e=>{o.value.push({text:e.text,username:e.username}),console.log(e)});function f(){console.log("message"),s.emit("chat message",{username:p.value,text:t.value})}return(e,l)=>(i(),r(c,null,[l[1]||(l[1]=u("h1",null," СОКЕТ ЗДЕСЬ",-1)),v(u("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=a=>k(t)?t.value=a:t=a)},null,512),[[d,m(t)]]),u("button",{onClick:f},"отправить сообщение"),u("ul",null,[(i(!0),r(c,null,_(m(o),a=>(i(),r("li",null,h(a.text),1))),256))])],64))}};export{w as default};
