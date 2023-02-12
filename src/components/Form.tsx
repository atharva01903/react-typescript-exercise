import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserData {
  name: string;
  phoneNumber: string;
  email: string;
}

const Form: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let userData: UserData = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };
    localStorage.setItem("userDataKey", JSON.stringify(userData));
    navigate("/second-page");
  };

  useEffect(() => {
    const localUserData = JSON.parse(localStorage.getItem("userDataKey") || '{}');
    if (localUserData) {
      setName(localUserData.name);
      setPhoneNumber(localUserData.phoneNumber);
      setEmail(localUserData.email);
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="tel"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;