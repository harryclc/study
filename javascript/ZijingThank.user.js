// ==UserScript==
// @name        ZijingThank
// @author      Harry
// @description thank uploader automatically
// @encoding    utf-8
// @include     http://zijingbt.njuftp.org/index*
// @require     http://code.jquery.com/jquery-2.1.3.min.js
// @grant       none
// @run-at      document-end
// @version     0.3
// ==/UserScript==

$("span.top_state").append(' 待感谢: <span class="green" id="thank_count">'+ $("a.index_thanks").length + '</span>');
var int = setInterval(function c(){
    if( $("a.index_thanks").length == 0 ){
        clearInterval(int);
		$("#thank_count").html( $("a.index_thanks").length + "/" + $("#thank_count").html() );
    }
    else{
        $("a.index_thanks").get(0).click();
    }
},100)
