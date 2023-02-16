import './styles.css';

export const DietaryRestrictions = ({
  hasDietaryRestrictions,
  setHasDietaryRestrictions,
  restrictionsDescription,
  setRestrictionsDescription,
}) => (
  <>
    <p className="questionHeader">Do you have any dietary restrictions?</p>
    <div className="dietaryRestrictionsContainer">
      <input
        type="radio"
        id="dietYes"
        name="dietaryRestrictions"
        checked={hasDietaryRestrictions}
        onChange={() => setHasDietaryRestrictions(true)}
      />
      <label htmlFor="dietYes">Yes</label>

      <input
        type="radio"
        id="dietNo"
        name="dietaryRestrictions"
        checked={!hasDietaryRestrictions}
        onChange={() => setHasDietaryRestrictions(false)}
      />
      <label htmlFor="dietNo">No</label>
    </div>
    {hasDietaryRestrictions && (
      <div className="restrictionsDescription">
        <label htmlFor="w3review">Please describe:</label>
        <div>
          <textarea
            id="w3review"
            name="w3review"
            cols={40}
            rows={5}
            value={restrictionsDescription}
            onChange={({ target }) =>
              setRestrictionsDescription(target.value)
            }
          />
        </div>
      </div>
    )}
  </>
);
