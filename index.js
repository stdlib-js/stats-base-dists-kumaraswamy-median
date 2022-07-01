// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r=function(n){return n!=n},t=Math.floor,e=function(n){return t(n)===n},u=e,i=function(n){return u(n/2)},o=function(n){return i(n>0?n-1:n+1)},f=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,a=f,y=c,l=function(n){return n===a||n===y},p=Math.sqrt,A=function(n){return Math.abs(n)},b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,v=w,d=function(n){return v.call(n)},m=Object.prototype.hasOwnProperty,U=function(n,r){return null!=n&&m.call(n,r)},s="function"==typeof Symbol?Symbol.toStringTag:"",h=U,I=s,N=w,g=d,F=function(n){var r,t,e;if(null==n)return N.call(n);t=n[I],r=h(n,I);try{n[I]=void 0}catch(r){return N.call(n)}return e=N.call(n),r?n[I]=t:delete n[I],e},S=b&&"symbol"==typeof Symbol.toStringTag?F:g,H=S,O="function"==typeof Uint32Array,T="function"==typeof Uint32Array?Uint32Array:null,j=function(n){return O&&n instanceof Uint32Array||"[object Uint32Array]"===H(n)},E=T,G=function(){var n,r;if("function"!=typeof E)return!1;try{r=new E(r=[1,3.14,-3.14,4294967296,4294967297]),n=j(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},L="function"==typeof Uint32Array?Uint32Array:void 0,W=function(){throw new Error("not implemented")},M=G()?L:W,x=S,P="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,Y=function(n){return P&&n instanceof Float64Array||"[object Float64Array]"===x(n)},_=V,q=function(){var n,r;if("function"!=typeof _)return!1;try{r=new _([1,3.14,-3.14,NaN]),n=Y(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},k="function"==typeof Float64Array?Float64Array:void 0,z=function(){throw new Error("not implemented")},B=q()?k:z,C=S,D="function"==typeof Uint8Array,J="function"==typeof Uint8Array?Uint8Array:null,K=function(n){return D&&n instanceof Uint8Array||"[object Uint8Array]"===C(n)},Q=J,R=function(){var n,r;if("function"!=typeof Q)return!1;try{r=new Q(r=[1,3.14,-3.14,256,257]),n=K(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},X="function"==typeof Uint8Array?Uint8Array:void 0,Z=function(){throw new Error("not implemented")},$=R()?X:Z,nn=S,rn="function"==typeof Uint16Array,tn="function"==typeof Uint16Array?Uint16Array:null,en=function(n){return rn&&n instanceof Uint16Array||"[object Uint16Array]"===nn(n)},un=tn,on=function(){var n,r;if("function"!=typeof un)return!1;try{r=new un(r=[1,3.14,-3.14,65536,65537]),n=en(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},fn="function"==typeof Uint16Array?Uint16Array:void 0,cn=function(){throw new Error("not implemented")},an={uint16:on()?fn:cn,uint8:$};(n=new an.uint16(1))[0]=4660;var yn,ln,pn=52===new an.uint8(n.buffer)[0];!0===pn?(yn=1,ln=0):(yn=0,ln=1);var An,bn,wn=M,vn={HIGH:yn,LOW:ln},dn=new B(1),mn=new wn(dn.buffer),Un=vn.HIGH,sn=vn.LOW,hn=function(n,r){return dn[0]=r,n[0]=mn[Un],n[1]=mn[sn],n},In=function(n,r){return 1===arguments.length?hn([0,0],n):hn(n,r)},Nn=In,gn=M,Fn=!0===pn?0:1,Sn=new B(1),Hn=new gn(Sn.buffer),On=function(n,r){return Sn[0]=n,Hn[Fn]=r>>>0,Sn[0]},Tn=On,jn=function(n){return 0|n},En=M,Gn=!0===pn?1:0,Ln=new B(1),Wn=new En(Ln.buffer),Mn=function(n){return Ln[0]=n,Wn[Gn]};!0===pn?(An=1,bn=0):(An=0,bn=1);var xn=M,Pn={HIGH:An,LOW:bn},Vn=new B(1),Yn=new xn(Vn.buffer),_n=Pn.HIGH,qn=Pn.LOW,kn=function(n,r){return Yn[_n]=n,Yn[qn]=r,Vn[0]},zn=kn,Bn=Nn,Cn=Mn,Dn=zn,Jn=[0,0],Kn=function(n,r){var t,e;return Bn(Jn,n),t=Jn[0],t&=2147483647,e=Cn(r),Dn(t|=e&=2147483648,Jn[1])},Qn=o,Rn=Kn,Xn=c,Zn=f,$n=function(n,r){return r===Xn?Zn:r===Zn?0:r>0?Qn(r)?n:0:Qn(r)?Rn(Zn,n):Zn},nr=Mn,rr=function(n,r){return(2147483647&nr(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},tr=A,er=f,ur=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:tr(n)<1==(r===er)?0:er},ir=M,or=!0===pn?1:0,fr=new B(1),cr=new ir(fr.buffer),ar=function(n,r){return fr[0]=n,cr[or]=r>>>0,fr[0]},yr=Mn,lr=Tn,pr=ar,Ar=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},br=1048576,wr=[1,1.5],vr=[0,.5849624872207642],dr=[0,1.350039202129749e-8],mr=Tn,Ur=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},sr=l,hr=r,Ir=A,Nr=function(n,r){return hr(r)||sr(r)?(n[0]=r,n[1]=0,n):0!==r&&Ir(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},gr=function(n,r){return 1===arguments.length?Nr([0,0],n):Nr(n,r)},Fr=Mn,Sr=function(n){var r=Fr(n);return(r=(2146435072&r)>>>20)-1023|0},Hr=f,Or=c,Tr=r,jr=l,Er=Kn,Gr=gr,Lr=Sr,Wr=Nn,Mr=zn,xr=[0,0],Pr=[0,0],Vr=function(n,r){var t,e;return 0===r||0===n||Tr(n)||jr(n)?n:(Gr(xr,n),r+=xr[1],(r+=Lr(n=xr[0]))<-1074?Er(0,n):r>1023?n<0?Or:Hr:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Wr(Pr,n),t=Pr[0],t&=2148532223,e*Mr(t|=r+1023<<20,Pr[1])))},Yr=Mn,_r=ar,qr=Tn,kr=jn,zr=Vr,Br=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},Cr=2147483647,Dr=1048575,Jr=1048576,Kr=r,Qr=o,Rr=l,Xr=e,Zr=p,$r=A,nt=Nn,rt=Tn,tt=jn,et=c,ut=f,it=$n,ot=rr,ft=ur,ct=function(n,r,t){var e,u,i,o,f,c,a,y,l,p,A,b,w,v,d,m,U,s,h,I;return s=0,t<br&&(s-=53,t=yr(r*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?I=0:h<767610?I=1:(I=0,s+=1,t-=br),e=524288+(t>>1|536870912),f=(U=1/((r=pr(r,t))+(a=wr[I])))*((m=r-a)-(o=lr(u=m*U,0))*(c=pr(0,e+=I<<18))-o*(r-(c-a))),d=(i=u*u)*i*Ar(i),c=lr(c=3+(i=o*o)+(d+=f*(o+u)),0),w=(A=-7.028461650952758e-9*(l=lr(l=(m=o*c)+(U=f*c+(d-(c-3-i))*u),0))+.9617966939259756*(U-(l-m))+dr[I])-((b=lr(b=(p=.9617967009544373*l)+A+(y=vr[I])+(v=s),0))-v-y-p),n[0]=b,n[1]=w,n},at=function(n,r){var t,e,u,i,o;return t=(o=1.9259629911266175e-8*(u=r-1)-u*u*Ur(u)*1.4426950408889634)-((e=mr(e=(i=1.4426950216293335*u)+o,0))-i),n[0]=e,n[1]=t,n},yt=function(n,r,t){var e,u,i,o,f,c,a,y,l;return l=((y=n&Cr|0)>>20)-1023|0,a=0,y>1071644672&&(u=_r(0,((a=n+(Jr>>l+1)>>>0)&~(Dr>>(l=((a&Cr)>>20)-1023|0)))>>>0),a=(a&Dr|Jr)>>20-l>>>0,n<0&&(a=-a),r-=u),f=(o=.6931471805599453*(t-((u=qr(u=t+r,0))-r))+-1.904654299957768e-9*u)-((c=(i=.6931471824645996*u)+o)-i),e=c-(u=c*c)*Br(u),n=Yr(c=1-(c*e/(e-2)-(f+c*f)-c)),n=kr(n),c=(n+=a<<20>>>0)>>20<=0?zr(c,a):_r(c,n)},lt=2147483647,pt=1083179008,At=1e300,bt=1e-300,wt=[0,0],vt=[0,0],dt=function n(r,t){var e,u,i,o,f,c,a,y,l,p,A,b,w,v;if(Kr(r)||Kr(t))return NaN;if(nt(wt,t),f=wt[0],0===wt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Zr(r);if(-.5===t)return 1/Zr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Rr(t))return ft(r,t)}if(nt(wt,r),o=wt[0],0===wt[1]){if(0===o)return it(r,t);if(1===r)return 1;if(-1===r&&Qr(t))return-1;if(Rr(r))return r===et?n(-0,-t):t<0?0:ut}if(r<0&&!1===Xr(t))return(r-r)/(r-r);if(i=$r(r),e=o&lt|0,u=f&lt|0,a=f>>>31|0,c=(c=o>>>31|0)&&Qr(t)?-1:1,u>1105199104){if(u>1139802112)return ot(r,t);if(e<1072693247)return 1===a?c*At*At:c*bt*bt;if(e>1072693248)return 0===a?c*At*At:c*bt*bt;A=at(vt,i)}else A=ct(vt,i,e);if(p=(t-(y=rt(t,0)))*A[0]+t*A[1],l=y*A[0],nt(wt,b=p+l),w=tt(wt[0]),v=tt(wt[1]),w>=pt){if(0!=(w-pt|v))return c*At*At;if(p+8008566259537294e-32>b-l)return c*At*At}else if((w&lt)>=1083231232){if(0!=(w-3230714880|v))return c*bt*bt;if(p<=b-l)return c*bt*bt}return c*(b=yt(w,l,p))},mt=dt;return function(n,t){return r(n)||n<=0||r(t)||t<=0?NaN:mt(1-mt(2,-1/t),1/n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).median=r();
//# sourceMappingURL=index.js.map
