import styled from "styled-components";
import disponible from "../../data/disponible";
import { useState } from "react";

const Container = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
`

const FormContainer = styled.div`
    padding-top:1rem;

`

const Form = styled.form`

`

const FormInput = styled.input`
    height: 30px;
    width: ${props => props.width && props.width };
`

const LabelInput = styled.label`
    display: block;
    font-size: 20px;
`

const FormButton = styled.button`

`

const Top = styled.div`
    display: flex;
    justify-content: center;;
`

const Mid = styled.div`

`

const Bottom = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
`

const InputDiv = styled.div`
    padding: 0.5rem 1rem;
    align-items: center;
    text-align: center;
`

const Desc = styled.textarea`
    resize: none;
    width: 650px;
    height:160px;

`

const TableComponent = styled.table`
    width:${props => props.width};
    margin: 0 auto;
    text-align: center;
`
const ItemListDiv = styled.div`
    margin-top:30px;
`



const CrearForm = () => {

    const [items, setItems] = useState([]);


    const Table = () => {
        return(
        <TableComponent width={'1000px'} className='table table-striped'>
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
                            <td><FormButton className="btn btn-primary" onClick={()=>{
                                setItems(items => [...items, item.producto]);
                                console.log(item.producto);
                                console.log(items);
                            }}>Agregar</FormButton></td>
                        </tr>
                        
                )})}
            </tbody>
    
        </TableComponent>)
    };

    const ItemsTable = () => {
        return(
            <TableComponent width='700px' className='table table-striped'>
                <thead>
                    <tr className='table-active'>
                        <th scope='col'>Producto</th>
                        <th scope='col'>Cantidad</th>
                    </tr>
                </thead>

                <tbody>
    
    
            {items.map((item)=>{
                    return(
                        <tr className='table-light'>
                            <td>{item}</td>
                            <td>2</td>
                        </tr>
                        
                )})}
            </tbody>

            </TableComponent>
        )
    }

    

    

    return (
        <div>
            
            <Container>
                <FormContainer>
                    <Form>
                        <Top>
                            <InputDiv>
                                <LabelInput>Nombre</LabelInput>
                                <FormInput width={'400px'}/>
                            </InputDiv>
                        </Top>
                        <Mid>
                            <InputDiv>
                                <LabelInput>Descripcion</LabelInput>
                                <Desc />
                            </InputDiv>
                        </Mid>

                        <Bottom>
                            <FormButton className='btn btn-success'>Generar orden</FormButton>
                        </Bottom>
                        

                    </Form>
                </FormContainer>

                <ItemListDiv>
                    <ItemsTable />
                </ItemListDiv>
                
                
            </Container>
            <Table />

        </div>

    )
}

export default CrearForm;