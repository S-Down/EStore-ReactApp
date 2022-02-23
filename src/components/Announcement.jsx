import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 3px;
`

const Announcement = () => {
  return (
    <Container>
        超级优惠! 购物下单可享减免最高至500元
    </Container>
  )
}

export default Announcement