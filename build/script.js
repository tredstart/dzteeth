function D(Z,M,m,x){for(let k=M;m(k);k+=x){g[k]=[];for(let L=0;L<Z;++L)g[k].push("transparent")}}function X(){for(let Z=1;Z<=8;Z+=1){const M=Z*10;if(Z&!0)D(6,M+8,(m)=>{return m>=M+4},-1),D(4,M+3,(m)=>{return m>M},-1);else D(4,M+1,(m)=>{return m<=M+3},1),D(6,M+4,(m)=>{return m<=M+8},1)}}function $(Z){g=Z,Y(g)}function V(Z){q=Z}function z(Z){Y=Z}var g={},Y,q="transparent";function n(){const Z=document.getElementsByClassName("illness-option");if(Z.length!==0){for(let M of Z)if(M.addEventListener("click",(m)=>{for(let x of Z)x.classList.remove("active");m.target.classList.add("active"),V(m.target.value)}),console.log(M),M.classList.contains("active"))V(M.value)}}var j=`M 6.092 11.164 C 3.906 11.164 3.906 25.32 6.092 25.32 C 7.44 31.387
        42.286 30.089 41.259 25.469 C 43.643 25.668 43.941 11.958 41.557 11.759
        C 37.335 6.763 35.323 8.84 23.973 9.971 C 16.289 9.623 8.868 4.329
        6.092 11.164 Z`,v=[`M 22.185 47.82 C 23.164 47.971 27.758 29.245 25.314 29.343 C 25.898 30.074
9.012 28.784 8.029 27.555 C 14.442 48.976 4.6 63.155 9.966 64.361 C 12.998
68.404 22.629 48.461 22.483 48.267 C 21.947 49.004 31.268 71.672 33.659 68.384
C 41.743 67.807 41.374 27.685 39.023 27.853 C 39.029 27.864 26.798 30.821
26.059 29.343 C 26.26 30.501 23.453 48.15 22.185 47.82 Z`],u=[`M 16.97 29.343 L 21.142 29.641 C 22.715 30.54 11.015 65.491 9.817
        64.807 C 9.662 64.809 16.732 29.341 16.97 29.343 Z`,`M 32.765 28.896 L 35.298 28.449 C 37.648 33.447 36.5 67.874 35.894
        66.596 L 32.765 28.896 Z`,`M 29.934 29.492 C 29.987 29.692 32.209 29.689 31.871 29.492 C 32.118
        29.739 30.609 65.333 30.083 64.807 C 29.069 65.199 27.843 29.895 29.934
        29.492 Z`];var y=`M 6.092 12.654 C 3.906
12.654 3.906 25.32 6.092 25.32 C 7.44 31.387 42.286 30.089 41.259 25.469 C
43.643 25.668 43.941 11.958 41.557 11.759 C 36.007 4.44 32.56 7.058 23.824
12.057 C 17.446 8.089 12.203 4.535 6.092 12.654 Z`,p=[`M 22.185 47.82 C 23.164
47.971 27.758 29.245 25.314 29.343 C 25.898 30.074 9.012 28.784 8.029 27.555 C
17.718 32.234 4.636 62.973 9.966 64.361 C 12.998 68.404 22.629 48.461 22.483
48.267 C 21.947 49.004 31.268 69.437 33.659 66.149 C 41.743 65.572 41.374
27.685 39.023 27.853 C 39.029 27.864 26.798 30.821 26.059 29.343 C 26.26 30.501
23.453 48.15 22.185 47.82 Z`],f=[`M 16.97 29.343 L 21.142 29.641 C 22.715 30.54 11.015 65.491 9.817
        64.807 C 9.662 64.809 16.732 29.341 16.97 29.343 Z`,`M 30.828 29.343 L 35.298 28.449 C 37.648 33.447 35.904 66.533 35.298
        65.255 L 30.828 29.343 Z`,`M 30.679 29.194 C 30.732 29.394 33.103 46.378 32.765 46.181 C 33.012
        46.428 29.864 62.8 29.338 62.274 C 28.324 62.666 28.588 29.597 30.679
        29.194 Z`];var F=`M 12.561 5.065 C 11.062
        3.627 25.215 -2.978 32.916 4.406 C 37.712 4.95 35.477 21.865 32.625
        21.542
        C 33.173 24.643 12.956 26.749 11.979 21.212 C 8.877 21.652 9.459 5.505
        12.561 5.065 Z`,G=[`M 15.239 24.249 C 19.189 26.806 10.986 62.036 15.239 63.378 C 19.194
        62.1 32.663 36.131 30.164 23.075 C 29.331 25.991 15.212 24.918 15.239
        24.249 Z`],H=[`M 21.416 25.007 L 26.467
        24.401 C 26.844 24.652 17.719 61.535 16.365 60.767 C 15.011 59.999 21.618
        25.209 21.416 25.007 Z`];var I=`M 11.551 6.075 C 9.988
4.065 25.399 -5.764 33.522 5.416 C 38.336 5.948 37.355 21.691 33.029 22.35 C
34.005 26.598 15.053 30.778 11.575 21.818 C 6.263 19.49 8.516 6.313 11.551
6.075 Z`,J=[`M 12.41 23.239 C 11.141
26.336 10.819 73.956 17.461 75.298 C 21.416 76.323 34.673 36.888 33.194 23.075
C 31.954 28.486 11.725 27.308 12.41 23.239 Z`],K=[`M 18.588 27.027 L 25.659 27.431 C 25.65 30.381
18.808 75.126 17.577 73.495 C 16.346 71.864 18.79 27.229 18.588 27.027
Z`];var A=`M 12.763 7.287 C 11.2 5.277 22.975 -5.36 31.098 5.82 C 33.361 6.777 37.006
        21.749 33.029 22.35 C 34.005 26.598 15.053 30.778 11.575 21.818 C 7.54
        19.49 10.588 7.525 12.763 7.287 Z`,d=[`M 32.932 22.583 C 36.032
24.406 26.277 60.785 20.406 57.332 C 14.623 61.308 9.608 15.05 11.719 22.381 C
13.83 29.712 32.962 29.234 32.932 22.583 Z`],W=[`M 11.719 22.785 C 11.814
28.223 14.303 41.289 15.706 44.533 C 16.015 46.729 11.98 55.737 17.594 57.494 C
25.538 62.973 36.363 22.23 32.702 24.322 C 29.041 26.414 17.279 31.045 11.719
22.785 Z`],O=[`M 22.224 27.229 C 21.79
        28.572 25.428 28.167 26.063 27.431 C 23.591 48.585 18.658 58.317 19.194
        56.726 C 19.264 57.633 22.531 27.402 22.224 27.229 Z`];var r=`M 6.757 30.599 C 11.336 35.158 2.232 81.58 6.924 80.955 C 11.007 85.807
24.213 46.852 23.955 46.545 L 23.955 32.445 C 20.43 33.965 4.073 31.755 6.757
30.599 Z`,i=[`M 24.827 33.069 L 24.493 46.911 C 28.414 47.953 23.721 80.747 26.663
    81.024 C 29.225 83.107 43.539 34.212 39.186 30.268 C 42.2 31.454 25.502
    33.57 24.827 33.069 Z`,`M 15.977 70.002 C 14.826 70.232 14.043 88.823 17.146 88.202 C 18.798
    89.854 26.477 76.828 25.495 75.846 C 25.584 73.963 26.579 43.192 24.493
    46.961 L 15.977 70.002 Z`,`M 5.468 14.502 C 3.282 14.502 3.282 28.658 5.468 28.658 C 6.816 34.725
    41.662 33.427 40.635 28.807 C 43.019 29.006 43.317 15.296 40.933 15.097 C
    36.711 10.101 34.699 12.178 23.349 13.309 C 15.665 12.961 8.244 7.667 5.468
    14.502 Z`],w=[`M 30.504 32.101 L 33.342 31.767 C 34.25 31.767 28.557 80.355 27.164 80.355
    C 25.771 80.355 29.21 32.101 30.504 32.101 Z`,`M 20.986 56.812 L 24.66 46.794 C 25.325 46.129 25.631 56.831 25.996 57.647
    C 26.361 58.463 18.884 88.325 17.146 88.035 C 16.478 88.035 20.318 56.812
    20.986 56.812 Z`,`M 12.638 32.435 L 16.812 32.602 C 18.577 33.611 9.397 82.049 7.629 80.856
    C 6.697 80.856 12.254 32.435 12.638 32.435 Z`];var l=`M 11.539 2.851 C 18.9 -0.835 42.096 1.119 40.766 2.449 C
44.678 5.083 38.25 19.531 35.94 19.207 C 36.361 20.546 18.116 25.064 17.17
19.073 C 16.061 21.384 8.549 9.08 11.539 2.851 Z`,c=[`M 13.55 15.588 C 10.216 27.712 16.046 83.057 22.264 77.931 C 28.861 85.298
    39.675 43.736 37.414 18.537 C 38.718 19.339 18.714 27.76 13.55 15.588 Z`],_=[`M 21.996 22.291 L 29.102 21.888 C 29.474 21.981 24.75 78.351 22.532 77.797
    C 18.427 72.861 21.517 22.131 21.996 22.291 Z`];var h=[`M 14.085 24.838 C 15.531 27.117 29.908 27.129 30.04 26.179 C 30.847 26.717
    30.355 35.818 30.174 35.698 C 28.424 35.304 16.778 74.316 13.683 72.3 C
    9.134 71.542 15.818 26.172 14.085 24.838 Z`,`M 30.04 35.565 C 32.142 35.685 30.22 74.083 26.823 73.239 C 23.286 75.671
    18.418 61.412 20.521 59.966 L 30.04 35.565 Z`],o=[`M 19.315 26.716 L 23.471 26.85 C 23.737 26.903 15.184 72.439 13.818 72.166
    C 12.742 71.628 19.074 26.596 19.315 26.716 Z`,`M 25.348 47.362 L 22.265 55.541 C 22.265 55.541 25.653 73.15 26.688 72.97
    C 27.723 72.79 26.369 47.051 25.348 47.362 Z`];var P=[`M 7.248 26.85 C 12.431 27.989 3.338 83.026 6.712 83.026 C 11.558 88.195
    24.345 40.198 24.275 40.123 L 24.678 28.995 C 24.678 29.772 7.248 28.505
    7.248 26.85 Z`,`M 24.811 28.995 C 24.94 29.769 39.727 27.957 39.962 26.716 C 40.197 25.475
    48.748 81.609 41.571 80.211 C 37.631 82.333 33.069 65.43 33.258 65.328 C
    33.279 59.306 24.571 37.184 24.275 39.989 L 24.811 28.995 Z`,`M 24.276 40.391 L 16.767 65.597 C 16.726 65.594 15.071 88.057 20.253
    88.389 C 25.435 88.721 33.124 64.122 33.124 64.122 C 33.956 63.845 26.518
    39.644 24.276 40.391 Z`],Q=[`M 13.684 28.995 L 17.169 29.129 C 17.34 29.163 9.881 82.909 8.455 82.624 C
    8.422 82.652 9.362 32.652 13.684 28.995 Z`,`M 28.431 47.363 L 30.175 52.324 C 30.175 52.324 21.143 88.604 19.851
    87.986 C 18.559 87.368 27.332 46.956 28.431 47.363 Z`,`M 28.7 29.129 L 32.856 28.861 C 34.46 28.632 41.077 79.687 40.23 79.808 C
    39.504 79.808 27.325 29.129 28.7 29.129 Z`,`M 33.929 28.861 L 37.548 27.788 C 38.056 27.788 44.932 76.188 43.716 76.188 C
    43.439 76.188 33.883 28.861 33.929 28.861 Z`];function E(Z){const M=document.createElementNS("http://www.w3.org/2000/svg","path");return M.style.stroke="black",M.style.fill="none",M.setAttribute("d",Z),M}function b(Z){const M=document.createElementNS("http://www.w3.org/2000/svg","path");return M.style.stroke="black",M.style.fill=q,M.setAttribute("d",Z),M.addEventListener("click",(m)=>{m.target.style.fill=q}),M}function B(Z){const M=document.createElementNS("http://www.w3.org/2000/svg","g");for(let m of Z){const x=document.createElementNS("http://www.w3.org/2000/svg","path");x.style.stroke="black",x.style.fill="none",x.setAttribute("d",m),M.appendChild(x)}return M}function t(Z,M,m,x,k){let L={},C={},e=[];switch(M%10){case 1:L=E(l),C=B(c),e=_.map(b);break;case 2:{L=E(F),C=B(G),e=H.map(b);break}case 3:{L=E(I),C=B(J),e=K.map(b);break}case 4:L=E(A),C=B(h),e=o.map(b);break;case 5:L=E(A),C=B(W),e=O.map(b);break;case 6:L=E(y),C=B(P),e=Q.map(b);break;case 7:case 8:L=E(r),C=B(i),e=w.map(b);break}Z.appendChild(S(L,C,e,k,-1)),Z.appendChild(U(M,m,x))}function a(Z,M,m,x,k){Z.appendChild(U(M,m,x));let L={},C={},e=[];switch(M%10){case 1:case 2:{L=E(F),C=B(G),e=H.map(b);break}case 3:{L=E(I),C=B(J),e=K.map(b);break}case 4:L=E(A),C=B(d),e=O.map(b);break;case 5:L=E(A),C=B(W),e=O.map(b);break;case 6:L=E(y),C=B(p),e=f.map(b);break;case 7:case 8:L=E(j),C=B(v),e=u.map(b);break}Z.appendChild(S(L,C,e,k,1))}function S(Z,M,m,x,k){const L=document.createElementNS("http://www.w3.org/2000/svg","svg");L.viewBox="0 0 48 90",L.style.width="48px",L.style.height="90px";const C=document.createElementNS("http://www.w3.org/2000/svg","g");tx=x===-1?48:0,ty=k===-1?90:0,C.setAttribute("transform",`translate(${tx},${ty}) scale(${x}, ${k})`),C.appendChild(Z),C.appendChild(M);for(let e of m)C.appendChild(e);return L.appendChild(C),L}function T(Z,M,m,x,k,L){for(let C=M;m(C);C+=x){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column";const N=document.createElement("p");if(N.innerHTML=C,C<50)if(C<30){if(C>20)t(e,C,k,L,-1);else t(e,C,k,L,1);e.appendChild(N)}else if(e.appendChild(N),C>40)a(e,C,k,L,1),Z.style.gridColumnStart=1,Z.style.gridRowStart=2;else a(e,C,k,L,-1),Z.style.gridColumnStart=2,Z.style.gridRowStart=2;else if(C<70){if(C>60)R(e,C,k,L,-1,-1);else R(e,C,k,L,1,-1);e.appendChild(N)}else if(e.appendChild(N),C>80)R(e,C,k,L,1,1),Z.style.gridColumnStart=1,Z.style.gridRowStart=2;else R(e,C,k,L,-1,1),Z.style.gridColumnStart=2,Z.style.gridRowStart=2;Z.appendChild(e)}}function R(Z,M,m,x,k,L){let C={},e={},N=[];switch(M%10){case 1:case 2:{C=E(F),e=B(G),N=H.map(b);break}case 3:{C=E(I),e=B(J),N=K.map(b);break}case 4:C=E(y),e=B(P),N=Q.map(b);break;case 5:C=E(y),e=B(P),N=Q.map(b);break}if(L===1)Z.appendChild(U(M,m,x)),Z.appendChild(S(C,e,N,k,L));else Z.appendChild(S(C,e,N,k,L)),Z.appendChild(U(M,m,x))}function Z2(){return x2(5,8,5)}function L2(){return x2(1,4,8)}function e2(Z,M,m){T(Z,M+1,(x)=>{return x<=M+3},1,M2,4),T(Z,M+4,(x)=>{return x<=M+m},1,C2,6)}function m2(Z,M,m){T(Z,M+m,(x)=>{return x>=M+4},-1,C2,6),T(Z,M+3,(x)=>{return x>M},-1,M2,4)}function x2(Z,M,m){const x=document.createElement("div");x.style.display="grid",x.style.gridTemplateColumns="repeat(2, 1fr)",x.style.gridTemplateRows="repeat(2, 1fr)";for(let k=Z;k<=M;k+=1){const L=document.createElement("div");L.style.display="flex",L.style.flexDirection="row";const C=k*10;switch(k){case 1:case 4:case 5:case 8:m2(L,C,m);break;case 2:case 3:case 6:case 7:e2(L,C,m);break}x.appendChild(L)}return x}function U(Z,M,m){const x=document.createElement("div");for(let k=0;k<m;++k){const L=M[k],C=L[1];x.appendChild(k2(Z,k,C[0],C[1],g[Z][k],L[0]))}return x.style.position="relative",x.style.width="48px",x.style.height="48px",x}function k2(Z,M,m,x,k,L){const C=document.createElementNS("http://www.w3.org/2000/svg","svg");switch(C.dataset.tooth=Z,C.dataset.side=M,C.addEventListener("click",(e)=>{if(s=e.target.parentElement,tid=s.dataset.tooth,sid=s.dataset.side,tid!==void 0&&sid!==void 0){s.style.fill=q;const N=g;N[tid][sid]=q,$(N)}}),C.style.viewBox=`0 0 ${m} ${x}`,C.style.width=m,C.style.height=x,C.style.position="absolute",C.style.fill=k,C.style.stroke="black",C.innerHTML=L,M){case 0:case 3:break;case 1:C.style.right=0;break;case 2:C.style.bottom=0;break;case 4:C.style.top="12px",C.style.left="12px";break;case 5:C.style.top="12px",C.style.left="24px";break}return C}var C2=[['<path d=" M 0 0 h 48 l -12 12 h -24 z "></path>',[48,12]],['<path d=" M 12 0 v 48 l -12 -12 v -24 z "></path>',[12,48]],['<path d=" M 0 12 h 48 l -12 -12 h -24 z " ></path>',[48,12]],['<path d=" M 0 0 v 48 l 12 -12 v -24 z " ></path>',[12,48]],['<path d=" M 0 0 h 12 v 24 h -24 z " ></path>',[12,24]],['<path d=" M 0 0 h 12 v 24 h -12 z " ></path>',[12,24]]],M2=[['<path d=" M 0 0 h 48 l -12 24 h -24 z " ></path> ',[48,24]],['<path d=" M 12 0 v 48 l -12 -24 z " ></path>',[12,48]],['<path d=" M 0 24 h 48 l -12 -24 h -24 z"></path>',[48,24]],['<path d=" M 0 0 v 48 l 12 -24 z " ></path>',[12,48]]];self.onload=function(){console.log("we ball"),z(console.log),X(),n();const Z=L2(),M=document.createElement("div");M.style.width="50%",M.appendChild(Z),document.body.appendChild(M);const m=Z2(),x=document.createElement("div");x.style.width="50%",x.appendChild(m),document.body.appendChild(x)};
