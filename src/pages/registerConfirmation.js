import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/css/common.css";


function RegisterConfirmation() {
  const [otp, setOtp] = useState([]);
  const [validate, setValidate] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateOtp = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    let otpStr = otp.join("");
    if(otpStr.length === 6){
      setValidate(true);
      navigate("/login?success")
    }else{
      setValidate(false);
    }
  }

  const updateInputValue = (key, value) => {
    let newOtp = otp;
    newOtp[key] = value;
    setOtp(newOtp);
  }

  return (
    <div className="main-container">
      <div className='main'>
        <div className='left'></div>
        <div className='right'>
          <div className='formFields'>
            <h3 className="center">Verify your email</h3>
            <p className="para-message center">Enter the OTP from your registerd email id </p>
            <Form>
              <Form.Group className="mb-3 otpElements" controlId="formBasicEmail">
                <Form.Control type="text" onChange={(e) => updateInputValue("1",e.target.value)} />
                <Form.Control type="text" onChange={(e) => updateInputValue("2",e.target.value)} />
                <Form.Control type="text" onChange={(e) => updateInputValue("3",e.target.value)} />
                <Form.Control type="text" onChange={(e) => updateInputValue("4",e.target.value)} />
                <Form.Control type="text" onChange={(e) => updateInputValue("5",e.target.value)} />
                <Form.Control type="text" onChange={(e) => updateInputValue("6",e.target.value)} />
              </Form.Group>             
              {(isFormSubmitted && !validate) &&
                <Form.Text className="error">Please enter valid otp.</Form.Text>
              }
              <Button className="btn" variant="dark" onClick={(e)=>validateOtp(e)}>Proceed</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterConfirmation;
