//--------------------------------------------------------------------------------//
//                                                                                //
//    created by Shinya Sakurai (Twitter:@sakurai_sinya)                          //
//                                                                                //
//                             TextRandomAnimation2.js                            //
//                                                                                //
//                                                         version 1.0            //
//                                                                                //
//--------------------------------------------------------------------------------//

//-----Customize block-----//

const randomChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const animationSpeed = 50;//ms

//-----Customize block end-----//


//ページ読み込み時に実行する処理
var elements = document.getElementsByClassName("animation-text");
var elementTexts = {};
for(var i = 0;i<elements.length;i++){
	var elm = elements.item(i);
	elementTexts[elm.id]=elm.innerHTML;
	elm.innerHTML="&nbsp;";
	animationReset(elm.id);
}

//アニメーションを行う関数
function animationStart(idName){
	var displayedTextIndex = 0;
	var loop = setInterval(function(){
		var str="";
		for(var j=0;j<(elementTexts[idName].length-displayedTextIndex);j++){
			str+=generateChar();
		}
		document.getElementById(idName).innerHTML=elementTexts[idName].substring(0,displayedTextIndex++)+str;
		if(displayedTextIndex==elementTexts[idName].length+1){
			clearInterval(loop);
		}
	},animationSpeed);
}

//ランダムな文字を返す関数
function generateChar(){
	return randomChars.charAt(Math.random()*randomChars.length)
}

//アニメーションによって表示された文字をアニメーション前に戻す関数
function animationReset(idName){
	document.getElementById(idName).innerHTML="&nbsp;";
}