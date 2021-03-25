import React, { createContext, useContext, useState, useRef } from "react";

export const HomeContext = createContext();
export const useHomeContext = () => useContext(HomeContext);

export function HomeContextProvider({ children }) {
  // store state here
  const [notificationInterval, setNotificationInterval] = useState("0.16");
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const notificationRef = useRef(null)

  function showNotification() {
    // Hey there!  Click for a quick check in
    const options = {
      body: "Hey there! Click for a quick check in",
    };
    const notification = new Notification("Manabu App", options);
    notification.onclick = function (e) {
      e.preventDefault();
      window.focus();
    };
  }

  if (Notification.permission === "granted") {
    // showNotification()
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        showNotification();
      }
      console.log(permission);
    });
  }
  
  // console.log(notificationInterval)

  return (
    <HomeContext.Provider
      value={{
        notificationInterval,
        setNotificationInterval,
        isRunning,
        setIsRunning,
        time,
        setTime,
        intervalRef,
        notificationRef,
        showNotification
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
