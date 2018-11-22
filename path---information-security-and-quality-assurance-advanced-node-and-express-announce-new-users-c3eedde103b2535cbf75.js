webpackJsonp([0x910bfe7380d2],{3645:function(e,s){e.exports={data:{challengeNode:{title:"Announce New Users",guideUrl:null,description:["注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-socialauth/'>GitHub</a> 上克隆。","许多聊天室都有这个功能：所有已连接到服务器的在线用户都会看到有人加入或退出的提醒。我们已经写好了处理连接和断开事件的代码，只要对这个方法稍作修改就可以实现这个功能。在事件中，我们需要发送这三条信息：连接或断开的用户名、当前用户数量、事件类型（即需要知道用户究竟是连接还是断开）。","<hr>请将事件名称更改为 'user'，其中应包含如下字段：'name'、'currentUsers'、'connected'（布尔值，对于连接是 true，断开是 false）。记得要修改之前我们写好的处理 'user count' 的那部分代码，现在我们应传入布尔值：<code>io.emit('user', {name: socket.request.user.name, currentUsers, connected: true});</code>","现在，我们的客户端已经有足够的信息显示现有用户数量和发送用户上下线通知。接下来我们需要在客户端监听 'user' 事件，然后使用 jQuery 把<code>#num-users</code>节点的文本内容更新为 '{NUMBER} users online'。同时，我们需要为<code>&#60;ul&#62;</code>添加一个 id 为 'messages' 且带有 '{NAME} has {joined/left} the chat.' 文本的<code>&#60;li&#62;</code>：","<pre>socket.on('user', function(data){\n  $('#num-users').text(data.currentUsers+' users online');\n  var message = data.name;\n  if(data.connected) {\n    message += ' has joined the chat.';\n  } else {\n    message += ' has left the chat.';\n  }\n  $('#messages').append($('&#60;li&#62;').html('&#60;b&#62;'+ message +'&#60;\\/b&#62;'));\n});</pre>","完成上述要求后，你就可以在左边提交你的页面链接。"],challengeType:2,fields:{blockName:"Advanced Node and Express",slug:"/information-security-and-quality-assurance/advanced-node-and-express/announce-new-users",tests:[{text:"user 事件应发送包含 name、currentUsers、connected 字段的对象。",testString:"getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.emit.*('|\")user('|\").*name.*currentUsers.*connected/gi, '应发送名为 user，且包含 name、currentUsers、connected 的事件。'); }, xhr => { throw new Error(xhr.statusText); })"},{text:"客户端应处理和显示  'user' 对象中的信息。",testString:"getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|\")user('|\")[^]*num-users/gi, '应在客户端监听 \"user\" 事件，并在回调函数中改变 #num-users 的文本内容，以此来展示实时的用户连接数量。'); assert.match(data, /socket.on.*('|\")user('|\")[^]*messages.*li/gi, '应在客户端监听 \"user\" 事件，并在回调函数中给 #messages 添加条目，以此来展示用户连接或断开的信息。'); }, xhr => { throw new Error(xhr.statusText); })"}]}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/information-security-and-quality-assurance/advanced-node-and-express/send-and-display-chat-messages",id:"589fc832f9fc0f352b528e78"},slug:"/information-security-and-quality-assurance/advanced-node-and-express/announce-new-users"}}}});
//# sourceMappingURL=path---information-security-and-quality-assurance-advanced-node-and-express-announce-new-users-c3eedde103b2535cbf75.js.map