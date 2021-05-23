import { data, TeamMember } from './data';
import { data as data2, SupportMember } from './data2';

// NOTE: Union type として引数を受け付ける
const showTeamMember = <T extends TeamMember | SupportMember>(
  memberList: T[]
) => {
  memberList.map(({ id, name }) => {
    console.log(`id: ${id} | name: ${name}`);
  });
};

showTeamMember(data);
showTeamMember(data2);
