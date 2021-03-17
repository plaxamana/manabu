import React from 'react'

export default function Modal({ open, children, onClose }) {
  if(!open) return null;
  return (
    <>
      <div className="overlay" />
      <div className="modal">
        {children}
      </div>
    </>
  )
}