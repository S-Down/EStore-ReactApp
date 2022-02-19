import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option`

`

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>连衣裙</Title>
        <FilterContainer>
            <Filter>
                <FilterText>筛选产品</FilterText>
                <Select>
                    <Option disabled selected>
                        颜色
                    </Option>
                    <Option>白</Option>
                    <Option>黑</Option>
                    <Option>红</Option>
                    <Option>蓝 </Option>
                    <Option>黄</Option>
                    <Option>绿</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        尺寸
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>分类排序</FilterText>
                <Select>
                    <Option selected>最新上架</Option>
                    <Option>价格升序</Option>
                    <Option>价格降序</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList