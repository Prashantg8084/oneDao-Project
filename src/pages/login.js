import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import "../assets/css/common.css";


function Login() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [checkPass, setCheckPass] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let url = window.location.href;
    if(url.indexOf("success") > -1){
      setIsRegistered(true);
    }
  }, [])

  const handleRedirection = () => {
    navigate('/signup')
  }

  const submitLoginForm = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true)

    var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (userEmail && userEmail.match(validRegex)) {
      setCheckEmail(true)
    } else {
      setCheckEmail(false)
    }

    if(userPassword !== ""){
      setCheckPass(true);
    }else{
      setCheckPass(false);
    }
    if(userEmail && userPassword && checkEmail && checkPass){
      navigate("/dashboard")
    }
  }
  
  const updateEmailValue = (value) => {
    setUserEmail(value);
  }

  const updatePasswordValue = (value) => {
    setUserPassword(value);
  }
  const handleAlert =() =>{
    setIsRegistered(false)
  }

  return (
    <div className="main-container">
      <div className='main'>
        <div className='left'></div>
        <div className='right'>
          <div className='formFields'>
            <h3 className="center">Log In to Admin Panel</h3>
            <p className="para-message center">Enter your email id and password below</p>
            {isRegistered &&
              <Alert variant="success">
                User registered Successfully.
                {/* <button </button> */}
                <Button onClick ={()=>handleAlert()}>X</Button>
              </Alert>
            }
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">EMAIL ID</Form.Label>
                <Form.Control type="email" onChange={(e) => updateEmailValue(e.target.value)} placeholder="Enter your email id" />
                {(isFormSubmitted && !checkEmail) &&
                  <Form.Text className="error">Please enter correct email.</Form.Text>
                }
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">PASSWORD</Form.Label>
                <Form.Control type="password" onChange={(e) => updatePasswordValue(e.target.value)} placeholder="Enter your Password" />
                {(isFormSubmitted && !checkPass) &&
                  <Form.Text className="error">Please enter password.</Form.Text>
                }
              </Form.Group>
              
              <Button className="btn" variant="dark" onClick={(e)=>submitLoginForm(e)}>Log In</Button>
            </Form>
            <p className="center top20">Don't have an account? <span className="links" onClick={handleRedirection}>Register</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
