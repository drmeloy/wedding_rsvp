import { useState } from 'react';
import './App.css';
import { RSVP } from './components/RSVP';
import { SignIn } from './components/SignIn';
import { Attendee, newUser } from './types';

function App() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<Attendee>();

  const handleSignInClick = (emailAddress) => {
    const userData = undefined; // Hit api searching for existing user with that email address
    if (!userData) setUser({ ...newUser, email });
  }

  return (
    <>
    {!user && <SignIn email={email} setEmail={setEmail} onClick={handleSignInClick} />}
    {user && <RSVP user={user} setUser={setUser} onClick={() => {}} />}
    </>
  );
}

export default App;
