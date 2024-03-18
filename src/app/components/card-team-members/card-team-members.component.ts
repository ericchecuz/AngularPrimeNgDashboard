import { Component } from '@angular/core';

@Component({
  selector: 'app-card-team-members',
  templateUrl: './card-team-members.component.html',
  styleUrls: ['./card-team-members.component.scss'],
})
export class CardTeamMembersComponent {
  members: any[] = [
    {
      nome: 'Alice',
      cognome: 'Smith',
      mansione: 'Junior Developer',
      ruolo: 'Frontend Developer',
      visible: false,
    },
    {
      nome: 'Bob',
      cognome: 'Johnson',
      mansione: 'Senior Developer',
      ruolo: 'Backend Developer',
      visible: false,
    },
    {
      nome: 'Emma',
      cognome: 'Brown',
      mansione: 'Junior Developer',
      ruolo: 'Full Stack Developer',
      visible: false,
    },
    {
      nome: 'James',
      cognome: 'Williams',
      mansione: 'Senior Developer',
      ruolo: 'UI/UX Designer',
      visible: false,
    },
    {
      nome: 'Sophia',
      cognome: 'Jones',
      mansione: 'Junior Developer',
      ruolo: 'Mobile Developer',
      visible: false,
    },
    {
      nome: 'Oliver',
      cognome: 'Garcia',
      mansione: 'Senior Developer',
      ruolo: 'DevOps Engineer',
      visible: false,
    },
    {
      nome: 'Charlotte',
      cognome: 'Martinez',
      mansione: 'Junior Developer',
      ruolo: 'QA Engineer',
      visible: false,
    },
    {
      nome: 'William',
      cognome: 'Hernandez',
      mansione: 'Senior Developer',
      ruolo: 'Product Manager',
      visible: false,
    },
    {
      nome: 'Amelia',
      cognome: 'Lopez',
      mansione: 'Junior Developer',
      ruolo: 'System Administrator',
      visible: false,
    },
    {
      nome: 'Michael',
      cognome: 'Gonzalez',
      mansione: 'Senior Developer',
      ruolo: 'Software Engineer',
      visible: false,
    },
  ];

  showDialog(member: any) {
    member.visible = true;
  }
}
