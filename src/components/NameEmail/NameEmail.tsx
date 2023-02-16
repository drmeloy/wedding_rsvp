import './styles.css';

export const NameEmail = ({ name, setName, email, setEmail }) => (
  <div className="nameEmailContainer">
    <div>
      <label htmlFor="name" className="questionHeader">
        Name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
    </div>
    <div>
      <label htmlFor="email" className="questionHeader">
        Email:
      </label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
    </div>
  </div>
);
