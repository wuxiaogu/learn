webpackJsonp([0xbf140ffa7a9e],{3465:function(e,t){e.exports={data:{challengeNode:{title:"Add Labels to Scatter Plot Circles",description:["你可以添加文本为散点图中的点创建标签。","目标是显示以逗号分隔的值，分别为<code>dataset</code>中每个对象的第一个(<code>x</code>)和第二个(<code>y</code>)字段","<code>text</code>节点需要<code>x</code>和<code>y</code>属性来指定放置在 SVG 画布中的位置。在这个挑战中，<code>y</code>值（决定高度）可以用和<code>circle</code>的<code>cy</code>属性相同的值，<code>x</code>值可以比<code>circle</code>的<code>cx</code>值稍微大一些，这样标签才是可见的并且被放置在散点的右边。","<hr>",'用<code>text</code>元素为散点图中的每个点创建标签。标签的文本应该为用一个逗号和一个空格分隔开的两个值，例如，第一个点的标签为 "34, 78"。设置<code>x</code>属性比<code>circle</code>的<code>cx</code>属性大 5 个单位，设置<code>y</code>属性和<code>circle</code>的<code>cy</code>属性相同。'],challengeType:0,fields:{slug:"/data-visualization/data-visualization-with-d3/add-labels-to-scatter-plot-circles",blockName:"Data Visualization with D3",tests:[{text:"你应该有 10 个<code>text</code>元素。",testString:"assert($('text').length == 10, '你应该有 10 个<code>text</code>元素。');"},{text:'第一个标签的文本应该为 "34, 78"，<code>x</code>值应该为 39，<code>y</code>应该为 422。',testString:"assert($('text').eq(0).text() == '34, 78' && $('text').eq(0).attr('x') == '39' && $('text').eq(0).attr('y') == '422', '第一个标签的文本应该为 \"34, 78\"，<code>x</code>值应该为 39，<code>y</code>应该为 422。');"},{text:'第二个标签的文本应该为 "109, 280"，<code>x</code>值应该为 114，<code>y</code>应该为 220。',testString:"assert($('text').eq(1).text() == '109, 280' && $('text').eq(1).attr('x') == '114' && $('text').eq(1).attr('y') == '220', '第二个标签的文本应该为 \"109, 280\"，<code>x</code>值应该为 114，<code>y</code>应该为 220。');"},{text:'第三个标签的文本应该为 "310, 120"，<code>x</code>值应该为 315，<code>y</code>应该为 380。',testString:"assert($('text').eq(2).text() == '310, 120' && $('text').eq(2).attr('x') == '315' && $('text').eq(2).attr('y') == '380', '第三个标签的文本应该为 \"310, 120\"，<code>x</code>值应该为 315，<code>y</code>应该为 380。');"},{text:'第四个标签的文本应该为 "79, 411"，<code>x</code>值应该为 84，<code>y</code>应该为 89。',testString:"assert($('text').eq(3).text() == '79, 411' && $('text').eq(3).attr('x') == '84' && $('text').eq(3).attr('y') == '89', '第四个标签的文本应该为 \"79, 411\"，<code>x</code>值应该为 84，<code>y</code>应该为 89。');"},{text:'第五个标签的文本应该为 "420, 220"，<code>x</code>值应该为 425，<code>y</code>应该为 280。',testString:"assert($('text').eq(4).text() == '420, 220' && $('text').eq(4).attr('x') == '425' && $('text').eq(4).attr('y') == '280', '第五个标签的文本应该为 \"420, 220\"，<code>x</code>值应该为 425，<code>y</code>应该为 280。');"},{text:'第六个标签的文本应该为 "233, 145"，<code>x</code>值应该为 238，<code>y</code>应该为 355。',testString:"assert($('text').eq(5).text() == '233, 145' && $('text').eq(5).attr('x') == '238' && $('text').eq(5).attr('y') == '355', '第六个标签的文本应该为 \"233, 145\"，<code>x</code>值应该为 238，<code>y</code>应该为 355。');"},{text:'第七个标签的文本应该为 "333, 96"，<code>x</code>值应该为 338，<code>y</code>应该为 404。',testString:"assert($('text').eq(6).text() == '333, 96' && $('text').eq(6).attr('x') == '338' && $('text').eq(6).attr('y') == '404', '第七个标签的文本应该为 \"333, 96\"，<code>x</code>值应该为 338，<code>y</code>应该为 404。');"},{text:'第八个标签的文本应该为 "222, 333"，<code>x</code>值应该为 227，<code>y</code>应该为 167。',testString:"assert($('text').eq(7).text() == '222, 333' && $('text').eq(7).attr('x') == '227' && $('text').eq(7).attr('y') == '167', '第八个标签的文本应该为 \"222, 333\"，<code>x</code>值应该为 227，<code>y</code>应该为 167。');"},{text:'第九个标签的文本应该为 "78, 320"，<code>x</code>值应该为 83，<code>y</code>应该为 180。',testString:"assert($('text').eq(8).text() == '78, 320' && $('text').eq(8).attr('x') == '83' && $('text').eq(8).attr('y') == '180', '第九个标签的文本应该为 \"78, 320\"，<code>x</code>值应该为 83，<code>y</code>应该为 180。');"},{text:'第十个标签的文本应该为 "21, 123"，<code>x</code>值应该为 26，<code>y</code>应该为 377。',testString:"assert($('text').eq(9).text() == '21, 123' && $('text').eq(9).attr('x') == '26' && $('text').eq(9).attr('y') == '377', '第十个标签的文本应该为 \"21, 123\"，<code>x</code>值应该为 26，<code>y</code>应该为 377。');"}]},required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<body>\n  <script>\n    const dataset = [\n                  [ 34,    78 ],\n                  [ 109,   280 ],\n                  [ 310,   120 ],\n                  [ 79,    411 ],\n                  [ 420,   220 ],\n                  [ 233,   145 ],\n                  [ 333,   96 ],\n                  [ 222,   333 ],\n                  [ 78,    320 ],\n                  [ 21,    123 ]\n                ];\n    \n    \n    const w = 500;\n    const h = 500;\n    \n    const svg = d3.select("body")\n                  .append("svg")\n                  .attr("width", w)\n                  .attr("height", h);\n    \n    svg.selectAll("circle")\n       .data(dataset)\n       .enter()\n       .append("circle")\n       .attr("cx", (d, i) => d[0])\n       .attr("cy", (d, i) => h - d[1])\n       .attr("r", 5);\n    \n    svg.selectAll("text")\n       .data(dataset)\n       .enter()\n       .append("text")\n       // 在下面添加你的代码\n       \n       \n       \n       // 在上面添加你的代码\n  </script>\n</body>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],nextChallengePath:"/data-visualization/data-visualization-with-d3/create-a-linear-scale-with-d3",id:"587d7fab367417b2b2512bd9"},slug:"/data-visualization/data-visualization-with-d3/add-labels-to-scatter-plot-circles"}}}});
//# sourceMappingURL=path---data-visualization-data-visualization-with-d-3-add-labels-to-scatter-plot-circles-f7266d74384efdd4503e.js.map