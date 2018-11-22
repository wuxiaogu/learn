webpackJsonp([0xdb8676e55ce0],{3734:function(e,t){e.exports={data:{challengeNode:{title:"Add Items to an Array with push() and unshift()",description:["一个数组的长度与其包含的数据类型一样，是不固定的。数组可以包含任意数量的元素，你可以不限次数地往数组中添加元素或者从中移除元素，或者说数组是<dfn>可变的</dfn>（<dfn>mutable</dfn>）。在本挑战中，我们要学习两个以编程方式修改数组的方法：<code>Array.push()</code>和<code>Array.unshift()</code>。","这两个方法都接收一个或多个元素作为参数；对一个数组调用这两个方法都可以将输入的元素插入到该数组中；<code>push()</code>方法将元素插入到一个数组的末尾，而<code>unshift()</code>方法将元素插入到一个数组的开头。请看以下例子：","<blockquote>let twentyThree = 'XXIII';<br>let romanNumerals = ['XXI', 'XXII'];<br><br>romanNumerals.unshift('XIX', 'XX');<br>// 数组现在为 ['XIX', 'XX', 'XXI', 'XXII']<br><br>romanNumerals.push(twentyThree);<br>// 数组现在为 ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']","注意，我们还可以输入变量，这允许我们很灵活地动态改变我们数组中的数据。","<hr>","我们已经定义了一个<code>mixedNumbers</code>函数，它会接受一个数组作为参数。请你修改这个函数，使用<code>push()</code>和<code>unshift()</code>来将<code>'I', 2, 'three'</code>插入到数组的开头，将<code>7, 'VIII', 9</code>插入到数组的末尾，使得这个函数返回一个依次包含 1-9 的数组。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-data-structures/add-items-to-an-array-with-push-and-unshift",blockName:"Basic Data Structures",tests:[{text:'<code>mixedNumbers(["IV", 5, "six"])</code>现在应该返回<code>["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]</code>。',testString:"assert.deepEqual(mixedNumbers(['IV', 5, 'six']), ['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9], '<code>mixedNumbers([\"IV\", 5, \"six\"])</code>现在应该返回<code>[\"I\", 2, \"three\", \"IV\", 5, \"six\", 7, \"VIII\", 9]</code>。');"},{text:"<code>mixedNumbers</code>函数中应该用到<code>push()</code>方法。",testString:"assert.notStrictEqual(mixedNumbers.toString().search(/\\.push\\(/), -1, '<code>mixedNumbers</code>函数中应该用到<code>push()</code>方法。');"},{text:"<code>mixedNumbers</code>函数中应该用到<code>unshift()</code>方法。",testString:"assert.notStrictEqual(mixedNumbers.toString().search(/\\.unshift\\(/), -1, '<code>mixedNumbers</code>函数中应该用到<code>unshift()</code>方法。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function mixedNumbers(arr) {\n  // 请把你的代码写在这条注释以下\n\n  // 请把你的代码写在这条注释以上\n  return arr;\n}\n\n// 请不要修改本行以下的代码\nconsole.log(mixedNumbers(['IV', 5, 'six']));",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-from-an-array-with-pop-and-shift",id:"587d78b2367417b2b2512b0e"},slug:"/javascript-algorithms-and-data-structures/basic-data-structures/add-items-to-an-array-with-push-and-unshift"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-data-structures-add-items-to-an-array-with-push-and-unshift-9316c13b3ab757591172.js.map