(this["webpackJsonptodolist-app"]=this["webpackJsonptodolist-app"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),s=n(13),i=n.n(s),r=(n(19),n(4)),o=n(5),d=n(7),l=n(6),j=(n(20),n(14)),u=n(12),h=n(11),b=n(0),O=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={Id:"",Title:"",Status:"Pending"},t.handleIdChange=function(e){t.setState({Id:e.target.value})},t.handleTitleChange=function(e){t.setState({Title:e.target.value})},t.handleStatusChange=function(e){t.setState({Status:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onAdd({Id:t.state.Id,Title:t.state.Title,Status:t.state.Status}),t.setState({Id:"",Title:"",Status:"Pending"})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:" Add ToDo"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{value:this.state.Id,onChange:this.handleIdChange,className:"form-control",placeholder:"Enter Id"})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{value:this.state.Title,onChange:this.handleTitleChange,className:"form-control",placeholder:"Enter Title"})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("select",{value:this.state.Status,onChange:this.handleStatusChange,className:"form-control",children:[Object(b.jsx)("option",{value:"Done",children:"Done"}),Object(b.jsx)("option",{value:"Pending",children:"Pending"})]})}),Object(b.jsx)("button",{type:"submit",className:"form-control",btn:!0,"btn-primary":!0,onClick:this.handleSubmit,children:"Add Item"})]})]})}}]),n}(a.Component),f=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={todos:[{Id:"1",Title:"Push code to github",Status:"Done"},{Id:"2",Title:"Email to Manager",Status:"Pending"},{Id:"3",Title:"Apply for Leave",Status:"Pending"}]},t.deleteItem=function(e){var n=t.state.todos.filter((function(t){return t.Id!==e.Id}));t.setState({todos:n})},t.editItem=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.Id===e.Id?Object(u.a)(Object(u.a)({},t),{},{Status:"Done"===t.Status?"Pending":"Done"}):t}))}}))},t.addToDo=function(e){t.setState({todos:[].concat(Object(j.a)(t.state.todos),[e])})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{onAdd:this.addToDo}),Object(b.jsx)("h1",{children:"TodoList"}),Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:"Status"}),Object(b.jsx)("th",{children:"Action"})]})}),Object(b.jsx)("tbody",{children:this.state.todos.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.Id}),Object(b.jsx)("td",{children:e.Title}),Object(b.jsx)("td",{style:{color:"Done"===e.Status?"green":"red"},children:e.Status}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return t.editItem(e)},children:Object(b.jsx)("span",{children:Object(b.jsx)(h.a,{icon:"edit"})})}),"|",Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return t.deleteItem(e)},children:Object(b.jsx)("span",{children:Object(b.jsx)(h.a,{icon:"trash"})})})]})]},e.Id)}))})]})]})}}]),n}(a.Component),p=n(3),x=n(8);p.b.add(x.c,x.a,x.b);var m=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(f,{})})}}]),n}(a.Component),g=m,v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.540934d1.chunk.js.map