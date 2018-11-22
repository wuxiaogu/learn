webpackJsonp([43322003113170],{3988:function(e,t){e.exports={data:{challengeNode:{title:"Match All Non-Numbers",description:["上一项挑战中展示了如何使用带有小写<code>d</code>的缩写<code>\\d</code>来搜寻数字。你也可以使用类似的缩写来搜寻非数字，该缩写使用大写的<code>D</code>。","查找非数字字符的缩写是<code>\\D</code>。这等同于字符串<code>[^0-9]</code>，它查找不是 0 - 9 之间数字的单个字符。","<hr>","使用非数字缩写<code>\\D</code>来计算电影标题中有多少非数字。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/regular-expressions/match-all-non-numbers",blockName:"Regular Expressions",tests:[{text:"你的正则表达式应该使用缩写来匹配非数字字符。",testString:"assert(/\\\\D/.test(noNumRegex.source), '你的正则表达式应该使用缩写来匹配非数字字符。');"},{text:"你的正则表达式应该使用全局状态修正符。",testString:"assert(noNumRegex.global, '你的正则表达式应该使用全局状态修正符。');"},{text:'你的正则表达式在<code>"9"</code>中应该匹配不到非数字。',testString:'assert("9".match(noNumRegex) == null, \'你的正则表达式在<code>"9"</code>中应该匹配不到非数字。\');'},{text:'你的正则表达式应该在<code>"Catch 22"</code>中匹配到 6 个非数字。',testString:'assert("Catch 22".match(noNumRegex).length == 6, \'你的正则表达式应该在<code>"Catch 22"</code>中匹配到 6 个非数字。\');'},{text:'你的正则表达式应该在<code>"101 Dalmatians"</code>中匹配到 11 个非数字。',testString:'assert("101 Dalmatians".match(noNumRegex).length == 11, \'你的正则表达式应该在<code>"101 Dalmatians"</code>中匹配到 11 个非数字。\');'},{text:'你的正则表达式应该在<code>"One, Two, Three"</code>中匹配到 15 个非数字。',testString:'assert("One, Two, Three".match(noNumRegex).length == 15, \'你的正则表达式应该在<code>"One, Two, Three"</code>中匹配到 15 个非数字。\');'},{text:'你的正则表达式应该在<code>"21 Jump Street"</code>中匹配到 12 个非数字。',testString:'assert("21 Jump Street".match(noNumRegex).length == 12, \'你的正则表达式应该在<code>"21 Jump Street"</code>中匹配到 12 个非数字。\');'},{text:'你的正则表达式应该在<code>"2001: A Space Odyssey"</code>中匹配到 17 个非数字。',testString:'assert("2001: A Space Odyssey".match(noNumRegex).length == 17, \'你的正则表达式应该在<code>"2001: A Space Odyssey"</code>中匹配到 17 个非数字。\');'}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'let numString = "Your sandwich will be $5.00";\nlet noNumRegex = /change/; // 修改这一行\nlet result = numString.match(noNumRegex).length;',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames",id:"587d7db8367417b2b2512ba1"},slug:"/javascript-algorithms-and-data-structures/regular-expressions/match-all-non-numbers"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-regular-expressions-match-all-non-numbers-3d310f12636513b31e80.js.map