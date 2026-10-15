export type Patient = {
  initials: string;
  name: string;
  email: string;
  phone: string;
  nextAppointment: string;
  status: string;
  missedSessions: number;
  lastSession: string;
  value: string;
  recurrence: string;
};

export const PATIENTS: Patient[] = [
  {
    initials: "JA",
    name: "João Almeida",
    email: "joao@email.com",
    phone: "(11) 99999-8888",
    nextAppointment: "Tue 2pm",
    status: "Active",
    missedSessions: 1,
    lastSession: "May 19",
    value: "R$ 120",
    recurrence: "Tues, 2pm (weekly)",
  },
  {
    initials: "MS",
    name: "Maria Santos",
    email: "maria@email.com",
    phone: "(11) 98888-7777",
    nextAppointment: "Wed 3pm",
    status: "Active",
    missedSessions: 0,
    lastSession: "May 24",
    value: "R$ 150",
    recurrence: "Wednesdays, 3pm (weekly)",
  },
  {
    initials: "AC",
    name: "Ana Costa",
    email: "ana@email.com",
    phone: "(11) 97777-6666",
    nextAppointment: "Mon 4:30pm",
    status: "Active",
    missedSessions: 0,
    lastSession: "May 26",
    value: "R$ 100",
    recurrence: "—",
  },
  {
    initials: "CL",
    name: "Carlos Lima",
    email: "carlos@email.com",
    phone: "(11) 96666-5555",
    nextAppointment: "Mon 5:30pm",
    status: "Inactive",
    missedSessions: 3,
    lastSession: "May 22",
    value: "R$ 130",
    recurrence: "—",
  },
  {
    initials: "JP",
    name: "Juliana Porto",
    email: "juliana@email.com",
    phone: "(11) 95555-4444",
    nextAppointment: "Mon 7pm",
    status: "Active",
    missedSessions: 0,
    lastSession: "May 21",
    value: "R$ 120",
    recurrence: "Mondays, 7pm (biweekly)",
  },
  {
    initials: "RN",
    name: "Roberto Nunes",
    email: "roberto@email.com",
    phone: "(11) 94444-3333",
    nextAppointment: "Thu 9am",
    status: "Active",
    missedSessions: 1,
    lastSession: "May 20",
    value: "R$ 140",
    recurrence: "Thursdays, 9am (weekly)",
  },
  {
    initials: "FL",
    name: "Fernanda Lins",
    email: "fernanda@email.com",
    phone: "(11) 93333-2222",
    nextAppointment: "Tue 11am",
    status: "Active",
    missedSessions: 0,
    lastSession: "May 19",
    value: "R$ 110",
    recurrence: "Tuesdays, 11am (weekly)",
  },
  {
    initials: "LT",
    name: "Luciana Torres",
    email: "luciana@email.com",
    phone: "(11) 92222-1111",
    nextAppointment: "Wed 8am",
    status: "Inactive",
    missedSessions: 2,
    lastSession: "May 17",
    value: "R$ 100",
    recurrence: "—",
  },
  {
    initials: "PR",
    name: "Patrícia Rocha",
    email: "patricia@email.com",
    phone: "(11) 91111-0000",
    nextAppointment: "Fri 10am",
    status: "Active",
    missedSessions: 0,
    lastSession: "May 16",
    value: "R$ 130",
    recurrence: "Fridays, 10am (weekly)",
  },
];
