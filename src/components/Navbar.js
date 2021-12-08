import styled from 'styled-components';
import logo from  '../images/logo.png';


const Container = styled.div`
    background-color: #EAE5FB;
    height: 60px;
    display: flex;
    align-items: center;
    
`

const Left = styled.div`
    display:flex;
    flex: 1;
    justify-content: flex-start;
    gap: 1rem;
    margin-left: 20px;
    align-items: center;
`

const Right = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-right:40px;
`

const NavItemL = styled.div`
    color: #6495ED;
    cursor: pointer;
`
const NavItemR = styled.div`
    color: white;
    padding: 8px 20px;
    background-color: #7553F2;
    border-radius:10px;
    align-items: center;
`

const Logo = styled.img`
    height: 40px;
`

const Navbar =  () => {
    return (
        <Container>
            <Left>
                <Logo src={logo}/>
                <NavItemL>Dashboard</NavItemL>
                <NavItemL>Crear</NavItemL>
            </Left>
            <Right>
                <NavItemR>Usuario</NavItemR>
            </Right>
        </Container>
    )
}

export default Navbar;