webpackJsonp([67237035388463],{3821:function(e,s){e.exports={data:{challengeNode:{title:"Multiple Identical Options in Switch Statements",description:["如果你忘了给<code>switch</code>的每一条<code>case</code>添加<code>break</code>，那么直到遇见<code>break</code>为止，后续的<code>case</code>会一直执行。如果你想为多个不同的输入设置相同的结果，可以这样写：",'<blockquote>switch(val) {<br>&nbsp;&nbsp;case 1:<br>&nbsp;&nbsp;case 2:<br>&nbsp;&nbsp;case 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;result = "1, 2, or 3";<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;case 4:<br>&nbsp;&nbsp;&nbsp;&nbsp;result = "4 alone";<br>}</blockquote>',"这样，1、2、3 都会有相同的结果。","<hr>",'请写一个<code>switch</code>语句，根据输入的<code>val</code>的范围得出对应的<code>answer</code>：<br><code>1-3</code> - "Low"<br><code>4-6</code> - "Mid"<br><code>7-9</code> - "High"',"<strong>提示：</strong><br>你的<code>case</code>应基于范围中的每一个数字编写。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/multiple-identical-options-in-switch-statements",blockName:"Basic JavaScript",tests:[{text:'<code>sequentialSizes(1)</code>应该返回 "Low"',testString:'assert(sequentialSizes(1) === "Low", \'<code>sequentialSizes(1)</code>应该返回 "Low"\');'},{text:'<code>sequentialSizes(2)</code>应该返回 "Low"',testString:'assert(sequentialSizes(2) === "Low", \'<code>sequentialSizes(2)</code>应该返回 "Low"\');'},{text:'<code>sequentialSizes(3)</code>应该返回 "Low"',testString:'assert(sequentialSizes(3) === "Low", \'<code>sequentialSizes(3)</code>应该返回 "Low"\');'},{text:'<code>sequentialSizes(4)</code>应该返回 "Mid"',testString:'assert(sequentialSizes(4) === "Mid", \'<code>sequentialSizes(4)</code>应该返回 "Mid"\');'},{text:'<code>sequentialSizes(5)</code>应该返回 "Mid"',testString:'assert(sequentialSizes(5) === "Mid", \'<code>sequentialSizes(5)</code>应该返回 "Mid"\');'},{text:'<code>sequentialSizes(6)</code>应该返回 "Mid"',testString:'assert(sequentialSizes(6) === "Mid", \'<code>sequentialSizes(6)</code>应该返回 "Mid"\');'},{text:'<code>sequentialSizes(7)</code>应该返回 "High"',testString:'assert(sequentialSizes(7) === "High", \'<code>sequentialSizes(7)</code>应该返回 "High"\');'},{text:'<code>sequentialSizes(8)</code>应该返回 "High"',testString:'assert(sequentialSizes(8) === "High", \'<code>sequentialSizes(8)</code>应该返回 "High"\');'},{text:'<code>sequentialSizes(9)</code>应该返回 "High"',testString:'assert(sequentialSizes(9) === "High", \'<code>sequentialSizes(9)</code>应该返回 "High"\');'},{text:"你不应使用<code>if</code>或<code>else</code>语句",testString:"assert(!/else/g.test(code) || !/if/g.test(code), '你不应使用<code>if</code>或<code>else</code>语句');"},{text:"你应该编写 9 个<code>case</code>语句",testString:"assert(code.match(/case/g).length === 9, '你应该编写 9 个<code>case</code>语句');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'function sequentialSizes(val) {\n  var answer = "";\n  // 请把你的代码写在这条注释以下\n  \n  \n  \n  // 请把你的代码写在这条注释以上  \n  return answer;  \n}\n\n// 你可以修改这一行来测试你的代码\nsequentialSizes(1);\n',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch",id:"56533eb9ac21ba0edf2244df"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/multiple-identical-options-in-switch-statements"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-multiple-identical-options-in-switch-statements-4a496e6921c77a5b9662.js.map