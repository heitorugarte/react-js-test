import logo from "./logo.svg";
import "../../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton, TextInput } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Account } from "../../model/account";

function LoginPage() {
  const navigate = useNavigate();

  function onLogin() {
    if (email != null) {
      let accountJson = localStorage.getItem(email);
      if (accountJson != null) {
        let accountObject: Account = JSON.parse(accountJson);
        if (accountObject.password == password) {
          toast("DEU BOA!");
        } else {
          toast("Senha incorreta.");
        }
      } else {
        toast("Não foi encontrada nenhuma conta com o e-mail informado.");
      }
    }
    clearFields();
  }

  function onSignUp() {
    navigate("/sign-up");
  }

  function clearFields() {
    setEmail("");
    setPassword("");
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextInput
          id="email-field"
          onChange={handleEmailChange}
          placeholder="E-mail"
          value={email}
        />
        <TextInput
          id="password-field"
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          value={password}
        />
        <div
          style={{
            height: 120,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <PrimaryButton onClick={onLogin}>Login</PrimaryButton>
          <SecondaryButton onClick={onSignUp}>Sign Up</SecondaryButton>
        </div>
      </header>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
