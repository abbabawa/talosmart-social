import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import AuthForm from "@/components/AuthForm";
import { useState } from "react";
import { IAuthData } from "@/types/auth";
import useMakeRequest from "@/hooks/useMakeRequest";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { sendRequest, loading, response, error } = useMakeRequest();

  const [showLoginOrRegister, setShowLoginOrRegister] = useState<
    "login" | "register"
  >("login");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState<"error" | "success">("error");
  const [loginData, setLoginData] = useState<IAuthData>({
    username: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState<IAuthData>({
    username: "",
    password: "",
  });

  const loginHandleChange = (name: string, value: string) => {
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const loginHandleSubmit = async () => {
    try {
      let res = await sendRequest(loginData, "login", "POST");
      console.log(res, "login response");
      // router.push("/dashboard", { scroll: false });
      if (!res.error) {
        router.push("/posts/" + loginData.username, { scroll: false });
      } else {
        setMessage(
          "An error occurred while logging you in. Please try again later."
        );
        setMessageType("error");
        setShowMessage(true);
      }
    } catch (err) {
      console.log(err, "login error");
      setMessage(
        "An error occurred while logging you in. Please try again later."
      );
      setMessageType("error");
      setShowMessage(true);
    }
  };

  const registerHandleChange = (name: string, value: string) => {
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const registerHandleSubmit = async () => {
    try {
      let res = await sendRequest(loginData, "register", "POST");
      console.log(res, "register response");
      if (!res.error) {
        setMessage(
          "You have been registered successfully. Please login to continue."
        );
        setMessageType("success");
        setShowLoginOrRegister("login");
        setShowMessage(true);
      } else {
        setMessage(
          "An error occurred while registering you. Please try again later."
        );
        setMessageType("error");
      }
    } catch (err) {
      console.log(err, "register error");
      setMessage(
        "An error occurred while registering you. Please try again later."
      );
      setMessageType("error");
      setShowMessage(true);
    }
  };
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-7">
          <h4>Welcome to </h4>
          <h2>TALOSMART</h2>
          <h3>Social</h3>
        </div>
        <div className="col-5">
          <div className="card mt-5">
            <div className="card-header p-0">
              <ul className="nav nav-tabs">
                <li
                  className="nav-item"
                  onClick={() => setShowLoginOrRegister("login")}
                >
                  <a
                    className={`nav-link ${
                      showLoginOrRegister === "login" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#"
                  >
                    Login
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => setShowLoginOrRegister("register")}
                >
                  <a
                    className={`nav-link ${
                      showLoginOrRegister === "register" ? "active" : ""
                    }`}
                    href="#"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={`card-body ${
                showLoginOrRegister === "login" ? "" : "d-none"
              } `}
            >
              <AuthForm
                title="Login to Talosmart social"
                onChange={loginHandleChange}
                username={loginData.username}
                password={loginData.password}
                onSubmit={loginHandleSubmit}
              />
            </div>
            <div
              className={`card-body ${
                showLoginOrRegister === "register" ? "" : "d-none"
              } `}
            >
              <AuthForm
                title="Create an account on Talosmart social"
                onChange={registerHandleChange}
                username={registerData.username}
                password={registerData.password}
                onSubmit={registerHandleSubmit}
              />
            </div>
          </div>
          <div className="mt-2">
            {showMessage && (
              <div
                className={`alert ${
                  messageType === "error" ? "alert-danger" : "alert-primary"
                }  d-flex`}
                role="alert"
              >
                {message}
                <button
                  type="button"
                  className="btn-close ms-auto"
                  // data-bs-dismiss="alert"
                  // aria-label="Close"
                  onClick={() => setShowMessage(false)}
                ></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
