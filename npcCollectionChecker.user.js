// ==UserScript==
// @name         NPC Collection Checker
// @namespace    http://tampermonkey.net/
// @version      0.1
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


var items = document.querySelectorAll("div.inventoryitem > img[src*='images/items'][style='opacity:0.5;filter: grayscale(95%);'")


for (var i in items)
{
  if (typeof items[i].parentElement !== "undefined")
    {
        var MI = items[i].parentElement.querySelector("font").innerText;
        console.log(MI)
        newDiv.innerHTML += `<br>${MI}`
    }

}





})();
