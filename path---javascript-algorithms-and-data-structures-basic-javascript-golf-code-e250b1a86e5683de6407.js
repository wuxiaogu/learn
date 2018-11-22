webpackJsonp([48211936894813],{3803:function(e,o){e.exports={data:{challengeNode:{title:"Golf Code",description:['在高尔夫<a href="https://en.wikipedia.org/wiki/Golf" target="_blank">golf</a>游戏中，每个洞都有自己的标准杆数<code>par</code>，代表着距离。根据你把球打进洞所挥杆的次数<code>strokes</code>，可以计算出你的高尔夫水平。',"函数将会传送 2 个参数，分别是标准杆数<code>par</code>和挥杆次数<code>strokes</code>，根据下面的表格返回正确的水平段位。",'<table class="table table-striped"><thead><tr><th>Strokes</th><th>Return</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&lt;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>&gt;= par + 3</td><td>"Go Home!"</td></tr></tbody></table>',"<code>par</code>和<code>strokes</code>必须是数字而且是正数。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/golf-code",blockName:"Basic JavaScript",tests:[{text:'<code>golfScore(4, 1)</code>应该返回 "Hole-in-one!"',testString:'assert(golfScore(4, 1) === "Hole-in-one!", \'<code>golfScore(4, 1)</code>应该返回 "Hole-in-one!"\');'},{text:'<code>golfScore(4, 2)</code>应该返回 "Eagle"',testString:'assert(golfScore(4, 2) === "Eagle", \'<code>golfScore(4, 2)</code>应该返回 "Eagle"\');'},{text:'<code>golfScore(5, 2)</code>应该返回 "Eagle"',testString:'assert(golfScore(5, 2) === "Eagle", \'<code>golfScore(5, 2)</code>应该返回 "Eagle"\');'},{text:'<code>golfScore(4, 3)</code>应该返回 "Birdie"',testString:'assert(golfScore(4, 3) === "Birdie", \'<code>golfScore(4, 3)</code>应该返回 "Birdie"\');'},{text:'<code>golfScore(4, 4)</code>应该返回 "Par"',testString:'assert(golfScore(4, 4) === "Par", \'<code>golfScore(4, 4)</code>应该返回 "Par"\');'},{text:'<code>golfScore(1, 1)</code>应该返回 "Hole-in-one!"',testString:'assert(golfScore(1, 1) === "Hole-in-one!", \'<code>golfScore(1, 1)</code>应该返回 "Hole-in-one!"\');'},{text:'<code>golfScore(5, 5)</code>应该返回 "Par"',testString:'assert(golfScore(5, 5) === "Par", \'<code>golfScore(5, 5)</code>应该返回 "Par"\');'},{text:'<code>golfScore(4, 5)</code>应该返回 "Bogey"',testString:'assert(golfScore(4, 5) === "Bogey", \'<code>golfScore(4, 5)</code>应该返回 "Bogey"\');'},{text:'<code>golfScore(4, 6)</code>应该返回 "Double Bogey"',testString:'assert(golfScore(4, 6) === "Double Bogey", \'<code>golfScore(4, 6)</code>应该返回 "Double Bogey"\');'},{text:'<code>golfScore(4, 7)</code>应该返回 "Go Home!"',testString:'assert(golfScore(4, 7) === "Go Home!", \'<code>golfScore(4, 7)</code>应该返回 "Go Home!"\');'},{text:'<code>golfScore(5, 9)</code>应该返回 "Go Home!"',testString:'assert(golfScore(5, 9) === "Go Home!", \'<code>golfScore(5, 9)</code>应该返回 "Go Home!"\');'}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];\nfunction golfScore(par, strokes) {\n  // 请把你的代码写在这条注释以下\n  \n  \n  return "Change Me";\n  // 请把你的代码写在这条注释以上\n}\n\n// Change these values to test\ngolfScore(5, 4);',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements",id:"5664820f61c48e80c9fa476c"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/golf-code"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-golf-code-e250b1a86e5683de6407.js.map