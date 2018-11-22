webpackJsonp([5968360928579],{4162:function(e,o){e.exports={data:{challengeNode:{title:"Add Flex Superpowers to the Tweet Embed",description:["我们以右边的内嵌推文为基础开始实践。一些元素换一个布局方式或许更好看。上一个挑战演示了<code>display: flex</code>，现在你需要把它添加到推文内嵌的多个组件中，调整它们的位置。","<hr>","为下列项目添加 CSS 属性<code>display: flex</code>—— 注意，选择器已在 CSS 中给出：","<code>header</code>、header 的<code>.profile-name</code>、header 的<code>.follow-btn</code>、header 的<code>h3</code>和<code>h4</code>、<code>footer</code>以及 footer 的<code>.stats</code>。"],challengeType:0,fields:{slug:"/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed",blockName:"CSS Flexbox",tests:[{text:"<code>header</code>的<code>display</code>属性应为 flex。",testString:"assert($('header').css('display') == 'flex', '<code>header</code>的<code>display</code>属性应为 flex。');"},{text:"<code>footer</code>的<code>display</code>属性应为 flex。",testString:"assert($('footer').css('display') == 'flex', '<code>footer</code>的<code>display</code>属性应为 flex。');"},{text:"<code>h3</code>的<code>display</code>属性应为 flex。",testString:"assert($('h3').css('display') == 'flex', '<code>h3</code>的<code>display</code>属性应为 flex。');"},{text:"<code>h4</code>的<code>display</code>属性应为 flex。",testString:"assert($('h4').css('display') == 'flex', '<code>h4</code>的<code>display</code>属性应为 flex。');"},{text:"<code>.profile-name</code>的<code>display</code>属性应为 flex。",testString:"assert($('.profile-name').css('display') == 'flex', '<code>.profile-name</code>的<code>display</code>属性应为 flex。');"},{text:"<code>.follow-btn</code>的<code>display</code>属性应为 flex。",testString:"assert($('.follow-btn').css('display') == 'flex', '<code>.follow-btn</code>的<code>display</code>属性应为 flex。');"},{text:"<code>.stats</code>的<code>display</code>属性应为 flex。",testString:"assert($('.stats').css('display') == 'flex', '<code>.stats</code>的<code>display</code>属性应为 flex。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  body {\n    font-family: Arial, sans-serif;\n  }\n  header {\n    \n  }\n  header .profile-thumbnail {\n    width: 50px;\n    height: 50px;\n    border-radius: 4px;\n  }\n  header .profile-name {\n    \n    margin-left: 10px;\n  }\n  header .follow-btn {\n    \n    margin: 0 0 0 auto;\n  }\n  header .follow-btn button {\n    border: 0;\n    border-radius: 3px;\n    padding: 5px;\n  }\n  header h3, header h4 {\n    \n    margin: 0;\n  }\n  #inner p {\n    margin-bottom: 10px;\n    font-size: 20px;\n  }\n  #inner hr {\n    margin: 20px 0;\n    border-style: solid;\n    opacity: 0.1;\n  }\n  footer {\n    \n  }\n  footer .stats {\n    \n    font-size: 15px;\n  }\n  footer .stats strong {\n    font-size: 18px;\n  }\n  footer .stats .likes {\n    margin-left: 10px;\n  }\n  footer .cta {\n    margin-left: auto;\n  }\n  footer .cta button {\n    border: 0;\n    background: transparent;\n  }\n</style>\n<header>\n  <img src="https://pbs.twimg.com/profile_images/378800000147359764/54dc9a5c34e912f34db8662d53d16a39_400x400.png" alt="Quincy Larson\'s profile picture" class="profile-thumbnail">\n  <div class="profile-name">\n    <h3>Quincy Larson</h3>\n    <h4>@ossia</h4>\n  </div>\n  <div class="follow-btn">\n    <button>Follow</button>\n  </div>\n</header>\n<div id="inner">\n  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>\n  <span class="date">1:32 PM - 12 Jan 2018</span>\n  <hr>\n</div>\n<footer>\n  <div class="stats">\n    <div class="Retweets">\n      <strong>107</strong> Retweets\n    </div>\n    <div class="likes">\n      <strong>431</strong> Likes\n    </div>\n  </div>\n  <div class="cta">\n    <button class="share-btn">Share</button>\n    <button class="retweet-btn">Retweet</button>\n    <button class="like-btn">Like</button>\n  </div>\n</footer>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/css-flexbox/use-the-flex-direction-property-to-make-a-row",id:"587d78ab367417b2b2512af1"},slug:"/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed"}}}});
//# sourceMappingURL=path---responsive-web-design-css-flexbox-add-flex-superpowers-to-the-tweet-embed-0d05197d422a9f22d888.js.map