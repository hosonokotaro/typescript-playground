import { data, TeamMember } from './data';

const showTeamMember = (memberList: TeamMember[]) => {
  memberList.map(({ id, name, position }) => {
    console.log(`id: ${id} | name: ${name} | position: ${position}`);
  });
};

showTeamMember(data);

// Generics test

// Arrow function には = <T>(xxx: T): T というように Generics を定義する
const showManyList = <T>(list: T[]) => {
  list.map((item) => {
    if (typeof item === 'number') console.log(item + 10);
    if (typeof item === 'string') console.log(`${item}です`);
  });
};

showManyList(['aaa', 'bbb', 'ccc']);
showManyList([1, 2, 3]);
