webpackJsonp([0xe29498a8a644],{2821:function(e,t){e.exports={data:{challengeNode:{title:"Create a Hash Table",description:["在本次挑战中我们会学习哈希表。与对象和 Map 类似，hash 也可以用来实现关联数组或者匹配的键值对。在 JavaScript 中，我们可以用对象来实现哈希表（具体实现方式依赖于运行环境）。哈希表接收一个 key 作为参数，并以特定的方式把 key 转换为一串数字。该数字串会与 value 值建立对应关系，并存储到表中。如果你想获取该 key 值，hashing 函数会接收 key 作为参数，并经过计算后得到与存储时的 key 相同的数字串，然后通过该数字串获取对应的 value。这种查询方式非常高效，平均时间复杂度为 O(n)。","我们还可以用数组来实现哈希表，该数组拥有一个 hash 方法，用于在指定区间内生成一系列索引。在此方法中，数组的长度和 hash 函数的选择都很关键。试想一下，假如两个不同的 key 值通过同一个 hash 函数产生了相同的值怎么办？我们称这种情况为 collision（冲突）。解决冲突的一种方式是将键值对存入该 index 中。在查询时，你需要遍历一下这个 index 上存储的所有数据，找出你需要的那一条。一个好的 hash 函数应维持较低的冲突发生率，以保证查询效率。","本课程我们不关注 hash 函数或者哈希表的实现细节，熟悉一下他们是如何运作的即可。","挑战说明：现在我们来创建一个拥有基本功能的哈希表。我们已经为你写好了一个简单的 hash 函数，当你传递一个值给该函数时，它会返回一个经过 hash 运算的值；你需要用这个值作为 key，将元素存储到 this.collection 对象中。然后，你需要其中创建 add、remove、lookup 这三个方法。add 方法接收一个键值对参数并把它存储到哈希表中；remove 方法接收一个 key 为参数并移除对应的键值对；lookup 方法接收一个 key 为参数并返回对应的 value 值，如果 key 值不存在就返回 null。","请确保你的代码能处理发生冲突的情况。"],challengeType:1,fields:{slug:"/coding-interview-prep/data-structures/create-a-hash-table",blockName:"Data Structures",tests:[{text:"应该存在哈希表数据结构。",testString:"assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return (typeof test === 'object')})(), '应该存在哈希表数据结构。');"},{text:"哈希表应该有 add 方法。",testString:"assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.add) === 'function')})(), '哈希表应该有 add 方法。');"},{text:"哈希表应该有 remove 方法。",testString:"assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.remove) === 'function')})(), '哈希表应该有 remove 方法。');"},{text:"哈希表应该有 lookup 方法。",testString:"assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.lookup) === 'function')})(), '哈希表应该有 lookup 方法。');"},{text:"add 方法应在哈希表中添加键值对；lookup 方法应根据传入的 key 返回对应的 value 值。",testString:"assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; test.add('key', 'value'); return (test.lookup('key') === 'value')})(), 'add 方法应在哈希表中添加键值对；lookup 方法应根据传入的 key 返回对应的 value 值。');"},{text:"remove 方法应接收 key 值为参数并删除对应的键值对。",testString:"assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; test.add('key', 'value'); test.remove('key'); return (test.lookup('key') === null)})(), 'remove 方法应接收 key 值为参数并删除对应的键值对。');"},{text:"应该使用 hash 函数把元素添加进哈希表。",testString:"assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; called = 0; test.add('key1','value1'); test.add('key2','value2'); test.add('key3','value3'); return (called === 3)})(), '应该使用 hash 函数把元素添加进哈希表。');"},{text:"你的哈希表应该可以处理冲突。",testString:"assert((function() { var test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; called = 0; test.add('key1','value1'); test.add('1key','value2'); test.add('ke1y','value3'); return (test.lookup('key1') === 'value1' && test.lookup('1key') == 'value2' && test.lookup('ke1y') == 'value3')})(), '你的哈希表应该可以处理冲突。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"var called = 0;\nvar hash = (string) => {\n  called++;\n  var hash = 0;\n  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }\n  return hash;\n};\nvar HashTable = function() {\n  this.collection = {};\n  // 请把你的代码写在这条注释以下\n  // 请把你的代码写在这条注释以上\n};",head:"  var called = 0;\n    var hash = (string) => {\n     called++;\n      var hash = 0;\n      for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); };\n      return hash;\n    };",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/data-structures/work-with-nodes-in-a-linked-list",id:"587d825b367417b2b2512c8e"},slug:"/coding-interview-prep/data-structures/create-a-hash-table"}}}});
//# sourceMappingURL=path---coding-interview-prep-data-structures-create-a-hash-table-512e6bbf0e1a9898097f.js.map