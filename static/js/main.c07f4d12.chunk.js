(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(11),o=n.n(i),s=(n(17),n(10)),l=n(9),u=n(2),b=n(4),m=n(5),j=n(7),d=n(6),h=(n(18),n(19),function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("table",{className:"List-table",children:Object(a.jsx)("tbody",{children:e.map((function(t){var e=t.name,c=t.number,r=t.id;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e}),Object(a.jsx)("td",{children:c}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",onClick:function(){return n(r)},children:"del"})})]},r)}))})})}),f=(n(20),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.name.trim()&&""!==t.state.number.trim()?(t.props.onSubmit(t.state),t.setState({name:"",number:""})):alert("Fill all fields!")},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:"Form",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:"Form-label",children:["Name",Object(a.jsx)("input",{className:"Form-input",type:"text",name:"name",value:e,onChange:this.handleInputChange})]}),Object(a.jsxs)("label",{className:"Form-label",children:["Number",Object(a.jsx)("input",{className:"Form-input",type:"text",name:"number",value:n,onChange:this.handleInputChange})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component)),O=function(t){var e=t.value,n=t.onFilter;return Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})})},p=n(21),v=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleFilter=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.handleSubmit=function(e){var n=t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}));if(n)alert("".concat(n.name," is already in contacts."));else{var a=Object(l.a)(Object(l.a)({},e),{},{id:p.generate()});t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[a])}}))}},t.getContactList=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.onDeleteContact=function(e){t.setState((function(t){var n=t.contacts.filter((function(t){return t.id!==e}));return{contacts:Object(s.a)(n)}}))},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.getContactList(),e=this.state.filter;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(f,{onSubmit:this.handleSubmit}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)("p",{className:"App-find",children:"Find contacts by name"}),Object(a.jsx)(O,{value:e,onFilter:this.handleFilter}),Object(a.jsx)(h,{contacts:t,onDeleteContact:this.onDeleteContact})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c07f4d12.chunk.js.map