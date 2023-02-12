import '../App.css';

export const SignIn = ({ email, setEmail, onClick }) => 
  <div className="signInContainer">
    <div style={{ fontSize: "3em" }}>
      Thank you for coming to RSVP for our wedding!
    </div>
    <div style={{ fontSize: "2em" }}>
      To begin, please enter your email:
    </div>
    <input className='signInInput' type="text" onChange={({ target }) => setEmail(target.value)} value={email} />
    <button onClick={onClick} className='signInButton'>Submit</button>
  </div>
