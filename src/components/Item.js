import React from 'react'
import styled from 'styled-components'

export const Item = ({ item, handleSelectItem, showFullDetails }) => {
  return (
    <ItemComp onClick={() => handleSelectItem(item)}>
      <Image src={item.photo} alt={`${item.make} model ${item.model}`} />
      <Information>
        <Title>
          {item.make} {item.model}
        </Title>
        <div>{item.price}</div>
      </Information>
      {showFullDetails && (
        <div>
          <div>
            Range: {item.range.distance} {item.range.unit}
          </div>
          <div>Colors: {item.colors.join(', ')}</div>
        </div>
      )}
    </ItemComp>
  )
}

const ItemComp = styled.div`
  border: 1px solid #cfd1d4;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 20px;
  div {
    margin-bottom: 20px;
  }
`
const Image = styled.img`
  width: 400px;
  height: 300px;
  object-fit: contain;

  @media (max-width: 750px) {
    width: 100%;
  }
`

const Information = styled.div`
  text-align: center;
`

const Title = styled.div`
  font-size: 2em;
`
