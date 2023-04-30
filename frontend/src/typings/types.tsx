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
