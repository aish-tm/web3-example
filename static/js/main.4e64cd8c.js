/*! For license information please see main.4e64cd8c.js.LICENSE.txt */
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Nr=mr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ir=mr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Rr=gr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Br} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Nr} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ir} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,jr=mr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Lr=gr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${jr} 1s linear infinite;
`,Ur=mr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Dr=mr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Fr=gr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ur} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Dr} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,zr=gr("div")`
  position: absolute;
`,qr=gr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Hr=mr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Vr=gr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Hr} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Kr=t=>{let{toast:r}=t,{icon:n,type:i,iconTheme:o}=r;return void 0!==n?"string"==typeof n?e.createElement(Vr,null,n):n:"blank"===i?null:e.createElement(qr,null,e.createElement(Lr,{...o}),"loading"!==i&&e.createElement(zr,null,"error"===i?e.createElement(Rr,{...o}):e.createElement(Fr,{...o})))},Wr=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Gr=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Zr=gr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,$r=gr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Jr=e.memo((t=>{let{toast:r,position:n,style:i,children:o}=t,a=r.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,i]=vr()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Wr(r),Gr(r)];return{animation:t?`${mr(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${mr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(r.position||n||"top-center",r.visible):{opacity:0},s=e.createElement(Kr,{toast:r}),u=e.createElement($r,{...r.ariaProps},yr(r.message,r));return e.createElement(Zr,{className:r.className,style:{...a,...i,...r.style}},"function"==typeof o?o({icon:s,message:u}):e.createElement(e.Fragment,null,s,u))}));!function(e,t,r,n){ar.p=t,hr=e,dr=r,pr=n}(e.createElement);var Yr=t=>{let{id:r,className:n,style:i,onHeightUpdate:o,children:a}=t,s=e.useCallback((e=>{if(e){let t=()=>{let t=e.getBoundingClientRect().height;o(r,t)};t(),new MutationObserver(t).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[r,o]);return e.createElement("div",{ref:s,className:n,style:i},a)},Xr=lr`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Qr=t=>{let{reverseOrder:r,position:n="top-center",toastOptions:i,gutter:o,children:a,containerStyle:s,containerClassName:u}=t,{toasts:c,handlers:f}=Cr(i);return e.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:u,onMouseEnter:f.startPause,onMouseLeave:f.endPause},c.map((t=>{let i=t.position||n,s=((e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:vr()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...i}})(i,f.calculateOffset(t,{reverseOrder:r,gutter:o,defaultPosition:n}));return e.createElement(Yr,{id:t.id,key:t.id,onHeightUpdate:f.updateHeight,className:t.visible?Xr:"",style:s},"custom"===t.type?yr(t.message,t):a?a(t):e.createElement(Jr,{toast:t,position:i}))})))},en=Or,tn=r(27844),rn=r(39076),nn=r.n(rn);const on=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"uint256","name":"lockingStartTime","type":"uint256"},{"internalType":"uint256","name":"lockingEndTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"LockStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hardCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"locking_end","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"locking_start","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintHardCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintLockedSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintableLockedAmount","outputs":[{"internalType":"uint256","name":"finalAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintedLockedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');class an{constructor(e){this.provider=e}async getChainId(){try{const e=new(nn())(this.provider),t=await e.eth.getChainId();return console.log(e),t.toString()}catch(e){return e}}async getAccounts(){try{const e=new(nn())(this.provider);return(await e.eth.getAccounts())[0]}catch(e){return e}}async getBalance(){try{const e=new(nn())(this.provider),t=(await e.eth.getAccounts())[0];return e.utils.fromWei(await e.eth.getBalance(t))}catch(e){return e}}async signMessage(){try{var e;const t=new(nn())(this.provider),r=(await t.eth.getAccounts())[0],n=[[{type:"string",name:"signMessageString",value:"Hello signing example"}],r],i="eth_signTypedData";return await(null===(e=t.currentProvider)||void 0===e?void 0:e.sendAsync({id:1,method:i,params:n,fromAddress:r}))}catch(t){return t}}async signTypedData(e){try{const e=new(nn())(this.provider),t=(await e.eth.getAccounts())[0],r=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"verifyingContract",type:"address"}],n={name:"Ether Mail",version:"1",verifyingContract:"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"},i={from:{name:"Cow",wallet:"0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"},to:{name:"Bob",wallet:"0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"},contents:"Hello, Bob!"},o={Person:[{name:"name",type:"string"},{name:"wallet",type:"address"}],Mail:[{name:"from",type:"Person"},{name:"to",type:"Person"},{name:"contents",type:"string"}]},a=JSON.stringify({types:{EIP712Domain:r,Person:o.Person,Mail:o.Mail},domain:n,primaryType:"Mail",message:i});return await e.currentProvider.sendAsync({method:"eth_signTypedData_v3",params:[t,a],from:t})}catch(t){return t}}async sendTransaction(){try{const e=new(nn())(this.provider),t=(await e.eth.getAccounts())[0],r="0x70Ce7CaaFf7c45D195411468Dc5D20E4aCfb3f2d",n=e.utils.toWei("0.001");console.log(e.givenProvider);return await e.eth.sendTransaction({from:t,to:r,value:n,maxPriorityFeePerGas:"5000000000",maxFeePerGas:"6000000000000"})}catch(e){return e}}async sendContractTransaction(){try{const t=new(nn())(this.provider);var e=new t.eth.Contract(on,"0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844");console.log(e);const r=(await t.eth.getAccounts())[0];return await e.methods.approve(r,"20000000000000000000").send({from:r},(function(e,t){t?console.log(t):console.log(e)})).on("receipt",(async function(e){console.log(e)})).on("error",(async function(e){console.log(e)}))}catch(t){return t}}async getNameOfToken(){try{const e=new(new(nn())(this.provider).eth.Contract)(on,"0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844");return await e.methods.name().call()}catch(e){return e}}async getPrivateKey(){try{return await this.provider.request({method:"eth_private_key"})}catch(e){return e}}}const sn=function(){const[t,r]=(0,e.useState)(null),[i,o]=(0,e.useState)(null),[a,s]=(0,e.useState)(""),[u,c]=(0,e.useState)("console log"),f="\n\n-------------------------------------------------------------\n\n";return(0,e.useEffect)((()=>{(async()=>{try{const e=new er({uiConfig:{appLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/2048px-Overwatch_circle_logo.svg.png",theme:"dark",loginMethodsOrder:["google","facebook","github"],defaultLanguage:"en"},web3AuthNetwork:"testnet",clientId:"BLBf77Z-iw8CU0ca5mb77r2LzPn3yEC_uMmrRw9c2qZhRnTcjRhGF7dtcGmEPLfJwycWq9meFuaf-DPwzd7SiWE",chainConfig:{chainNamespace:"eip155",chainId:"0x5"}}),t=new tn.OpenloginAdapter({loginSettings:{mfaLevel:"default"},adapterSettings:{network:"testnet",whiteLabel:{name:"Over Watch",logoLight:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/2048px-Overwatch_circle_logo.svg.png",logoDark:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/2048px-Overwatch_circle_logo.svg.png",defaultLanguage:"en",dark:!0}}});e.configureAdapter(t),r(e),await e.initModal({modalConfig:{[n.rW.OPENLOGIN]:{label:"openlogin",loginMethods:{google:{name:"google login",logoDark:"url to your custom logo which will shown in dark mode"},facebook:{showOnModal:!0},github:{showOnModal:!0}},showOnModal:!0}}}),e.provider&&o(e.provider)}catch(e){console.error(e),en.error("Something went Wrong")}})()}),[]),(0,p.jsxs)("div",{className:"App",children:[(0,p.jsxs)("div",{className:"connection-buttons",children:[(0,p.jsx)("div",{className:"pnp",children:(0,p.jsx)("p",{children:"web3Auth Plug & Play "})}),a||(0,p.jsx)("p",{children:"address"}),(0,p.jsx)("button",{className:"connection-buttons-login",onClick:async()=>{if(!t)return console.log("web3auth not initialized yet"),void en.error("web3auth not initialized yet");const e=await t.connect();o(e),c("Logged In"),en.success("Connected")},children:"Login"}),(0,p.jsx)("button",{className:"connection-buttons-logout",onClick:async()=>{if(t)try{const e=await t.logout();o(e),s(""),c('\n      setProvider(web3authProvider);\n      setAddress("");\n      setUserData({});\n\nuser details cleared & logged out\n        ')}catch(e){console.log(e.message),en.error(e.message)}else console.log("web3auth not initialized yet")},children:"Logout"})]}),(0,p.jsxs)("div",{className:"function-buttons",children:[i?(0,p.jsx)("p",{children:"Provider Set"}):(0,p.jsx)("p",{children:"Provider Not Set"}),(0,p.jsx)("p",{children:"User Details"}),(0,p.jsx)("button",{onClick:async()=>{if(!t)return console.log("web3auth not initialized yet"),void en.error("web3auth not initialized yet");const e=await t.getUserInfo();c(`User Info - \n ${JSON.stringify(e)}`)},children:"getUserInfo"}),(0,p.jsx)("button",{onClick:async()=>{if(!i)return console.log("provider not initialized yet"),void en.error("provider not initialized yet");const e=new an(i),t=await e.getAccounts();c(`Account address is - ${t}`),s(t)},children:"getAccounts"}),(0,p.jsx)("button",{onClick:async()=>{if(!i)return console.log("provider not initialized yet"),void en.error("provider not initialized yet");const e=new an(i),t=await e.getBalance();c(`Balance - ${t}`),console.log(t)},children:"getBalance"}),(0,p.jsx)("button",{onClick:async()=>{if(!i)return console.log("provider not initialized yet"),void en.error("provider not initialized yet");const e=new an(i),t=await e.getPrivateKey();c(`Private Key - ${t}`),console.log(t)},children:"getPrivateKey"}),(0,p.jsx)("button",{onClick:async()=>{if(!i)return console.log("provider not initialized yet"),void en.error("provider not initialized yet");const e=new an(i),t=await e.getChainId();c(`Chain Id - ${t}`),console.log(t)},children:"getChainId"}),(0,p.jsx)("p",{children:"User specific transactions"}),(0,p.jsx)("button",{onClick:async()=>{if(!i)return console.log("provider not initialized yet"),void en.error("provider not initialized yet");try{const e=new an(i),t=await e.signMessage();c(`Signed message(Hello signing example) - ${t}`)}catch(e){c(e.message)}},children:"sign"}),(0,p.jsx)("button",{onClick:async()=>{if(!i)return console.log("provider not initialized yet"),void en.error("provider not initialized yet");try{const e=new an(i),t=await e.signTypedData();c(`Signing typed data - ${t}`)}catch(e){c(e.message)}},children:"sign Message"}),(0,p.jsx)("button",{onClick:async()=>{if(!i)return console.log("provider not initialized yet"),void en.error("provider not initialized yet");try{const e=new an(i),t=await e.sendTransaction();c(`Receipt is - \n ${JSON.stringify(t)} \n${f}Goerli link is - \n https://goerli.etherscan.io/tx/${t.transactionHash}`),console.log(t),"INTERNAL_ERROR: insufficient funds"===t.data.message&&en.error("INTERNAL_ERROR: insufficient funds")}catch(e){console.log(e)}},children:"Send 0.001eth"}),(0,p.jsx)("p",{children:"Contract Interactions"}),(0,p.jsx)("button",{onClick:async()=>{if(!i)return console.log("provider not initialized yet"),void en.error("provider not initialized yet");const e=new an(i),t=await e.getNameOfToken();c(`Name is - ${t}`),console.log(t)},children:"get Token Name"}),(0,p.jsx)("button",{onClick:async()=>{if(!i)return console.log("provider not initialized yet"),void en.error("provider not initialized yet");const e=new an(i),t=await e.sendContractTransaction();c(`Receipt is - \n ${JSON.stringify(t)} \n${f}Goerli link is - \n https://goerli.etherscan.io/tx/${t.transactionHash}`),console.log(t)},children:"Approve Token"})]}),(0,p.jsxs)("div",{className:"log-space",children:[(0,p.jsx)("textarea",{className:"log-space-content",value:u}),(0,p.jsx)("button",{onClick:async()=>{c(""),console.log("console cleared")},children:"clearConsole"})]}),(0,p.jsx)("header",{className:"App-header"}),(0,p.jsx)(Qr,{})]})};t.createRoot(document.getElementById("root")).render((0,p.jsx)(e.StrictMode,{children:(0,p.jsx)(sn,{})}))})()})();
//# sourceMappingURL=main.4e64cd8c.js.map