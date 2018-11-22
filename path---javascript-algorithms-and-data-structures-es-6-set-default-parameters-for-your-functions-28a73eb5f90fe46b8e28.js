webpackJsonp([64083642644668],{3882:function(e,t){e.exports={data:{challengeNode:{title:"Set Default Parameters for Your Functions",description:["ES6 里允许给函数传入<dfn>默认参数</dfn>，来构建更加灵活的函数。","请看以下代码：",'<blockquote>function greeting(name = "Anonymous") {<br>&nbsp;&nbsp;return "Hello " + name;<br>}<br>console.log(greeting("John")); // Hello John<br>console.log(greeting()); // Hello Anonymous</blockquote>','默认参数会在参数没有被指定（值为 undefined ）的时候起作用。在上面的例子中，参数<code>name</code>会在没有得到新的值的时候，默认使用值 "Anonymous"。你还可以给多个参数赋予默认值。',"<hr>","给函数<code>increment</code>加上默认参数，使得在<code>value</code>没有被赋值的时候，默认给<code>number</code>加1。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions",blockName:"ES6",tests:[{text:"<code>increment(5, 2)</code>的结果应该为<code>7</code>。",testString:"assert(increment(5, 2) === 7, '<code>increment(5, 2)</code>的结果应该为<code>7</code>。');"},{text:"<code>increment(5)</code>的结果应该为<code>6</code>。",testString:"assert(increment(5) === 6, '<code>increment(5)</code>的结果应该为<code>6</code>。');"},{text:"参数<code>value</code>的默认值应该为<code>1</code>。",testString:"getUserInput => assert(getUserInput('index').match(/value\\s*=\\s*1/g), 'default parameter<code>1</code>was used for<code>value</code>.');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'const increment = (function() {\n  "use strict";\n  return function increment(number, value) {\n    return number + value;\n  };\n})();\nconsole.log(increment(5, 2)); // 返回 7\nconsole.log(increment(5)); // 返回 NaN',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/es6/use-the-rest-operator-with-function-parameters",id:"587d7b88367417b2b2512b46"},slug:"/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-es-6-set-default-parameters-for-your-functions-28a73eb5f90fe46b8e28.js.map