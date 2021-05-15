// Sample code

type Position = 'Manager' | 'Chief' | 'Employee';

interface TeamMember {
  id: number;
  name: string;
  position: Position;
}

const data: TeamMember[] = [
  {
    id: 1,
    name: 'yamada',
    position: 'Manager',
  },
  {
    id: 2,
    name: 'suzuki',
    position: 'Employee',
  },
  {
    id: 3,
    name: 'tanaka',
    position: 'Chief',
  },
];

const showTeamMember = (memberList: TeamMember[]) => {
  memberList.map(({ id, name, position }) => {
    console.log(`id: ${id} | name: ${name} | position: ${position}`);
  });
};

showTeamMember(data);
