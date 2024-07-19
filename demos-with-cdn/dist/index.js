"use strict";

//we are doing this because babel takes time to compile.
var el = /*#__PURE__*/React.createElement("div", {
  id: "message"
}, /*#__PURE__*/React.createElement("h1", null, "what is react"), /*#__PURE__*/React.createElement("p", {
  title: "introduction"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-bold"
}, "React"), "is a js library"));
ReactDOM.render(el, document.getElementById('root'));
//after pasting the above code, open terminal and go to working folder. run npm init -y. here y means
//we are giving or selecting y for all asked question.
//after that, you can go to npmjs.com
//search for @babel/core
//run npm i @babel/core @babel/cli @babel/preset-env @babel/preset-react
//.babelrc
//add script in package.json
//npm run build