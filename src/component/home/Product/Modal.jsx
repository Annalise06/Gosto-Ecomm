import React from 'react'

const Modal = ({ open, OnClose, children }) => {
  return (
    <div onClick={OnClose} className={`fixed inset-0  flex justify-center items-center transition-colors 
    ${open ? 'visible bg-black/20' : 'invisible'}
    `}>
      {children}
    </div>
  )
}

export default Modal;