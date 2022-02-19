import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 85vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: white;
    margin: 20px;
`

const Button = styled.button`
    border: 1px solid white;
    padding: 10px;
    background-color: transparent;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>即刻选购</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem