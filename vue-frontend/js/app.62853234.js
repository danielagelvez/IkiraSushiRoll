(function(a){function t(t){for(var s,r,n=t[0],c=t[1],l=t[2],d=0,m=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(a[s]=c[s]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var a,t=0;t<o.length;t++){for(var e=o[t],s=!0,r=1;r<e.length;r++){var c=e[r];0!==i[c]&&(s=!1)}s&&(o.splice(t--,1),a=n(n.s=e[0]))}return a}var s={},i={app:0},o=[];function r(a){return n.p+"js/"+({about:"about"}[a]||a)+"."+{about:"aa5706a2"}[a]+".js"}function n(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.e=function(a){var t=[],e=i[a];if(0!==e)if(e)t.push(e[2]);else{var s=new Promise((function(t,s){e=i[a]=[t,s]}));t.push(e[2]=s);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=r(a);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(d);var e=i[a];if(0!==e){if(e){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+a+" failed.\n("+s+": "+o+")",l.name="ChunkLoadError",l.type=s,l.request=o,e[1](l)}i[a]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},n.m=a,n.c=s,n.d=function(a,t,e){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var s in a)n.d(e,s,function(t){return a[t]}.bind(null,s));return e},n.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="/",n.oe=function(a){throw console.error(a),a};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=l;o.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"034f":function(a,t,e){"use strict";e("85ec")},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container ikira-fondo",attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("img",{attrs:{src:"/img/iKira_banner.png",alt:"Banner",id:"Banner"}}),e("ul",{staticClass:"nav my-4"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e("h5",[e("b",[a._v("iKira Sushi roll")])])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/nosotros"}},[a._v("Nosotros")])],1),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[a._v("Menú")]),e("div",{staticClass:"dropdown-menu"},[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/menu/entradas"}},[a._v("Entradas")]),e("div",{staticClass:"dropdown-divider"}),e("router-link",{staticClass:"dropdown-item",attrs:{to:"/menu/rollos"}},[a._v("Rollos")]),e("div",{staticClass:"dropdown-divider"}),e("router-link",{staticClass:"dropdown-item",attrs:{to:"/menu/bebidas"}},[a._v("Bebidas")])],1)]),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/contacto"}},[a._v("Contáctanos")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/franquicia"}},[a._v("Franquicias")])],1)]),e("router-view")],1)])},o=[],r=(e("034f"),e("2877")),n={},c=Object(r["a"])(n,i,o,!1,null,null,null),l=c.exports,d=(e("d3b7"),e("3ca3"),e("ddb0"),e("8c4f")),u=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"inicio"},[e("h1",[a._v("Bienvenidos a iKira Sushi roll")]),e("p",{staticClass:"ikira-justificar"},[a._v("Para nosotros es un privilegio poder ofrecerles un menú amplio, variado, con muchos sabores a escoger. Atrévete a degustar nuestros rollos fusionados con un toque oriental")]),e("Carrusel")],1)},m=[],p=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},v=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"carro"},[e("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[e("ol",{staticClass:"carousel-indicators"},[e("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),e("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),e("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}}),e("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"3"}}),e("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"4"}}),e("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"5"}})]),e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active"},[e("img",{staticClass:"d-block w-100",attrs:{src:"/img/portada6.jpg",alt:"First slide"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"/img/portada5.jpg",alt:"Second slide"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"/img/portada4.jpg",alt:"Third slide"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"/img/portada3.jpg",alt:" Fourth slide"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"/img/portada2.jpg",alt:" fifth  slide"}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:"/img/portada1.jpg",alt:" sixth   slide"}})])]),e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[a._v("Previous")])]),e("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[a._v("Next")])])])])}],f={},C=Object(r["a"])(f,p,v,!1,null,null,null),h=C.exports,b={name:"Home",components:{Carrusel:h}},g=b,_=Object(r["a"])(g,u,m,!1,null,null,null),x=_.exports,y=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"nosotros"},[e("QuienesSomos")],1)},E=[],k=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},j=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"nosotros mt-4"},[e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-fluid",attrs:{src:"/img/chef.jpg"}})]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[e("b",[a._v("¿Quienes somos?")])]),e("p",{staticClass:"card-text ikira-justificar"},[a._v("Somos una empresa comprometidos con la innovación y calidad, ofrecemos productos originales y nutritivos con un toque japonés que nos identifica en cada uno de nuestras recetas.")]),e("p",{staticClass:"card-text ikira-justificar"},[a._v("Nuestro proyecto fue creado debido a la necesidad de satisfacer una gastronomia diferente.")])])])])]),e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[e("b",[a._v("Misión")])]),e("p",{staticClass:"card-text ikira-justificar"},[a._v("Satisfacer las necesidades gastronómicas de todos nuestros clientes ofreciendo diferentes alternativas de comida asiática.")])])]),e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-fluid",attrs:{src:"/img/mision.jpg"}})])])]),e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-fluid",attrs:{src:"/img/vision.jpg"}})]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[e("b",[a._v("Visión")])]),e("p",{staticClass:"card-text ikira-justificar"},[a._v("Ser el restaurante más reconocido de Bucaramanga en el 2025, por brindar un menú agradable acompañados de las mejores experiencias gastronómicas memorables.")])])])])]),e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[e("b",[a._v("Nuestros valores")])]),e("p",{staticClass:"card-text ikira-justificar"},[e("b",[a._v("Calidad:")]),a._v(" cuidando cada proceso de preparación logrando la excelencia del producto.")]),e("p",{staticClass:"card-text ikira-justificar"},[e("b",[a._v("Compromiso:")]),a._v(" cumplir con las expectativas de nuestros clientes.")]),e("p",{staticClass:"card-text ikira-justificar"},[e("b",[a._v("Calidad:")]),a._v(" buscamos la continuidad de nuevas ideas.")])])]),e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-fluid",attrs:{src:"/img/valores.png"}})])])])])}],w={},q=Object(r["a"])(w,k,j,!1,null,null,null),$=q.exports,O={name:"Nosotros",components:{QuienesSomos:$}},S=O,P=Object(r["a"])(S,y,E,!1,null,null,null),N=P.exports,I=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"entradas"},[e("MenuEntradas")],1)},R=[],M=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"menuentradas"},[e("div",{staticClass:"row row-cols-1 row-cols-md-2"},a._l(a.entradas,(function(t){return e("div",{key:t.idEntrada,staticClass:"col mb-4"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:t.imagen}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[a._v(a._s(t.nombre))]),e("h3",{staticClass:"card-text"},[a._v(a._s(t.precio))]),e("p",{staticClass:"card-text"},[e("b",[a._v("Ingredientes:")]),a._v(" "+a._s(t.ingredientes))])])])])})),0)])},T=[],A=e("bc3a"),F=e.n(A),B="http://132.145.37.186:8080/api",K={name:"MenuEntradas",data:function(){return{entradas:[]}},mounted:function(){var a=this,t=this;F.a.get(B+"/entradas/listar").then((function(e){t.entradas=e.data,console.log(e.data),console.log(a.entradas)}))},methods:{}},L=K,Q=Object(r["a"])(L,M,T,!1,null,null,null),D=Q.exports,H={name:"Entradas",components:{MenuEntradas:D}},U=H,z=Object(r["a"])(U,I,R,!1,null,null,null),J=z.exports,V=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"bebidas"},[e("MenuBebidas")],1)},G=[],W=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"menubebidas"},[e("div",{staticClass:"row row-cols-1 row-cols-md-2"},a._l(a.bebidas,(function(t){return e("div",{key:t.idBebidas,staticClass:"col mb-4"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:t.imagen}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[a._v(a._s(t.nombre))]),e("h3",{staticClass:"card-text"},[a._v(a._s(t.precio))]),e("p",{staticClass:"card-text"},[a._v(" "+a._s(t.ingredientes))])])])])})),0)])},X=[],Y="http://132.145.37.186:8080/api",Z={name:"MenuBebidas",data:function(){return{bebidas:[]}},mounted:function(){var a=this,t=this;F.a.get(Y+"/bebidas/listar").then((function(e){t.bebidas=e.data,console.log(e.data),console.log(a.bebidas)}))},methods:{}},aa=Z,ta=Object(r["a"])(aa,W,X,!1,null,null,null),ea=ta.exports,sa={name:"Bebidas",components:{MenuBebidas:ea}},ia=sa,oa=Object(r["a"])(ia,V,G,!1,null,null,null),ra=oa.exports,na=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"rollos"},[e("MenuRollos")],1)},ca=[],la=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"menurollos"},[e("div",{staticClass:"row row-cols-1 row-cols-md-2"},a._l(a.rollos,(function(t){return e("div",{key:t.idRollos,staticClass:"col mb-4"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:t.imagen}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[a._v(a._s(t.nombre))]),e("h3",{staticClass:"card-text"},[a._v(a._s(t.precio))]),e("p",{staticClass:"card-text"},[e("b",[a._v("Ingredientes:")]),a._v(" "+a._s(t.ingredientes))])])])])})),0)])},da=[],ua="http://132.145.37.186:8080/api",ma={name:"MenuRollos",data:function(){return{rollos:[]}},mounted:function(){var a=this,t=this;F.a.get(ua+"/rollos/listar").then((function(e){t.rollos=e.data,console.log(e.data),console.log(a.rollos)}))},methods:{}},pa=ma,va=Object(r["a"])(pa,la,da,!1,null,null,null),fa=va.exports,Ca={name:"Rollos",components:{MenuRollos:fa}},ha=Ca,ba=Object(r["a"])(ha,na,ca,!1,null,null,null),ga=ba.exports,_a=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"contacto"},[e("Contactanos")],1)},xa=[],ya=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"contacto mt-4"},[a._m(0),e("form",{attrs:{action:""}},[e("h4",[a._v("Ingrese por favor los siguientes datos")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputNombre"}},[a._v("Nombre completo")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.datos.nombre,expression:"datos.nombre"}],staticClass:"form-control",attrs:{type:"nombre",id:"exampleInputNombre","aria-describedby":"emailHelp",required:""},domProps:{value:a.datos.nombre},on:{input:function(t){t.target.composing||a.$set(a.datos,"nombre",t.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInput"}},[a._v("Correo electrónico")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.datos.email,expression:"datos.email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInput",placeholder:"nombre@ejemplo.com",required:""},domProps:{value:a.datos.email},on:{input:function(t){t.target.composing||a.$set(a.datos,"email",t.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleFormControlTextarea1"}},[a._v("Sugerencia y observaciones")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.datos.sugerencia,expression:"datos.sugerencia"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3",required:""},domProps:{value:a.datos.sugerencia},on:{input:function(t){t.target.composing||a.$set(a.datos,"sugerencia",t.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return a.guardar()}}},[a._v("Enviar")])])])},Ea=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-fluid",attrs:{src:"/img/preguntas.png"}})]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[e("b",[a._v("¿Tienes preguntas?")])]),e("p",{staticClass:"card-text ikira-justificar"},[a._v("Para Ikira Sushi Roll es muy importante contar con las opiniones, comentarios y sugerencias de nuestros clientes.")]),e("p",{staticClass:"card-text ikira-justificar"},[a._v("Los invitamos a que nos escriban cualquier sugerencia y observación de nuestros productos.")])])])])])}],ka="http://132.145.37.186:8080/api",ja={name:"Contactanos",data:function(){return{datos:{nombre:"",email:"",sugerencia:""}}},methods:{guardar:function(){F.a.post(ka+"/contactanos",this.datos).then((function(a){console.log(a)}))}}},wa=ja,qa=Object(r["a"])(wa,ya,Ea,!1,null,null,null),$a=qa.exports,Oa={name:"Contacto",components:{Contactanos:$a}},Sa=Oa,Pa=Object(r["a"])(Sa,_a,xa,!1,null,null,null),Na=Pa.exports,Ia=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"franquicia"},[e("SolicitudFranquicias")],1)},Ra=[],Ma=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"franquicia mt-4"},[a._m(0),a._m(1),a._m(2),a._m(3),a._m(4),a._m(5),a._m(6),e("form",{staticClass:"formulario"},[e("h4",{staticClass:"my-3"},[a._v("Deja tus datos y un representante iKira se pondrá en contacto")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.solicitante.nombre,expression:"solicitante.nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nombre completo",required:""},domProps:{value:a.solicitante.nombre},on:{input:function(t){t.target.composing||a.$set(a.solicitante,"nombre",t.target.value)}}})]),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.solicitante.email,expression:"solicitante.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Correo electrónico",required:""},domProps:{value:a.solicitante.email},on:{input:function(t){t.target.composing||a.$set(a.solicitante,"email",t.target.value)}}})]),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.solicitante.numero,expression:"solicitante.numero"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Número Telefónico",required:""},domProps:{value:a.solicitante.numero},on:{input:function(t){t.target.composing||a.$set(a.solicitante,"numero",t.target.value)}}})])]),e("h4",{staticClass:"my-3"},[a._v("Por favor indicanos en que horario y porque medio quires ser contactado")]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.solicitante.horario,expression:"solicitante.horario"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"dia"},domProps:{checked:a._q(a.solicitante.horario,"dia")},on:{change:function(t){return a.$set(a.solicitante,"horario","dia")}}}),e("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio1"}},[a._v("En la mañana")])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.solicitante.horario,expression:"solicitante.horario"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"tarde"},domProps:{checked:a._q(a.solicitante.horario,"tarde")},on:{change:function(t){return a.$set(a.solicitante,"horario","tarde")}}}),e("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio2"}},[a._v("En la tarde")])]),e("br"),e("div",{staticClass:"form-check form-check-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.solicitante.medioContcato,expression:"solicitante.medioContcato"}],staticClass:"form-check-input",attrs:{type:"radio",id:"inlineCheckbox1",value:"telefono"},domProps:{checked:a._q(a.solicitante.medioContcato,"telefono")},on:{change:function(t){return a.$set(a.solicitante,"medioContcato","telefono")}}}),e("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox1"}},[a._v("Teléfono")])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.solicitante.medioContcato,expression:"solicitante.medioContcato"}],staticClass:"form-check-input",attrs:{type:"radio",id:"inlineCheckbox2",value:"correo"},domProps:{checked:a._q(a.solicitante.medioContcato,"correo")},on:{change:function(t){return a.$set(a.solicitante,"medioContcato","correo")}}}),e("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox2"}},[a._v("Correo")])]),e("div",{staticClass:"my-3"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return a.enviar()}}},[a._v("Enviar")])])])])},Ta=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[a._v("CONVIERTE EN IKIRA MASTER")]),e("p",{staticClass:"card-text"},[a._v("CON NUESTRAS FRANQUICIAS TENDRÁS EL NEGOCIO QUE TANTO SOÑASTE.")])]),e("img",{staticClass:"card-img-bottom",attrs:{src:"/img/franchise.jpg"}})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("nav",[e("ul",{staticClass:"list-unstyled mt-4"},[e("li",[e("a",{attrs:{href:"#etapa1"}},[a._v("Etapa 1: Solicitud de Franquicia")])]),e("li",[e("a",{attrs:{href:"#etapa2"}},[a._v("Etapa 2: Reunión de acercamiento")])]),e("li",[e("a",{attrs:{href:"#etapa3"}},[a._v("Etapa 3: Revisión de manual de marca y verficación de viabilidad")])]),e("li",[e("a",{attrs:{href:"#etapa4"}},[a._v("Etapa 4: Firma de contrato")])]),e("li",[e("a",{attrs:{href:"#etapa5"}},[a._v("Etapa 5: Capacitación en manual de marca")])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"text-justify",attrs:{id:"#etapa1"}},[e("article",[e("a",{attrs:{name:"etapa1",id:"etapa1"}}),e("h4",[a._v("Etapa 1: Solicitud de Franquicia ")]),e("p",[a._v(" En esta primera etapa recibimos su solicitud, nos pondremos en contacto y aendaremos la primera reunión de acercamiento. ")])]),e("article",[e("h4",[a._v("Puntos Clave Etapa 1")]),e("ol",[e("li",[a._v("Dejanos un correo electrónico y un número telefónico en el cual podamos contactarte")]),e("li",[a._v("Si pasadas mas de 48 horas aún no te contactamos, ingresa de nuevo la solicitud y dejanos un coreeo en: contacto@ikiraroll.com.co")])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"text-justify",attrs:{id:"#etapa2"}},[e("article",[e("a",{attrs:{name:"etapa2",id:"etapa2"}}),e("h4",[a._v("Etapa 2: Reunión de acercamiento")]),e("p",[a._v("En esta primera reunión te contaremos todas las ventajas de hacer de IKIRA parte de tu vida, además podremos conocer porque quieres trabajar con nosotros y cuál es tu idea sobre el negocio")])]),e("article",[e("h4",[a._v("Puntos Clave Etapa 2")]),e("ol",[e("li",[a._v("Dejanos saber todas las dudas que tienes acerca del modelo de franquicias")]),e("li",[a._v("Si la inversión es grupal, dejanos saberlo y podremos agendar una reunión con todos los interesados")])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"text-justify",attrs:{id:"#etapa3"}},[e("article",[e("a",{attrs:{name:"etapa3",id:"etapa3"}}),e("h4",[a._v("Etapa 3: Revisión de manual de marca y verficación de viabilidad")]),e("p",[a._v("En esta segunda reunión te expondremos nuestro manual de marca y haremos el estudio de la viabilidad de la franquicia.")])]),e("article",[e("h4",[a._v("Puntos Clave Etapa 3")]),e("ol",[e("li",[a._v("Pide con anterioridad nuestra guía base del manual de marca, así podrás tener muchas preguntas para la reunión")])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"text-justify",attrs:{id:"#etapa4"}},[e("article",[e("a",{attrs:{name:"etapa4",id:"etapa4"}}),e("h4",[a._v("Etapa 4: Firma de contrato")]),e("p",[a._v("Si el resultado del estudio es positivo, ya estamos solo a un paso de que puedas ser IKIRA MASTER, para ello debemos reunirnos para la firma del contrato.")])]),e("article",[e("h4",[a._v("Puntos Clave Etapa 4")]),e("ol",[e("li",[a._v("Te recomendamos que antes de la firma del contrato hayas podido revisar el borrador en conjunto con un profesional especializado en derecho comercial")]),e("li",[a._v("Si la inversión es grupal, haz que todos participen de la revisión del contrato, de esta manera nos podemos asegurar que todos estén a gusto.")])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"text-justify",attrs:{id:"#etapa5"}},[e("article",[e("a",{staticClass:"my-3",attrs:{name:"etapa5",id:"etapa5"}}),e("h4",[a._v("Etapa 5: Capacitación en manual de marca y Apertura de Local")]),e("img",{staticClass:"img-fluid",attrs:{src:"img/franquicia.jpg"}}),e("p",{staticClass:"my-3"},[a._v("La última etapa hace referencia a la adecuación o construcción del local y a la capacitación del personal en el manual de marca.")])]),e("article",[e("h4",[a._v("Puntos Clave Etapa 5")]),e("ol",[e("li",[a._v("Lleva muchas ganas de aprender porque te enseñaremos todo sobre iKira para hacer de tu franquicia un gran negocio")])])])])}],Aa="http://132.145.37.186:8080/api",Fa={name:"Contactanos",data:function(){return{solicitante:{nombre:"",email:"",numero:"",horario:"",medioContcato:""}}},methods:{enviar:function(){F.a.post(Aa+"/franquicia",this.solicitante).then((function(a){console.log(a)}))}}},Ba=Fa,Ka=Object(r["a"])(Ba,Ma,Ta,!1,null,null,null),La=Ka.exports,Qa={name:"Franquicia",components:{SolicitudFranquicias:La}},Da=Qa,Ha=Object(r["a"])(Da,Ia,Ra,!1,null,null,null),Ua=Ha.exports;s["default"].use(d["a"]);var za=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/nosotros",name:"Quienes Somos",component:N},{path:"/menu/entradas",name:"Menu Entradas",component:J},{path:"/menu/bebidas",name:"Menu Bebidas",component:ra},{path:"/menu/rollos",name:"Menu Rollos",component:ga},{path:"/contacto",name:"Contactanos",component:Na},{path:"/franquicia",name:"Franquicia",component:Ua}],Ja=new d["a"]({mode:"history",base:"/",routes:za}),Va=Ja,Ga=e("2f62");s["default"].use(Ga["a"]);var Wa=new Ga["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Xa=e("5f5b");e("f9e3"),e("2dd8"),e("f507");s["default"].use(Xa["a"]),s["default"].config.productionTip=!1,new s["default"]({router:Va,store:Wa,render:function(a){return a(l)}}).$mount("#app")},"85ec":function(a,t,e){}});
//# sourceMappingURL=app.62853234.js.map