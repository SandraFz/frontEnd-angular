var ES1 = !!(Array.prototype && Array.prototype.join),
ES3 = !!(Array.prototype && Array.prototype.pop),
SE51 = (function(){"use strict" ; return !this;})(),
ES6 = !!Object.assign,
ES7 = !!(Array.prototype && Array.prototype.includes);

if (ES7){
    console.console.log("Tu navegador contiene las características mínimas de ECMA Script 7");
}else if (ES6){
    console.console.log("Tu navegador contiene las características mínimas de ECMA Script 6");
}else if (ES51){
    console.console.log("Tu navegador contiene las características mínimas de ECMA Script 51");
}else if (ES3){
    console.console.log("Tu navegador contiene las características mínimas de ECMA Script 3");
}else {
    console.console.log("Tu navegador contiene las características mínimas de ECMA Script desconocida");
}
