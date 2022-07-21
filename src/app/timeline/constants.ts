export type TimelineTask = {
  label: string;
  description?: string;
  startTime: string;
  endTime: string;
  slot: number;
}

export const timeline: TimelineTask[] = [
  {
    label: '1 AM',
    startTime: '00am',
    endTime: '1am',
    slot: 0
  },
  {
    label: '2 AM',
    startTime: '1am',
    endTime: '2am',
    slot: 1
  },
  {
    label: '3 AM',
    startTime: '2am',
    endTime: '3am',
    slot: 2
  },
  {
    label: '4 AM',
    startTime: '3am',
    endTime: '4am',
    slot: 3
  },
  {
    label: '5 AM',
    startTime: '4am',
    endTime: '5am',
    slot: 4
  },
  {
    label: '6 AM',
    startTime: '5am',
    endTime: '6am',
    slot: 5
  },
  {
    label: '7 AM',
    startTime: '6am',
    endTime: '7am',
    slot: 6
  },
  {
    label: '8 AM',
    startTime: '7am',
    endTime: '8am',
    slot: 7
  },
  {
    label: '9 AM',
    startTime: '8am',
    endTime: '9am',
    slot: 8
  },
  {
    label: '10 AM',
    startTime: '9am',
    endTime: '10am',
    slot: 9
  },
  {
    label: '11 AM',
    startTime: '10am',
    endTime: '11am',
    slot: 10
  },
  {
    label: '12 PM',
    startTime: '11am',
    endTime: '12pm',
    slot: 11
  },
  {
    label: '1 PM',
    startTime: '12pm',
    endTime: '1pm',
    slot: 12
  },
  {
    label: '2 PM',
    startTime: '1pm',
    endTime: '2pm',
    slot: 13
  },
  {
    label: '3 PM',
    startTime: '2pm',
    endTime: '3pm',
    slot: 14
  },
  {
    label: '4 PM',
    startTime: '3pm',
    endTime: '4pm',
    slot: 15
  },
  {
    label: '5 PM',
    startTime: '4pm',
    endTime: '5pm',
    slot: 16
  },
  {
    label: '6 PM',
    startTime: '5pm',
    endTime: '6pm',
    slot: 17
  },
  {
    label: '7 PM',
    startTime: '6pm',
    endTime: '7pm',
    slot: 18
  },
  {
    label: '8 PM',
    startTime: '7pm',
    endTime: '8pm',
    slot: 19
  },
  {
    label: '9 PM',
    startTime: '8pm',
    endTime: '9pm',
    slot: 20
  },
  {
    label: '10 PM',
    startTime: '9pm',
    endTime: '10pm',
    slot: 21
  },
  {
    label: '11 PM',
    startTime: '10pm',
    endTime: '11pm',
    slot: 22
  },
  {
    label: '12 AM',
    startTime: '11pm',
    endTime: '00 AM',
    slot: 23
  }
]
