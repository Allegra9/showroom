import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Modal } from './components/Modal'
import { Item } from './components/Item'

const API_ROOT = `https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles`

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

  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

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
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          title={`${item.make} ${item.model}`}
        >
          <Item
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

const SortButton = styled.button`
  background-color: #fff;
  border: 0;
  border: 1px solid #cfd1d4;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`
