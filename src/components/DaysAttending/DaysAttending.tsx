import { DayFlags } from "../../types";
import "./styles.css";

export const DaysAttending = ({
  daysAttending,
  handleChange,
}: {
  daysAttending: DayFlags;
  handleChange: (value) => void;
}) => (
  <div>
    <p className="questionHeader">Which days will you be attending:</p>
    <div className="daysContainer">
      {[
        { label: "Thursday", value: "thu" },
        { label: "Friday", value: "fri" },
        { label: "Saturday", value: "sat" },
        { label: "Sunday", value: "sun" },
        { label: "Monday", value: "mon" },
      ].map((day) => (
        <div className="dayCheckbox">
          <input
            type="checkbox"
            id={day.value}
            checked={daysAttending[day.value]}
            onChange={({ target }) => handleChange(target.id)}
          />
          <label htmlFor={day.value}>{day.label}</label>
        </div>
      ))}
    </div>
  </div>
);
