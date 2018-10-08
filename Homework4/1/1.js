//Задание 1

var num = parseInt(prompt("Введите число от 0 до 999"));
var objNum={};

if (numIsOk(num)){
	parseNum(objNum, num);
}

for (var i in objNum){
	document.write(i + ":" + objNum[i] + "<br>");
}

console.log(objNum);

function numIsOk(x) {
    if (isNaN(x) || !isFinite(x)) {
        console.log('Вы ввели недопустимый символ');
        return false;
    }
    else if (x > 999) {
        console.log('Ваше число выходит из допустимого диапозона');
        return false;
    }
	else {
		return true;
	}	
}

function parseNum(obj, n) {
	var str = n+"";
	switch(str.length) {
		case 3:
			obj.sot = str.substr(0,1);
			obj.des = str.substr(1,1);
			obj.ed = str.substr(2,1);
			break;
		case 2:
			obj.sot = 0;
			obj.des = str.substr(0,1);
			obj.ed = str.substr(1,1);
			break;
		case 1:
			obj.sot = 0;
			obj.des = 0;
			obj.ed = str.substr(0,1)
			break;
	}
}


	//var str = parseInt(555)+"";
	//alert(typeof(str)+', '+ str.length);




/*
function parseNum(obj, n) {
	//var obj={};
	var n;
	var str = n+"";
			obj.ed = str.substr(2,1);
			obj.des = str.substr(1,1);
			obj.sot = str.substr(0,1);			
			
}

var object={};

parseNum(object, 785);

for (var i in object){
	document.write(i + ":" + object[i] + "<br>");
}

console.log(object);*/