let loop=100;
let three="Fizz";
let five="Buzz";
let threeFive="FizzBuzz";
function run(length){
	for(let i=1;i<=length;i++){
	    if(i){
			if(i%3==0 && i%5==0){
				console.log(threeFive);
			}
			else if(i%3==0){
				console.log(three);
			}
			else if(i%5==0){
				console.log(five);
			}
			else{
				console.log(i);
			}
		}
	}
}
run(loop);