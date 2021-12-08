import styled from "styled-components";
import adidasOffice from '../images/adidas-office.jpg';

const Container = styled.div`
    display: flex;
`

const BgPhoto = styled.div`
    background: url(${adidasOffice});
    width:50%;
    height:100vh;
    filter: brightness(50%);
` 

const LoginContainer = styled.div`
    width: 50%;
    display: flex;
`

const LoginForm= styled.form`
    margin: auto;
    justify-content: center;
`

const LoginInput = styled.input`
    margin:15px auto;
    width:300px;
    height:30px;
    padding: 1rem;
`

const LoginButton = styled.button`
    display: block;
    margin: 30px auto;
`

const LoginLabel = styled.h3`
    color: #5C5A5F;
    font-size: 22px;
`


const Login = () => {
    return(
        <Container>
            <BgPhoto />
            <LoginContainer>
                <LoginForm>
                    <LoginLabel>Usuario:</LoginLabel>
                    <LoginInput></LoginInput>
                    <LoginLabel>Contraseña:</LoginLabel>
                    <LoginInput></LoginInput>
                    <LoginButton type='submit' className='btn btn-secondary'>Ingresar</LoginButton>
                </LoginForm>
            </LoginContainer>
        </Container>
    )
}

export default Login;