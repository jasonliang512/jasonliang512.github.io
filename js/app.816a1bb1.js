(function(t){function e(e){for(var s,i,o=e[0],n=e[1],c=e[2],p=0,m=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);d&&d(e);while(m.length)m.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],s=!0,o=1;o<a.length;o++){var n=a[o];0!==r[n]&&(s=!1)}s&&(l.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},l=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=n;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0142":function(t,e,a){},"03a5":function(t){t.exports=JSON.parse('[{"title":"Yet Another Chat App","description":"A school project. This is a chat application that uses the MERN stack. Messages are sent in real time using Socket.IO.","visit":"https://yet-another-chat-app.xyz/","source":"https://github.com/jasonliang512/yet-another-chat-app","tags":["Express","MongoDB","React","Tailwind CSS","Socket.IO"],"image":"/images/chat-app.png"},{"title":"elm-heroicons","description":"A package for the Elm programming language that provides the Heroicons set as SVG icons. This package was generated using a Python script.","visit":"https://package.elm-lang.org/packages/jasonliang512/elm-heroicons/latest/","source":"https://github.com/jasonliang512/elm-heroicons","tags":["Elm","Python"],"image":"/images/heroicons.png"},{"title":"Wildermaze","description":"A game that sees the player move a rabbit around a maze, eating carrots, and avoiding wolves. Created during BC Game Jam 2020.","visit":"https://jasonliang512.github.io/wildermaze","source":"https://github.com/jasonliang512/wildermaze","tags":["Unity","C#"],"image":"/images/wildermaze.png"},{"title":"Temtem Type Calculator","description":"A tiny web app for viewing type matchups between different Temtem types.","visit":"https://temtypecalc.netlify.com","source":"https://github.com/jasonliang512/temtem-type-calculator","tags":["Gatsby","GraphQL","React","Tailwind CSS"],"image":"/images/temtem.png"}]')},"38c8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overflow-x-hidden",class:{"mode-dark":t.darkModeEnabled}},[a("div",{staticClass:"relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-400 font-semibold",class:{"easter-egg":t.easterEggEnabled}},[a("div",{staticClass:"absolute z-0 dots right-0 top-0 w-16 md:w-32 mt-12",staticStyle:{height:"24rem"}}),a("div",{staticClass:"absolute z-0 dots left-0 bottom-0 h-8 md:h-32 ml-12",staticStyle:{width:"18rem"}}),a("div",{staticClass:"fixed z-50 right-0 top-0 m-6"},[a("button",{staticClass:"p-2 bg-gray-800 dark:bg-gray-100 rounded-full shadow-md focus:outline-none focus:shadow-outline",on:{click:function(e){t.darkModeEnabled=!t.darkModeEnabled}}},[a("svg",{staticClass:"w-6 h-6 text-gray-100 dark:text-gray-700",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[t.darkModeEnabled?a("path",{attrs:{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}}):a("path",{attrs:{d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}})])])]),a("div",{staticClass:"relative z-10 max-w-4xl mx-auto px-8"},[t._m(0),a("main",[a("section-header",{attrs:{"bg-text":"Personal Projects"}},[t._v("Projects")]),a("div",{staticClass:"md:pt-8 grid row-gap-8 md:row-gap-12 max-w-3xl -mx-4 sm:mx-auto"},t._l(t.projects,(function(e){return a("project",t._b({key:e.title},"project",e,!1))})),1),a("section-header",{staticClass:"pt-12 md:pt-32",attrs:{"bg-text":"About Myself"}},[t._v(" About Me ")]),a("p",{staticClass:"text-xl md:text-2xl md:w-3/4 leading-relaxed"},[t._v(" Learning continuously is one of my core values. I find joy by exploring the many different web technologies that are out in the wild. I also love to create (and break) tiny coding projects with my spare time. When I’m not programming, I’m either listening to music 🎧 or playing the guitar 🎸 ")]),a("h3",{staticClass:"text-4xl md:text-5xl font-bold pt-24 pb-12"},[t._v("Skills")]),a("div",{staticClass:"grid row-gap-10"},t._l(t.skills,(function(e){return a("skill-section",t._b({key:e.title},"skill-section",e,!1))})),1),a("h3",{staticClass:"text-4xl md:text-5xl font-bold pt-32 pb-16"},[t._v(" Let’s get in touch ")]),a("h4",{staticClass:"text-xl md:text-2xl font-bold pb-1"},[t._v("Email Address")]),a("a",{staticClass:"link text-xl md:text-2xl pb-1",attrs:{href:"mailto:jasonliang512@gmail.com"}},[t._v(" jasonliang512@gmail.com ")])],1)]),a("footer",{staticClass:"relative z-10 pt-48 pb-12"},[a("div",{staticClass:"text-center pb-8"},[a("a",{staticClass:"social-link",attrs:{href:"https://codepen.io/jasonliang512"}},[a("svg",{attrs:{viewBox:"0 0 512 512",fill:"currentColor"}},[a("path",{attrs:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"}})])]),a("a",{staticClass:"social-link",attrs:{href:"https://github.com/jasonliang512"}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",transform:"scale(64)"}})])]),a("a",{staticClass:"social-link",attrs:{href:"https://dribbble.com/jasonliang512"}},[a("svg",{attrs:{viewBox:"0 0 512 512",fill:"currentColor"}},[a("path",{attrs:{d:"M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"}})])])]),a("span",{staticClass:"block font-bold text-center"},[t._v(" Made with code by me ")])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"pt-48 pb-12 md:pt-64 md:pb-32"},[a("small",{staticClass:"text-sm uppercase font-bold tracking-wider text-gray-700 dark:text-gray-500"},[t._v(" Welcome to my portfolio 👋 ")]),a("h1",{staticClass:"text-4xl md:text-6xl font-bold leading-tight"},[t._v(" Hi! My name is "),a("span",{staticClass:"text-blue-700 dark:text-blue-500"},[t._v("Jason Liang")]),t._v(", and I love front-end development ")]),a("p",{staticClass:"text-xl md:text-2xl pt-4 md:w-5/6 leading-relaxed"},[t._v(" I’m passionate about crafting accessible and highly performant applications for the web. Check out my profile on "),a("a",{staticClass:"link",attrs:{href:"https://github.com/jasonliang512"}},[t._v("GitHub")]),t._v("! ")])])}],i=a("3f73"),o=a.n(i),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group transition-shadow duration-200 bg-white dark:bg-gray-850 shadow-lg hover:shadow-xl rounded-xl sm:flex"},[a("div",{staticClass:"relative h-48 sm:h-auto sm:w-2/5 overflow-hidden rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"},[a("img",{staticClass:"inline-block absolute object-cover w-full h-full",attrs:{src:t.image,alt:""}}),a("div",{staticClass:"transition-opacity duration-200 absolute w-full h-full bg-blue-500 dark:bg-gray-800 opacity-25 group-hover:opacity-10"}),a("svg",{staticClass:"hidden sm:block absolute h-full right-0 text-white dark:text-gray-850 -mr-1",attrs:{viewBox:"0 0 78 394",fill:"currentColor"}},[a("path",{attrs:{d:"M78 0H67.6123C67.6123 0 58.5 0 54.5 9.50006C50.5 19.0001 18.5 375 16 384.5C13.5 394 0 394 0 394H78V0Z"}})])]),a("div",{staticClass:"p-6 sm:pt-10 sm:pb-12 sm:w-3/5 flex flex-col"},[a("h3",{staticClass:"font-bold text-2xl pb-2 leading-snug"},[t._v(t._s(t.title))]),a("p",{staticClass:"text-md"},[t._v(t._s(t.description))]),a("ul",{staticClass:"py-4 text-sm"},t._l(t.tags,(function(e){return a("li",{key:e,staticClass:"badge bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-500 mr-2 mb-3"},[t._v(" "+t._s(e)+" ")])})),0),a("div",{staticClass:"md:pt-4"},[a("a",{staticClass:"btn bg-blue-700 hover:bg-blue-750 dark:bg-blue-750 dark-hover:bg-blue-700 text-blue-100 shadow hover:shadow-lg dark-hover:shadow-md mr-4 mb-2",attrs:{href:t.visit}},[a("span",[t._v("Visit")]),a("svg",{staticClass:"text-blue-200 ml-1 w-5 h-5",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}}),a("path",{attrs:{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}})])]),a("a",{staticClass:"btn bg-blue-100 dark:bg-gray-750 text-blue-700 dark:text-gray-400 hover:text-blue-900 dark-hover:text-gray-100 shadow-sm hover:shadow dark-hover:shadow-lg",attrs:{href:t.source}},[a("span",[t._v("Source")]),a("svg",{staticClass:"text-blue-600 dark:text-gray-500 ml-2 w-5 h-5",attrs:{viewBox:"0 0 1024 1024",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",transform:"scale(64)"}})])])])])])},c=[],d={name:"Project",props:["title","description","visit","source","tags","image"]},p=d,m=(a("6ab6"),a("2877")),g=Object(m["a"])(p,n,c,!1,null,"8b4d07e2",null),u=g.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid grid-rows-auto1 grid-cols-auto1"},[a("div",{staticClass:"sm:row-span-2"},[a("div",{staticClass:"inline-flex rounded-full p-4 md:p-5",class:t.className},[a("span",{staticClass:"fix-svg inline-flex items-center w-6 h-6 md:w-8 md:h-8",domProps:{innerHTML:t._s(t.icon)}})])]),a("div",{staticClass:"flex items-center pl-4"},[a("h3",{staticClass:"text-3xl font-bold -mt-1 sm:-mt-2"},[t._v(t._s(t.title))])]),a("ul",{staticClass:"pt-4 sm:pt-1 sm:pl-4 text-sm md:text-md col-span-2 sm:col-span-1 sm:col-start-2 sm:mr-auto"},t._l(t.items,(function(e){return a("li",{key:e,staticClass:"badge bg-gray-300 dark:bg-gray-850 text-gray-700 dark:text-gray-500 mr-2 mb-3 md:mr-3 md:mb-4"},[t._v(" "+t._s(e)+" ")])})),0)])},b=[],v={name:"SkillSection",props:["title","items","className","icon"]},f=v,x=(a("62d9"),Object(m["a"])(f,h,b,!1,null,"0dca00d2",null)),C=x.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pb-20"},[a("div",{staticClass:"flex justify-center w-full text-gray-200 dark:text-gray-850 font-black text-huge md:text-massive whitespace-no-wrap leading-none select-none"},[t._v(" "+t._s(t.bgText)+" ")]),a("h2",{staticClass:"text-5xl md:text-6xl font-bold -mt-20 md:-mt-32"},[t._t("default")],2),a("svg",{staticClass:"pl-2",attrs:{width:"128",height:"8",viewBox:"0 0 128 8",fill:"none"}},[a("rect",{attrs:{width:"128",height:"8",rx:"4",fill:"#3182CE"}}),a("rect",{attrs:{x:"1",width:"56",height:"8",rx:"4",fill:"#ED8936"}}),a("rect",{attrs:{width:"24",height:"8",rx:"4",fill:"#38B2AC"}})])])},y=[],k={name:"SectionHeader",props:["bgText"]},_=k,z=Object(m["a"])(_,w,y,!1,null,null,null),j=z.exports,M={name:"App",components:{Project:u,SectionHeader:j,SkillSection:C},props:["projects","skills"],data:function(){return{easterEggEnabled:!1,darkModeEnabled:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}},mounted:function(){var t=this;new o.a((function(){t.easterEggEnabled=!t.easterEggEnabled}))}},S=M,E=(a("baff"),Object(m["a"])(S,r,l,!1,null,"c84f8646",null)),L=E.exports,O=a("03a5"),H=a("b4c5");a("38c8");s["a"].config.productionTip=!1,window.app=new s["a"]({render:function(t){return t(L,{props:{projects:O,skills:H}})}}).$mount("#app")},"62d9":function(t,e,a){"use strict";var s=a("0142"),r=a.n(s);r.a},"6ab6":function(t,e,a){"use strict";var s=a("d2ce"),r=a.n(s);r.a},b4c5:function(t){t.exports=JSON.parse('[{"title":"Front-end","items":["HTML","CSS","JavaScript","jQuery","Bootstrap","React","Gatsby","Vue","TailwindCSS"],"className":"bg-blue-200 dark:bg-blue-700 text-blue-600 dark:text-blue-300","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 576 512\\" fill=\\"currentColor\\">\\n  <path d=\\"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z\\"/>\\n</svg>"},{"title":"Back-end","items":["PHP","PostgreSQL","NodeJS","Express","MongoDB"],"className":"bg-purple-300 dark:bg-purple-800 text-purple-600 dark:text-purple-400","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\" fill=\\"currentColor\\">\\n  <path\\n    d=\\"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z\\"\\n  />\\n</svg>"},{"title":"Others","items":["Figma","Git","C/C++","Haskell","Unity Engine","Linux"],"className":"bg-orange-300 dark:bg-orange-800 text-orange-600 dark:text-orange-400","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 640 512\\" fill=\\"currentColor\\">\\n  <path\\n    d=\\"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z\\"\\n  />\\n</svg>"}]')},baff:function(t,e,a){"use strict";var s=a("e26d"),r=a.n(s);r.a},d2ce:function(t,e,a){},e26d:function(t,e,a){}});
//# sourceMappingURL=app.816a1bb1.js.map