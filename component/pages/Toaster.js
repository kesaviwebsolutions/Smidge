import React from "react";
import toast, { Toaster } from "react-hot-toast";

export const notify = (msg, dur = 0) =>
  toast.success(msg, {
    duration: dur,
  });

export const spnotify = () =>
  toast.custom(
    (t) => (
      <div
        className={` ${t.visible ? "animate-enter" : "animate-leave"}`}
        onClick={() => {
          window.location.href = "/account"; // Navigate to /account when clicked
          toast.dismiss(t.id); // Dismiss the toast
        }}
      >
        <div className="df aic g05 bcw cb br20 pa1">
          <img src="/check.png" className="w1" alt="" />
          Transaction success. Go to your account:
          <a href="/account" className="text-blue-500 underline cp">
            {window.location.origin}/account
          </a>
        </div>
      </div>
    ),
    { duration: 6000 } // Set duration as needed
  );

export const errors = (msg, dur = 0) =>
  toast.error(msg, {
    duration: dur,
  });

function Toasters() {
  return (
    <div>
      <Toaster position="bottom-left" />
    </div>
  );
}

export default Toasters;
