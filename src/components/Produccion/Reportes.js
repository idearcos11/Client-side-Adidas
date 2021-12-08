import styled from 'styled-components';


const Container = styled.div`
    
    display: flex;
    gap: 6rem;
    margin-top: 60px;
    margin-bottom: 60px;
    justify-content: center;
`
const Card = styled.div`
    background-color: #${props => props.action === 'aDespachar' ? '7553F2' : '1FA4B5' };
    padding: 1rem 2rem;
    width:300px;
    height: 150px;
    border-radius: 10px;
    cursor: pointer;
`

const CardTitle = styled.h1`
    font-weight: bold;
    color: white;
    font-size:35px;
`
const CardContent = styled.p`
    color: white;
`

const Reportes = () => {

    return(
        <Container>
            <Card action='aDespachar'>
            <CardTitle>100 (+5%)</CardTitle>
            <CardContent>Pedidos por despachar</CardContent>
            </Card>
            <Card action='despachados'>
            <CardTitle>2000 (+10%)</CardTitle>
            <CardContent>Pedidos despachados</CardContent>
            </Card>
        </Container>
    )
}

export default Reportes;