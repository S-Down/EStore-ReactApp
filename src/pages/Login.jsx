import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #44FF7B;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='100' stroke-opacity='0.19' %3E%3Ccircle fill='%2344FF7B' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2300f28d' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2300e59e' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2300d6ac' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2300c7b8' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2300b8c0' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2300a8c4' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230099c4' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230088c0' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%230078b7' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%230068ab' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%2300589c' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%2300488a' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23003976' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%231b2a61' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23241c4b' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23250f37' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    margin-bottom: 5px;
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

const Link = styled.a`
    margin: 5px 0px;
    width: fit-content;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>登入账号</Title>
                <Form>
                    <Input placeholder="用户名" />
                    <Input placeholder="密码" />
                    <Button>登录</Button>
                    <Link>忘记密码？点击找回密码</Link>
                    <Link>创建一个新账号</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login