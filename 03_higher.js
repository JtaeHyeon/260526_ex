//고차함수 <- 함수를 파라미터(인자)로 받거나, 함수를 결과로 리턴하는 경우

// https://developer.mozilla.org/ko/docs/Glossary/First-class_Function

// sort
const a = [1, 13, 5, 8, 3];
// 정렬한다. -> for문? => 시간 복잡도 O(n^2)
console.log(a);
console.log(a.sort()); //[1, 13, 3, 5, 8]
//JS의 기본 정렬은 '문자열'화 시킨 다음 정렬한다.
// 13,2 -> 2가 뒤에 옴.
// [1]-3, [2]-.. => 작은 순서에서 큰 순서로 배치하는 것 -> 오름차순
// 오름차순: 데이터가 등장하는 방향과 커지는 방향이 일치할 떄(ascending)
// 내림차순: 데이터가 등장하는 방향과 커지는 방향이 일치하지 않을 때(descending)

// JS에서는 sort 메서드 사용 시 본래 값도 변경을 하고,변경된 값(배열)을 리턴해준다
console.log(a);

a.toSorted(); // 원본에 영향을 미치지 않고 정렬된 결과만 가져다주는 내장 메서드

// 우리는 숫자가 더 크냐 안크냐로 구분하고 싶다!
function compare(a, b) {
  // 앞/뒤 원소 2개 준다.
  // 1, 5, 13, 8 ,2
  // (1,5) -> 1- 5=> +(1 더 큼), - (5 더 큼), 0 그대로
  return a - b; // b-a 내림차순
}

const compare2 = function (a, b) {
  return b - a; // 내림차순
};
console.log(a.sort(compare)); //함수를 사용해서 정렬 한다 //[ 1, 3, 5, 8, 13 ]

console.log(a.sort(compare2)); //함수 표현식을 써도 된다 (무슨 뜻이지)

console.log(
  a.sort(function (a, b) {
    return a - b;
  }),
);

console.log(a.sort((a, b) => b - a)); //위랑 똑같음. 압축 되는 것.

const a2 = [1, -3, 5, -19, 7];
//절댓값 정렬이 필요하네
console.log(a2.sort((a, b) => Math.abs(a) - Math.abs(b))); //[1,-3,5,7,-19]
// 화살표함수가 가장 일반적으로 고차함수 구현 시 패러미터로 사용 됨.

//배열 내장 메서드 -> 함수를 패러미터로 쓰기 떄문에 고차함수

// ()에 넣어주는 함수 바탕 실행 돌려봄.
a2.forEach(console.log); //괄호를 안한 순수함수가 내장 메서드들을 위한 호출용 함수로 사용 가능
// () 없이 붙이면 알아서 필요할 때 호출해서 써라 / () 붙이면 -> 값을 써라
a2.forEach((v) => console.log(v));
// 배열 내장 메서드에 패러미터로 들어가는 함수 -> fn(value, index, array)
//value: 값 자체, index: 0부터 시작되는 인덱스, array: 전체 배열

// for of, for in, for와 비슷한데 -> 중간에 흐름제어를 못하는 for문. forEach.

// map -> 대체. a,b,c,d,e,f -> (...) => a', b', c', d', e', f'...
console.log(a2);

// map -> [value], index, array ->value만 넣어서 처리할 수 도 있다.
console.log(a2.map((v) => Math.abs(v))); // 밸류를 절대값으로 변환된 값으로 적어줘라
console.log(a2.map(Math.abs)); // 1:1 매칭되면 안적어도 된다

console.log(
  a2.map((v, i) => {
    if (i % 2 == 0) {
      //0,2,4 인덱스
      return v ** 2;
    } else {
      return 0;
    }
  }),
);
//위의 것을 삼항연산자로 해도 된다
console.log(a2.map((v, i) => (i % 2 == 0 ? v ** 2 : 0)));

//truthy, falsy로 처리
console.log(a2.map((v, i) => (!(i % 2) ? v ** 2 : 0))); //숏 코딩. 너무 좋아하지는 말자. 

// 배열 -> for문. 압축되지 않은 표현식 -> (함수화) -> 배열 내장 메서드(고차함수_ + 고급 연산자들을 사용해서 표현식 압축

//여기에 비트연산자 등 까지 해서 만들면 닌자코딩이 된다 -> 나만 알아볼 수 있다.
//어쨌든 사람이 디버깅하고 수정하고 알아봐야하는데, 너무 어렵게 만들어두면 유지보수 등이 불가능해진다

console.log(a2);//map은 원본에 영향을 안미침. 복사본을 만든다 [...arr] <- fn으로 하나씩 다시 작업한 것

