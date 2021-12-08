import styled from 'styled-components';
import materia from '../../data/materia';





const Container = styled.div `
    background-color: #EAE5FB;
    margin: 60px, 30px, 0, 30px;
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
`
const Wrapper = styled.div`
    padding: 1rem;
`

const Title = styled.h1`
    color: #5C5D5F;
    font-size: 30px;
    padding:1rem;
`

const TableComponent = styled.table`
    width:1000px;
    margin: 0 auto;
`

const Table = () => {
    return(
    <TableComponent className='table table-striped'>
        <thead>
            <tr className='table-active'>
                <th scope='col'>#</th>
                <th scope='col'>Producto</th>
                <th scope='col'>Cantidad</th>
                <th scope='col'>Accion</th>
            </tr>
            
        </thead>
        <tbody>


        {materia.map((item, index)=>{
                return(
                    <tr className='table-light'>
                        <td>{index+1}</td>
                        <td>{item.producto}</td>
                        <td>{item.cantidad}</td>
                        <td>Editar</td>
                    </tr>
            )})}
        </tbody>

    </TableComponent>)
}
    



const MasVendido = () => {
    return(
        <Container>
            <Wrapper>
                <Title>Más vendidos</Title>
                <Table />
            </Wrapper>
        </Container>
    )
}

export default MasVendido;