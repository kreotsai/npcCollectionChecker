// ==UserScript==
// @name         NPC Collection Checker
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Checks the current collections page and lists any missing items.
// @author       plushies
// @include        https://neopetsclassic.com/collection/?category_id=*
// @icon         https://www.google.com/s2/favicons?domain=neopetsclassic.com
// @updateURL    https://raw.githubusercontent.com/kreotsai/npcCollectionChecker/main/npcCollectionChecker.user.js
// @downloadURL  https://raw.githubusercontent.com/kreotsai/npcCollectionChecker/main/npcCollectionChecker.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<br><br><B>Missing Items:</b>`;
  document.querySelector("div.shoplinks").append(newDiv);


var items = document.querySelectorAll("div.inventoryitem > img[src*='/items'][style*='opacity:0.5;'")
var itemsArr = [];

for (var i in items)
{
  if (typeof items[i].parentElement !== "undefined")
    {
        var MI = items[i].parentElement.querySelector("font").innerText;
        itemsArr.push(MI)
    }

}
    itemsArr.sort();
    for (i in itemsArr)
{
        MI = itemsArr[i];
        newDiv.innerHTML += `<br>${MI}`
}





})();
