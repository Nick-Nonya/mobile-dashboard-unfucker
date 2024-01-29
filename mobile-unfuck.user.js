// ==UserScript==
// @name         Tumblr unfucker for mobile
// @namespace    http://tampermonkey.net/
// @version      2024-01-29
// @description  mobile tumblr site userscript
// @author       nick-nonya
// @match        https://www.tumblr.com/dashboard*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tumblr.com
// @downloadURL  https://github.com/Nick-Nonya/mobile-dashboard-unfucker/raw/main/mobile-unfuck.user.js
// @updateURL    https://github.com/Nick-Nonya/mobile-dashboard-unfucker/raw/main/mobile-unfuck.user.js
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
  pointer-events: none;
  user-select: none;
}

.unfuck-element > a {
  pointer-events: all;
  user-select: none;
}

.unfuck-main-div
{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10000000;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: flex-end;
  user-select: none;
  pointer-events: none;
}

.activity-div {
  border: 2px rgb(var(--accent)) solid;
  background: rgb(var(--accent));
  padding: 2pt;
  border-radius: 2px;
  color: black;
}

`)

let main_div = addElement(document.body, 'div', {
    'class': 'unfuck-main-div'
})


let activity_div = addElement(main_div, 'div', {'class': 'unfuck-element'})
let activity_anchor = addElement(activity_div, 'a', {
    'href': "https://www.tumblr.com/activity",
    'target': '_blank',
    'class': 'activity-div'
}, "Activity");
// activity_anchor.onclick = e => {open('https://www.tumblr.com/activity', '_blank').focus()}
// addElement(main_div, 'div', {
//     'class': "unfuck-element"
// }, "abc");
// addElement(main_div, 'div', {
//     'class': "unfuck-element"
// }, "abc");
