import { useState } from "react";
import "../../App.css";
import { PrimaryButton, TextInput } from "../../components";
import { Account } from "../../model/account";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();

  const onPressSignUp = () => {
    let account = new Account(email, password, name);
    let accountJson = JSON.stringify(account);
    localStorage.setItem(email, accountJson);
    navigate("/", { replace: true });
  };

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="App">
      <header className="App-header">
        <TextInput
          onChange={(element) => setName(element.target.value)}
          placeholder="Name"
        />
        <TextInput
          onChange={(element) => setEmail(element.target.value)}
          placeholder="E-mail"
          type="email"
        />
        <TextInput
          onChange={(element) => setPassword(element.target.value)}
          placeholder="Password"
          type="password"
        />
        <div>
          <PrimaryButton onClick={onPressSignUp}>SIGN UP</PrimaryButton>
        </div>
      </header>
    </div>
  );
}
