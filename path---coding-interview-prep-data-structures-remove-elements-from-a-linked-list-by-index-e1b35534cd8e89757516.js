webpackJsonp([80743184496950],{2847:function(e,t){e.exports={data:{challengeNode:{title:"Remove Elements from a Linked List by Index",description:["在学习其他数据结构之前，我们再来做两个与链表相关的练习。","首先，我们来写一个<code>removeAt</code>方法，该方法根据给定的<code>index</code>删除对应位置上的<code>element</code>。我们把这个方法命名为<code>removeAt(index)</code>。为了移除给定位置上的<code>element</code>，我们需要用一个变量（也可以叫指针）来记录我们遍历到的位置。","在遍历链表中元素时，我们通常需要一个指向代码中当前遍历到的元素的指针。在本例中，我们从表的头部开始，设置<code>currentIndex</code>的初始值为<code>0</code>。每 “经过” 一个元素，我们都需要让<code>currentIndex</code>加一。","就像<code>remove(element)</code>方法一样，删除的时候不仅仅是移除元素那么简单，我们需要保证被移除节点的前一个节点的<code>next</code>指针指向被移除节点的下一个节点。","<hr>","请编写<code>removeAt(index)</code>方法，移除指定位置的节点，同时该方法需要返回被移除的节点。如果<code>index</code>的值为负数或者大于等于链表的长度，该方法应该返回<code>null</code>。","注意：","记得及时更新<code>currentIndex</code>的数值。"],challengeType:1,fields:{slug:"/coding-interview-prep/data-structures/remove-elements-from-a-linked-list-by-index",blockName:"Data Structures",tests:[{text:"链表应该有<code>removeAt</code>方法。",testString:"assert((function(){var test = new LinkedList(); return (typeof test.removeAt === 'function')}()), '链表应该有<code>removeAt</code>方法。');"},{text:"使用<code>removeAt</code>方法之后，链表的长度应该缩短。",testString:"assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); test.removeAt(1); return test.size() === 2}()), '使用<code>removeAt</code>方法之后，链表的长度应该缩短。');"},{text:"<code>removeAt</code>应该返回被移除的那个节点。",testString:"assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten');  return test.removeAt(1) === 'dog'}()), '<code>removeAt</code>应该返回被移除的那个节点。');"},{text:"如果 index 的值小于<code>0</code>，<code>removeAt</code>方法应该返回<code>null</code>。",testString:"assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten');  return (test.removeAt(-1) === null)}()), '如果 index 的值小于<code>0</code>，<code>removeAt</code>方法应该返回<code>null</code>。');"},{text:"如果 index 的值大于等于链表长度，<code>removeAt</code>方法应该返回<code>null</code>。",testString:"assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten');  return (test.removeAt(3) === null)}()), '如果 index 的值大于等于链表长度，<code>removeAt</code>方法应该返回<code>null</code>。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function LinkedList() { \n  var length = 0; \n  var head = null; \n\n  var Node = function(element){ // {1} \n    this.element = element; \n    this.next = null; \n  }; \n\n  this.size = function(){\n    return length;\n  };\n\n  this.head = function(){\n    return head;\n  };\n\n  this.add = function(element){\n    var node = new Node(element);\n    if(head === null){\n        head = node;\n    } else {\n        currentNode = head;\n\n        while(currentNode.next){\n            currentNode  = currentNode.next;\n        }\n\n        currentNode.next = node;\n    }\n\n    length++;\n  }; \n\n  this.remove = function(element){\n    var currentNode = head;\n    var previousNode;\n    if(currentNode.element === element){\n        head = currentNode.next;\n    } else {\n        while(currentNode.element !== element) {\n            previousNode = currentNode;\n            currentNode = currentNode.next;\n        }\n\n        previousNode.next = currentNode.next;\n    }\n\n    length --;\n  };\n\n  // 请把你的代码写在这条注释以下\n\n  // 请把你的代码写在这条注释以上\n}",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/data-structures/add-elements-at-a-specific-index-in-a-linked-list",id:"587d8251367417b2b2512c65"},slug:"/coding-interview-prep/data-structures/remove-elements-from-a-linked-list-by-index"}}}});
//# sourceMappingURL=path---coding-interview-prep-data-structures-remove-elements-from-a-linked-list-by-index-e1b35534cd8e89757516.js.map