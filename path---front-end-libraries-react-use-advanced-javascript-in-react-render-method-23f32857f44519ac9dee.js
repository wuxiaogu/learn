webpackJsonp([0xb5f20e2c1bc4],{3602:function(e,t){e.exports={data:{challengeNode:{title:"Use Advanced JavaScript in React Render Method",description:["在之前的挑战中，你学习了如何使用大括号<code>{ }</code>将 JavaScript 代码插入到 JSX 代码中，用于访问 props、传递 props、访问 state、在代码中插入注释以及最近学习的定制组件样式等任务。这些都是将 JavaScript 放在 JSX 中的常见用例，但是在 React 组件中使用 JavaScript 代码还有其他方式。","在<code>render</code>方法中编写 JavaScript，你可以把 JavaScript 直接放在<code>return</code>语句之前，而<strong><em>不必</em></strong>将其插入大括号中。这是因为它还不在 JSX 代码中。当你稍后想在<code>return</code>语句中的 JSX 代码中使用变量时，可以将变量名放在大括号中。","<hr>",'在提供的代码中，<code>render</code>方法中有一个包含 20 个短语的数组，用于表示 20 世纪 80 年代经典魔术八球玩具中的答案。绑定<code>ask</code>方法到按钮的单击事件，每次单击该按钮时，将生成随机数并将其存储为 state 中的<code>randomIndex</code>。在第 52 行，删除字符串<code>"change me!"</code>并重新分配<code>answer</code>常量，以便每次组件更新时，你的代码随机访问<code>possibleAnswers</code>数组的不同索引。最后，在<code>p</code>标签内插入<code>answer</code>常量。'],challengeType:6,fields:{slug:"/front-end-libraries/react/use-advanced-javascript-in-react-render-method",blockName:"React",tests:[{text:"<code>MagicEightBall</code>组件应该存在并被渲染到页面。",testString:"assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).find('MagicEightBall').length, 1, '<code>MagicEightBall</code>组件应该存在并被渲染到页面。');"},{text:"<code>MagicEightBall</code>的第一个子元素应该是<code>input</code>元素。",testString:"assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).children().childAt(0).name(), 'input', '<code>MagicEightBall</code>的第一个子元素应该是<code>input</code>元素。');"},{text:"<code>MagicEightBall</code>的第三个子元素应该是<code>button</code>元素。",testString:"assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).children().childAt(2).name(), 'button', '<code>MagicEightBall</code>的第三个子元素应该是<code>button</code>元素。');"},{text:"<code>MagicEightBall</code>的 state 应该用<code>userInput</code>属性和<code>randomIndex</code>属性初始化，并且这两个属性的值都应该是空字符串。",testString:"assert(Enzyme.mount(React.createElement(MagicEightBall)).state('randomIndex') === '' && Enzyme.mount(React.createElement(MagicEightBall)).state('userInput') === '', '<code>MagicEightBall</code>的 state 应该用<code>userInput</code>属性和<code>randomIndex</code>属性初始化，并且这两个属性的值都应该是空字符串。');"},{text:"当<code>MagicEightBall</code>第一次加载到 DOM 中时，它应该返回一个空的<code>p</code>元素。",testString:"assert(Enzyme.mount(React.createElement(MagicEightBall)).find('p').length === 1 && Enzyme.mount(React.createElement(MagicEightBall)).find('p').text() === '', '当<code>MagicEightBall</code>第一次加载到 DOM 中时，它应该返回一个空的<code>p</code>元素。');"},{text:"当文本被输入到<code>input</code>元素中并点击按钮时，<code>MagicEightBall</code>组件应该返回一个<code>p</code>元素，该元素包含数组<code>possibleAnswers</code>中的随机一个元素。",testString:"async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MagicEightBall)); const simulate = () => { comp.find('input').simulate('change', { target: { value: 'test?' }}); comp.find('button').simulate('click'); }; const result = () => comp.find('p').text(); const _1 = () => { simulate(); return waitForIt(() => result()) }; const _2 = () => { simulate(); return waitForIt(() => result()) }; const _3 = () => { simulate(); return waitForIt(() => result()) }; const _4 = () => { simulate(); return waitForIt(() => result()) }; const _5 = () => { simulate(); return waitForIt(() => result()) }; const _6 = () => { simulate(); return waitForIt(() => result()) }; const _7 = () => { simulate(); return waitForIt(() => result()) }; const _8 = () => { simulate(); return waitForIt(() => result()) }; const _9 = () => { simulate(); return waitForIt(() => result()) }; const _10 = () => { simulate(); return waitForIt(() => result()) }; const _1_val = await _1(); const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); const _6_val = await _6(); const _7_val = await _7(); const _8_val = await _8(); const _9_val = await _9(); const _10_val = await _10(); const actualAnswers = [_1_val, _2_val, _3_val, _4_val, _5_val, _6_val, _7_val, _8_val, _9_val, _10_val]; const hasIndex = actualAnswers.filter((answer, i) => possibleAnswers.indexOf(answer) !== -1); const notAllEqual = new Set(actualAnswers); assert(notAllEqual.size > 1 && hasIndex.length === 10, '当文本被输入到<code>input</code>元素中并点击按钮时，<code>MagicEightBall</code>组件应该返回一个<code>p</code>元素，该元素包含数组<code>possibleAnswers</code>中的随机一个元素。');}"}]},required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],files:{indexhtml:null,indexjs:null,indexjsx:{key:"indexjsx",ext:"jsx",name:"index",contents:"const inputStyle = {\n  width: 235,\n  margin: 5\n}\n\nclass MagicEightBall extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      userInput: '',\n      randomIndex: ''\n    }\n    this.ask = this.ask.bind(this);\n    this.handleChange = this.handleChange.bind(this);\n  }\n  ask() {\n    if (this.state.userInput) {\n      this.setState({\n        randomIndex: Math.floor(Math.random() * 20),\n        userInput: ''\n      });\n    }\n  }\n  handleChange(event) {\n    this.setState({\n      userInput: event.target.value\n    });\n  }\n  render() {\n    const possibleAnswers = [\n      'It is certain',\n      'It is decidedly so',\n      'Without a doubt', \n      'Yes, definitely',\n      'You may rely on it',\n      'As I see it, yes',\n      'Outlook good',\n      'Yes',\n      'Signs point to yes',\n      'Reply hazy try again',\n      'Ask again later',\n      'Better not tell you now',\n      'Cannot predict now',\n      'Concentrate and ask again',\n      'Don\\'t count on it', \n      'My reply is no',\n      'My sources say no',\n      'Most likely',\n      'Outlook not so good',\n      'Very doubtful'\n    ];\n    const answer = 'change me!' // << change code here\n    return (\n      <div>\n        <input\n          type=\"text\"\n          value={this.state.userInput}\n          onChange={this.handleChange}\n          style={inputStyle} /><br />\n        <button onClick={this.ask}>\n          Ask the Magic Eight Ball!\n        </button><br />\n        <h3>Answer:</h3>\n        <p>\n          { /* change code below this line */ }\n\n          { /* change code above this line */ }\n        </p>\n      </div>\n    );\n  }\n};",head:"",tail:"var possibleAnswers = [ 'It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good','Very doubtful', 'Most likely' ];\nReactDOM.render(<MagicEightBall />, document.getElementById('root'))"}}}},pathContext:{challengeMeta:{introPath:"",template:"<body><div id='root'></div><div id='challenge-node'></div>${ source || '' }</body>",required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],nextChallengePath:"/front-end-libraries/react/render-with-an-ifelse-condition",id:"5a24c314108439a4d4036183"},slug:"/front-end-libraries/react/use-advanced-javascript-in-react-render-method"}}}});
//# sourceMappingURL=path---front-end-libraries-react-use-advanced-javascript-in-react-render-method-23f32857f44519ac9dee.js.map