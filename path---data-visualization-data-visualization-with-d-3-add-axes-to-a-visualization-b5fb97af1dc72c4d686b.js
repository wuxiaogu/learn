webpackJsonp([0x7d4893266028],{3460:function(e,a){e.exports={data:{challengeNode:{title:"Add Axes to a Visualization",description:["另一种改进散点图的方法是添加 x 轴和 y 轴。","D3 有两种方法来渲染 y 轴和 x 轴，分别是<code>axisLeft</code>和<code>axisBottom</code>。下面是一个基于上个挑战中的<code>xScale</code>创建 x 轴的例子：","<code>const xAxis = d3.axisBottom(xScale);</code>","下一步是在 SVG 画布上渲染 x 轴。为此，你可以使用一个常见的 SVG 组件，<code>g</code>元素，<code>g</code>是英文中组(group)的缩写。","不同于<code>rect</code>、<code>circle</code>、<code>text</code>，在渲染时，轴只是一条直线。因为它是一个简单的图形，所以可以用<code>g</code>。","最后一步是使用<code>transforms</code>属性将轴放置在 SVG 画布的正确位置上。否则，轴将会沿着 SVG 画布的边缘渲染，从而不可见。","SVG 支持多种<code>transforms</code>，但是放置轴需要<code>translate</code>。当它应用在<code>g</code>元素上时，它根据给出的总量移动整组。下面是一个例子：",'<blockquote>const xAxis = d3.axisBottom(xScale);<br><br>svg.append("g")<br>&nbsp;&nbsp; .attr("transform", "translate(0, " + (h - padding) + ")")<br>&nbsp;&nbsp; .call(xAxis);</blockquote>',"上部分代码将 x 轴放置在 SVG 画布的底端。然后 x 轴作为参数被传递给<code>call</code>方法。","除了<code>translate</code>的参数是 (x,0) 格式的，y 轴也是一样的。因为<code>translate</code>是上面<code>attr</code>方法中的一个字符串，你可以在参数中使用字符串的连接将变量值包括进去。","<hr>","现在散点图有 x 轴了。用<code>axisLeft</code>方法在变量<code>yAxis</code>中创建 y 轴，然后用<code>g</code>元素渲染 y 轴。确保用<code>transform</code>属性将 y 轴向右平移 padding 个单位，向下平移 0 个单位。记得<code>call()</code> y 轴。"],challengeType:0,fields:{slug:"/data-visualization/data-visualization-with-d3/add-axes-to-a-visualization",blockName:"Data Visualization with D3",tests:[{text:"你应该使用参数为<code>yScale</code>的<code>axisLeft()</code>方法。",testString:"assert(code.match(/\\.axisLeft\\(yScale\\)/g), '你应该使用参数为<code>yScale</code>的<code>axisLeft()</code>方法。');"},{text:"y 轴的<code>g</code>元素应该有一个<code>transform</code>属性来将 y 轴平移( 60，0 )。",testString:"assert($('g').eq(1).attr('transform').match(/translate\\(60\\s*?,\\s*?0\\)/g), 'The y-axis <code>g</code> element should have a <code>transform</code> attribute to translate the axis by (60, 0).');"},{text:"你应该调用(call)<code>yAxis</code>。",testString:"assert(code.match(/\\.call\\(yAxis\\)/g), 'Your code should call the <code>yAxis</code>.');"}]},required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<body>\n  <script>\n    const dataset = [\n                  [ 34,     78 ],\n                  [ 109,   280 ],\n                  [ 310,   120 ],\n                  [ 79,   411 ],\n                  [ 420,   220 ],\n                  [ 233,   145 ],\n                  [ 333,   96 ],\n                  [ 222,    333 ],\n                  [ 78,    320 ],\n                  [ 21,   123 ]\n                ];\n    \n    const w = 500;\n    const h = 500;\n    const padding = 60;\n    \n    const xScale = d3.scaleLinear()\n                     .domain([0, d3.max(dataset, (d) => d[0])])\n                     .range([padding, w - padding]);\n    \n    const yScale = d3.scaleLinear()\n                     .domain([0, d3.max(dataset, (d) => d[1])])\n                     .range([h - padding, padding]);\n    \n    const svg = d3.select("body")\n                  .append("svg")\n                  .attr("width", w)\n                  .attr("height", h);\n    \n    svg.selectAll("circle")\n       .data(dataset)\n       .enter()\n       .append("circle")\n       .attr("cx", (d) => xScale(d[0]))\n       .attr("cy",(d) => yScale(d[1]))\n       .attr("r", (d) => 5);\n    \n    svg.selectAll("text")\n       .data(dataset)\n       .enter()\n       .append("text")\n       .text((d) =>  (d[0] + "," + d[1]))\n       .attr("x", (d) => xScale(d[0] + 10))\n       .attr("y", (d) => yScale(d[1]))\n    \n    const xAxis = d3.axisBottom(xScale);\n    \n    svg.append("g")\n       .attr("transform", "translate(0," + (h - padding) + ")")\n       .call(xAxis);\n    \n    // 在下面添加你的代码\n    \n    \n    \n    // 在上面添加你的代码\n  \n  </script>\n</body>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"/data-visualization/json-apis-and-ajax",template:null,required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],nextChallengePath:"/data-visualization/json-apis-and-ajax/handle-click-events-with-javascript-using-the-onclick-property",id:"587d7fad367417b2b2512bdf"},slug:"/data-visualization/data-visualization-with-d3/add-axes-to-a-visualization"}}}});
//# sourceMappingURL=path---data-visualization-data-visualization-with-d-3-add-axes-to-a-visualization-b5fb97af1dc72c4d686b.js.map