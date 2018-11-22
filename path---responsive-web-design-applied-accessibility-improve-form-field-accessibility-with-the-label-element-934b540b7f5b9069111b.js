webpackJsonp([0xb26a15398444],{4021:function(e,t){e.exports={data:{challengeNode:{title:"Improve Form Field Accessibility with the label Element",description:["合理地使用语义化的 HTML 标签和属性可以提升页面可访问性。在接下来的挑战中，你将会看到使用表单属性的重要场景。","<code>label</code>标签用于呈现特定表单控件的文本，通常是选项的名称。这些文本代表了选项的含义，使表单具有更好的可读性。<code>label</code>标签的<code>for</code>属性指定了与<code>label</code>绑定的表单控件，并且屏幕阅读器也会读取<code>for</code>属性。","在 HTML 基础章节的课程中，我们已经了解了单选按钮标签。在那节课程中，我们为了可以点击单选按钮的名称，将<code>input</code>标签放在<code>label</code>标签中。在本节课程中，我们介绍了另外一种实现这个功能的方法，那就是使用<code>for</code>属性。","<code>for</code>属性的值必须与表达控件的<code>id</code>属性的值相同。举个例子：","<blockquote>&lt;form&gt;<br>&nbsp;&nbsp;&lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;<br>&nbsp;&nbsp;&lt;input type=&quottext&quot; id=&quot;name&quot; name=&quot;name&quot;&gt;<br>&lt;/form&gt;<br></blockquote>","<hr>","Camper Cat 希望他的博客文章能有很多订阅，他想添加一个电子邮件注册表单。请为表示电子邮件的<code>label</code>标签添加<code>for</code>属性，并设置属性值与<code>input</code>标签的<code>id</code>属性值相同。"],challengeType:0,fields:{slug:"/responsive-web-design/applied-accessibility/improve-form-field-accessibility-with-the-label-element",blockName:"Applied Accessibility",tests:[{text:"你的<code>label</code>标签应该有 1 个非空的<code>for</code>属性。",testString:"assert($('label').attr('for'), '你的<code>label</code>标签应该有 1 个非空的<code>for</code>属性。');"},{text:"<code>for</code>属性的值应该与<code>input</code>标签的 id 值 email 相同。",testString:"assert($('label').attr('for') == 'email', '<code>for</code>属性的值应该与<code>input</code>标签的 id 值 email 相同。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<body>\n  <header>\n    <h1>Deep Thoughts with Master Camper Cat</h1>\n  </header>\n  <section>\n    <form>\n      <p>Sign up to receive Camper Cat\'s blog posts by email here!</p>\n      \n      \n      <label>Email:</label>\n      <input type="text" id="email" name="email">\n      \n      \n      <input type="submit" name="submit" value="Submit">\n    </form>\n  </section>\n  <article>\n    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>\n    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let\'s turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>\n  </article>\n  <img src="samuraiSwords.jpeg" alt="">\n  <article>\n    <h2>Defeating your Foe: the Red Dot is Ours!</h2>\n    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near...</p>\n  </article>\n  <img src="samuraiSwords.jpeg" alt="">\n  <article>\n    <h2>Is Chuck Norris a Cat Person?</h2>\n    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it\'s a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>\n  </article>\n  <footer>&copy; 2016 Camper Cat</footer>\n</body>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/applied-accessibility/wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility",id:"587d778a367417b2b2512aa6"},slug:"/responsive-web-design/applied-accessibility/improve-form-field-accessibility-with-the-label-element"}}}});
//# sourceMappingURL=path---responsive-web-design-applied-accessibility-improve-form-field-accessibility-with-the-label-element-934b540b7f5b9069111b.js.map