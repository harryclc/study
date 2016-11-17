// ==UserScript==
// @name         Google Redirect Remover
// @version      0.2
// @description  Removes the Google redirect in links
// @author       Harry
// @require      http://code.jquery.com/jquery-2.1.3.min.js
// @include      http://*.google.com/*
// @include      https://*.google.com/*
// ==/UserScript==

// 基于chrome扩展"搜索直达(mkpejojlockjoldbdbbgbibeogmemjfk)"中的fast_google.js修改而成

(function() {
    'use strict';
    var rmGoogleRedirect = function () {
        var links_web       = document.querySelectorAll("#rso a[href][onmousedown]");
        var links_img_title = document.querySelectorAll("._LAd a[href^='http'][jsaction]");
        var links_img_btns  = document.querySelectorAll(".irc_butc a[href^='http'][jsaction]");
        var links_img_pics  = document.querySelectorAll("._fUc a[href^='http'][jsaction]");
        var links = [];
        $.each(links_web, function(index, item){
            links.push(item);
        });
        $.each(links_img_title, function(index, item){
            links.push(item);
        });
        $.each(links_img_btns, function(index, item){
            links.push(item);
        });
        $.each(links_img_pics, function(index, item){
            links.push(item);
        });
        if(links.length > 0) {
            for(var i = 0; i < links.length; i++) {
                var tmpLink = links[i];
                if(tmpLink.removeAttribute){
                    if (tmpLink.hasAttribute("onmousedown")) {
                        tmpLink.removeAttribute("onmousedown");
                    }
                    if (tmpLink.hasAttribute("jsaction")) {
                        tmpLink.removeAttribute("jsaction");
                    }
                    // tmpLink.style.color = "red";
                }
            }
        }
        var tipsLabel;
        //web+news
        var tipsDiv = document.querySelector("#resultStats");
        if(tipsDiv !== null && $(".tipsLabel").length === 0) {
            tipsLabel = document.createElement('label');
            tipsLabel.setAttribute("style", "color:green");
            tipsLabel.setAttribute("class", "tipsLabel");
            tipsLabel.textContent = "转向已去除";
            tipsDiv.appendChild(tipsLabel);
        }
        // img
        if(links_img_title.length > 0) {
            var tipsTr = document.querySelectorAll(".irc_butc tr");
            for(var j =0; j < tipsTr.length; j++) {
                if ($(tipsTr[j]).find(".tipsLabel").length > 0) {continue;}
                tipsLabel = document.createElement('td');
                tipsLabel.setAttribute("style", "color:#6E6E6E");
                tipsLabel.setAttribute("class", "tipsLabel");
                tipsLabel.textContent = "转向已去除";
                tipsTr[j].appendChild(tipsLabel);
            }
        }
    };
    setTimeout(rmGoogleRedirect,800);
    setTimeout(rmGoogleRedirect,1200);
    setTimeout(rmGoogleRedirect,1600);
})();
