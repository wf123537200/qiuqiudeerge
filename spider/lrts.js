// lrts query all list
let last;
let cnt = 0;

const queryAll = function() {
	console.log('queryAll ' + cnt);
	let last2 = $('.section li.last');
	if(last2 !== last && last2[0]) {
		last2.click();
		last = last2;
		cnt = 0;
	} 

	if(cnt > 5) return;
	cnt += 1;
	setTimeout(function() {
		queryAll();
	}, 1000);
}

queryAll();

// get name
let name = [];
const getName = function() {
	const x = Array.from($('.column1.nowrap>span'))
	x.forEach(t => {
		name.push(t.innerHTML.split('_')[1]);
	});
}

// get src 
let src = [];
const getSrc = function() {
	const x = Array.from($('.column1.nowrap>[name=source]'))
	x.forEach(t => {
		src.push(t.value);
	});
}

// getTime 
let time = [];
const getTime = function() {
	const x = Array.from($('.column3.nowrap'))
	x.forEach(t => {
		time.push(t.innerText);
	});
}

// 聚合
getName();
getSrc();
getTime();

let res = [];
for(i=0; i<=99; i++) {
	res.push({
		name: name[i],
	    author: '赵柯',
	    src: src[i],
	    maxTime: time[i],
	})
}

console.log(res);