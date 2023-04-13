(function(){"use strict";var e={754:function(e,t,n){var r=n(963),o=n(252),a=n(577),i=n.p+"img/coffeeBar.b3dc3707.png",F=n.p+"img/cup.6e9cb43c.png";const c={lang:"en"},l=(0,o._)("head",null,[(0,o._)("meta",{charset:"UTF-8"}),(0,o._)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,o._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o._)("title",null,"Document")],-1),s={class:"content"},f=(0,o._)("img",{class:"coffeeBar",src:i,alt:""},null,-1),u={class:"talkBox"},d={class:"cup"},p=(0,o._)("img",{src:F,alt:""},null,-1),D={class:"coffeeRatioTable"},b=(0,o._)("h2",null,"Coffee 成分",-1),g={class:"Ratio"},B={class:"Ratio"},h={class:"chooseArea"};function v(e,t){return(0,o.wg)(),(0,o.iD)("html",c,[l,(0,o._)("body",null,[(0,o._)("div",s,[f,(0,o._)("div",u,[(0,o._)("p",null,(0,a.zw)(e.coffeedescribe),1)]),(0,o._)("div",d,[p,(0,o._)("div",{class:"cupFull",style:(0,a.j5)(e.styleObject)},null,4),(0,o._)("div",D,[b,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.coffeeRatios,(e=>((0,o.wg)(),(0,o.iD)("li",null,[(0,o._)("div",{class:"color",style:(0,a.j5)({background:e["顏色"]})},null,4),(0,o._)("div",g,(0,a.zw)(e["成分"]),1),(0,o._)("div",B,(0,a.zw)(e["比例"]),1)])))),256))])])]),(0,o._)("ul",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.coffees,(n=>((0,o.wg)(),(0,o.iD)("li",{onClick:t[0]||(t[0]=(...t)=>e.changeCoffee&&e.changeCoffee(...t))},(0,a.zw)(n["name"]),1)))),256))])])])])}var m={data(){return{selectedCoffee:"",coffeedescribe:"",coffeeRatios:[],color:"black",coffees:[{name:"義式濃縮咖啡",ratio:"linear-gradient(to top,#4F200D 0%,#4F200D 20%,transparent 20%)",ratioData:[{"成分":"濃縮咖啡","比例":"20%","顏色":"#4F200D"}],describe:"使用義式咖啡機沖泡，藉由高壓水沖煮研磨細緻且緊壓的咖啡粉，比其他方法製作出來的咖啡更加濃郁，由於含有更高濃度的懸浮物，表層帶有紅棕色的咖啡脂泡沫（crema），因此口味強勁濃郁。濃縮咖啡的份量可以是單倍（single），雙倍（double）和三倍（triple），使用研磨咖啡粉比例大約為7、14、和21克。"},{name:"康寶藍",ratio:"linear-gradient(to top,#4F200D 0%,#4F200D 20%,#FFFBEB 20%,#FFFBEB 40%,transparent 40%)",ratioData:[{"成分":"鮮奶油","比例":"20%","顏色":"#FFFBEB"},{"成分":"濃縮咖啡","比例":"20%","顏色":"#4F200D"}],describe:"屬於義式花式咖啡的一種，透明的琉璃杯中清晰可見黑白分明的外型，因此又被稱為雪山咖啡。康寶藍最大的特色是以冰冷的鮮奶油，搭配熱騰騰的濃縮咖啡Espresso，一般來說，飲用康寶藍前不需攪拌，讓口感強勁濃郁的Espresso混合著香甜的鮮奶油，品嚐綿密柔順的口感，此外，冷熱入口也別有一番風味。"},{name:"美式咖啡",ratio:"linear-gradient(to top,#4F200D 0%,#4F200D 20%,#B0DAFF 20%)",ratioData:[{"成分":"水","比例":"80%","顏色":"#B0DAFF"},{"成分":"濃縮咖啡","比例":"20%","顏色":"#4F200D"}],describe:"美式咖啡可以說是黑咖啡的總稱。無論是法式濾壓壺或是手沖壺沖煮出的咖啡都可泛稱為美式。在義大利，美式咖啡通常就是Espresso旁邊放上一杯熱水任你添加，濃縮咖啡與水的比例視個人口味而定，大約為1:12，美式咖啡喝起來口味偏淡，沒有義式濃縮咖啡強勁的口感，當然也更容易讓不喝咖啡的人接受。"},{name:"拿鐵咖啡",ratio:"linear-gradient(to top,#4F200D 0%,#4F200D 20%,#F5F5F5 20%,#F5F5F5 80%,#FFF3E2 80%)",ratioData:[{"成分":"奶泡","比例":"20%","顏色":"#FFF3E2"},{"成分":"牛奶","比例":"60%","顏色":"#F5F5F5"},{"成分":"濃縮咖啡","比例":"20%","顏色":"#4F200D"}],describe:"拿鐵在義大利文裡就是牛奶的意思，到義大利千萬不可直接叫拿鐵，否則服務生端來的不是咖啡，而是一杯熱牛奶。由此可見牛奶才是這杯咖啡的主角，標準比例大約是1/6濃縮咖啡、4/6熱牛奶、1/6奶泡，此外，也可以再添加肉桂、香草等不同風味，由於牛奶的比例高、奶泡厚重，因此口感更顯甜香且柔順細緻。"},{name:"卡布奇諾",ratio:"linear-gradient(to top,#4F200D 0%,#4F200D 33%,#F5F5F5 33%,#F5F5F5 66%,#FFF3E2 66%)",ratioData:[{"成分":"奶泡","比例":"33%","顏色":"#FFF3E2"},{"成分":"牛奶","比例":"33%","顏色":"#F5F5F5"},{"成分":"濃縮咖啡","比例":"33%","顏色":"#4F200D"}],describe:"卡布奇諾在義大利文中指的是泡沫咖啡，同時也意指聖方濟修士寬鬆的長袍和小尖帽（如同卡布奇諾咖啡的棕色）。卡布奇諾與拿鐵咖啡的差別在於調配比例，濃縮咖啡Espresso、鮮奶與奶泡各為1：1：1，首先倒入濃縮咖啡，熱牛奶，最後鋪上一層厚重的奶泡，再灑上肉桂粉、可可粉或是柑橘及檸檬果皮增添風味。"},{name:"摩卡咖啡",ratio:"linear-gradient(to top,#4F200D 0%,#4F200D 20%,#E4C988 20%,#E4C988 30%,#F5F5F5 30%,#F5F5F5 80%,#FFF3E2 80%)",ratioData:[{"成分":"奶泡","比例":"20%","顏色":"#FFF3E2"},{"成分":"牛奶","比例":"50%","顏色":"#F5F5F5"},{"成分":"巧克力糖漿","比例":"10%","顏色":"#E4C988"},{"成分":"濃縮咖啡","比例":"20%","顏色":"#4F200D"}],describe:"同屬於義式花式咖啡的一種，基底是濃縮咖啡，與巧克力糖漿、鮮奶、奶泡搭配比例為1：0.5：1.5：1，巧克力通常也可以白巧克力的形式添加，摩卡咖啡最明顯的風味就是可可的微苦焦香，有些花俏的摩卡咖啡還可裝飾奶油、可可粉和棉花糖，裝飾在奶泡上，用來加強咖啡的特色與香氣。 "},{name:"焦糖瑪奇朵",ratio:"linear-gradient(to top,#4F200D 0%,#4F200D 20%,#B99B6B 20%,#B99B6B 90%,#1A120B 90%)",ratioData:[{"成分":"焦糖","比例":"10%","顏色":"#1A120B"},{"成分":"奶泡+糖漿","比例":"70%","顏色":"#B99B6B"},{"成分":"濃縮咖啡","比例":"20%","顏色":"#4F200D"}],describe:"義大利文的意思是烙印，就像是甜蜜的印記般，包含濃縮咖啡、香草以及焦糖，一次可品嚐到三種香氣。一般來說，喝之前不能攪拌，所以唇上會是香甜的奶泡以及覆蓋在上的濃稠焦糖醬，接著是香草氣息的奶泡，最後來到濃郁回甘的濃縮咖啡，不過，與拿鐵咖啡和卡布奇諾相較，焦糖瑪奇朵的濃縮咖啡比例較高。 "},{name:"愛爾蘭咖啡",ratio:"linear-gradient(to top,#4F200D 0%,#4F200D 20%,#FFA559 20%,#FFA559 30%,#FFFBEB 30% , #FFFBEB 60%,transparent 60%)",ratioData:[{"成分":"鮮奶油","比例":"30%","顏色":"#FFFBEB"},{"成分":"愛爾蘭威士忌","比例":"10%","顏色":"#FFA559"},{"成分":"濃縮咖啡","比例":"20%","顏色":"#4F200D"}],describe:"有人說愛爾蘭咖啡是調酒不是咖啡，事實上也說得通，因為愛爾蘭咖啡本身就是加上威士忌，除了咖啡香還有酒香。愛爾蘭咖啡的作法通常是先倒入糖，再以威士忌裡的酒精燃燒來略微焦化糖汁，接著是濃縮咖啡，最後在加上鮮奶油，迷人的香氣在空氣中飄散進入鼻腔，互相撞擊調和，最適合冬日來上暖暖一杯。 "},{name:"維也納咖啡",ratio:"linear-gradient(to top,#4F200D 0%,#4F200D 20%,#E4C988 20%,#E4C988 30%,#FFFBEB 30%,#FFFBEB 50%)",ratioData:[{"成分":"鮮奶油","比例":"20%","顏色":"#FFFBEB"},{"成分":"巧克力糖漿","比例":"10%","顏色":"#E4C988"},{"成分":"濃縮咖啡","比例":"20%","顏色":"#4F200D"}],describe:"維也納咖啡如其名，是奧地利維也納人最喜愛的咖啡喝法。首先在溫熱的咖啡杯底部撒上薄薄一層砂糖或細冰糖，接著倒入濃縮咖啡，並裝飾新鮮奶油，口感彷彿三重奏般，在細緻的糖漿中品飲濃縮咖啡的苦勁與濃郁香氣，最後是融合在咖啡中的溫潤鮮奶油滋味；至於美式維也納咖啡，還添加巧克力糖漿，熱量當然也更高了！  "}],styleObject:{background:""}}},methods:{changeCoffee(e){let t=e.target.innerHTML;this.selectedCoffee=t;let n=this.coffees.filter((function(e){return e["name"]===t}));this.styleObject.background=n[0]["ratio"],this.coffeedescribe=n[0]["describe"],this.coffeeRatios=n[0]["ratioData"]}}},E=n(744);const _=(0,E.Z)(m,[["render",v]]);var w=_;(0,r.ri)(w).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var F=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(F=!1,a<i&&(i=a));if(F){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],F=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in F)n.o(F,o)&&(n.m[o]=F[o]);if(c)var s=c(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkratio_of_coffee"]=self["webpackChunkratio_of_coffee"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(754)}));r=n.O(r)})();
//# sourceMappingURL=app.8d941f5d.js.map