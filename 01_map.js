//Map
// 1. Map vs Object

const o = {};
o.a = "a";
o.b = "b";
o["c d"] = "c d";
// key, value -> 호출 할 수 있는 이름 => 값

o["e"] = function () {
  console.log("e");
};
// for (const v of o){

// }
//TypeError: o is not iterable - 컬렉션이 아니다
//1. 효율적이지도 않고,
//2. k,v라는 목적에 충실하지도 않다.
console.log(o);

const map = new Map(); //new - 생성자
//데이터를 관리하는 여러 함수 내장
// map, get, set, has ...

//왜 별도의 Map이 JavaScript에서 필용하게 되었는가? (Object로 충분하지 않나?) - 오늘의 til 거리

o["aa"] = 1234;
//객체명[프로퍼티명(리터럴 - 타자 형태로 쳐서 표현할 수 있는 값(대략적으로)] = 값
o.bb = 12345; //식별자 규칙을 위반하지 않는(공백, 특수문자) 표현의 경우에는 변수처럼 바로 작성할 수 있음 (객체명.프로퍼티명)

// map은 set이라는 전용 함수로 처리
// map.set(키, 값)
map.set("aa", 1234);
map.set("bb", 12345);
// 없으면 새로운 값을 넣고, 없으면 덮어씌우는
// 보통 얘 쓰면 되서 delete 잘 안씀

console.log(o[("aa", o.aa)]);
console.log(map.get("aa")); // 세팅할 값이 없으니까
//map.get(호출하려는 키)

//객체에서 특정한 프로퍼티가 포함되었는지 'in'으로 검사
console.log(`"aa" in o`, "aa" in o);
console.log(`"cc" in o`, "cc" in o);
//특정한 키의 포함 여부
console.log(map.has("aa"));
console.log(map.has("cc"));

//key-map 연결시킨다

console.log(map);

for (const c of Object.entries(o)) {
  console.log(c);
}

//delete o[프로퍼티명]
map.delete("aa"); // 삭제하는 것도 delete 따로 있다.
console.log(map);

//객체였으면 Object.* 외부 유틸리티를 썼어야하는...
console.log(map.entries());
console.log(map.keys());
console.log(map.values());

for (const c of map) {
  //     // iterable하다.
  //     // 변환 과정등을 거지치 않아도 순회할 수 있다(iterable하다)
  console.log(c);
}

console.log(Object.values(o).length); //객체는 자체적인 크기관련 함수가 없음
console.log(map.size); // map은 자체적으로 크기를 알 수 있다.

//이런 형태로 쓰인다
const m = new Map();
m.set("counter", 0); // 이게 있어서 초기값이 있다면
if (m.has("counter") && typeof m.get("counter") == "number") {
  m.set("counter", m.get("counter") + 1); // +1
} else {
  m.set("counter", 0);
}
console.log(m);

// 2. map vs map
// 첫 번쨰는 해시테이블 사용해서 뭐 한 무슨 호출 결과, 해시값이 어쩌구 자료구조로서의 맵 (ai야 설명해줘)
// 두번째: 함수로서의 맵. 어떤 기준 가지고일괄 변환하기 위한 맵. -> 새로운 값 리턴
