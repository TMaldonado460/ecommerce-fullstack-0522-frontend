import ButtomBar from "../ButtomBar/ButtomBar";
import NavBar from "../NavBar/NavBar";
import avatar from "../../img/Avatar.png";
import styled from "styled-components";
import { FaPen } from "react-icons/fa";

const Register = () => {
    
    return (
    <div>
        <NavBar />
        <Container>
        <IMG>
            <img src={avatar} alt="avatar" />
            <button type="submit"><FaPen className="pen"/></button>
        </IMG>
        <Title>Register</Title>
        <Form>
            <Label>User:</Label>
            <Input type="text" name="email" />
            <Label>Name</Label>
            <Input type="text" name="name" />
            <Label>Last Name</Label>
            <Input type="text" name="lastName" />
            <Label>Street</Label>
            <Input type="text" name="street" />
            <Label>Number</Label>
            <Input type="text" name="number" />
            <Label> Password:</Label>
            <Input type="password" name="password" />
            <Label>Confirm Password:</Label>
            <Input type="password" name="password" />
            <Button>
            <button type="submit">Sing in</button>
            <button type="reset">Cancel</button>
            </Button>
        </Form>
        </Container>
        <ButtomBar />
    </div>
    );
};
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const IMG = styled.div`
    width: 154.05px;
    height: 150px;
    margin-top: 20px;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        background: #1c82b8;
        border-radius: 100px;
    }
    button {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 30px;
        width: 30px;
        border-radius: 100px;
        border: none;
        background: var(--color-dark);
    }
    .pen {
        color: var(--color-Lighter);
    }
`;
const Title = styled.h1`
    color: var(--color-primary);
    margin-top: 20px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.label`
    align-self: flex-start;
    margin-top: 10px;
    color: var(--color-dark);
    font-size: 14px;
`;
const Input = styled.input`
    width: 250px;
    height: 40px;
    background-color: white;
    border: 1px solid var(--color-Lighter);
    border-radius: 16px;
    padding: 0 10px;
    margin-top: 5px;
    color: var(--color-dark);
        :hover {
            border: 1px solid var(--color-primary);
        }
`;
const Button = styled.div`
    font-size: 14px;
    button {
        width: 100px;
        height: 35px;
        color: white;
        margin: 15px 10px;
        border-radius: 100px;
    }
    button:nth-child(1) {
    border: 1px solid var(--color-primary);
    background-color: var(--color-primary);
    }
    button:nth-child(2) {
    border: 1px solid var(--color-dark);
    background-color: var(--color-dark);
    
    }
`;

export default Register;