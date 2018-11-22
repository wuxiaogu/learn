webpackJsonp([0x868f65d43594],{4057:function(e,o){e.exports={data:{challengeNode:{title:"Create Movement Using CSS Animation",description:["当元素的<code>position</code>被指定，如<code>fixed</code>或者<code>relative</code>时，CSS 偏移属性<code>right</code>、<code>left</code>、<code>top</code>和<code>bottom</code>可以用在动画规则里创建动作。","就像下面的例子展示的那样，你可以在<code>50%</code>keyframe 处设置<code>top</code>属性为 50px， 在开始（0%）和最后（100%）keframe 处设置为 0px，以产生项目向下运动，然后返回的动作效果。","<blockquote>@keyframes rainbow {<br>&nbsp;&nbsp;0% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: blue;<br>&nbsp;&nbsp;&nbsp;&nbsp;top: 0px;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;50% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: green;<br>&nbsp;&nbsp;&nbsp;&nbsp;top: 50px;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;100% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: yellow;<br>&nbsp;&nbsp;&nbsp;&nbsp;top: 0px;<br>&nbsp;&nbsp;}<br>}</blockquote>","<hr>","让<code>div</code>水平运动。使用<code>left</code>偏移属性，添加<code>@keyframes</code>规则，让 rainbow 在<code>0%</code>的 0 像素开始，在<code>50%</code>时移动到 25 像素，在<code>100%</code>时时移动到 -25 像素。不要替换编辑器里的<code>top</code>属性，动画应该同时向水平和竖直方向运动。"],challengeType:0,fields:{slug:"/responsive-web-design/applied-visual-design/create-movement-using-css-animation",blockName:"Applied Visual Design",tests:[{text:"<code>0%</code>的<code>@keyframes</code>规则应该为向<code>left</code>偏移<code>0px</code>。",testString:"assert(code.match(/0%\\s*?{\\s*?background-color:\\s*?blue;\\s*?top:\\s*?0px;\\s*?left:\\s*?0px;\\s*?}/gi), '<code>0%</code>的<code>@keyframes</code>规则应该为向<code>left</code>偏移<code>0px</code>。');"},{text:"<code>50%</code>的<code>@keyframes</code>规则应该为向<code>left</code>偏移<code>25px</code>。",testString:"assert(code.match(/50%\\s*?{\\s*?background-color:\\s*?green;\\s*?top:\\s*?50px;\\s*?left:\\s*?25px;\\s*?}/gi), '<code>50%</code>的<code>@keyframes</code>规则应该为向<code>left</code>偏移<code>25px</code>。');"},{text:"<code>100%</code>的<code>@keyframes</code>规则应该为向<code>left</code>偏移<code>-25px</code>。",testString:"assert(code.match(/100%\\s*?{\\s*?background-color:\\s*?yellow;\\s*?top:\\s*?0px;\\s*?left:\\s*?-25px;\\s*?}/gi), '<code>100%</code>的<code>@keyframes</code>规则应该为向<code>left</code>偏移<code>-25px</code>。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  div {\n    height: 40px;\n    width: 70%;\n    background: black;\n    margin: 50px auto;\n    border-radius: 5px;\n    position: relative;\n  }\n\n#rect {\n  animation-name: rainbow;\n  animation-duration: 4s;\n}\n\n@keyframes rainbow {\n  0% {\n    background-color: blue;\n    top: 0px;\n    \n  }\n  50% {\n    background-color: green;\n    top: 50px;\n    \n  }\n  100% {\n    background-color: yellow;\n    top: 0px;\n    \n  }\n}\n</style>\n\n<div id="rect"></div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/applied-visual-design/create-visual-direction-by-fading-an-element-from-left-to-right",id:"587d78a7367417b2b2512ae1"},slug:"/responsive-web-design/applied-visual-design/create-movement-using-css-animation"}}}});
//# sourceMappingURL=path---responsive-web-design-applied-visual-design-create-movement-using-css-animation-a9cf4a978c099aa6494a.js.map