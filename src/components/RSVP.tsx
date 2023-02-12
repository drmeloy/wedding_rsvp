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
            {user.stayLocation.tentOrRv === "rv" &&
              <p>Please communicate with Dan & Madz to verify there are enough spaces left!</p>
            }
          </>
        )}
        {user.stayLocation.onPremises === false && 
          <p>Enjoy your stay wherever you'll be! Keep tuned for car pooling options to reduce the number of cars parking on site.</p>
        }
      </div>
    </div>
  );
};
