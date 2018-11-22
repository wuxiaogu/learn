webpackJsonp([0x627883f47e85],{3637:function(s,e){s.exports={data:{challengeNode:{title:"Split Your Styles into Smaller Chunks with Partials",description:["Sass 中的<code>Partials</code>是包含 CSS 代码段的单独文件。这些是在其他 Sass 文件中导入和使用的。我们可以把类似代码放到模块中，以保持代码结构规整且易于管理。","<code>partials</code>的名称以下划线（<code>_</code>）字符开头，告诉 Sass 它是 CSS 的一小部分，而不是将其转换为 CSS 文件。此外，Sass 文件以<code>.scss</code>文件扩展名结尾。要将<code>partial</code>中的代码放入另一个 Sass 文件中，请使用<code>@import</code>指令。",'例如，如果所有<code>mixins</code>都保存在名为 "_mixins.scss " 的<code>partial</code>中，并且在"main.scss "文件中需要它们，这是如何在主文件中使用它们：',"<blockquote>// In the main.scss file<br><br>@import 'mixins'</blockquote>","请注意，<code>import</code>语句中不需要下划线——Sass 知道它是<code>partial</code>。将<code>partial</code>导入文件后，可以使用所有变量<code>mixins</code>和其他代码。","<hr>","编写<code>@import</code>语句，将名为<code>_variables.scss</code>的<code>partial</code>导入 main.scss 文件。"],challengeType:0,fields:{slug:"/front-end-libraries/sass/split-your-styles-into-smaller-chunks-with-partials",blockName:"Sass",tests:[{text:"你的代码应使用<code>@import</code>指令，并且不应在文件名中包含下划线。",testString:"assert(code.match(/@import\\s+?('|\")variables\\1/gi), '你的代码应使用<code>@import</code>指令，并且不应在文件名中包含下划线。');"}]},required:[{link:null,raw:!0,src:"https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js"}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"// The main.scss file\n\n\n\n",head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:null,raw:!0,src:"https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js"}],nextChallengePath:"/front-end-libraries/sass/extend-one-set-of-css-styles-to-another-element",id:"587d7dbf367417b2b2512bbc"},slug:"/front-end-libraries/sass/split-your-styles-into-smaller-chunks-with-partials"}}}});
//# sourceMappingURL=path---front-end-libraries-sass-split-your-styles-into-smaller-chunks-with-partials-a42283cec39987740c6c.js.map