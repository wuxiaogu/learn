webpackJsonp([0xcde87f296b90],{2809:function(e,o){e.exports={data:{challengeNode:{title:"Inventory Update",description:["创建一个<a href='https://baike.baidu.com/item/%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84' target='_blank'>二维数组</a>，比较并更新存储在<code>二维数组</code>中的“库存”元素，然后并将其与新产生的第二个二维数组进行对比，更新当前的 ”库存“ 项的数量（<code>arr1</code>），如果找不到这个对比对象，那么将新的对象和数量添加到“库存”数组中。注意：返回的“库存”数组应该是按照数组元素的首字母顺序排序","如果你遇到了困难，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。你可以找人“结对编程“，但不要因此放弃思考。"],challengeType:5,fields:{slug:"/coding-interview-prep/algorithms/inventory-update",blockName:"Algorithms",tests:[{text:"函数<code>updateInventory</code>应该返回一个数组。",testString:'assert.isArray(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]),\'函数<code>updateInventory</code>应该返回一个数组。\');'},{text:'<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code>返回的数组长度应该为 6。',testString:'assert.equal(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length, 6,\'<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code>应该返回一个长度为 6 的数组。\');'},{text:'<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code>应该返回<code>[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]</code>。',testString:'assert.deepEqual(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]), [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]],\'<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code>应该返回<code>[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]</code>。\')；'},{text:'<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])</code>应该返回<code>[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]</code>。',testString:'assert.deepEqual(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []), [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],\'<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])</code>应该返回<code>[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]</code>。\')；'},{text:'<code>updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code>应该返回<code>[[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]</code>。',testString:'assert.deepEqual(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]), [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]],\'<code>updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code>应该返回<code>[[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]</code>。\')；'},{text:'<code>updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])</code>应该返回<code>[[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]</code>。',testString:'assert.deepEqual(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]), [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]],\'<code>updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])</code> 应该返回 <code>[[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]</code>。\')；'}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'function updateInventory(arr1, arr2) {\n// 所有的存货都必须记帐，否则你将被解雇！\n    return arr1;\n}\n\n// 两个货物列表示例\nvar curInv = [\n    [21, "Bowling Ball"],\n    [2, "Dirty Sock"],\n    [1, "Hair Pin"],\n    [5, "Microphone"]\n];\n\nvar newInv = [\n    [2, "Hair Pin"],\n    [3, "Half-Eaten Apple"],\n    [67, "Bowling Ball"],\n    [7, "Toothpaste"]\n];\n\nupdateInventory(curInv, newInv);',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/algorithms/no-repeats-please",id:"a56138aff60341a09ed6c480"},slug:"/coding-interview-prep/algorithms/inventory-update"}}}});
//# sourceMappingURL=path---coding-interview-prep-algorithms-inventory-update-c26d8c63905159ab7bfa.js.map