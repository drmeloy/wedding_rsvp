export const WhereStaying = ({
  stayingOnPremises,
  setStayingOnPremises,
  tentOrRv,
  setTentOrRv,
}) => (
  <>
    <p className="questionHeader">Will you be staying on premises:</p>
    <div className="locationContainer">
      <input
        type="radio"
        id="yes"
        name="whereStaying"
        checked={stayingOnPremises === true}
        onChange={() => setStayingOnPremises(true)}
      />
      <label htmlFor="yes">Yes</label>

      <input
        type="radio"
        id="no"
        name="whereStaying"
        checked={stayingOnPremises === false}
        onChange={() => setStayingOnPremises(false)}
      />
      <label htmlFor="no">No</label>
    </div>
    {stayingOnPremises === true && (
      <>
        <p className="questionHeader">Staying in tent or RV/trailer?</p>
        <div className="tentOrRvContainer">
          <input
            type="radio"
            id="tent"
            name="tentOrRv"
            checked={tentOrRv === "tent"}
            onChange={() => setTentOrRv("tent")}
          />
          <label htmlFor="tent">Tent</label>

          <input
            type="radio"
            id="rv"
            name="tentOrRv"
            checked={tentOrRv === "rv"}
            onChange={() => setTentOrRv("rv")}
          />
          <label htmlFor="rv">RV/trailer</label>
        </div>
        {tentOrRv === "rv" && (
          <p>
            Please communicate with Dan & Madz to verify there are enough spaces
            left!
          </p>
        )}
      </>
    )}
    {stayingOnPremises === false && (
      <p>
        Enjoy your stay wherever you'll be! Keep tuned for car pooling options
        to reduce the number of cars parking on site.
      </p>
    )}
  </>
);
