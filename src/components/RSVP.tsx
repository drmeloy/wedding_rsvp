import { useState, useEffect } from "react";
import { Attendee } from "../types";

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
      <div>Please enter & confirm the following information:</div>
      <div className="infoForm">
        <p>Name:</p>
        <input
          type="text"
          value={user.name}
          onChange={({ target }) => handleNameChange(target.value)}
        />
        <p>Email:</p>
        <input
          type="text"
          value={user.email}
          onChange={({ target }) => handleEmailChange(target.value)}
        />
        <p>Which days will you be attending:</p>
        <div className="daysContainer">
          <input
            type="checkbox"
            id="thu"
            checked={user.stayDuration.thu}
            onChange={({ target }) => handleDayChange(target.id)}
          />
          <label htmlFor="thu">Thursday</label>

          <input
            type="checkbox"
            id="fri"
            checked={user.stayDuration.fri}
            onChange={({ target }) => handleDayChange(target.id)}
          />
          <label htmlFor="fri">Friday</label>

          <input
            type="checkbox"
            id="sat"
            checked={user.stayDuration.sat}
            onChange={({ target }) => handleDayChange(target.id)}
          />
          <label htmlFor="sat">Saturday</label>

          <input
            type="checkbox"
            id="sun"
            checked={user.stayDuration.sun}
            onChange={({ target }) => handleDayChange(target.id)}
          />
          <label htmlFor="sun">Sunday</label>

          <input
            type="checkbox"
            id="mon"
            checked={user.stayDuration.mon}
            onChange={({ target }) => handleDayChange(target.id)}
          />
          <label htmlFor="mon">Monday</label>
        </div>
        <p>Will you be staying on premises:</p>
        <div className="locationContainer">
          <input
            type="radio"
            id="yes"
            name="whereStaying"
            checked={user.stayLocation.onPremises === true}
            onChange={() => handleOnPremisesChange(true)}
          />
          <label htmlFor="yes">Yes</label>

          <input
            type="radio"
            id="no"
            name="whereStaying"
            checked={user.stayLocation.onPremises === false}
            onChange={() => handleOnPremisesChange(false)}
          />
          <label htmlFor="no">No</label>
        </div>
        {user.stayLocation.onPremises === true && (
          <>
            <p>Staying in tent or RV/trailer?</p>
            <div className="tentOrRvContainer">
              <input
                type="radio"
                id="tent"
                name="tentOrRv"
                checked={user.stayLocation.tentOrRv === "tent"}
                onChange={() => handleTentOrRvChange("tent")}
              />
              <label htmlFor="tent">Tent</label>

              <input
                type="radio"
                id="rv"
                name="tentOrRv"
                checked={user.stayLocation.tentOrRv === "rv"}
                onChange={() => handleTentOrRvChange("rv")}
              />
              <label htmlFor="rv">RV/trailer</label>
            </div>
            {user.stayLocation.tentOrRv === "rv" && (
              <p>
                Please communicate with Dan & Madz to verify there are enough
                spaces left!
              </p>
            )}
          </>
        )}
        {user.stayLocation.onPremises === false && (
          <p>
            Enjoy your stay wherever you'll be! Keep tuned for car pooling
            options to reduce the number of cars parking on site.
          </p>
        )}
        <p>Do you have any dietary restrictions?</p>
        <div className="dietaryRestrictionsContainer">
          <input
            type="radio"
            id="dietYes"
            name="dietaryRestrictions"
            checked={user.dietaryRestrictions === true}
            onChange={() => handleDietaryRestrictionsChange(true)}
          />
          <label htmlFor="dietYes">Yes</label>

          <input
            type="radio"
            id="dietNo"
            name="dietaryRestrictions"
            checked={user.dietaryRestrictions === false}
            onChange={() => handleDietaryRestrictionsChange(false)}
          />
          <label htmlFor="dietNo">No</label>
        </div>
        {user.dietaryRestrictions && (
          <div className="restrictionsDescription">
            <label htmlFor="w3review">Please describe:</label>
            <div>
              <textarea
                id="w3review"
                name="w3review"
                cols={40}
                rows={5}
                value={user.dietaryRestrictionsDescription}
                onChange={({ target }) =>
                  handleRestrictionsDescriptionChange(target.value)
                }
              />
            </div>
          </div>
        )}
        <div className="partyMembersContainer">
          <p>Are you coming with anyone else?</p>
          <div>
            <input
              type="radio"
              id="partyYes"
              name="hasParty"
              checked={user.hasPartyMembers === true}
              onChange={() => handleHasPartyChange(true)}
            />
            <label htmlFor="partyYes">Yes</label>

            <input
              type="radio"
              id="partyNo"
              name="hasParty"
              checked={user.hasPartyMembers === false}
              onChange={() => handleHasPartyChange(false)}
            />
            <label htmlFor="partyNo">No</label>
          </div>
        </div>
        {user.hasPartyMembers && (
          <div className="partyMembersContainer">
            <p>How many others are coming with you?</p>
            <input
              type="number"
              value={user.partyMembers.length}
              onChange={({ target }) => setNumberInParty(Number(target.value))}
            />
            <div className="partyInfoContainer">
            {user.partyMembers.map((partyMember, i) => (
              <div key={i} className="partyMemberInfo">
                <label htmlFor={`partyMember${i}Name`}>Name {i + 1}:</label>
                <input
                  type="text"
                  id={`partyMember${i}Name`}
                  value={user.partyMembers[i].name}
                  onChange={({ target }) =>
                    handlePartyMembersChange(i, "name", target.value)
                  }
                />

                <label htmlFor={`partyMember${i}Email`}>Email {i + 1}:</label>
                <input
                  type="text"
                  id={`partyMember${i}Email`}
                  value={user.partyMembers[i].email}
                  onChange={({ target }) =>
                    handlePartyMembersChange(i, "email", target.value)
                  }
                />
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
