import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Card from "../components/Card";
import TimeSelect from "../components/TimeSelect";

import Modal from "../components/Modal";

import { useHomeContext } from "../components/HomeContext";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  const { notificationInterval, setNotificationInterval } = useHomeContext();

  const openModal = () => {
    setIsModalOpen(true);
  };

  function redirectToStart() {
    setIsModalOpen(false);
    history.push("/start");
  }

  function onRadioChange(e) {
    setNotificationInterval(e.target.value);
  }

  // console.log(notificationInterval)

  return (
    <Card>
      <div style={{ padding: "1em" }}>
        <div className="card-body">
          <p className="card-heading">Welcome To Manabu</p>
          <p>Get your learning journal</p>
          <p>Review last sesion's "How might I improve?"</p>
          <p>Check-in:</p>
          <ul className="list">
            <li>How are your energy levels?</li>
            <li>Are there any time constraints?</li>
            <li>Do you need to prepare your learning environment?</li>
          </ul>
          <p>Time to pat yourself on the back for taking the time to learn</p>
          <p className="card-subheading">
            How often would you like to check-in?
          </p>
          <div className="timeSelection-container">
            <TimeSelect
              name="notificationInterval"
              value={"0.16"}
              checked={notificationInterval === "0.16"}
              onChange={onRadioChange}
            >
              10 seconds
            </TimeSelect>
            <TimeSelect
              name="notificationInterval"
              value={"10"}
              checked={notificationInterval === "10"}
              onChange={onRadioChange}
            >
              10 mins
            </TimeSelect>
            <TimeSelect
              name="notificationInterval"
              value={"15"}
              checked={notificationInterval === "15"}
              onChange={onRadioChange}
            >
              15 mins
            </TimeSelect>
            {/* <TimeSelect
              name="notificationInterval"
              value={30}
              checked={notificationInterval === 30}
              onChange={onRadioChange}
            >
              30 mins
            </TimeSelect> */}
          </div>
          <button className="CTA" onClick={openModal}>
            I am ready to begin
          </button>
        </div>
        <Modal isModalOpen={isModalOpen}>
          <p>
            Okay, <br />
            Let's begin!
          </p>
        </Modal>
        <div style={{ display: "none" }}>
          {isModalOpen &&
            setTimeout(() => {
              redirectToStart();
            }, 3000)}
        </div>
      </div>
    </Card>
  );
}
