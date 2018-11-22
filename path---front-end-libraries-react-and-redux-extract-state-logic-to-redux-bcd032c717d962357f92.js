webpackJsonp([0xdf8253eed845],{3562:function(e,t){e.exports={data:{challengeNode:{title:"Extract State Logic to Redux",description:["完成 React 组件后，我们需要把在本地<code>状态</code>执行的逻辑移到 Redux 中，这是为小规模 React 应用添加 Redux 的第一步。该应用的唯一功能是把用户的新消息添加到无序列表中。下面我们用简单的示例来演示 React 和 Redux 之间的配合。","<hr>","首先，定义 action 的类型 'ADD'，将其设置为常量<code>ADD</code>。接着，定义创建 action 的函数<code>addMessage()</code>，用该函数创建添加消息的 action，把<code>message</code>传给创建 action 的函数并返回包含该消息的<code>action</code>","接着，创建名为<code>messageReducer()</code>的 reducer 方法，为这些消息处理状态。初始状态应为空数组。reducer 向状态中的消息数组添加消息，或返回当前状态。最后，创建 Redux store 并传给 reducer。"],challengeType:6,fields:{slug:"/front-end-libraries/react-and-redux/extract-state-logic-to-redux",blockName:"React and Redux",tests:[{text:"应存在一个值为字符串<code>ADD</code>的常量<code>ADD</code>。",testString:"assert(ADD === 'ADD', '应存在一个值为字符串<code>ADD</code>的常量<code>ADD</code>。');"},{text:"创建 action 的函数<code>addMessage</code>应返回<code>type</code>等于<code>ADD</code>的对象，其返回的消息即被传入的消息。",testString:"assert((function() { const addAction = addMessage('__TEST__MESSAGE__'); return addAction.type === ADD && addAction.message === '__TEST__MESSAGE__'; })(), '创建 action 的函数<code>addMessage</code>应返回<code>type</code>等于<code>ADD</code>的对象，其返回的消息即被传入的消息。');"},{text:"<code>messageReducer</code>应是一个函数。",testString:"assert(typeof messageReducer === 'function', '<code>messageReducer</code>应是一个函数。');"},{text:"存在一个 store 且其初始状态为空数组。",testString:"assert((function() { const initialState = store.getState(); return typeof store === 'object' && initialState.length === 0; })(), '存在一个 store 且其初始状态为空数组。');"},{text:"分发<code>addMessage</code>到 store 应添加新消息到状态中消息数组。",testString:"assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addMessage('__A__TEST__MESSAGE')); const addState = store.getState(); return (isFrozen && addState[0] === '__A__TEST__MESSAGE'); })(), '分发<code>addMessage</code>到 store 应添加新消息到状态中消息数组。');"},{text:"<code>messageReducer</code>被其它任何 actions 调用时应返回当前状态。",testString:"assert((function() { const addState = store.getState(); store.dispatch({type: 'FAKE_ACTION'}); const testState = store.getState(); return (addState === testState); })(), '<code>messageReducer</code>被其它任何 actions 调用时应返回当前状态。');"}]},required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js"}],files:{indexhtml:null,indexjs:null,indexjsx:{key:"indexjsx",ext:"jsx",name:"index",contents:"// 请在此处定义 ADD、addMessage()、messageReducer()、store：\n",head:"",tail:""}}}},pathContext:{challengeMeta:{introPath:"",template:"<body><div id='root'></div>${ source || '' }</body>",required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"},{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js"}],nextChallengePath:"/front-end-libraries/react-and-redux/use-provider-to-connect-redux-to-react",id:"5a24c314108439a4d4036143"},slug:"/front-end-libraries/react-and-redux/extract-state-logic-to-redux"}}}});
//# sourceMappingURL=path---front-end-libraries-react-and-redux-extract-state-logic-to-redux-bcd032c717d962357f92.js.map