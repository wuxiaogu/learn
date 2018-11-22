webpackJsonp([0x8ea31a07eb66],{3484:function(t,e){t.exports={data:{challengeNode:{title:"Work with Data in D3",description:["D3 是数据驱动的库,可以使用 D3 的方法将数组形式的数据显示在页面上。","第一步是让 D3 知道数据。<code>data</code>方法选择连接着数据的 DOM 元素,数据集作为参数传递给该方法。","常见的方法是在文档中为数据集中的每一个数据创建一个元素，为此，你可以使用 D3 的<code>enter()</code>方法","当<code>enter()</code>和<code>data()</code>方法一起使用时，它把从页面中选择的元素和数据集中的元素作比较。如果页面中选择的元素较少则创建缺少的元素。","以下是一个选择<code>ul</code>元素并根据添加的数组创建新的列表项的例子。",'<blockquote>&lt;body&gt;<br>&nbsp;&nbsp;&lt;ul&gt;&lt;/ul&gt;<br>&nbsp;&nbsp;&lt;script&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;const dataset = ["a", "b", "c"];<br>&nbsp;&nbsp;&nbsp;&nbsp;d3.select("ul").selectAll("li")<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.data(dataset)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.enter()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.append("li")<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.text("New item");<br>&nbsp;&nbsp;&lt;/script&gt;<br>&lt;/body&gt;</blockquote>','选择不存在的 li 元素似乎有些难以理解。事实上，这段代码先选择页面上的 ul 元素，再选择所有的列表项——li，它将返回空。然后data()方法接收数组作为参数，并运行三次后面的代码，每次对应数组中的一个对象。enter()方法发现页面中没有 li 元素，但是需要 3 个（每个对应dataset中的一个对象）。它将在 ul 中添加带有文本 "New item" 的 li 元素。',"<hr>",'选择<code>body</code>节点，然后选择所有的<code>h2</code>元素。让 D3 为<code>dataset</code>数组中的每一个对象创建并添加文本为 "New Title" 的<code>h2</code>标签。你应该使用<code>data()</code>和<code>enter()</code>方法。'],challengeType:0,fields:{slug:"/data-visualization/data-visualization-with-d3/work-with-data-in-d3",blockName:"Data Visualization with D3",tests:[{text:"你的文档应该有 9 个<code>h2</code>元素。",testString:"assert($('h2').length == 9, '你的文档应该有 9 个<code>h2</code>元素。');"},{text:'<code>h2</code>元素中的文本应为 "New Title"。大小写和空格必须一致。',testString:"assert($('h2').text().match(/New Title/g).length == 9, '<code>h2</code>元素中的文本应为 \"New Title\"。大小写和空格必须一致。');"},{text:"你应该使用<code>data()</code>方法。",testString:"assert(code.match(/\\.data/g), '你应该使用<code>data()</code>方法。');"},{text:"你应该使用<code>enter()</code>方法。",testString:"assert(code.match(/\\.enter/g), '你应该使用<code>enter()</code>方法。');"}]},required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<body>\n  <script>\n    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];\n    \n    // 在下面添加你的代码\n    \n    \n    \n    // 在上面添加你的代码\n  </script>\n</body>",head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],nextChallengePath:"/data-visualization/data-visualization-with-d3/work-with-dynamic-data-in-d3",id:"587d7fa7367417b2b2512bc4"},slug:"/data-visualization/data-visualization-with-d3/work-with-data-in-d3"}}}});
//# sourceMappingURL=path---data-visualization-data-visualization-with-d-3-work-with-data-in-d-3-74db440897af95baf6a2.js.map