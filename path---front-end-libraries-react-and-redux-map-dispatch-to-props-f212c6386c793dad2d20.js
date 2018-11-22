webpackJsonp([71638357374435],{3565:function(e,s){e.exports={data:{challengeNode:{title:"Map Dispatch to Props",description:["<code>mapDispatchToProps()</code>函数可为 React 组件提供特定的创建 action 的函数，以便组件可 dispatch actions，从而更改 Redux store 中的数据。该函数的结构跟上一挑战中的<code>mapStateToProps()</code>函数相似，它返回一个对象，把 dispatch actions 映射到属性名上，该属性名成为<code>props</code>。然而，每个属性都返回一个用 action creator 及与 action 相关的所有数据调用<code>dispatch</code>的函数，而不是返回<code>state</code>的一部分。你可以访问<code>dispatch</code>，因为在定义函数时，我们以参数形式把它传入<code>mapDispatchToProps()</code>了，这跟<code>state</code>传入<code>mapDispatchToProps()</code>是一样的。在幕后，React Redux 用 Redux 的<code>store.dispatch()</code>来管理这些含<code>mapDispatchToProps()</code>的dispatches，这跟它使用<code>store.subscribe()</code>来订阅映射到<code>state</code>的组件的方式类似。","例如，创建 action 的函数<code>loginUser()</code>把<code>username</code>作为 action payload，<code>mapDispatchToProps()</code>返回给创建 action 的函数的对象如下：","<blockquote>{<br>&nbsp;&nbsp;submitLoginUser: function(username) {<br>&nbsp;&nbsp;&nbsp;&nbsp;dispatch(loginUser(username));<br>&nbsp;&nbsp;}<br>}</blockquote>","<hr>","编辑器上提供的是创建 action 的函数<code>addMessage()</code>。写出接收<code>dispatch</code>为参数的函数<code>mapDispatchToProps()</code>，返回一个 dispatch 函数对象，其属性为<code>submitNewMessage</code>。该函数在 dispatch <code>addMessage()</code>时为新消息提供一个参数。"],challengeType:6,fields:{slug:"/front-end-libraries/react-and-redux/map-dispatch-to-props",blockName:"React and Redux",tests:[{text:"<code>addMessage</code>应返回含<code>type</code>和<code>message</code>两个键的对象。",testString:"assert((function() { const addMessageTest = addMessage(); return ( addMessageTest.hasOwnProperty('type') && addMessageTest.hasOwnProperty('message')); })(), '<code>addMessage</code>应返回含<code>type</code>和<code>message</code>两个键的对象。');"},{text:"<code>mapDispatchToProps</code>应为函数。",testString:"assert(typeof mapDispatchToProps === 'function', '<code>mapDispatchToProps</code>应为函数。');"},{text:"<code>mapDispatchToProps</code>应返回一个对象。",testString:"assert(typeof mapDispatchToProps() === 'object', '<code>mapDispatchToProps</code>应返回一个对象。');"},{text:"从<code>mapDispatchToProps</code>通过<code>submitNewMessage</code>分发<code>addMessage</code>，应向 dispatch 函数返回一条消息。",testString:"assert((function() { let testAction; const dispatch = (fn) => { testAction = fn; }; let dispatchFn = mapDispatchToProps(dispatch); dispatchFn.submitNewMessage('__TEST__MESSAGE__'); return (testAction.type === 'ADD' && testAction.message === '__TEST__MESSAGE__'); })(), '从<code>mapDispatchToProps</code>通过<code>submitNewMessage</code>分发<code>addMessage</code>，应向 dispatch 函数返回一条消息。');"}]},required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js"}],files:{indexhtml:null,indexjs:null,indexjsx:{key:"indexjsx",ext:"jsx",name:"index",contents:"const addMessage = (message) => {\n  return {\n    type: 'ADD',\n    message: message\n  }\n};\n\n// 请在本行以下添加你的代码\n",head:"",tail:""}}}},pathContext:{challengeMeta:{introPath:"",template:"<body><div id='root'></div>${ source || '' }</body>",required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js"}],nextChallengePath:"/front-end-libraries/react-and-redux/connect-redux-to-react",id:"5a24c314108439a4d4036146"},slug:"/front-end-libraries/react-and-redux/map-dispatch-to-props"}}}});
//# sourceMappingURL=path---front-end-libraries-react-and-redux-map-dispatch-to-props-f212c6386c793dad2d20.js.map