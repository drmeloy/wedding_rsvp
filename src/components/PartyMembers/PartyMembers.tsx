import "./styles.css";

export const PartyMembers = ({
  hasPartyMembers,
  setHasPartyMembers,
  partyMembers,
  setNumberInParty,
  setPartyMembers,
}) => (
  <>
    <div>
      <p className="questionHeader">Are you coming with anyone else?</p>
      <div className="partyYesNoContainer">
        <input
          type="radio"
          id="partyYes"
          name="hasParty"
          checked={hasPartyMembers}
          onChange={() => setHasPartyMembers(true)}
        />
        <label className="selectable" htmlFor="partyYes">
          Yes
        </label>

        <input
          type="radio"
          id="partyNo"
          name="hasParty"
          checked={!hasPartyMembers}
          onChange={() => setHasPartyMembers(false)}
        />
        <label className="selectable" htmlFor="partyNo">
          No
        </label>
      </div>
    </div>
    {hasPartyMembers && (
      <div className="partyMembersContainer">
        <div className="partyNumberContainer">
          <p className="questionHeader">Do you have a plus one?</p>
          <div className="partyNumber">
            <span className="arrow" onClick={() => setNumberInParty(partyMembers.length - 1)}>←</span>
            <span className="theNum">{partyMembers.length}</span>
            <span className="arrow" onClick={() => setNumberInParty(partyMembers.length + 1)}>→</span>
          </div>
        </div>
        <div className="partyInfoContainer">
          {partyMembers.map((partyMember, i) => (
            <div key={i} className="partyMemberInfo nameEmailInput">
              <label htmlFor={`partyMember${i}Name`} className="questionHeader">
                Name {partyMembers.length > 1 && i + 1}:
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
                Email {partyMembers.length > 1 && i + 1}:
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
