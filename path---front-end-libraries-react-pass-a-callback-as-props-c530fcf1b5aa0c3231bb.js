webpackJsonp([0xbebc06c23a79],{3588:function(e,t){e.exports={data:{challengeNode:{title:"Pass a Callback as Props",description:["你可以将<code>state</code>作为 props 传递给子组件，但不仅限于传递数据。你也可以将处理函数或在 React 组件中定义的任何方法传递给子组件。这就是允许子组件与父组件交互的方式。你可以把方法像普通 prop 一样传递给子组件，它会被分配一个名字，你可以在子组件中的<code>this.props</code>下访问该方法的名字。","<hr>","代码编辑器中列出了三个组件。<code>MyApp</code>是父组件，<code>GetInput</code>和<code>RenderInput</code>是它的子组件。将<code>GetInput</code>组件添加到<code>MyApp</code>的 render 方法，然后将一个名为<code>input</code>的 prop 传递给<code>MyApp</code>的<code>state</code>中的<code>inputValue</code>。还要创建一个名为<code>handleChange</code>的 prop，并将输入处理程序<code>handleChange</code>传递给它。","接下来，将<code>RenderInput</code>添加到<code>MyApp</code>中的 render 方法中，然后创建一个名为<code>input</code>的 prop，并将<code>state</code>中的<code>inputValue</code>传递给它。完成后，你将能够在<code>GetInput</code>组件中的<code>input</code>字段中键入内容，然后该组件通过 props 调用其父组件中的处理函数方法。这将更新处于父组件<code>state</code>中的 input，该 input 将作为 props 传递给两个子组件。观察数据如何在组件之间流动，以及单一数据源如何保持父组件<code>state</code>。诚然，这个示例有点做作，但是应该能用来说明数据和回调是如何在 React 组件之间传递的。"],challengeType:6,fields:{slug:"/front-end-libraries/react/pass-a-callback-as-props",blockName:"React",tests:[{text:"应该渲染<code>MyApp</code>组件。",testString:"assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('MyApp').length === 1; })(), '应该渲染<code>MyApp</code>组件。');"},{text:"应该渲染<code>GetInput</code>组件。",testString:"assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('GetInput').length === 1; })(), '应该渲染<code>GetInput</code>组件。');"},{text:"应该渲染<code>RenderInput</code>组件。",testString:"assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('RenderInput').length === 1; })(), '应该渲染<code>RenderInput</code>组件。');"},{text:"<code>GetInput</code>组件应该接收<code>MyApp</code>的 state 属性<code>inputValue</code>作为 props，并包含一个修改<code>MyApp</code>state 的<code>input</code>元素。",testString:"async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: ''}); return waitForIt(() => mockedComponent.state() )}; const state_2 = () => { mockedComponent.find('input').simulate('change', {target: {value: 'TestInput'}}); return waitForIt(() => mockedComponent.state() )}; const updated_1 = await state_1(); const updated_2 = await state_2(); assert(updated_1.inputValue === '' && updated_2.inputValue === 'TestInput', '<code>GetInput</code>组件应该接收<code>MyApp</code>的 state 属性<code>inputValue</code>作为 props，并包含一个修改<code>MyApp</code>state 的<code>input</code>元素。'); }; "},{text:"<code>RenderInput</code>组件应该接收<code>MyApp</code>state 属性<code>inputValue</code>作为 props。",testString:"async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: 'TestName'}); return waitForIt(() => mockedComponent )}; const updated_1 = await state_1(); assert(updated_1.find('p').text().includes('TestName'), '<code>RenderInput</code>组件应该接收<code>MyApp</code>state 属性<code>inputValue</code>作为 props。'); }; "}]},required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],files:{indexhtml:null,indexjs:null,indexjsx:{key:"indexjsx",ext:"jsx",name:"index",contents:"class MyApp extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputValue: ''\n    }\n    this.handleChange = this.handleChange.bind(this);\n  }\n  handleChange(event) {\n    this.setState({\n      inputValue: event.target.value\n    });\n  }\n  render() {\n    return (\n       <div>\n        { /* change code below this line */ }\n\n        { /* change code above this line */ }\n       </div>\n    );\n  }\n};\n\nclass GetInput extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    return (\n      <div>\n        <h3>Get Input:</h3>\n        <input\n          value={this.props.input}\n          onChange={this.props.handleChange}/>\n      </div>\n    );\n  }\n};\n\nclass RenderInput extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    return (\n      <div>\n        <h3>Input Render:</h3>\n        <p>{this.props.input}</p>\n      </div>\n    );\n  }\n};",head:"",tail:"ReactDOM.render(<MyApp />, document.getElementById('root'))"}}}},pathContext:{challengeMeta:{introPath:"",template:"<body><div id='root'></div><div id='challenge-node'></div>${ source || '' }</body>",required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],nextChallengePath:"/front-end-libraries/react/use-the-lifecycle-method-componentwillmount",id:"5a24c314108439a4d403617b"},slug:"/front-end-libraries/react/pass-a-callback-as-props"}}}});
//# sourceMappingURL=path---front-end-libraries-react-pass-a-callback-as-props-c530fcf1b5aa0c3231bb.js.map