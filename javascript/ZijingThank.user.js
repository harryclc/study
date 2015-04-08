// ==UserScript==
// @name        ZijingThank 
// @version     0.1
// @description thank uploader automatically
// @match       http://zijingbt.njuftp.org/index*
// @copyright   2014+, Harry
// ==/UserScript==

var allthanks, i=0; 
allthanks = document.evaluate("//a[@class='index_thanks']",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null); 
//alert(allthanks.snapshotLength); 
doThank = function() 
{ 
    if (i < allthanks.snapshotLength) 
    { 
        allthanks.snapshotItem(i).onclick(); 
        i++; 
        setTimeout("doThank()", 100); 
    } 
} 
doThank();
