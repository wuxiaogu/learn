webpackJsonp([0xd6c855c5ed82],{3346:function(e,t){e.exports={data:{challengeNode:{title:"Abundant, deficient and perfect number classifications",description:['<p>它们根据适当的<a href="http://rosettacode.org/wiki/Proper divisors" title="合适的除数">除数</a>定义了三个正整数分类。</p>',"<p>假设$P(n)$是n的固有因数的和，其中固有因数都是正整数n而不是n本身。</p>",'<p>如果<code>P(n) < n</code>，那么n被分类为"deficient"</p>','<p>如果<code>P(n) === n</code>，那么n被分类为"perfect"</p>','<p>如果<code>P(n) > n</code>，那么n被分类为"abundant"</p>',"<p>例如：</p>","<p>6含有1、2、3共3个除数</p>",'<p>1 + 2 + 3 = 6，因此6被分类为"perfect"</p>',"<p>实现一个函数，该函数计算三个分类中1到20000(包含)的整数的数量。将结果输出为以下格式的数组<code>[deficient, perfect, abundant]</code>。</p>"],challengeType:5,fields:{slug:"/coding-interview-prep/rosetta-code/abundant-deficient-and-perfect-number-classifications",blockName:"Rosetta Code",tests:[{text:"<code>getDPA</code> 是一个函数。",testString:"assert(typeof getDPA === 'function', '<code>getDPA</code> 是一个函数。');"},{text:"<code>getDPA</code> 应返回数组。",testString:"assert(Array.isArray(getDPA(100)), '<code>getDPA</code> 应返回数组。');"},{text:"<code>getDPA</code> 应返回长度为3的值。",testString:"assert(getDPA(100).length === 3, '<code>getDPA</code> 应返回长度为3的值。');"},{text:"<code>getDPA(20000)</code> 应等于[15043, 4, 4953]",testString:"assert.deepEqual(getDPA(20000), solution, '<code>getDPA(20000)</code> 应等于[15043, 4, 4953]');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function getDPA (num) {\n  // 祝你好运！\n}",head:"",tail:"const solution = [15043, 4, 4953];"},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/rosetta-code/accumulator-factory",id:"594810f028c0303b75339acd"},slug:"/coding-interview-prep/rosetta-code/abundant-deficient-and-perfect-number-classifications"}}}});
//# sourceMappingURL=path---coding-interview-prep-rosetta-code-abundant-deficient-and-perfect-number-classifications-b4fdae58ceb4fc081cfc.js.map