(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{44:function(e,t,c){e.exports={comments:"Comments_comments__2PWeY"}},45:function(e,t,c){e.exports={item:"CommentItem_item__2ls1P"}},46:function(e,t,c){e.exports={comments:"CommentsList_comments__AbKfq"}},47:function(e,t,c){e.exports={form:"NewCommentForm_form__3mS7s",loading:"NewCommentForm_loading__gsUOE",control:"NewCommentForm_control__1IVE2",actions:"NewCommentForm_actions__3uf26"}},48:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__2ejIw"}},53:function(e,t,c){"use strict";c.r(t);var n=c(37),s=c(0),o=c(35),a=c(44),m=c.n(a),r=c(15),j=c(45),d=c.n(j),i=c(1),u=function(e){return Object(i.jsx)("li",{className:d.a.item,children:Object(i.jsx)("p",{children:e.text})})},l=c(46),b=c.n(l),x=function(e){return Object(i.jsx)("ul",{className:b.a.comments,children:e.comments.map((function(e){return Object(i.jsx)(u,{text:e.text},e.id)}))})},O=c(36),h=c(47),f=c.n(h),p=function(e){var t=Object(s.useRef)(),c=Object(o.a)(O.a,!1),n=c.sendRequest,a=c.error,m=c.status,j=e.onAddComment;Object(s.useEffect)((function(){"completed"!==m||a||j()}),[m,a,j]);var d=function(c){c.preventDefault(),n({quoteId:e.quoteId,commentdata:t.current.value})};return"pending"===m?Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(r.a,{})}):Object(i.jsxs)("form",{className:f.a.form,onSubmit:d,children:[Object(i.jsxs)("div",{className:f.a.control,onSubmit:d,children:[Object(i.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(i.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(i.jsx)("div",{className:f.a.actions,children:Object(i.jsx)("button",{type:"submit",className:"btn",children:"Add Comment"})})]})},_=c(2),N=function(e){var t=Object(s.useState)(!1),c=Object(n.a)(t,2),a=c[0],j=c[1],d=Object(_.j)(),u=Object(o.a)(O.c,!0),l=u.sendRequest,b=u.status,h=u.data;Object(s.useEffect)((function(){l(d.quoteId)}),[d.quoteId,l]);var f,N=Object(s.useCallback)((function(){l(d.quoteId)}),[l,d.quoteId]);return"pending"===b&&(f=Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(r.a,{})})),"completed"===b&&h&&h.length>0&&(f=Object(i.jsx)(x,{comments:h})),"completed"!==b||h&&0!==h.length||(f=Object(i.jsx)("p",{className:"centered",children:"No Comments were added yet"})),Object(i.jsxs)("section",{className:m.a.comments,children:[Object(i.jsx)("h2",{children:"User Comments"}),!a&&Object(i.jsx)("button",{className:"btn",onClick:function(){j(!0)},children:"Add a Comment"}),a&&Object(i.jsx)(p,{quoteId:e.quoteId,onAddComment:N}),Object(i.jsx)("p",{children:f})]})},q=c(8),C=c(48),g=c.n(C),I=function(e){return Object(i.jsxs)("figure",{className:g.a.quote,children:[Object(i.jsx)("p",{children:e.text}),Object(i.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(_.j)();console.log(e.quoteId);var t=Object(o.a)(O.e,!0),c=t.sendRequest,n=t.status,a=t.data,m=t.error,j=Object(_.k)();return Object(s.useEffect)((function(){c(e.quoteId)}),[c,e.quoteId]),"pending"===n?Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(r.a,{})}):m?Object(i.jsx)("p",{className:"centered",children:m}):a.text?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(I,{text:a.text,author:a.author}),Object(i.jsx)(_.c,{path:j.path,exact:!0,children:Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(q.b,{to:"".concat(j.url,"/comments"),className:"btn--flat",children:"Load Comments"})})}),Object(i.jsx)(_.c,{path:"".concat(j.path,"/comments"),children:Object(i.jsx)(N,{quoteId:e.quoteId})})]}):Object(i.jsx)("p",{className:"centered",children:"No quote found!"})}}}]);
//# sourceMappingURL=4.a8985852.chunk.js.map