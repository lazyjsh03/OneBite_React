import { useState } from "react";

// 회원가입 폼
// 1. name
// 2. birth
// 3. country
// 4. introduce

const Register = () => {
  const [name, setName] = useState("Name");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"Name"} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value={""}></option>
          <option value={"kr"}>Korea</option>
          <option value={"us"}>USA</option>
          <option value={"uk"}>UK</option>
        </select>
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio} />
        {bio}
      </div>
    </div>
  );
};

export default Register;
