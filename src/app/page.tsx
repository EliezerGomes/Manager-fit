"use client";

import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoFitness } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState(false)
  const router = useRouter()

  function changeUser(val: string) {
    setUser(val);
  }

  function changePassword(val: string) {
    setPassword(val);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setUser("")
    setPassword("")
    router.push("/main")
  }

  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-1 bg-primary justify-center items-center">
        <img src="/login.svg" className="w-2/3" />
      </div>

      <div
        className="flex flex-col w-2/5 justify-center items-center"
      >
        <form  onSubmit={handleSubmit} className="flex flex-col w-2/3 h-90 flex-col bg-gray-100 rounded-sm gap-4">
          <div className="bg-secundary rounded-t-sm h-18 flex flex-row gap-2 items-center justify-center">
            <h1 className="text-2xl font-semibold text-white">Manager Fit</h1>
            <IoFitness className="text-2xl text-white" />
          </div>

          <div className="flex flex-col justify-center gap-4 p-5">
            <div className="flex flex-row items-center bg-white p-3 gap-2 rounded-md border border-gray-200">
              <input
                className="flex-1 border border-0 outline-0"
                placeholder="Usúario"
                value={user}
                onChange={(evt) => changeUser(evt.target.value)}
              />
              <FaUserAlt className="text-primary" />
            </div>

            <div className="flex flex-row items-center bg-white p-3 gap-2 rounded-md border border-gray-200">
              <input
                type={!view ? "password" : "text" }
                className="flex-1 border border-0 outline-0"
                placeholder="Senha"
                value={password}
                onChange={(evt) => changePassword(evt.target.value)}
              />
              {!view ? <FaEye className="text-primary text-xl cursor-pointer" onClick={() => setView(true)} /> : <FaEyeSlash className="text-primary text-xl cursor-pointer" onClick={() => setView(false)} />}
            </div>

            <button className="bg-secundary p-2 rounded-sm w-1/1 cursor-pointer hover:bg-green-600 transition duration-200" type="submit">
              <span className="text-lg text-white">Entrar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
