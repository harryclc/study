// ==UserScript==
// @name        ZijingThank
// @author      Harry
// @description thank uploader automatically
// @encoding    utf-8
// @include     http://zijingbt.njuftp.org/index*
// @require     http://code.jquery.com/jquery-2.1.3.min.js
// @grant       none
// @run-at      document-end
// @version     0.2
// ==/UserScript==

console.log( "TO DO: " + $("a.index_thanks").length );
var int = setInterval(function c(){
    if( $("a.index_thanks").length == 0 ){
        clearInterval(int);
        console.log("DONE");
    }
    else{
        $("a.index_thanks").get(0).click();
    }
},100)
