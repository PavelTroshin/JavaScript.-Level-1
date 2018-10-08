var mas = [];
mas.push(q1);
mas.push(q2);
mas.push(q3);
mas.push(q4);
mas.push(q5);

for(var i in mas) {
	var a = parseInt(prompt('Вопрос '+(parseInt(i)+1)+':\n'+mas[i].q+'\nВарианты ответов:'+'\nВариант 1: '+mas[i].a1+'\nВариант 2: '+mas[i].a2+'\nВариант 3: '+mas[i].a3+'\nВариант 4: '+mas[i].a4+'\nВведите номер вашего варианта ответа: 1, 2, 3 или 4'));
	if ((typeof(a)=='number')&&((a>=1)||(a<=4))) {
		if (!(a==mas[i].correct)) {
			alert("Ответ неверный. Вы проиграли");
			break;
		} else {
			alert("Правильно!");
		}
	} else {
		alert("Вы ввели некорректные данные! Начните заново");
		break;
	}
}

if ((i==mas.length-1)&&(a==mas[i].correct)) {
	alert("Вы выиграли 1000000 рублей");
}
