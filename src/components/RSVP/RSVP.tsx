import { Attendee } from "../../types";
import {
  DaysAttending,
  DietaryRestrictions,
  NameEmail,
  PartyMembers,
  WhereStaying,
} from "..";
import "./styles.css";

export const RSVP = ({
  user,
  setUser,
  onClick,
}: {
  user: Attendee;
  setUser: React.Dispatch<React.SetStateAction<Attendee>>;
  onClick: () => void;
}) => {
  const handleNameChange = (name) => setUser({ ...user, name });
  const handleEmailChange = (email) => setUser({ ...user, email });
  const handleDayChange = (day) =>
    setUser({
      ...user,
      stayDuration: { ...user.stayDuration, [day]: !user.stayDuration[day] },
    });
  const handleOnPremisesChange = (value: boolean) =>
    setUser({
      ...user,
      stayLocation: { ...user.stayLocation, onPremises: value },
    });
  const handleTentOrRvChange = (value) =>
    setUser({
      ...user,
      stayLocation: { ...user.stayLocation, tentOrRv: value },
    });
  const handleDietaryRestrictionsChange = (value) =>
    setUser({ ...user, dietaryRestrictions: value });
  const handleRestrictionsDescriptionChange = (value) =>
    setUser({ ...user, dietaryRestrictionsDescription: value });
  const handleHasPartyChange = (value) =>
    setUser({ ...user, hasPartyMembers: value });
  const setNumberInParty = (value) => {
    const newArray = user.partyMembers.slice();
    if (value > newArray.length) newArray.push({ name: "", email: "" });
    if (value < newArray.length) newArray.pop();
    setUser({ ...user, partyMembers: newArray });
  };
  const handlePartyMembersChange = (i, type: "name" | "email", value) => {
    const newPartyMembersArray = user.partyMembers.slice();
    newPartyMembersArray[i][type] = value;
    setUser({ ...user, partyMembers: newPartyMembersArray });
  };

  return (
    <div className="rsvpContainer">
      <div className="formContainer">
        <h1 className="questionHeader">
          Please enter & confirm the following information:
        </h1>
        <NameEmail
          name={user.name}
          setName={handleNameChange}
          email={user.email}
          setEmail={handleEmailChange}
        />
        <DaysAttending
          daysAttending={user.stayDuration}
          handleChange={handleDayChange}
        />
        <WhereStaying
          stayingOnPremises={user.stayLocation.onPremises}
          setStayingOnPremises={handleOnPremisesChange}
          tentOrRv={user.stayLocation.tentOrRv}
          setTentOrRv={handleTentOrRvChange}
        />
        <DietaryRestrictions
          hasDietaryRestrictions={user.dietaryRestrictions}
          setHasDietaryRestrictions={handleDietaryRestrictionsChange}
          restrictionsDescription={user.dietaryRestrictionsDescription}
          setRestrictionsDescription={handleRestrictionsDescriptionChange}
        />
        <PartyMembers
          hasPartyMembers={user.hasPartyMembers}
          setHasPartyMembers={handleHasPartyChange}
          partyMembers={user.partyMembers}
          setNumberInParty={setNumberInParty}
          setPartyMembers={handlePartyMembersChange}
        />
      </div>
    </div>
  );
};
