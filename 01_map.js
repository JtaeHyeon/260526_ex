//Map
// 1. Map vs Object

const o = {};
o.a = "a";
o.b = "b";
o["c d"] = "c d";
// key, value -> 호출 할 수 있는 이름 => 값

o["e"] = function () {
    console.log("e");
// }
// for (const v of o){

// }
//TypeError: o is not iterable - 컬렉션이 아니다
//1. 효율적이지도 않고,
//2. k,v라는 목적에 충실하지도 않다.
console.log(o);

const map = new  Map(); //new - 생성자
//데이터를 관리하는 여러 함수 내장
// map, get, set, has ... 
for (const c of map){
    // iterable하다.
    // 변환 과정등을 거지치 않아도 순회할 수 있다(iterable하다)
}
