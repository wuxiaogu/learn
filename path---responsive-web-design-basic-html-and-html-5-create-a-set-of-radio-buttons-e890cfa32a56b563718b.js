webpackJsonp([97981447546753],{4142:function(e,o){e.exports={data:{challengeNode:{title:"Create a Set of Radio Buttons",description:["<code>radio buttons</code>（单选按钮）就好比单项选择题，正确答案只有一个。","单选按钮只是<code>input</code>输入框的一种类型。","每一个单选按钮都应该嵌套在它自己的<code>label</code>（标签）元素中。","所有关联的单选按钮应该拥有相同的<code>name</code>属性。","下面是一个单选按钮的例子：",'<blockquote>&#60;label&#62; <br>&nbsp;&nbsp;&#60;input type="radio" name="indoor-outdoor"&#62;Indoor <br>&#60;/label&#62;</blockquote>',"最佳实践是在<code>label</code>元素上设置for属性，让其值与单选按钮的<code>id</code>属性值相等，这样就在<code>label</code>元素和它的子元素单选按钮之间创建了一种链接关系。例如：",'<blockquote>&#60;label for="indoor"&#62; <br>&nbsp;&nbsp;&#60;input id="indoor" type="radio" name="indoor-outdoor"&#62;Indoor <br>&#60;/label&#62;</blockquote>',"<hr>","给表单添加两个单选按钮，一个叫<code>indoor</code>，另一个叫<code>outdoor</code>。"],challengeType:0,fields:{slug:"/responsive-web-design/basic-html-and-html5/create-a-set-of-radio-buttons",blockName:"Basic HTML and HTML5",tests:[{text:"页面上应该有两个单选按钮元素。",testString:"assert($('input[type=\"radio\"]').length > 1, '页面上应该有两个单选按钮元素。');"},{text:"设置单选按钮的<code>name</code>属性为<code>indoor-outdoor</code>。",testString:"assert($('label > input[type=\"radio\"]').filter(\"[name='indoor-outdoor']\").length > 1, '设置单选按钮的<code>name</code>属性为<code>indoor-outdoor</code>。');"},{text:"每一个单选按钮都应该嵌套进它自己的<code>label</code>元素中。",testString:"assert($('label > input[type=\"radio\"]:only-child').length > 1, '每一个单选按钮都应该嵌套进它自己的<code>label</code>元素中。');"},{text:"每一个<code>label</code>元素都有结束标记。",testString:"assert((code.match(/<\\/label>/g) && code.match(/<label/g) && code.match(/<\\/label>/g).length === code.match(/<label/g).length), '每一个<code>label</code>元素都有结束标记。');"},{text:"其中一个<code>label</code>元素的文本为<code>indoor</code>。",testString:"assert($(\"label\").text().match(/indoor/gi), '其中一个<code>label</code>元素的文本为<code>indoor</code>。');"},{text:"其中一个<code>label</code>元素的文本为<code>outdoor</code>。",testString:"assert($(\"label\").text().match(/outdoor/gi), '其中一个<code>label</code>元素的文本为<code>outdoor</code>。');"},{text:"所有的单选按钮都应该包含在<code>form</code>表单中。",testString:"assert($(\"label\").parent().get(0).tagName.match('FORM'), '所有的单选按钮都应该包含在<code>form</code>表单中。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<h2>CatPhotoApp</h2>\n<main>\n  \n  <a href="#"><img src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫"></a>\n  \n  <p>猫咪最喜欢的三件东西：</p>\n  <ul>\n    <li>猫薄荷</li>\n    <li>激光笔</li>\n    <li>千层饼</li>\n  </ul>\n  <p>猫咪最讨厌的三件东西：</p>\n  <ol>\n    <li>跳蚤</li>\n    <li>打雷</li>\n    <li>同类</li>\n  </ol>\n  <form action="/submit-cat-photo">\n    <input type="text" placeholder="猫咪图片地址" required>\n    <button type="submit">提交</button>\n  </form>\n</main>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-html-and-html5/create-a-set-of-checkboxes",id:"bad87fee1348bd9aedf08834"},slug:"/responsive-web-design/basic-html-and-html5/create-a-set-of-radio-buttons"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-html-and-html-5-create-a-set-of-radio-buttons-e890cfa32a56b563718b.js.map