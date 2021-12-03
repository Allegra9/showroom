import React from 'react'
import styled from 'styled-components'
import * as ReactModal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '50%',
  },
}

ReactModal.setAppElement('#root')

export const Modal = ({ title, modalIsOpen, setIsOpen, children }) => {
  let subtitle

  const afterOpenModal = () => {
    subtitle.style.color = '#000'
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel=""
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h2>
      <ModalCloseBtn onClick={closeModal}>&times;</ModalCloseBtn>
      {children}
    </ReactModal>
  )
}

const ModalCloseBtn = styled.button`
  background-color: #fff;
  border: 0;
  font-weight: 400;
  font-size: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`
