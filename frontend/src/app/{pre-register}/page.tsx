"use client";

import { cabinetExtraBold, cabinetRegular } from "../utils/fonts";
import Navbar from "../components/Navbar/Navbar";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [color, setColor] = useState<string>("bg-secondary");
  const [submitStatus, setSubmitStatus] = useState<string>("Submit");
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitData = { email };

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.status == 200 || res.status == 409) {
        setColor("bg-green text-white");
        setSubmitStatus("Email Submitted");
        setEmail("");
        setDisabled(true);
      } else {
        setSubmitStatus("Failed!");
        setColor("bg-red text-white");
        setEmail("");
        setDisabled(true);
      }
    } catch {
      setSubmitStatus("Failed!");
      setColor("bg-red text-white");
      setEmail("");
      setDisabled(true);
    }
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div
          className={`${styles.background_container} h-screen flex justify-center items-center`}
        >
          <div
            className={`${styles.muted_color} rounded-[0.65rem] w-[80vw] md:w-[50vw] max-w-[630px] h-fit lg:h-[22rem] flex flex-col gap-4 items-center  border-secondary border-2 backdrop-blur-sm px-9 py-9 mx-auto `}
          >
            <p
              className={`${cabinetExtraBold.className} text-primary-gradient-color w-fit text-3xl md:text-5xl text-center`}
            >
              Registration Starts Soon!
            </p>
            <p
              className={`text-white text-base md:text-2xl text-center font-light ${cabinetRegular.className}`}
            >
              Pre-Register Now to Get Notified When Registration Starts.
            </p>

            <div className="flex flex-col justify-center items-center  gap-8 w-full">
              <div className="w-full h-[3rem] primary-gradient-background p-[3px] flex justify-center items-center rounded ">
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className={`w-full h-full rounded bg-violet pl-4 py-2 ${cabinetRegular.className} text-white`}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <button
                type="submit"
                className={`w-full h-[2.9rem] ${color} p-[3px] flex justify-center items-center rounded font-bold mx-2 py-5`}
                disabled={disabled}
              >
                {submitStatus}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
