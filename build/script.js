function h(t,l){return parseInt(t.target.parentElement.getAttribute(l))}function r(t){return g[t]}var g=["transparent","red","#005555"];function s(t,l,a,e,n,i){for(let o=l;a(o);o+=e)tooth=document.createElement("div"),tooth.style.display="flex",tooth.style.flexDirection="column",tooth.appendChild(v(o,n,i)),p=document.createElement("p"),p.innerHTML=o,tooth.appendChild(p),t.appendChild(tooth)}function v(t,l,a){div=document.createElement("div");for(let e=0;e<a;++e)part_type=l[e],size=part_type[1],div.appendChild(f(t,e,size[0],size[1],0,part_type[0]));return div.style.position="relative",div.style.width="48px",div.style.height="48px",div}function f(t,l,a,e,n,i){switch(svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),svg.dataset.tooth=t,svg.dataset.side=l,svg.style.viewBox=`0 0 ${a} ${e}`,svg.style.width=a,svg.style.height=e,svg.style.position="absolute",svg.style.fill=r(n),svg.style.stroke="black",svg.innerHTML=i,l){case 0:case 3:break;case 1:svg.style.right=0;break;case 2:svg.style.bottom=0;break;case 4:svg.style.top="12px",svg.style.left="12px";break;case 5:svg.style.top="12px",svg.style.left="24px";break}return svg}back_path=[['<path d=" M 0 0 h 48 l -12 12 h -24 z "></path>',[48,12]],['<path d=" M 12 0 v 48 l -12 -12 v -24 z "></path>',[12,48]],['<path d=" M 0 12 h 48 l -12 -12 h -24 z " ></path>',[48,12]],['<path d=" M 0 0 v 48 l 12 -12 v -24 z " ></path>',[12,48]],['<path d=" M 0 0 h 12 v 24 h -24 z " ></path>',[12,24]],['<path d=" M 0 0 h 12 v 24 h -12 z " ></path>',[12,24]]];front_path=[['<path d=" M 0 0 h 48 l -12 24 h -24 z " ></path> ',[48,24]],['<path d=" M 12 0 v 48 l -12 -24 z " ></path>',[12,48]],['<path d=" M 0 24 h 48 l -12 -24 h -24 z"></path>',[48,24]],['<path d=" M 0 0 v 48 l 12 -24 z " ></path>',[12,48]]];function d(){for(let t=1;t<=4;t+=1){const l=document.createElement("div");l.style.display="flex",l.style.flexDirection="row";const a=t*10;if(t&!0)s(l,a+8,(e)=>{return e>=a+4},-1,back_path,6),s(l,a+3,(e)=>{return e>a},-1,front_path,4);else s(l,a+1,(e)=>{return e<=a+3},1,front_path,4),s(l,a+4,(e)=>{return e<=a+8},1,back_path,4);document.body.appendChild(l)}}var c=0;self.addEventListener("click",(t)=>{if(id=h(t,"data-tooth"),console.log(id),console.log(h(t,"data-side")),console.log(c),!isNaN(id))t.target.style.fill=r(c)});self.onload=function(){console.log("we ball"),d()};
