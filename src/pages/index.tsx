import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <button type="button" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="card-body d-none">
              <form>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <button type="button" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
