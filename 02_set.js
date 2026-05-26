// Set
// 집합 -> 스스로가 각자가 다른 것과 구분되는 원소인 자료
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

//Object, map: 특정 '키'에는 하나의 '값'만 들어갈 수 있음

const m = new Map();
m.set("a", 1234);
m.set("b", 1234); //같은 값으로 넣었을 때 충돌 문제가 없음
// 중간에 해시가 꼈기 때문.( a->100001011011 -> 1234 / b->101011011011 -> 1234)
console.log(m);
m.set("a", 5678); // a라는 키에 대응할 수 있는 값은 1개이기 떄문에 '덮어쓰기'가 된다.
console.log(m);
// a라는 키는 중복이 안된다. a에 들어가는 밸류는 중복될 수 있음

const s = new Set();
s.add(1234); //어? 키가 없넹?
console.log(s); // 값이 곧 키다.
// -> 중복을 허용하지 않는다. 값에도.
s.add(1234);
console.log(s);

//entry 형태로 넣으면 바로 기존의 객체나 배열 등을 바탕으로 생성할 수 있음
const mm = new Map(Object.entries({ a: "a" }));
console.log(mm);

//set은 같은 값을 감지해서 정리해버림.
//배열중에 같은 값이 있는지를 감지해서 정리하는 역할
const ss = new Set(["a", "a", "a", "b", "b", "c"]);
console.log(ss);

//for문으로 객체, 배열, 맵 등을 사용해서 중복 정리하기를 할 수는 있는데,,, 속도도 느리고 구현 난도도 적지 않은 편 (Set 직접 다른 자료구조로 구현하기 숙제)

s.delete(1234); //delete로 제거 가능
s.has(1234); //존재여부 확인 가능(1234 지웠으니까 없다고 뜩/ㅔㅆ쥬?
console.log(s.has(1234));

s.add(1234);
s.add(12345);
s.add(123456);
//s.has, s.size
for (const c of s) {
  console.log(c);
}
