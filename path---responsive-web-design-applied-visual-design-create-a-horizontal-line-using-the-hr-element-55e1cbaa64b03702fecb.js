webpackJsonp([4559340240618],{4055:function(e,n){e.exports={data:{challengeNode:{title:"Create a Horizontal Line Using the hr Element",description:["术语：Horizontal Rule => hr => 水平线。","你可以用<code>hr</code>标签来创建一条宽度撑满父元素的水平线。它一般用来表示文档主题的改变，在视觉上将文档分隔成几个部分。","<hr>","在包含卡片标题的<code>h4</code>下面添加一个<code>hr</code>标签。","<strong>注意</strong><br>在 HTML 里，<code>hr</code>是自关闭标签，所以不需要一个单独的关闭标签。"],challengeType:0,fields:{slug:"/responsive-web-design/applied-visual-design/create-a-horizontal-line-using-the-hr-element",blockName:"Applied Visual Design",tests:[{text:"你应该添加一个<code>hr</code>标签。",testString:"assert($('hr').length == 1, '你应该添加一个<code>hr</code>标签。');"},{text:"<code>hr</code>标签应该在标题和段落之间。",testString:"assert(code.match(/<\\/h4>\\s*?<hr(>|\\s*?\\/>)\\s*?<p>/gi), '<code>hr</code>标签应该在标题和段落之间。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  h4 {\n    text-align: center;\n    height: 25px;\n  }\n  p {\n    text-align: justify;\n  }\n  .links {\n    text-align: left;\n    color: black;\n  }\n  .fullCard {\n    width: 245px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    margin: 10px 5px;\n    padding: 4px;\n  }\n  .cardContent {\n    padding: 10px;\n  }\n  .cardText {\n    margin-bottom: 30px;\n  }\n</style>\n<div class="fullCard">\n  <div class="cardContent">\n    <div class="cardText">\n      <h4><s>Google</s>Alphabet</h4>\n      <p><em>Google 由在<strong>斯坦福大学</strong>攻读<u>理工博士</u>的拉里·佩奇和谢尔盖·布林共同创建。</em></p>\n    </div>\n    <div class="cardLinks">\n      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">拉里·佩奇</a><br><br>\n      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">谢尔盖·布林</a>\n    </div>\n  </div>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/applied-visual-design/adjust-the-background-color-property-of-text",id:"587d781b367417b2b2512abb"},slug:"/responsive-web-design/applied-visual-design/create-a-horizontal-line-using-the-hr-element"}}}});
//# sourceMappingURL=path---responsive-web-design-applied-visual-design-create-a-horizontal-line-using-the-hr-element-55e1cbaa64b03702fecb.js.map