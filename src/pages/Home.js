import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Card from '../components/Card'
import TimeSelect from '../components/TimeSelect'

import Modal from '../components/Modal'

export default function Home() {

  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const history = useHistory()

  const openModal = () => {
    setIsModalOpen(true)
  }

  function redirectToStart() {
    setIsModalOpen(false)
    history.push('/start')
  }

  return (
    <div>
      <Card>
        <p className="card-heading">Welcome To Manabu</p>
        <p className="card-body">Get your learning journal</p>
        <p className="card-body">Review last sesion's "How might I improve?"</p>
        <p className="card-body">Check-in:</p>
        <ul className="card-body">
          <li>How are your energy levels?</li>
          <li>Are there any time constraints?</li>
          <li>Do you need to prepare your learning environment?</li>
        </ul>
        <p className="card-body">
          Time to pat yourself on the back for taking the time to learn
        </p>
        <p className="card-subheading">How often would you like to check-in?</p>
        <div className="timeSelection-container">
          <TimeSelect time="10" />
          <TimeSelect time="15" />
          <TimeSelect time="30" />
        </div>
        <button className="CTA" onClick={openModal}>
          I am ready to begin
        </button>
        <Modal
          isModalOpen={isModalOpen}
        >
          <p>
            Okay, <br />
            Let's begin!
          </p>
        </Modal>
        { isModalOpen && setTimeout(() => {
          redirectToStart()
        }, 3000)}
      </Card>
    </div>
  );
}
