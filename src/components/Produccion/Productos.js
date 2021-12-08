import styled from "styled-components";

const FormButton = styled.button`

`


const Table = () => {
    return(
    <TableComponent className='TableComponent TableComponent-striped'>
        <thead>
            <tr className='table-active'>
                <th scope='col'>#</th>
                <th scope='col'>Producto</th>
                <th scope='col'>Cantidad</th>
                <th scope='col'>Accion</th>
            </tr>
            
        </thead>
        <tbody>


        {disponible.map((item, index)=>{
                return(
                    <tr className='table-light'>
                        <td>{index+1}</td>
                        <td>{item.producto}</td>
                        <td>{item.cantidad}</td>
                        <td><FormButton >Agregar</FormButton></td>
                    </tr>
                    
            )})}
        </tbody>

    </TableComponent>)
}