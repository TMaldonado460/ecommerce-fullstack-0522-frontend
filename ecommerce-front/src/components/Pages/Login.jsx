import ButtomBar from "../ButtomBar/ButtomBar";
import NavBar from "../NavBar/NavBar";
import avatar from "../../img/Avatar.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
    
  return (
    <div>
      <NavBar />
      <Container>
        <IMG src={avatar} alt="avatar" />
        <Title>Login</Title>
        <Form>
          <Label>User:</Label>
          <Input type="text" name="email" />
          
          <Label> Password:</Label>
          <Input type="password" name="password" />
          <Button type="submit">Sing in</Button>
        </Form>
        <Register>
          <p>I don't have an account, I need to</p>
          <Link to="/register" className="path-login">register.</Link>
        </Register>
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
const IMG = styled.img`
    width: 154.05px;
    height: 150px;
    background: #1c82b8;
    border-radius: 100px;
    margin-top: 20px;
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
const Register = styled.div`
    display: flex;
    margin-top: 10px;
    p{
      color: var(--color-dark);
    }
    .path-login {
        color: var(--color-primary);
        text-decoration: none;
        margin-left: 3px;
    };
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
const Button = styled.button`
    width: 100px;
    height: 35px;
    border: 1px solid var(--color-primary);
    border-radius: 100px;
    background-color: var(--color-primary);
    color: white;
    margin: 15px 0 5px 5px;
    font-size: 14px;
`;
export default Login;
