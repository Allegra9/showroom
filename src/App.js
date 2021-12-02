import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { Item } from './components/Item'

const API_ROOT = `https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles`

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

Modal.setAppElement('#root')

const App = () => {
  const [items, setItems] = useState(null)
  const [item, setItem] = useState(null)
  const [sortDir, setSortDir] = useState('asc')

  useEffect(() => {
    async function fetchData() {
      let data = await fetch(API_ROOT)
      data = await data.json()
      setItems(data)
    }
    fetchData()
  }, [])

  const handleSelectItem = (item) => {
    setItem(item)
    openModal()
  }

  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#000'
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const sortItemsByPrice = () => {
    const itemsWithParsedPrice = items.map((item) => {
      item.priceNum = parseInt(item.price, 10)
      return item
    })
    itemsWithParsedPrice.sort((a, b) => {
      return sortDir === 'asc'
        ? a.priceNum - b.priceNum
        : b.priceNum - a.priceNum
    })
    setItems(itemsWithParsedPrice)
    setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
  }

  return (
    <Container>
      <SortButton onClick={sortItemsByPrice}>Sort by price</SortButton>
      <Items>
        {items &&
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleSelectItem={handleSelectItem}
              showFullDetails={false}
            />
          ))}
      </Items>
      {item && (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel=""
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            {item.make} {item.model}
          </h2>
          <ModalCloseBtn onClick={closeModal}>&times;</ModalCloseBtn>
          <Item
            key={item.id}
            item={item}
            handleSelectItem={handleSelectItem}
            showFullDetails={true}
          />
        </Modal>
      )}
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 80%;
  margin: 80px auto;

  @media (max-width: 750px) {
    width: 90%;
  }
`

const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

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

const SortButton = styled.button`
  background-color: #fff;
  border: 0;
  border: 1px solid #cfd1d4;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`
