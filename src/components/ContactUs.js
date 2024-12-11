import react, { useRef, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    company: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phoneNo: false,
  });
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;
    const errors = { name: false, email: false, phoneNo: false };
    
    if (!formData.name) errors.name = true;
    if (!formData.email) errors.email = true;
    if (!formData.phoneNo) errors.phoneNo = true;
    
    if (errors.name || errors.email || errors.phoneNo) {
      setFormErrors(errors);
      valid = false;
    }
    setFormData({name:"",email: "", phoneNo: "" ,company:"",message:""})

    if (valid) {
      alert("Form Submitted Success");
    }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <img
            src="./images/contact-us-page-banner.webp"
            alt="about-us"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
          {/* <Box sx= {{position:'absolute',
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            textAlign:'center',
            backgroundColor:'rgba(25,118,210)',
            padding:'10px',
            borderRadius:'8px'
          }}
          >
            <Typography variant="h4" color='inherit'>
                Contact us
            </Typography>
          </Box> */}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{ marginTop: "20px" }}
          >
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={formErrors.name}
              helperText={formErrors.name && "Name is required"}
            ></TextField>

            <TextField
              label="Email"
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={formErrors.email}
              helperText={formErrors.email && "Email is required"}
            ></TextField>

            <TextField
              label="Phone No"
              fullWidth
              margin="normal"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              error={formErrors.phoneNo}
              helperText={formErrors.phoneNo && "Phone No is required"}
            ></TextField>

            <TextField
              label="Company"
              fullWidth
              margin="normal"
              name="company"
              value={formData.company}
              onChange={handleChange}
              // error={formErrors.company}
              // helperText={formErrors.company && "Company is required"}
            ></TextField>

            <TextField
              label="Message"
              fullWidth
              margin="normal"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={5}
              // error={formErrors.message}
              // helperText={formErrors.message && "Message is required"}
            ></TextField>
            <Box sx={{ marginTop: 2 }}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </form>

          <Box sx={{ marginTop: 4 }}>
            <Typography>
              <strong>Form Input:-</strong>
              <span id="formInput">{`${formData.name}
                -${formData.email}
                ${formData.phoneNo}-
                ${formData.company}-
                ${formData.message}`}</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Contactus;
