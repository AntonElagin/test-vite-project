
export interface PersonCalendar {
  workday: string;
  weekend: string;
}

export interface Form {
  calendars: PersonCalendar[];
  period: string;
}