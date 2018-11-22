webpackJsonp([0x788cf33ca0c2],{3933:function(e,a){e.exports={data:{challengeNode:{title:"Map the Debris",description:["在这道题目中，我们需要写一个计算天体轨道周期的函数，它接收一个对象数组参数<code>arr</code>，对象中包含表示天体名称的<code>name</code>属性，及表示轨道半长轴的<code>avgAlt</code>属性。就像这样：<code>{name: 'name', avgAlt: avgAlt}</code>。","这个函数的返回值也是一个对象数组，应保留原对象中的<code>name</code>属性和值，然后根据<code>avgAlt</code>属性的值求出轨道周期（单位是秒），并赋值给<code>orbitalPeriod</code>属性。返回值中不应保留原数据中的<code>avgAlt</code>属性及其对应的值。","你可以在这条<a href=\"http://en.wikipedia.org/wiki/Orbital_period\" target='_blank'>维基百科</a>的链接中找到轨道周期的计算公式。","轨道周期的计算以地球为基准（即环绕地球的轨道周期），计算结果应取整到最接近的整数。","地球的半径是 6367.4447 千米，地球的 GM 值为 398600.4418 km<sup>3</sup>s<sup>-2</sup>。","如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。"],challengeType:5,fields:{slug:"/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris",blockName:"Intermediate Algorithm Scripting",tests:[{text:'<code>orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])</code>应该返回<code>[{name: "sputnik", orbitalPeriod: 86400}]</code>。',testString:'assert.deepEqual(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]), [{name: "sputnik", orbitalPeriod: 86400}], \'<code>orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])</code>应该返回<code>[{name: "sputnik", orbitalPeriod: 86400}]</code>。\');'},{text:'<code>orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])</code>应该返回<code>[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]</code>。',testString:'assert.deepEqual(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]), [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}], \'<code>orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])</code>应该返回<code>[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]</code>。\');'}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'function orbitalPeriod(arr) {\n  var GM = 398600.4418;\n  var earthRadius = 6367.4447;\n  return arr;\n}\n\norbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker",id:"af4afb223120f7348cdfc9fd"},slug:"/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-intermediate-algorithm-scripting-map-the-debris-15aa56437528ccb2690e.js.map