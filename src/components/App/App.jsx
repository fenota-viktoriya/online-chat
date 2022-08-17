import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Chat } from "pages/Chat";
import { Bar } from "../Bar";
import { Register } from "pages/Register";
import { Login } from "pages/Login";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Bar />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Chat />} />
        </Route>
      </Routes>
    </div>
  );
};
