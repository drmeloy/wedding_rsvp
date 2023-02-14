export type Attendee = {
  name: string;
  email: string;
  stayDuration: DayFlags;
  stayLocation: {
    onPremises: boolean;
    tentOrRv: "tent" | "rv";
  };
  dietaryRestrictions: boolean;
  dietaryRestrictionsDescription: string;
  hasPartyMembers: boolean;
  partyMembers: PartyMember[];
}

type PartyMember = {
  name: string;
  email: string;
}

type DayFlags = {
  thu: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
  mon: boolean;
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
  stayLocation: {
    onPremises: true,
    tentOrRv: 'tent'
  },
  dietaryRestrictions: false,
  dietaryRestrictionsDescription: '',
  hasPartyMembers: false,
  partyMembers: [{ name: '', email: '' }],
}