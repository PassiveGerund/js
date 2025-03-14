let min = Math.ceil(0);
let max = Math.floor(6);

let one = 1;
let two = 2;
let iteration = 1;

while (one !== two) {
     one = Math.floor(Math.random() * (max - min)) + min;
     two = Math.floor(Math.random() * (max - min)) + min;
     iteration ++;
}

console.log(iteration, one, two);