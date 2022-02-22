import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #37354F;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2349DD54'/%3E%3Cstop offset='1' stop-color='%2337354F'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%2380FFE2' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2380FFE2' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.5'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    width: 100%;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #008080;
    color: white;
    display: inline-block;
    font-size: 14px;
    letter-spacing: 7px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: rgba(0, 128, 128, 0.7);
    }
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>创建新账号</Title>
                <Form>
                    <Input placeholder="名" />
                    <Input placeholder="姓" />
                    <Input placeholder="用户名" />
                    <Input placeholder="邮箱地址" />
                    <Input placeholder="密码" />
                    <Input placeholder="再次确认密码" />
                    <Agreement>
                        通过创建账号,我同意按照<b>隐私政策</b>处理我的个人数据
                    </Agreement>
                    <Button>创建账号</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register