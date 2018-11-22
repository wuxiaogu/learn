webpackJsonp([60468129365276],{4138:function(e,t){e.exports={data:{challengeNode:{title:"Comment out HTML",description:["记住：注释的开始标记是<code>&#60;!--</code>，结束标记是<code>--&#62;</code>。","现在你需要在<code>h2</code>元素前终止注释。","<hr>","任务：<code>h1</code>元素和<code>p</code>元素都注释掉，<code>h2</code>元素保留。"],challengeType:0,fields:{slug:"/responsive-web-design/basic-html-and-html5/comment-out-html",blockName:"Basic HTML and HTML5",tests:[{text:"注释掉<code>h1</code>元素，这样它就从网页上消失了。",testString:"assert(($(\"h1\").length === 0), '注释掉<code>h1</code>元素，这样它就从网页上消失了。');"},{text:"<code>h2</code>元素保持原样，这样网页上还能看到它。",testString:"assert(($(\"h2\").length > 0), '<code>h2</code>元素保持原样，这样网页上还能看到它。');"},{text:"注释掉<code>p</code>元素，这样它就从网页上消失了。",testString:"assert(($(\"p\").length === 0), '注释掉<code>p</code>元素，这样它就从网页上消失了。');"},{text:"确保每一个注释都以<code>--&#62;</code>结尾。",testString:"assert(code.match(/[^fc]-->/g).length > 1, '确保每一个注释都以<code>--&#62;</code>结尾。');"},{text:"不要更改<code>h1</code>元素、<code>h2</code> 元素、<code>p</code>元素的顺序。",testString:'assert((code.match(/<([a-z0-9]){1,2}>/g)[0]==="<h1>" && code.match(/<([a-z0-9]){1,2}>/g)[1]==="<h2>" && code.match(/<([a-z0-9]){1,2}>/g)[2]==="<p>") , \'不要更改<code>h1</code>元素、<code>h2</code>元素、<code>p</code>元素的顺序。\');'}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<!--\n<h1>Hello World</h1>\n\n<h2>CatPhotoApp</h2>\n\n<p>在大家心目中，猫是慵懒和可爱的化身，它可以睡饱了再起来吃饭，可以逗趣小耗子，可以卖得了萌，使得了坏，这样百变的小怪兽就集结在一只宠物上，怎能不惹人怜爱。</p>\n-->",head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-html-and-html5/delete-html-elements",id:"bad87fee1348bd9aedf08804"},slug:"/responsive-web-design/basic-html-and-html5/comment-out-html"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-html-and-html-5-comment-out-html-597cd54c7d1e08f2e4f9.js.map