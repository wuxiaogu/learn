webpackJsonp([0xb8bbcf811299],{4087:function(e,t){e.exports={data:{challengeNode:{title:"Use the text-transform Property to Make Text Uppercase",description:["CSS 里面的<code>text-transform</code>属性来改变英文中字母的大小写。它通常用来统一页面里英文的显示，且无需直接改变 HTML 元素中的文本。","下面的表格展示了<code>text-transform</code>的不同值对文字 “Transform me” 的影响。",'<table class="table table-striped"><thead><th>Value<th>Result<tbody><tr><td><code>lowercase</code><td>"transform me"<tr><td><code>uppercase</code><td>"TRANSFORM ME"<tr><td><code>capitalize</code><td>"Transform Me"<tr><td><code>initial</code><td>使用默认值<tr><td><code>inherit</code><td>使用父元素的<code>text-transform</code>值。<tr><td><code>none</code><td><strong>Default:</strong>不改变文字。</td></table>',"<hr>","使用<code>text-transform</code>属性把<code>h4</code>内的英文的所有字母变成大写。"],challengeType:0,fields:{slug:"/responsive-web-design/applied-visual-design/use-the-text-transform-property-to-make-text-uppercase",blockName:"Applied Visual Design",tests:[{text:"<code>h4</code>内的英文的所有字母应该为大写。",testString:"assert($('h4').css('text-transform') === 'uppercase', '<code>h4</code>内的英文的所有字母应该为大写。');"},{text:"<code>h4</code>内的原文不能被改变。",testString:"assert(($('h4').text() !== $('h4').text().toUpperCase()), '<code>h4</code>内的原文不能被改变。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  h4 {\n    text-align: center;\n    background-color: rgba(45, 45, 45, 0.1);\n    padding: 10px;\n    font-size: 27px;\n    \n  }\n  p {\n    text-align: justify;\n  }\n  .links {\n    text-align: left;\n    color: black;\n    opacity: 0.7;\n  }\n  #thumbnail {\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n  }\n  .fullCard {\n    width: 245px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    margin: 10px 5px;\n    padding: 4px;\n  }\n  .cardContent {\n    padding: 10px;\n  }\n  .cardText {\n    margin-bottom: 30px;\n  }\n</style>\n<div class="fullCard" id="thumbnail">\n  <div class="cardContent">\n    <div class="cardText">\n      <h4>Alphabet</h4>\n      <hr>\n      <p><em>Google 由在<strong>斯坦福大学</strong>攻读<u>理工博士</u>的拉里·佩奇和谢尔盖·布林共同创建。</em></p>\n    </div>\n    <div class="cardLinks">\n      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">拉里·佩奇</a><br><br>\n      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">谢尔盖·布林</a>\n    </div>\n  </div>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/applied-visual-design/set-the-font-size-for-multiple-heading-elements",id:"587d781c367417b2b2512ac0"},slug:"/responsive-web-design/applied-visual-design/use-the-text-transform-property-to-make-text-uppercase"}}}});
//# sourceMappingURL=path---responsive-web-design-applied-visual-design-use-the-text-transform-property-to-make-text-uppercase-5e78fc24b02cdf37f0b8.js.map