webpackJsonp([34569507793539],{4088:function(e,n){e.exports={data:{challengeNode:{title:"Use the u Tag to Underline Text",description:["术语：Underline => u => 下划线。","你可以使用<code>u</code>标签来给文字添加下划线。添加了<code>u</code>标签后，浏览器会自动给元素应用<code>text-decoration: underline;</code>。","<hr>","给 “理工博士” 添加<code>u</code>标签，不要给整个 class 为<code>cardText</code>的父<code>div</code>添加。","<strong>注意：</strong>锚点默认给文本添加下划线，如果<code>u</code>标签的下划线和页面的锚点混淆，请避免使用它。"],challengeType:0,fields:{slug:"/responsive-web-design/applied-visual-design/use-the-u-tag-to-underline-text",blockName:"Applied Visual Design",tests:[{text:"你应该有一个<code>u</code>标签。",testString:"assert($('u').length === 1, '你应该有一个<code>u</code>标签。');"},{text:"<code>u</code>标签应该包围 “理工博士”。",testString:"assert($('u').text() === '理工博士', '<code>u</code>标签应该包围 “理工博士”。');"},{text:"<code>u</code>标签内不应包含额外的<code>div</code>标签。",testString:"assert($('u').children('div').length === 0, '<code>u</code>标签内不应包含额外的<code>div</code>标签。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  h4 {\n    text-align: center;\n    height: 25px;\n  }\n  p {\n    text-align: justify;\n  }\n  .links {\n    text-align: left;\n    color: black;\n  }\n  .fullCard {\n    width: 245px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    margin: 10px 5px;\n    padding: 4px;\n  }\n  .cardContent {\n    padding: 10px;\n  }\n  .cardText {\n    margin-bottom: 30px;\n  }\n</style>\n<div class="fullCard">\n  <div class="cardContent">\n    <div class="cardText">\n      <h4>Google</h4>\n      <p>Google 由在<strong>斯坦福大学</strong>攻读理工博士的拉里·佩奇和谢尔盖·布林共同创建。</p>\n    </div>\n    <div class="cardLinks">\n      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">拉里·佩奇</a><br><br>\n      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">谢尔盖·布林</a>\n    </div>\n  </div>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/applied-visual-design/use-the-em-tag-to-italicize-text",id:"587d781a367417b2b2512ab8"},slug:"/responsive-web-design/applied-visual-design/use-the-u-tag-to-underline-text"}}}});
//# sourceMappingURL=path---responsive-web-design-applied-visual-design-use-the-u-tag-to-underline-text-2adc98ed1408fb6b9ad4.js.map