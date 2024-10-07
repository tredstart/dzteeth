function A(Z,C,x,L){for(let m=C;x(m);m+=L){u[m]=[];for(let n=0;n<Z;++n)u[m].push("transparent")}}function J(){for(let Z=1;Z<=4;Z+=1){const C=Z*10;if(Z&!0)A(6,C+8,(x)=>{return x>=C+4},-1),A(4,C+3,(x)=>{return x>C},-1);else A(4,C+1,(x)=>{return x<=C+3},1),A(6,C+4,(x)=>{return x<=C+8},1)}}function K(Z){u=Z,console.log(u)}function F(Z){E=Z}var u={},E="transparent";function O(){const Z=document.getElementsByClassName("illness-option");if(Z.length!==0){for(let C of Z)if(C.addEventListener("click",(x)=>{for(let L of Z)L.classList.remove("active");x.target.classList.add("active"),F(x.target.value)}),console.log(C),C.classList.contains("active"))F(C.value)}}var P=`M 6.092 11.164 C 3.906 11.164 3.906 25.32 6.092 25.32 C 7.44 31.387
        42.286 30.089 41.259 25.469 C 43.643 25.668 43.941 11.958 41.557 11.759
        C 37.335 6.763 35.323 8.84 23.973 9.971 C 16.289 9.623 8.868 4.329
        6.092 11.164 Z`,Q=`M 22.185 47.82 C 23.164 47.971 27.758 29.245 25.314 29.343 C 25.898 30.074
9.012 28.784 8.029 27.555 C 14.442 48.976 4.6 63.155 9.966 64.361 C 12.998
68.404 22.629 48.461 22.483 48.267 C 21.947 49.004 31.268 71.672 33.659 68.384
C 41.743 67.807 41.374 27.685 39.023 27.853 C 39.029 27.864 26.798 30.821
26.059 29.343 C 26.26 30.501 23.453 48.15 22.185 47.82 Z`,R=[`M 16.97 29.343 L 21.142 29.641 C 22.715 30.54 11.015 65.491 9.817
        64.807 C 9.662 64.809 16.732 29.341 16.97 29.343 Z`,`M 32.765 28.896 L 35.298 28.449 C 37.648 33.447 36.5 67.874 35.894
        66.596 L 32.765 28.896 Z`,`M 29.934 29.492 C 29.987 29.692 32.209 29.689 31.871 29.492 C 32.118
        29.739 30.609 65.333 30.083 64.807 C 29.069 65.199 27.843 29.895 29.934
        29.492 Z`];var S=`M 6.092 12.654 C 3.906
12.654 3.906 25.32 6.092 25.32 C 7.44 31.387 42.286 30.089 41.259 25.469 C
43.643 25.668 43.941 11.958 41.557 11.759 C 36.007 4.44 32.56 7.058 23.824
12.057 C 17.446 8.089 12.203 4.535 6.092 12.654 Z`,T=`M 22.185 47.82 C 23.164
47.971 27.758 29.245 25.314 29.343 C 25.898 30.074 9.012 28.784 8.029 27.555 C
17.718 32.234 4.636 62.973 9.966 64.361 C 12.998 68.404 22.629 48.461 22.483
48.267 C 21.947 49.004 31.268 69.437 33.659 66.149 C 41.743 65.572 41.374
27.685 39.023 27.853 C 39.029 27.864 26.798 30.821 26.059 29.343 C 26.26 30.501
23.453 48.15 22.185 47.82 Z`,U=[`M 16.97 29.343 L 21.142 29.641 C 22.715 30.54 11.015 65.491 9.817
        64.807 C 9.662 64.809 16.732 29.341 16.97 29.343 Z`,`M 30.828 29.343 L 35.298 28.449 C 37.648 33.447 35.904 66.533 35.298
        65.255 L 30.828 29.343 Z`,`M 30.679 29.194 C 30.732 29.394 33.103 46.378 32.765 46.181 C 33.012
        46.428 29.864 62.8 29.338 62.274 C 28.324 62.666 28.588 29.597 30.679
        29.194 Z`];var V=`M 12.561 5.065 C 11.062
        3.627 25.215 -2.978 32.916 4.406 C 37.712 4.95 35.477 21.865 32.625
        21.542
        C 33.173 24.643 12.956 26.749 11.979 21.212 C 8.877 21.652 9.459 5.505
        12.561 5.065 Z`,W=`M 15.239 24.249 C 19.189 26.806 10.986 62.036 15.239 63.378 C 19.194
        62.1 32.663 36.131 30.164 23.075 C 29.331 25.991 15.212 24.918 15.239
        24.249 Z`,X=[`M 21.416 25.007 L 26.467
        24.401 C 26.844 24.652 17.719 61.535 16.365 60.767 C 15.011 59.999 21.618
        25.209 21.416 25.007 Z`];var Y=`M 11.551 6.075 C 9.988
4.065 25.399 -5.764 33.522 5.416 C 38.336 5.948 37.355 21.691 33.029 22.35 C
34.005 26.598 15.053 30.778 11.575 21.818 C 6.263 19.49 8.516 6.313 11.551
6.075 Z`,$=`M 12.41 23.239 C 11.141
26.336 10.819 73.956 17.461 75.298 C 21.416 76.323 34.673 36.888 33.194 23.075
C 31.954 28.486 11.725 27.308 12.41 23.239 Z`,k=[`M 18.588 27.027 L 25.659 27.431 C 25.65 30.381
18.808 75.126 17.577 73.495 C 16.346 71.864 18.79 27.229 18.588 27.027
Z`];var G=`M 12.763 7.287 C 11.2 5.277 22.975 -5.36 31.098 5.82 C 33.361 6.777 37.006
        21.749 33.029 22.35 C 34.005 26.598 15.053 30.778 11.575 21.818 C 7.54
        19.49 10.588 7.525 12.763 7.287 Z`,z=`M 32.932 22.583 C 36.032
24.406 26.277 60.785 20.406 57.332 C 14.623 61.308 9.608 15.05 11.719 22.381 C
13.83 29.712 32.962 29.234 32.932 22.583 Z`,b=`M 11.719 22.785 C 11.814
28.223 14.303 41.289 15.706 44.533 C 16.015 46.729 11.98 55.737 17.594 57.494 C
25.538 62.973 36.363 22.23 32.702 24.322 C 29.041 26.414 17.279 31.045 11.719
22.785 Z`,H=[`M 22.224 27.229 C 21.79
        28.572 25.428 28.167 26.063 27.431 C 23.591 48.585 18.658 58.317 19.194
        56.726 C 19.264 57.633 22.531 27.402 22.224 27.229 Z`];function f(Z){const C=document.createElementNS("http://www.w3.org/2000/svg","path");return C.style.stroke="black",C.style.fill="none",C.setAttribute("d",Z),C}function B(Z){const C=document.createElementNS("http://www.w3.org/2000/svg","path");return C.style.stroke="black",C.style.fill=E,C.setAttribute("d",Z),C.addEventListener("click",(x)=>{x.target.style.fill=E}),C}function N(Z){const C=document.createElementNS("http://www.w3.org/2000/svg","path");return C.style.stroke="black",C.style.fill="none",C.setAttribute("d",Z),C}function c(Z,C,x,L,m){Z.appendChild(g(C,x,L));let n={},M={},e=[];switch(C%10){case 1:case 2:{n=f(V),M=N(W),e=X.map(B);break}case 3:{n=f(Y),M=N($),e=k.map(B);break}case 4:n=f(G),M=N(z),e=H.map(B);break;case 5:n=f(G),M=N(b),e=H.map(B);break;case 6:n=f(S),M=N(T),e=U.map(B);break;case 7:case 8:n=f(P),M=N(Q),e=R.map(B);break}Z.appendChild(p(n,M,e,m,1))}function p(Z,C,x,L,m){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.viewBox="0 0 48 90",n.style.width="48px",n.style.height="90px";const M=document.createElementNS("http://www.w3.org/2000/svg","g");tx=L===-1?48:0,ty=m===-1?90:0,console.log(x),M.setAttribute("transform",`translate(${tx},${ty}) scale(${L}, ${m})`),M.appendChild(Z),M.appendChild(C);for(let e of x)M.appendChild(e);return n.appendChild(M),n}function D(Z,C,x,L,m,n){for(let M=C;x(M);M+=L){const e=document.createElement("div");if(e.style.display="flex",e.style.flexDirection="column",M<30);else{const q=document.createElement("p");if(q.innerHTML=M,e.appendChild(q),M>40)c(e,M,m,n,-1);else c(e,M,m,n,1)}Z.appendChild(e)}}function g(Z,C,x){const L=document.createElement("div");for(let m=0;m<x;++m){const n=C[m],M=n[1];L.appendChild(r(Z,m,M[0],M[1],u[Z][m],n[0]))}return L.style.position="relative",L.style.width="48px",L.style.height="48px",L}function r(Z,C,x,L,m,n){const M=document.createElementNS("http://www.w3.org/2000/svg","svg");switch(M.dataset.tooth=Z,M.dataset.side=C,M.addEventListener("click",(e)=>{if(s=e.target.parentElement,tid=s.dataset.tooth,sid=s.dataset.side,tid!==void 0&&sid!==void 0){s.style.fill=E;const q=u;q[tid][sid]=E,K(q)}}),M.style.viewBox=`0 0 ${x} ${L}`,M.style.width=x,M.style.height=L,M.style.position="absolute",M.style.fill=m,M.style.stroke="black",M.innerHTML=n,C){case 0:case 3:break;case 1:M.style.right=0;break;case 2:M.style.bottom=0;break;case 4:M.style.top="12px",M.style.left="12px";break;case 5:M.style.top="12px",M.style.left="24px";break}return M}var j=[['<path d=" M 0 0 h 48 l -12 12 h -24 z "></path>',[48,12]],['<path d=" M 12 0 v 48 l -12 -12 v -24 z "></path>',[12,48]],['<path d=" M 0 12 h 48 l -12 -12 h -24 z " ></path>',[48,12]],['<path d=" M 0 0 v 48 l 12 -12 v -24 z " ></path>',[12,48]],['<path d=" M 0 0 h 12 v 24 h -24 z " ></path>',[12,24]],['<path d=" M 0 0 h 12 v 24 h -12 z " ></path>',[12,24]]],y=[['<path d=" M 0 0 h 48 l -12 24 h -24 z " ></path> ',[48,24]],['<path d=" M 12 0 v 48 l -12 -24 z " ></path>',[12,48]],['<path d=" M 0 24 h 48 l -12 -24 h -24 z"></path>',[48,24]],['<path d=" M 0 0 v 48 l 12 -24 z " ></path>',[12,48]]];function I(){for(let Z=1;Z<=4;Z+=1){const C=document.createElement("div");C.style.display="flex",C.style.flexDirection="row";const x=Z*10;if(Z&!0)D(C,x+8,(L)=>{return L>=x+4},-1,j,6),D(C,x+3,(L)=>{return L>x},-1,y,4);else D(C,x+1,(L)=>{return L<=x+3},1,y,4),D(C,x+4,(L)=>{return L<=x+8},1,j,6);document.body.appendChild(C)}}self.onload=function(){console.log("we ball"),J(),O(),I()};
