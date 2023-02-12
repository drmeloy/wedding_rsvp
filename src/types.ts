export type Attendee = {
  name: string;
  email: string;
  stayDuration: DayFlags;
  dietaryRestrictions: boolean;
  dietaryRestrictionsDescription: string | null;
  interestedInHelping: CanHelpWith;
  attendingWith: Attendee[];
}

type DayFlags = {
  thu: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
  mon: boolean;
}

type CanHelpWith = {
  meals: DayFlags;
  desserts: boolean;
}

const defaultDayFlags: DayFlags = {
  thu: false,
  fri: false,
  sat: false,
  sun: false,
  mon: false
}

export const newUser: Attendee = {
  name: '',
  email: '',
  stayDuration: defaultDayFlags,
  dietaryRestrictions: false,
  dietaryRestrictionsDescription: null,
  interestedInHelping: {
    meals: defaultDayFlags,
    desserts: false
  },
  attendingWith: [],
}