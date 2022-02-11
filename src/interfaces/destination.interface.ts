interface Schedule {
  hour: string;
  price: number;
}

interface Flight {
  day: string;
  schedule: Schedule[];
}

export interface Destination {
  city: string;
  flights: Flight[];
}
