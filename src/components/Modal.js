import React from 'react'

export default function Modal({ isModalOpen, children }) {
  if(!isModalOpen) return null;
  return (
    <>
      <div className="overlay" />
      <div className="modal">
        {children}
      </div>
    </>
  )
}

