// 고차 함수 (Higher-Order Function)
// 1. 하나 이상의 함수를 인자로 받거나
// 2. 함수를 결과로 반환하는 함수를 말합니다.
// JavaScript에서 함수는 일급 객체(First-Class Object)이므로 변수에 할당하거나, 인자로 전달하거나, 다른 함수에서 반환될 수 있습니다.

// 대표적인 고차 함수 예시: map, filter, reduce, forEach

const numbers = [1, 2, 3, 4, 5];

// 1. map: 각 요소를 변환하여 새로운 배열을 반환
const doubled = numbers.map(num => num * 2);
console.log("doubled:", doubled);

// 2. filter: 조건에 맞는 요소만 걸러내어 새로운 배열을 반환
const evens = numbers.filter(num => num % 2 === 0);
console.log("evens:", evens);

// 3. reduce: 배열의 요소를 하나씩 줄여가며 하나의 값으로 축축
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("sum:", sum);
