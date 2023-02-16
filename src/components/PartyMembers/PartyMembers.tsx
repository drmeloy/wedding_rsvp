import './styles.css';

export const PartyMembers = ({
  hasPartyMembers,
  setHasPartyMembers,
  partyMembers,
  setNumberInParty,
  setPartyMembers,
}) => (
  <>
    <div className="partyMembersContainer">
      <p className="questionHeader">Are you coming with anyone else?</p>
      <div>
        <input
          type="radio"
          id="partyYes"
          name="hasParty"
          checked={hasPartyMembers}
          onChange={() => setHasPartyMembers(true)}
        />
        <label htmlFor="partyYes">Yes</label>

        <input
          type="radio"
          id="partyNo"
          name="hasParty"
          checked={!hasPartyMembers}
          onChange={() => setHasPartyMembers(false)}
        />
        <label htmlFor="partyNo">No</label>
      </div>
    </div>
    {hasPartyMembers && (
      <div className="partyMembersContainer">
        <p className="questionHeader">How many others are coming with you?</p>
        <input
          type="number"
          value={partyMembers.length}
          onChange={({ target }) => setNumberInParty(Number(target.value))}
        />
        <div className="partyInfoContainer">
          {partyMembers.map((partyMember, i) => (
            <div key={i} className="partyMemberInfo">
              <label htmlFor={`partyMember${i}Name`} className="questionHeader">
                Name {i + 1}:
              </label>
              <input
                type="text"
                id={`partyMember${i}Name`}
                value={partyMembers[i].name}
                onChange={({ target }) =>
                  setPartyMembers(i, "name", target.value)
                }
              />

              <label
                htmlFor={`partyMember${i}Email`}
                className="questionHeader"
              >
                Email {i + 1}:
              </label>
              <input
                type="text"
                id={`partyMember${i}Email`}
                value={partyMembers[i].email}
                onChange={({ target }) =>
                  setPartyMembers(i, "email", target.value)
                }
              />
            </div>
          ))}
        </div>
      </div>
    )}
  </>
);
