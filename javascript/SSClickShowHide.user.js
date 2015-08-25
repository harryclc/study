// ==UserScript==
// @name         SS Click Show & Hide
// @version      0.1
// @description  点击节点名称，显示/隐藏节点信息
// @author       Harry
// @match        http://www.qiushiss.com/user/node.php
// @grant        none
// ==/UserScript==

$('.box-header').each(function(){
	$(this).next().hide();
	$(this).click(function() {
		$(this).next().toggle();
	});
});
$('.pull-left.header').each(function(){
	$(this).parent().next().hide();
	$(this).click(function() {
		$(this).parent().next().toggle();
	});
});
