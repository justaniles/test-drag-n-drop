(this["webpackJsonptest-drag-n-drop"]=this["webpackJsonptest-drag-n-drop"]||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(0),o=t.n(a),r=t(12),i=t.n(r),s=(t(19),t(7)),l=t(8),d=(t(20),t(13)),u=function(e){var n=e.items,t=e.onSortEnd,o=Object(a.useRef)(null),r=Object(a.useRef)(t);return Object(a.useEffect)((function(){r.current=t}),[t]),Object(a.useEffect)((function(){var e=o.current;if(e){var n=d.a.create(e,{animation:150,onEnd:function(e){var n=e.oldIndex,t=e.newIndex,c=r.current;c&&void 0!==n&&void 0!==t?c({oldIndex:n,newIndex:t}):console.warn("Param undefined in Sortable.onEnd. callback defined: ".concat(!!c,", oldIndex: ").concat(n,", newIndex: ").concat(t))}});return function(){n.destroy()}}})),Object(c.jsx)("ol",{className:"list",ref:o,children:n.map((function(e){var n=e.displayName,t=e.key;return Object(c.jsx)("li",{className:"list-item",children:Object(c.jsx)("div",{className:"item",children:n})},t)}))})},f=t(6),b=function(e){var n=e.items,t=e.onSortEnd,o=Object(a.useRef)(null),r=Object(a.useRef)(t);return Object(a.useEffect)((function(){r.current=t}),[t]),Object(a.useEffect)((function(){var e=o.current;if(e){var n=new f.Sortable(e,{draggable:".list-item",sortAnimation:{duration:150},plugins:[f.Plugins.SortAnimation]});return n.on("sortable:stop",(function(e){var n=e.oldIndex,t=e.newIndex,c=r.current;c?c({oldIndex:n,newIndex:t}):console.warn("No onSortEnd callback defined")})),function(){n.destroy()}}}),[]),Object(c.jsx)("ol",{className:"list",ref:o,children:n.map((function(e){var n=e.displayName,t=e.key;return Object(c.jsx)("li",{className:"list-item",children:Object(c.jsx)("div",{className:"item",children:n})},t)}))})},j=0;function m(){var e=j++;return{key:""+e,displayName:"Item ".concat(e)}}var O=["SortableJS","DraggableJS"];var v=function(){var e=Object(a.useState)(O[0]),n=Object(l.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)((function(){for(var e=[],n=0;n<5;n++)e.push(m());return e})),i=Object(l.a)(r,2),d=i[0],f=i[1],j=Object(a.useCallback)((function(e){var n=e.oldIndex,t=e.newIndex;if(console.log("Old index: ".concat(n,", New index: ").concat(t)),n!==t){var c=d[n];if(!c)return void console.warn("Can't find item to move at old index ",n);var a=Object(s.a)(d);a.splice(n,1),a.splice(t,0,c),f(a)}}),[d,f]),v=Object(a.useCallback)((function(){f([].concat(Object(s.a)(d),[m()]))}),[d,f]),x=Object(a.useCallback)((function(){var e=O.indexOf(t);if(-1===e)return console.warn("Unknown currentView '".concat(t,"'. Defaulting to first view.")),void o(O[0]);var n=(e+1)%O.length;o(O[n])}),[t]);return console.log(d),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"app-header",children:t}),"SortableJS"===t&&Object(c.jsx)(u,{items:d,onSortEnd:j}),"DraggableJS"===t&&Object(c.jsx)(b,{items:d,onSortEnd:j}),Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("button",{className:"footer-button",onClick:x,children:"Switch view"}),Object(c.jsx)("button",{className:"footer-button",onClick:v,children:"Add item"})]})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),o(e),r(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),x()}},[[36,1,2]]]);
//# sourceMappingURL=main.7fcc72df.chunk.js.map