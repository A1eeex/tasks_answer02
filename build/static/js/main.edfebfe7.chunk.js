(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],{15:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),s=r(6),i=r.n(s),o=r(5),c=r.n(o),d=r(7),l=r(3),u=r(2),_=r.n(u),b=r(8),p=r.n(b),j=r(0),h=function(e){var t=e.onChange,r=e.value;return Object(j.jsxs)("div",{className:p.a.searchContainer,children:[Object(j.jsx)("div",{children:"Search:"}),Object(j.jsx)("input",{onChange:t,value:r,type:"text",placeholder:"Search..."})]})},v=function(e){var t,r,a=e.data,s=Object(n.useState)(""),i=Object(l.a)(s,2),o=i[0],c=i[1],d=(t=a,0===(r=o).length?t:t.filter((function(e){return e.description.indexOf(r)>-1})));return Object(j.jsxs)("div",{className:_.a.TableContainer,children:[Object(j.jsx)(h,{onChange:function(e){c(e.target.value)},value:o}),Object(j.jsxs)("div",{className:_.a.tableHead,children:[Object(j.jsx)("div",{className:_.a.tableHeadWorkId,children:"WO ID"}),Object(j.jsx)("div",{children:"Description"}),Object(j.jsx)("div",{children:"Received date"}),Object(j.jsx)("div",{children:"Assigned to"}),Object(j.jsx)("div",{children:"Status"}),Object(j.jsx)("div",{children:"Priority"})]}),d.map((function(e,t){return Object(j.jsxs)("div",{className:_.a.tableColumn,children:[Object(j.jsx)("div",{className:_.a.tableColumnWorkId,children:e.work_order_id}),Object(j.jsx)("div",{children:e.description}),Object(j.jsx)("div",{children:e.received_date}),Object(j.jsx)("div",{children:0===e.assigned_to.length?Object(j.jsx)("b",{children:"- - - -"}):e.assigned_to.map((function(e,t){return Object(j.jsxs)("div",{children:[" ",e.person_name,": ",Object(j.jsxs)("span",{className:"In progress"===e.status?_.a.inProgress:_.a.tableColumn__status,children:[" ",e.status]})]},t)}))}),Object(j.jsx)("div",{children:e.status}),Object(j.jsx)("div",{children:e.priority})]},t)}))]})};var m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){var e={exec_time:.11,response:{current_page:1,from:1,last_page:1,per_page:10,to:10,total:8,data:[{work_order_id:1,description:"Create a connection to SQL database using Excel",received_date:"2021-07-21 00:23:03",assigned_to:[{person_name:"Technician One",status:"Assigned"}],status:"New",priority:"Low"},{work_order_id:2,description:"Need to make update for laptop 11",received_date:"2021-07-20 15:23:03",assigned_to:[{person_name:"Technician Two",status:"Assigned"}],status:"New",priority:"Low"},{work_order_id:3,description:"Setup station 2",received_date:"2021-07-20 14:23:03",assigned_to:[{person_name:"Technician One",status:"In progress"}],status:"Confirmed",priority:"High"},{work_order_id:4,description:"Setup station 3",received_date:"2021-07-19 12:23:03",assigned_to:[{person_name:"Technician Two",status:"Assigned"},{person_name:"Technician One",status:"In progress"}],status:"Confirmed",priority:"High"},{work_order_id:5,description:"Mailbox issues",received_date:"2021-07-19 11:23:03",assigned_to:[{person_name:"Technician Two",status:"Confirmed"}],status:"Confirmed",priority:"Normal"},{work_order_id:6,description:"Subject: We sent you issue last Friday",received_date:"2021-07-17 11:23:03",assigned_to:[],status:"New",priority:"Low"},{work_order_id:7,description:"Internal work",received_date:"2021-07-17 10:23:03",assigned_to:[],status:"Canceled",priority:"Low"},{work_order_id:8,description:"Set up station for new user",received_date:"2021-07-16 09:23:03",assigned_to:[{person_name:"Technician Two",status:"Completed"}],status:"Completed",priority:"Low"}]}};new Promise(function(){var t=Object(d.a)(c.a.mark((function t(r,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r(e));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()).then((function(e){var t=e.response.data;a(t)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(v,{data:r})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))},2:function(e,t,r){e.exports={TableContainer:"Table_TableContainer__3cFj9",tableHead:"Table_tableHead__3kCFw",tableColumn:"Table_tableColumn__1ENC-",tableHeadWorkId:"Table_tableHeadWorkId__3aYzb",tableColumnWorkId:"Table_tableColumnWorkId__1kryI",tableColumn__status:"Table_tableColumn__status__3rXhT",inProgress:"Table_inProgress__2n8Wt"}},8:function(e,t,r){e.exports={searchContainer:"Search_searchContainer__3qg9f"}}},[[15,1,2]]]);
//# sourceMappingURL=main.edfebfe7.chunk.js.map