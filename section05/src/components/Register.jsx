import { useState } from "react";

// 회원가입 폼
// 1. name
// 2. birth
// 3. country
// 4. introduce

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"Name"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value={""}></option>
          <option value={"kr"}>Korea</option>
          <option value={"us"}>USA</option>
          <option value={"uk"}>UK</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </div>
  );
};

export default Register;
