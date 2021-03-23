import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Card from '../components/Card'
import PromptBox from '../components/PromptBox'
import Modal from '../components/Modal'

import PromptsData from '../data/prompts'

export default function Reflect() {

  const [ prompt, setPrompt ] = useState({})
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const history = useHistory();

    function redirectToStart() {
      setIsModalOpen(false);
      history.push("/start");
    }


  // const [ prompts, setPrompts ] = useState([])
  useEffect(() => {
    randomPrompt()
  }, [])

  function randomPrompt() {
    let randomNumber = Math.floor(Math.random() * 9 )
    setPrompt(PromptsData[randomNumber])
  }

  function openModal() {
    setIsModalOpen(true)
  }

  return (
    <Card>
      <div className="card-body">
        <h2 className="card-heading">
          Take a moment to reflect if you need a quick break
        </h2>
        <p className="text-sm">
          Setting a timer for this break can help you if you have limited time
        </p>

        {/* Change prompt button */}
        <button className="grow" onClick={randomPrompt}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#3B82F6"
            />
            <path
              d="M29.3733 23.5928C29.2836 23.5618 29.1882 23.5488 29.0934 23.5545C28.9986 23.5603 28.9059 23.5847 28.8205 23.6262C28.7352 23.6678 28.6592 23.7258 28.5962 23.7969C28.5333 23.868 28.4845 23.9509 28.4536 24.0406C27.863 25.7573 26.7347 27.2377 25.2357 28.2618C23.7367 29.2859 21.9472 29.7991 20.1333 29.7252C18.3193 29.6512 16.5777 28.9941 15.167 27.8513C13.7563 26.7086 12.7519 25.1413 12.303 23.3822C11.8541 21.6232 11.9847 19.7662 12.6753 18.0873C13.3659 16.4083 14.5798 14.997 16.1365 14.0629C17.6932 13.1288 19.51 12.7219 21.3164 12.9025C23.1228 13.0831 24.8228 13.8417 26.1637 15.0655L22.3178 15.6837C22.1285 15.714 21.9591 15.8182 21.8467 15.9735C21.7343 16.1287 21.6886 16.3223 21.7189 16.5115C21.7492 16.7008 21.853 16.8703 22.0083 16.9827C22.1635 17.0951 22.357 17.1412 22.5463 17.1109L28.6708 16.1267L27.6865 10.0025C27.6715 9.90878 27.638 9.81898 27.5883 9.73819C27.5385 9.6574 27.4734 9.58721 27.3965 9.5316C27.3197 9.476 27.2326 9.43608 27.1403 9.41413C27.048 9.39218 26.9522 9.38863 26.8585 9.40367C26.7649 9.41871 26.6754 9.45205 26.5946 9.5018C26.5138 9.55154 26.4436 9.61672 26.388 9.6936C26.3324 9.77047 26.2922 9.85754 26.2702 9.94984C26.2483 10.0421 26.2445 10.1379 26.2596 10.2315L26.8201 13.7188C25.2041 12.3674 23.1981 11.5683 21.0956 11.438C18.9931 11.3078 16.9042 11.8533 15.1339 12.9949C13.3635 14.1365 12.0043 15.8143 11.2554 17.7833C10.5066 19.7522 10.4071 21.909 10.9713 23.9385C11.5356 25.9681 12.7341 27.764 14.3917 29.0639C16.0493 30.3638 18.0792 31.0996 20.1848 31.1636C22.2903 31.2277 24.3614 30.6168 26.095 29.4201C27.8286 28.2234 29.1336 26.5036 29.8202 24.5122C29.8828 24.3309 29.8709 24.1322 29.787 23.9598C29.7032 23.7874 29.5545 23.6554 29.3733 23.5928Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </button>
        <PromptBox>
          <p>{prompt.prompt}</p>
        </PromptBox>
        <div className="buttons">
          <button className="CTA" onClick={openModal}>
            Finished with prompt
          </button>
          <button className="btn-secondary">I'll skip for now</button>
        </div>
      </div>
      <div className="dyk-container">
        <p className="dyk-title">Did you know?</p>
        <p className="dyk-body">
          Spending time reflecting on your wins and where you can improve can
          make you a better learner
        </p>
      </div>
      <Modal isModalOpen={isModalOpen}>
        <p>
          Great job so far! <br />
          Let's keep going 😁
        </p>
      </Modal>
      <div style={{ display: "none" }}>
        {isModalOpen &&
          setTimeout(() => {
            redirectToStart()
          }, 3000)}
      </div>
    </Card>
  );
}
