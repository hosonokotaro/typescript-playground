type Position = 'Manager' | 'Chief' | 'Employee';

export interface TeamMember {
  id: number;
  name: string;
  position: Position;
}

export const data: TeamMember[] = [
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
