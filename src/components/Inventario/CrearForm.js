import styled from "styled-components";


const Container = styled.div`
    margin-bottom: 20px
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

const CrearForm = () => {
    return(
        <Container>
            <FormContainer>
            <Form>
                <Top>
                    <InputDiv>
                        <LabelInput>Nombre</LabelInput>
                        <FormInput width={'400px'}/>
                    </InputDiv>
                    <InputDiv>
                        <LabelInput >Valor</LabelInput>
                        <FormInput width={'125px'}/>
                    </InputDiv>
                    <InputDiv>
                        <LabelInput>Cantidad disponible</LabelInput>
                        <FormInput width={'80px'}/>
                    </InputDiv>
                </Top>
                <Mid>
                    <InputDiv>
                        <LabelInput>Descripcion</LabelInput>
                        <Desc />
                    </InputDiv>
                </Mid>

                <Bottom>
                    <FormButton className='btn btn-success'>Guardar</FormButton>
                    <FormButton className="btn btn-primary">Actualizar</FormButton>
                </Bottom>

            </Form>
        </FormContainer>
        </Container>
    )
}

export default CrearForm;