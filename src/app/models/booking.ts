export type BookingStatus = 'Pending' | 'Accepted' | 'In Progress' | 'Completed';

export interface Booking {

  id: number;

  service: string;

  description: string;

  status: BookingStatus;

  date: string;

  time: string;

  customer: string;

  provider?: string;

  Address?:string;
  
  phone?:string;

}