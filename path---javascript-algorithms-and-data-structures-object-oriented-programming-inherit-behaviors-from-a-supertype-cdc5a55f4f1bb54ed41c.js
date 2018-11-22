webpackJsonp([0xbbb32d72d8dd],{3959:function(e,o){e.exports={data:{challengeNode:{title:"Inherit Behaviors from a Supertype",description:["在上一个挑战中，我们创建了一个<code>Animal 超类</code>，用来定义所有动物共有的行为：",'<blockquote>function Animal() { }<br>Animal.prototype.eat = function() {<br>&nbsp;&nbsp;console.log("nom nom nom");<br>};</blockquote>',"在这一节以及下一节挑战中我们将学习如何给<code>Bird</code>、<code>Dog</code>重写<code>Animal</code>中的方法，而无需重新定义它们。这里我们会用到构造函数的<code>继承</code>特性。","这一节挑战中我们学习第一步：创建一个<code>超类</code>（或者叫父类）的实例。","你已经学会了一种创建<code>Animal</code>实例的方法，即使用<code>new</code>操作符：","<blockquote>let animal = new Animal();</blockquote>","此语法用于<code>继承</code>时会存在一些缺点，这些缺点对于当前我们这个挑战来说太复杂了。相反，我们学习另外一种没有这些缺点的方法来替代<code>new</code>操作：","<blockquote>let animal = Object.create(Animal.prototype);</blockquote>","<code>Object.create(obj)</code>创建了一个新对象，并指定了<code>obj</code>作为新对象的<code>原型</code>。回忆一下，我们之前说过<code>原型</code>就像是创建对象的“配方”。如果我们把<code>animal</code>的<code>原型</code>设置为与<code>Animal</code>构造函数的<code>原型</code>一样，那么就相当于让<code>animal</code>这个实例的配方与<code>Animal</code>其他实例的配方一样了。",'<blockquote>animal.eat(); // 输出 "nom nom nom"<br>animal instanceof Animal; // => true</blockquote>',"<hr>","使用<code>Object.create</code>方法给<code>Animal</code>创建两个实例：<code>duck</code>和<code>beagle</code>。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype",blockName:"Object Oriented Programming",tests:[{text:"应该定义一个<code>duck</code>变量。",testString:"assert(typeof duck !== \"undefined\", '应该定义一个<code>duck</code>变量。');"},{text:"应该定义一个<code>beagle</code>变量。",testString:"assert(typeof beagle !== \"undefined\", '应该定义一个<code>beagle</code>变量。');"},{text:"<code>duck</code>的原型应该被设置为<code>Animal</code>构造函数的<code>原型</code>。",testString:"assert(duck instanceof Animal, '<code>duck</code>的原型应该被设置为<code>Animal</code>构造函数的<code>原型</code>。');"},{text:"<code>beagle</code>的原型应该被设置为<code>Animal</code>构造函数的<code>原型</code>。",testString:"assert(beagle instanceof Animal, '<code>beagle</code>的原型应该被设置为<code>Animal</code>构造函数的<code>原型</code>。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'function Animal() { }\n\nAnimal.prototype = {\n  constructor: Animal, \n  eat: function() {\n    console.log("nom nom nom");\n  }\n};\n\n// 请把你的代码写在这条注释以下\n\nlet duck; // 修改这一行代码\nlet beagle; // 修改这一行代码\n\nduck.eat(); // 应该输出 "nom nom nom"\nbeagle.eat(); // 应该输出 "nom nom nom" ',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/object-oriented-programming/set-the-childs-prototype-to-an-instance-of-the-parent",id:"587d7db0367417b2b2512b84"},slug:"/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-object-oriented-programming-inherit-behaviors-from-a-supertype-cdc5a55f4f1bb54ed41c.js.map