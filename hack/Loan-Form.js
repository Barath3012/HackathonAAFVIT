import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid, MenuItem, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
const values= {
    title: ["Mr","Mrs","Ms"],
    type: ["Conductive", "Mixed", "Sensorineural"],
  };
const Loan = () =>  {
const history= useNavigate();
const [fields, setFields] = useState({
    title:"",
    name: "",
    marital_status:"",
    email: "",
    phone: "",
    address:"",
    date: "",
    city:"",
    state: "",
    pincode:"",
    years_in_address:"",
    present_Employer:"",
    occupation:"",
    experience_years:"",
    gross_monthly_income:"",
    monthly_rent_mortgage:"",
    down_payment_amount:"",
    comments:""
  });
  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  //validation function
  const validate = (fieldValues = fields) => {
    let temp = { ...errors };
    if ("title" in fieldValues) {
        temp.name = fieldValues.title === "" ? " Title is required" : "";
      }
    if ("name" in fieldValues) {
      temp.name = fieldValues.name === "" ? " Name is required" : "";
    }
    if ("marital_status" in fieldValues) {
        temp.marital_status = fieldValues.marital_status === "" ? " Marital Status is required" : "";
      }
    if ("email" in fieldValues)
      temp.email =
        fieldValues.email === ""
          ? "Email is required"
          : /$^|.+@.+..+/.test(fieldValues.email)
          ? ""
          : "Invalid Email.";

       if ("phone" in fieldValues) {
            temp.phone =
              fieldValues.phone === ""
                ? "Mobile Number is required"
                : /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(
                    fieldValues.phone
                  )
                ? ""
                : "Invalid Number";
          }
    if ("address" in fieldValues) {
      temp.address = fieldValues.address === "" ? "Address is required" : "";
    }
    if ("dob" in fieldValues) {
        temp.dob = fieldValues.dob === "" ? "DoB is required" : "";
      }

    if ("city" in fieldValues) {
      temp.city = fieldValues.city === "" ? "City is required" : "";
    }

    if ("state" in fieldValues) {
      temp.state = fieldValues.state === "" ? "State is required" : "";
    }
    if ("pincode" in fieldValues) {
      temp.pincode = fieldValues.pincode === "" ? "Pincode is required" : "";
    }
    if ("years_in_address" in fieldValues) {
      temp.years_in_address = fieldValues.years_in_address === "" ? "Years in Address is required" : "";
    }
    if ("years_in_address" in fieldValues) {
        temp.years_in_address = fieldValues.years_in_address === "" ? "Years in Address is required" : "";
      }
      if ("present_Employer" in fieldValues) {
        temp.present_Employer = fieldValues.present_Employer === "" ? "present_Employer is required" : "";
      }
      if ("occupation" in fieldValues) {
        temp.occupation = fieldValues.occupation === "" ? "Occupation is required" : "";
      }
      if ("experience_years" in fieldValues) {
        temp.experience_years = fieldValues.experience_years === "" ? "experience_years is required" : "";
      }
      if ("gross_monthly_income" in fieldValues) {
        temp.gross_monthly_income = fieldValues.gross_monthly_income === "" ? "gross_monthly_income is required" : "";
      }
      if ("monthly_rent_mortgage" in fieldValues) {
        temp.monthly_rent_mortgage = fieldValues.monthly_rent_mortgage === "" ? "monthly_rent_mortgageis required" : "";
      }
      if ("down_payment_amount" in fieldValues) {
        temp.down_payment_amount = fieldValues.down_payment_amount === "" ? "down_payment_amount is required" : "";
      }
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };
  //submit function
  const onsubmit = (e) => {
    if (validate()) {
      console.log(validate());
      console.log(fields);
      history("./data")

    //   setApplicationForm({
    //     ...applicationForm,
    //     fields: fields,
    //   });

    }
  };

  return (
    <div className="main-container">
      <Grid
        container
        xs={8}
        sm={8}
        spacing={3}
        justifyContent="center"
        style={{ width: "60%", border: "1px solid", borderRadius: "1rem" }}
        className="Grid"
       
      >
        <Grid item xs={12}>
          <Typography fontSize={25}  className="head">LOAN APPLICATION FORM</Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">
              Title
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Title"
              name="title"
              value={fields.title}
              onChange={changeHandler}
              {...(errors.title && {
                error: true,
                helperText: errors.title,
              })}
            >
              {values.title.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.name}
            onChange={changeHandler}
            variant="outlined"
            name="name"
            id="outlined-basic"
            label="name"
            {...(errors.name && {
              error: true,
              helperText: errors.name,
            })}
          />
        </Grid>
        <Grid item xs={6}>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Marital Status</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="marital_status"
                value={fields.marital_status}
                onChange={changeHandler}
            >
                <FormControlLabel  value="Single" type="radio" control={<Radio />} label="Single" />
                <FormControlLabel value="Married" type="radio" control={<Radio />} label="Married" />
                <FormControlLabel value="Other" type="radio" control={<Radio />} label="Other" />
            </RadioGroup>
    </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.email}
            onChange={changeHandler}
            variant="outlined"
            name="email"
            label="email"
            {...(errors.email && {
              error: true,
              helperText: errors.email,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.date}
            onChange={changeHandler}
            variant="outlined"
            name="date"
            type="date"
            {...(errors.date && {
              error: true,
              helperText: errors.date,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            value={fields.phone}
            onChange={changeHandler}
            variant="outlined"
            name="phone"
            label="Phone"
            {...(errors.phone&& {
              error: true,
              helperText: errors.phone,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.address}
            onChange={changeHandler}
            variant="outlined"
            name="address"
            label="Address"
            {...(errors.address && {
              error: true,
              helperText: errors.address,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.state}
            onChange={changeHandler}
            variant="outlined"
            name="state"
            label="State"
            {...(errors.state && {
              error: true,
              helperText: errors.state,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.city}
            onChange={changeHandler}
            variant="outlined"
            name="city"
            label="City"
            {...(errors.city&& {
              error: true,
              helperText: errors.city,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.pincode}
            onChange={changeHandler}
            variant="outlined"
            name="pincode"
            label="Pincode"
            {...(errors.pincode && {
              error: true,
              helperText: errors.pincode,
            })}
          />
        </Grid>
        <Grid item xs={6}>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">How long have you lived in your given address?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="years_in_address"
                value={fields.years_in_address}
                onChange={changeHandler}
            >
                <FormControlLabel value="0-1 Year"   type="radio"  control={<Radio />} label="0-1 Year" />
                <FormControlLabel  value="1-2 Years"  type="radio"  control={<Radio />} label="1-2 Years" />
                <FormControlLabel value="3-4 Years"   type="radio"  control={<Radio />} label="3-4 Years" />
                <FormControlLabel value="5+ Years"   type="radio" control={<Radio />} label="5+ Years" />
            </RadioGroup>
    </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.present_Employer}
            onChange={changeHandler}
            variant="outlined"
            name="present_Employer"
            label="Present Employer"
            {...(errors.present_Employer && {
              error: true,
              helperText: errors.present_Employer,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.occupation}
            onChange={changeHandler}
            variant="outlined"
            name="occupation"
            label="Occupation"
            {...(errors.occupation && {
              error: true,
              helperText: errors.occupation,
            })}
          />
        </Grid>
        <Grid item xs={6}>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Years of experience</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="experience_years"
                value={fields.experience_years}
                onChange={changeHandler}
                required
            >
                <FormControlLabel value="0-1 Year"   type="radio" control={<Radio />} label="0-1 Year" />
                <FormControlLabel  value="1-2 Years"  type="radio"  control={<Radio />} label="1-2 Years" />
                <FormControlLabel  value="3-4 Years"   type="radio" control={<Radio />} label="3-4 Years" />
                <FormControlLabel   value="5+ Years"  type="radio" control={<Radio />} label="5+ Years" />
            </RadioGroup>
    </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.gross_monthly_income}
            onChange={changeHandler}
            variant="outlined"
            name="gross_monthly_income"
            label="Gross Monthly Income"
            {...(errors.gross_monthly_income && {
              error: true,
              helperText: errors.gross_monthly_income,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.monthly_rent_mortgage}
            onChange={changeHandler}
            variant="outlined"
            name="monthly_rent_mortgage"
            label="monthly Rent Mortgage"
            {...(errors.monthly_rent_mortgage && {
              error: true,
              helperText: errors.monthly_rent_mortgage,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            value={fields.down_payment_amount}
            onChange={changeHandler}
            variant="outlined"
            name="down_payment_amount"
            label="Down Payment Amount"
            {...(errors.down_payment_amount && {
              error: true,
              helperText: errors.down_payment_amount,
            })}
          />
        </Grid>
        <Grid item xs={6}>
        <TextField
           multiline
           rows={2}
           maxRows={4}
           placeholder="Type here...."
           name="comments"
           value={fields.comments}
           onChange={changeHandler}
/>
        </Grid>
        <Grid item xs={6}>
        <FormGroup>
        <InputLabel id="demo-simple-select-label">
        I authorize prospective Credit Grantors/Lending/Leasing Companies to obtain personal and credit information about me from my employer and credit bureau, or credit reporting agency, any person who has or may have any financial dealing with me, or from any references I have provided. This information, as well as that provided by me in the application, will be referred to in connection with this lease and any other relationships we may establish from time to time. Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.
            </InputLabel>
        <FormControlLabel control={<Checkbox/>} label="Yes" />
       </FormGroup>
        </Grid>
        <Grid item xs={6}>
        <FormGroup>
        <InputLabel id="demo-simple-select-label">
        I hereby agree that the information given is true, accurate and complete as of the date of this application submission. *
            </InputLabel>

        <FormControlLabel control={<Checkbox/>} label="Yes"/>
       </FormGroup>
        </Grid>
        <Grid container xs={12}>
          <grid item xs={6}></grid>
          <Button  xs={8} color="secondary" variant="contained" onClick={onsubmit} style={{backgroundolor: "black"}}>
            Submit 
          </Button>
        </Grid>
      </Grid>
      </div>
  );
};

export default Loan;  