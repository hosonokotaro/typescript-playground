// import { data, TeamMember } from './data';

// const showTeamMember = (memberList: TeamMember[]) => {
//   memberList.map(({ id, name, position }) => {
//     console.log(`id: ${id} | name: ${name} | position: ${position}`);
//   });
// };

// showTeamMember(data);

// NOTE: Generics test
// NOTE: 0x から始まるものは16進数を表す
// NOTE: Symbol 型は文字列に変換できないので、表示したい場合は .toString() で変換する

// NOTE: Arrow function には = <T>(xxx: T): T というように Generics を定義する
const showManyList = <T>(list: T[]) => {
  list.map((item) => {
    console.log(`${typeof item}`);
  });
};

showManyList([
  1,
  0.1,
  0xff88,
  NaN,
  'fd',
  false,
  {},
  null,
  undefined,
  Symbol('Sym'),
  () => {},
]);

// NOTE: Object.keys に null, undefined を渡すと Error、string を渡すと文字数が返ってくる
// symbol, number は [] が返ってくる。array は index が返ってくる
const showKeys = (props: object) => {
  const value = Object.keys(props);
  console.log(value.length);
};

showKeys({ test1: 0, test2: { test3: 2, test4: 3 } });

console.log({} === {});
console.log(null === null);
