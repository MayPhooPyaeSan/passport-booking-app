/** @format */

export interface Slot {
  time: string;
  reserved: number;
  totalAvailable: number;
  availableSlot: number;
}

export interface Availability {
  date: string;
  month: number;
  slots: Slot[];
}

export const availability: Availability[] = [
  {
    date: "30-04-2023",
    month: 3,
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 10 },
      { time: "11", reserved: 300, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 150, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "02-05-2023",
    month: 4,
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 300, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 150, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "06-05-2023",
    month: 4,
    slots: [
      { time: "10", reserved: 0, totalAvailable: 200, availableSlot: 200 },
      { time: "11", reserved: 20, totalAvailable: 100, availableSlot: 80 },
      { time: "12", reserved: 60, totalAvailable: 60, availableSlot: 0 },
      { time: "13", reserved: 30, totalAvailable: 300, availableSlot: 270 },
    ],
  },
  {
    date: "10-05-2023",
    month: 4,
    slots: [
      { time: "10", reserved: 200, totalAvailable: 200, availableSlot: 0 },
      { time: "11", reserved: 300, totalAvailable: 300, availableSlot: 0 },
      { time: "12", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "13", reserved: 150, totalAvailable: 150, availableSlot: 0 },
    ],
  },
  {
    date: "14-05-2023",
    month: 4,
    slots: [
      { time: "10", reserved: 0, totalAvailable: 200, availableSlot: 200 },
      { time: "11", reserved: 20, totalAvailable: 100, availableSlot: 80 },
      { time: "12", reserved: 60, totalAvailable: 60, availableSlot: 0 },
      { time: "13", reserved: 30, totalAvailable: 300, availableSlot: 270 },
    ],
  },
  {
    date: "18-05-2023",
    month: 4,
    slots: [
      { time: "10", reserved: 3, totalAvailable: 5, availableSlot: 2 },
      { time: "11", reserved: 10, totalAvailable: 10, availableSlot: 0 },
      { time: "12", reserved: 10, totalAvailable: 10, availableSlot: 0 },
      { time: "13", reserved: 10, totalAvailable: 10, availableSlot: 0 },
    ],
  },
  {
    date: "24-05-2023",
    month: 4,
    slots: [
      { time: "10", reserved: 10, totalAvailable: 200, availableSlot: 190 },
      { time: "11", reserved: 50, totalAvailable: 100, availableSlot: 50 },
      { time: "12", reserved: 60, totalAvailable: 60, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 300, availableSlot: 100 },
    ],
  },
  {
    date: "25-05-2023",
    month: 4,
    slots: [
      { time: "10", reserved: 10, totalAvailable: 100, availableSlot: 90 },
      { time: "11", reserved: 100, totalAvailable: 100, availableSlot: 0 },
      { time: "12", reserved: 60, totalAvailable: 60, availableSlot: 0 },
      { time: "13", reserved: 200, totalAvailable: 300, availableSlot: 100 },
    ],
  },
];
