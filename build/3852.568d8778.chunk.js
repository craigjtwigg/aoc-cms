(self.webpackChunkaoc_cms=self.webpackChunkaoc_cms||[]).push([[3852],{63852:(e,n,r)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=r(67154),u=r(76826);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var o=a(t),i=a(u),A={CASE_SENSITIVE_EQUAL:9,EQUAL:8,STARTS_WITH:7,WORD_STARTS_WITH:6,STRING_CASE:5,STRING_CASE_ACRONYM:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},c={CAMEL:.8,PASCAL:.6,KEBAB:.4,SNAKE:.2,NO_CASE:0};s.rankings=A,s.caseRankings=c;var f=function(e,n){return String(e.rankedItem).localeCompare(n.rankedItem)};function s(e,n,r){void 0===r&&(r={});var t=r,u=t.keys,a=t.threshold,o=void 0===a?A.MATCHES:a,i=t.baseSort,c=void 0===i?f:i,s=e.reduce((function(e,t,a){var i=function(e,n,r,t){if(!n)return{rankedItem:e,rank:E(e,r,t),keyIndex:-1,keyThreshold:t.threshold};return function(e,n){return n.reduce((function(n,r){var t=function(e,n){"object"===typeof n&&(n=n.key);var r;r="function"===typeof n?n(e):-1!==n.indexOf(".")?n.split(".").reduce((function(e,n){return e?e[n]:null}),e):e[n];return null!=r?[].concat(r):null}(e,r);return t&&t.forEach((function(e){n.push({itemValue:e,attributes:C(r)})})),n}),[])}(e,n).reduce((function(e,n,u){var a=e.rank,o=e.rankedItem,i=e.keyIndex,c=e.keyThreshold,f=n.itemValue,s=n.attributes,d=E(f,r,t),C=o,k=s.minRanking,l=s.maxRanking,I=s.threshold;return d<k&&d>=A.MATCHES?d=k:d>l&&(d=l),d>a&&(a=d,i=u,c=I,C=f),{rankedItem:C,rank:a,keyIndex:i,keyThreshold:c}}),{rank:A.NO_MATCH,keyIndex:-1,keyThreshold:t.threshold})}(t,u,n,r),c=i.rankedItem,f=i.rank,s=i.keyIndex,d=i.keyThreshold;f>=(void 0===d?o:d)&&e.push({rankedItem:c,item:t,rank:f,index:a,keyIndex:s});return e}),[]);return s.sort((function(e,n){return function(e,n,r){var t=-1,u=1,a=e.rank,o=e.keyIndex,i=n.rank,A=n.keyIndex;return a===i?o===A?r(e,n):o<A?t:u:a>i?t:u}(e,n,c)})).map((function(e){return e.item}))}function E(e,n,r){if(e=d(e,r),(n=d(n,r)).length>e.length)return A.NO_MATCH;if(e===n)return A.CASE_SENSITIVE_EQUAL;var t=function(e){var n=e.toLowerCase()!==e,r=e.indexOf("-")>=0,t=e.indexOf("_")>=0;if(!n&&!t&&r)return c.KEBAB;if(!n&&t&&!r)return c.SNAKE;if(n&&!r&&!t){return e[0].toUpperCase()===e[0]?c.PASCAL:c.CAMEL}return c.NO_CASE}(e),u=function(e,n,r){var t=e.toLowerCase().indexOf(n.toLowerCase());switch(r){case c.SNAKE:return"_"===e[t-1];case c.KEBAB:return"-"===e[t-1];case c.PASCAL:case c.CAMEL:return-1!==t&&e[t]===e[t].toUpperCase();default:return!1}}(e,n,t),a=function(e,n,r){var t=null;switch(r){case c.SNAKE:t="_";break;case c.KEBAB:t="-";break;case c.PASCAL:case c.CAMEL:t=/(?=[A-Z])/;break;default:t=null}var u=e.split(t);return n.toLowerCase().split("").reduce((function(e,n,r){var t=u[r];return e&&t&&t[0].toLowerCase()===n}),!0)}(e,n,t);return(e=e.toLowerCase())===(n=n.toLowerCase())?A.EQUAL+t:0===e.indexOf(n)?A.STARTS_WITH+t:-1!==e.indexOf(" "+n)?A.WORD_STARTS_WITH+t:u?A.STRING_CASE+t:t>0&&a?A.STRING_CASE_ACRONYM+t:-1!==e.indexOf(n)?A.CONTAINS+t:1===n.length?A.NO_MATCH:-1!==function(e){var n="";return e.split(" ").forEach((function(e){e.split("-").forEach((function(e){n+=e.substr(0,1)}))})),n}(e).indexOf(n)?A.ACRONYM+t:function(e,n){var r=0,t=0;function u(e,n,t){for(var u=t;u<n.length;u++){if(n[u]===e)return r+=1,u+1}return-1}function a(e){var t=r/n.length;return A.MATCHES+t*(1/e)}var o=u(n[0],e,0);if(o<0)return A.NO_MATCH;t=o;for(var i=1;i<n.length;i++){if(!((t=u(n[i],e,t))>-1))return A.NO_MATCH}return a(t-o)}(e,n)}function d(e,n){return e=""+e,n.keepDiacritics||(e=i.default(e)),e}function C(e){return"string"===typeof e&&(e={key:e}),o.default({maxRanking:1/0,minRanking:-1/0},e)}n.default=s,n.rankings=A},76826:e=>{var n={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\u1ea4":"A","\u1eae":"A","\u1eb2":"A","\u1eb4":"A","\u1eb6":"A","\xc6":"AE","\u1ea6":"A","\u1eb0":"A","\u0202":"A","\xc7":"C","\u1e08":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\u1ebe":"E","\u1e16":"E","\u1ec0":"E","\u1e14":"E","\u1e1c":"E","\u0206":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\u1e2e":"I","\u020a":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\u1ed0":"O","\u1e4c":"O","\u1e52":"O","\u020e":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\u1ea5":"a","\u1eaf":"a","\u1eb3":"a","\u1eb5":"a","\u1eb7":"a","\xe6":"ae","\u1ea7":"a","\u1eb1":"a","\u0203":"a","\xe7":"c","\u1e09":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\u1ebf":"e","\u1e17":"e","\u1ec1":"e","\u1e15":"e","\u1e1d":"e","\u0207":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\u1e2f":"i","\u020b":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\u1ed1":"o","\u1e4d":"o","\u1e53":"o","\u020f":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u0108":"C","\u0109":"c","\u010a":"C","\u010b":"c","\u010c":"C","\u010d":"c","C\u0306":"C","c\u0306":"c","\u010e":"D","\u010f":"d","\u0110":"D","\u0111":"d","\u0112":"E","\u0113":"e","\u0114":"E","\u0115":"e","\u0116":"E","\u0117":"e","\u0118":"E","\u0119":"e","\u011a":"E","\u011b":"e","\u011c":"G","\u01f4":"G","\u011d":"g","\u01f5":"g","\u011e":"G","\u011f":"g","\u0120":"G","\u0121":"g","\u0122":"G","\u0123":"g","\u0124":"H","\u0125":"h","\u0126":"H","\u0127":"h","\u1e2a":"H","\u1e2b":"h","\u0128":"I","\u0129":"i","\u012a":"I","\u012b":"i","\u012c":"I","\u012d":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0132":"IJ","\u0133":"ij","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u1e30":"K","\u1e31":"k","K\u0306":"K","k\u0306":"k","\u0139":"L","\u013a":"l","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u013f":"L","\u0140":"l","\u0141":"l","\u0142":"l","\u1e3e":"M","\u1e3f":"m","M\u0306":"M","m\u0306":"m","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u0149":"n","N\u0306":"N","n\u0306":"n","\u014c":"O","\u014d":"o","\u014e":"O","\u014f":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","P\u0306":"P","p\u0306":"p","\u0154":"R","\u0155":"r","\u0156":"R","\u0157":"r","\u0158":"R","\u0159":"r","R\u0306":"R","r\u0306":"r","\u0212":"R","\u0213":"r","\u015a":"S","\u015b":"s","\u015c":"S","\u015d":"s","\u015e":"S","\u0218":"S","\u0219":"s","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u021b":"t","\u021a":"T","\u0164":"T","\u0165":"t","\u0166":"T","\u0167":"t","T\u0306":"T","t\u0306":"t","\u0168":"U","\u0169":"u","\u016a":"U","\u016b":"u","\u016c":"U","\u016d":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0216":"U","\u0217":"u","V\u0306":"V","v\u0306":"v","\u0174":"W","\u0175":"w","\u1e82":"W","\u1e83":"w","X\u0306":"X","x\u0306":"x","\u0176":"Y","\u0177":"y","\u0178":"Y","Y\u0306":"Y","y\u0306":"y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u017f":"s","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01cd":"A","\u01ce":"a","\u01cf":"I","\u01d0":"i","\u01d1":"O","\u01d2":"o","\u01d3":"U","\u01d4":"u","\u01d5":"U","\u01d6":"u","\u01d7":"U","\u01d8":"u","\u01d9":"U","\u01da":"u","\u01db":"U","\u01dc":"u","\u1ee8":"U","\u1ee9":"u","\u1e78":"U","\u1e79":"u","\u01fa":"A","\u01fb":"a","\u01fc":"AE","\u01fd":"ae","\u01fe":"O","\u01ff":"o","\xde":"TH","\xfe":"th","\u1e54":"P","\u1e55":"p","\u1e64":"S","\u1e65":"s","X\u0301":"X","x\u0301":"x","\u0403":"\u0413","\u0453":"\u0433","\u040c":"\u041a","\u045c":"\u043a","A\u030b":"A","a\u030b":"a","E\u030b":"E","e\u030b":"e","I\u030b":"I","i\u030b":"i","\u01f8":"N","\u01f9":"n","\u1ed2":"O","\u1ed3":"o","\u1e50":"O","\u1e51":"o","\u1eea":"U","\u1eeb":"u","\u1e80":"W","\u1e81":"w","\u1ef2":"Y","\u1ef3":"y","\u0200":"A","\u0201":"a","\u0204":"E","\u0205":"e","\u0208":"I","\u0209":"i","\u020c":"O","\u020d":"o","\u0210":"R","\u0211":"r","\u0214":"U","\u0215":"u","B\u030c":"B","b\u030c":"b","\u010c\u0323":"C","\u010d\u0323":"c","\xca\u030c":"E","\xea\u030c":"e","F\u030c":"F","f\u030c":"f","\u01e6":"G","\u01e7":"g","\u021e":"H","\u021f":"h","J\u030c":"J","\u01f0":"j","\u01e8":"K","\u01e9":"k","M\u030c":"M","m\u030c":"m","P\u030c":"P","p\u030c":"p","Q\u030c":"Q","q\u030c":"q","\u0158\u0329":"R","\u0159\u0329":"r","\u1e66":"S","\u1e67":"s","V\u030c":"V","v\u030c":"v","W\u030c":"W","w\u030c":"w","X\u030c":"X","x\u030c":"x","Y\u030c":"Y","y\u030c":"y","A\u0327":"A","a\u0327":"a","B\u0327":"B","b\u0327":"b","\u1e10":"D","\u1e11":"d","\u0228":"E","\u0229":"e","\u0190\u0327":"E","\u025b\u0327":"e","\u1e28":"H","\u1e29":"h","I\u0327":"I","i\u0327":"i","\u0197\u0327":"I","\u0268\u0327":"i","M\u0327":"M","m\u0327":"m","O\u0327":"O","o\u0327":"o","Q\u0327":"Q","q\u0327":"q","U\u0327":"U","u\u0327":"u","X\u0327":"X","x\u0327":"x","Z\u0327":"Z","z\u0327":"z"},r=Object.keys(n).join("|"),t=new RegExp(r,"g"),u=new RegExp(r,""),a=function(e){return e.replace(t,(function(e){return n[e]}))};e.exports=a,e.exports.has=function(e){return!!e.match(u)},e.exports.remove=a}}]);