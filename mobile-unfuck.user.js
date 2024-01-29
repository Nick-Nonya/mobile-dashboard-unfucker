// ==UserScript==
// @name         Tumblr unfucker for mobile
// @namespace    http://tampermonkey.net/
// @version      2024-01-29
// @description  mobile tumblr site userscript
// @author       You
// @match        https://www.tumblr.com/dashboard*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tumblr.com
// @grant        GM_addElement
// ==/UserScript==

function addElement(parent, tag, attributes, content = "") {
    let _element = document.createElement(tag);
    for (let a in attributes) {
        let attribute = attributes[a];
        _element.setAttribute(a, attribute);
    }
    _element.innerText = content;
    parent.appendChild(_element);
    return _element
}

addElement(document.head, 'style', {}, `
.unfuck-element
{
  flex-grow: 1;
  text-align: center;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all;
  user-select: all;
}

.unfuck-main-div
{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255,0,0,0.5);
  z-index: 10000000;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: flex-end;
  user-select: none;
  pointer-events: none;
}

.activity-div {
  border: 2px gray solid;
  background: gray;
  padding: 2pt;
}

`)

let main_div = addElement(document.body, 'div', {
    'class': 'unfuck-main-div'
})


let activity_div = addElement(main_div, 'div', {'class': 'unfuck-element'})
let activity_anchor = addElement(activity_div, 'a', {
    'href': "#",
    'class': 'activity-div'
}, "Activity");
activity_anchor.onclick = e => {open('https://www.tumblr.com/activity', '_blank').focus()}
// addElement(main_div, 'div', {
//     'class': "unfuck-element"
// }, "abc");
// addElement(main_div, 'div', {
//     'class': "unfuck-element"
// }, "abc");
