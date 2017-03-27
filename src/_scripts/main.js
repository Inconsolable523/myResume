// Main javascript entry point
// Should handle bootstrapping/starting application
'use strict';

//import $ from 'jquery';

((doc) => { // dom ready
  let bd = doc.createElement("script");
  bd.src = "//hm.baidu.com/hm.js?f940aae7b3f51d3eae76f0fe4ec1bf27";
  doc.body.appendChild(bd);

  console.log('😊 Welcome to Zhi\'s resume!');
  console.log('The resume source code is on https://github.com/wssgcg1213/resume');
})(document);
