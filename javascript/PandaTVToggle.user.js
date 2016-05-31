// ==UserScript==
// @name         PandaTV Player Toggle
// @version      0.2
// @description  Show/Hide SWF player of PandaTV
// @author       Harry
// @require      http://code.jquery.com/jquery-2.2.4.min.js
// @match        http://www.panda.tv/*
// @grant        GM_registerMenuCommand
// ==/UserScript==

/*
GM_registerMenuCommand("开关播放器", (function(){
  $('#room-player-swf').toggle();
}));
*/

ImportCss();
AddButton();

function ImportCss() {
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = "#button_player_toggle{ position: fixed; bottom: 75px; right: 20px; border: 1px solid gray; padding: 3px; cursor: pointer; border-radius: 3px; text-shadow: 1px 1px 3px #676767; }";
  document.getElementsByTagName('head')[0].appendChild(css);
}

function AddButton(){
  $(document.body).append("<div id='button_player_toggle'>开关播放器</div>");
  $('#button_player_toggle').click(function (){
    $('.room-player-swf-container').attr('style',"background-color: #FFF;");
    $('#room-player-swf').toggle();
    return false;
  });
}
