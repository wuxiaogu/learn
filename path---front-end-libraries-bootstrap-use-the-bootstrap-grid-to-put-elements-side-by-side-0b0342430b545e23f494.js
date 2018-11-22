webpackJsonp([0xc5649bcc6808],{3527:function(t,e){t.exports={data:{challengeNode:{title:"Use the Bootstrap Grid to Put Elements Side By Side",description:["Bootstrap 具有一套基于 12 列的响应式栅格系统————可以轻松实现将多个元素放入一行并指定它们的相对宽度。 Bootstrap 的大部分 class 属性都可以应用在 <code>div</code> 元素上。","Bootstrap 的列宽度属性取决于用户的屏幕宽度。 比如，手机有着窄屏幕而笔记本电脑有者更大的屏幕.","就拿 Bootstrap 的 <code>col-md-*</code> class 来说。 在这里， <code>md</code> 表示 medium （中等的）， 而 <code>*</code> 是一个数字，说明了这个元素占有多少个列宽度。这个例子就是指定了中等大小屏幕（例如笔记本电脑）下元素所占的列宽度。","在我们创建的 Cat Photo App 中，我们将使用 <code>col-xs-*</code> ， 其中 <code>xs</code> 是 extra small 的缩写 (应用于较小的屏幕，比如手机屏幕)， <code>*</code> 是你填写的数字，代表一行中，你的元素该占多少列宽。",'将我们的 <code>Like</code>, <code>Info</code> 和 <code>Delete</code> 三个按钮并排放入一个 <code>&#60;div class="row"&#62;</code> 元素中，然后每个按钮都各用一个 <code>&#60;div class="col-xs-4"&#62;</code> 元素包裹起来。',"当 <code>div</code> 元素设置了 <code>row</code> class 之后，那几个按钮便会嵌入其中了。"],challengeType:0,fields:{slug:"/front-end-libraries/bootstrap/use-the-bootstrap-grid-to-put-elements-side-by-side",blockName:"Bootstrap",tests:[{text:"所有按钮都需要嵌入到同一个 <code>div</code> 元素中， 并且该元素包含 class 属性 <code>row</code>。",testString:"assert($(\"div.row:has(button)\").length > 0, '所有按钮都需要嵌入到同一个 <code>div</code> 元素中， 并且该元素包含 class 属性 <code>row</code>。');"},{text:"每个 Bootstrap 按钮都需要嵌入各自的 <code>div</code> 元素，并且该元素包含 class 属性 <code>col-xs-4</code>。",testString:"assert($(\"div.col-xs-4:has(button)\").length > 2, '每个 Bootstrap 按钮都需要嵌入各自的 <code>div</code> 元素，并且该元素包含 class 属性 <code>col-xs-4</code>。');"},{text:"确保每一个 <code>button</code> 元素都有一个闭合标签。",testString:"assert(code.match(/<\\/button>/g) && code.match(/<button/g) && code.match(/<\\/button>/g).length === code.match(/<button/g).length, '确保每一个 <code>button</code> 元素都有一个闭合标签。');"},{text:"确保每一个 <code>div</code> 元素都有一个闭合标签。",testString:"assert(code.match(/<\\/div>/g) && code.match(/<div/g) && code.match(/<\\/div>/g).length === code.match(/<div/g).length, '确保每一个 <code>div</code> 元素都有一个闭合标签。');"}]},required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">\n<style>\n  .red-text {\n    color: red;\n  }\n\n  h2 {\n    font-family: Lobster, Monospace;\n  }\n\n  p {\n    font-size: 16px;\n    font-family: Monospace;\n  }\n\n  .thick-green-border {\n    border-color: green;\n    border-width: 10px;\n    border-style: solid;\n    border-radius: 50%;\n  }\n\n  .smaller-image {\n    width: 100px;\n  }\n</style>\n\n<div class="container-fluid">\n  <h2 class="red-text text-center">CatPhotoApp</h2>\n\n  <p>Click here for <a href="#">cat photos</a>.</p>\n\n  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>\n\n  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">\n  <button class="btn btn-block btn-primary">Like</button>\n  <button class="btn btn-block btn-info">Info</button>\n  <button class="btn btn-block btn-danger">Delete</button>\n  <p>Things cats love:</p>\n  <ul>\n    <li>cat nip</li>\n    <li>laser pointers</li>\n    <li>lasagna</li>\n  </ul>\n  <p>Top 3 things cats hate:</p>\n  <ol>\n    <li>flea treatment</li>\n    <li>thunder</li>\n    <li>other cats</li>\n  </ol>\n  <form action="/submit-cat-photo">\n    <label><input type="radio" name="indoor-outdoor"> Indoor</label>\n    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>\n    <label><input type="checkbox" name="personality"> Loving</label>\n    <label><input type="checkbox" name="personality"> Lazy</label>\n    <label><input type="checkbox" name="personality"> Crazy</label>\n    <input type="text" placeholder="cat photo URL" required>\n    <button type="submit">Submit</button>\n  </form>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],nextChallengePath:"/front-end-libraries/bootstrap/ditch-custom-css-for-bootstrap",id:"bad88fee1348ce8acef08815"},slug:"/front-end-libraries/bootstrap/use-the-bootstrap-grid-to-put-elements-side-by-side"}}}});
//# sourceMappingURL=path---front-end-libraries-bootstrap-use-the-bootstrap-grid-to-put-elements-side-by-side-0b0342430b545e23f494.js.map