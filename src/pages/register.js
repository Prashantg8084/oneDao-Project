import "../assets/css/common.css";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Register() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [checkCredentials, setCheckCredentials] = useState(false)
    const [matchPassword, setMatchPassword] = useState(false)
    const [notMatched, setNotMatched] = useState(false)



    const navigate = useNavigate();    

    const validateSignup = (e) => {
      e.preventDefault();
      setIsFormSubmitted(true);
      var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email && email.match(validRegex)) {
          setCheckCredentials(true)
      } else {
          setCheckCredentials(false)
      }
      if(password === confirmPassword){
          setMatchPassword(true);
      } else{
        setNotMatched(true)
      }
      if(email && password && confirmPassword && checkCredentials && matchPassword) {
          navigate("/confirm-registration")
      } 
      
      
    };

    const handleRedirection = () =>{
        navigate('/login')
    }

    const updateEmailValue = (value) => {
      setEmail(value);
    }
  
    const updatePasswordValue = (value) => {
      setPassword(value);
    }

    const updateConfirmPasswordValue = (value) => {
      setConfirmPassword(value);
    }
      
  return (
    <div className="main-container">
      <div className='main'>
        <div className='left'></div>
        <div className='right'>
          <div className='formFields'>
            <h3 className="center">Register to Admin Panel</h3>
            <p className="para-message center">Enter your phone number and password below</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">EMAIL ID</Form.Label>
                <Form.Control type="email" onChange={(e) => updateEmailValue(e.target.value)} placeholder="Enter your email id" />
                {(isFormSubmitted && !checkCredentials) &&
                  <Form.Text className="error">Please enter valid email.</Form.Text>
                }
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">PASSWORD</Form.Label>
                <Form.Control type="password" onChange={(e) => updatePasswordValue(e.target.value)} placeholder="Enter your password" />
                {(isFormSubmitted && !password) &&
                  <Form.Text className="error">Please enter password.</Form.Text>
                }
                {
                  notMatched && <Form.Text className="error">Password didn't matched.Try again</Form.Text>
                }
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label className="label">CONFIRM PASSWORD</Form.Label>
                <Form.Control type="password" onChange={(e) => updateConfirmPasswordValue(e.target.value)} 
                  placeholder="Enter your confirm password" />
                {(isFormSubmitted && !confirmPassword) &&
                  <Form.Text className="error">Please confirm your password.</Form.Text>
                }
              </Form.Group>
              
              <Button className="btn" variant="dark" onClick={(e)=>validateSignup(e)}>Register</Button>
            </Form>
            <p className="center top20">Allready have an account? <span className="links" onClick={handleRedirection}>Login</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
