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

interface KeyCount {
  test1: number;
  test2: {
    test3: number;
    test4?: string;
  };
}

// NOTE: T extends KeyCount を指定することで下記のエラーを回避できる
const showKeyCount = <T>(props: T) => {
  const length = Object.keys(props).length;
  console.log(length);
};

showKeyCount({ test1: 'aaa', test2: 'bbb' }); // OK
// showKeyCount(null); // error
