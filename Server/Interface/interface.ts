export interface Device {
  ticketNumber: string;
  lostCard: boolean;
  position: boolean;
  deviceType: string;
  numberOfDeviceBrought: string;
  pORb: string;
  collected: boolean;
  userID: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
}
