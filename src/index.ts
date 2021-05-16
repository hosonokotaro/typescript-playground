import { data, TeamMember } from './data';

const showTeamMember = (memberList: TeamMember[]) => {
  memberList.map(({ id, name, position }) => {
    console.log(`id: ${id} | name: ${name} | position: ${position}`);
  });
};

showTeamMember(data);
