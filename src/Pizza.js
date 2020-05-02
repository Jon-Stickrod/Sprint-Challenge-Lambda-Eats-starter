import React from 'react';

import './App.css';
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const PizzaPage = styled.div`
display: flex;
margin: auto 0%;
justify-content: center;
`;

const formSchema = yup.object().shape({
    name: yup.string().required("Sorry bucko, name is required"),
    size: yup.string().oneOf(["Small", "Medium", "Large", "XL"]),
    sauce: yup.string().oneOf(["red", "bbq", "white"]),
    instructions: yup.string()

    
});



function Pizza() {
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [formState, setFormState] = useState({
        name: "",
        size: "",
        sauce: "",
        toppings: "",
        instructions: ""
      });

      const [errors, setErrors] = useState({
        name: "",
        size: "",
        red: "",
        garlic: "",
        bbq: "",
        spinach: "",
        instructions: ""
      });
    const [user, setUser] = useState([]);
    const [post, setPost] = useState([]); 
    
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState]);

    const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setPost(res.data);
            setUser(res.data);
            console.log("good job bucko", post);
    
            setFormState({
              name: "",
              size: "",
              red: "",
              garlic: "",
              bbq: "",
              spinach: "",
              instructions: ""
            });
          })
          .catch(err => console.log(err.response));
      };

    const validateChange = e => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors[0]
            });
          });
      };


    const inputChange = e => {
        e.persist();
        const newFormData = {
          ...formState,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
      };

  return (
      <PizzaPage className='pizzaPage'>
        <form onSubmit={formSubmit} className="Pizza">
            <label htmlFor="name">Please enter your name
                <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={inputChange}
                />{errors.name.length > 0 ? (
                    <p className="error">{errors.name}</p>) : null}
            </label>
            <label> Pizza size
                <select id="size" name="size" onChange={inputChange}>
                    <option value="">--Please select your size--</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="XL">XL</option>
                </select>
            </label>
            <label>Sauce Qoice
                <select id="sauce" name="sauce" onChange={inputChange}> 
                    <option value="">--Please select your sauce--</option>
                    <option value="red">red</option>
                    <option value="bbq">bbq</option>
                    <option value="white">white</option>
                </select>
            </label>

            <div className="toppings">
                <h3>Add Toppings</h3>
                <div className="topping-table">
                    <label> Peperoni
                        <input type="checkbox" />
                    </label>
                    <label>Sausage
                        <input type="checkbox" />
                    </label>
                    <label>Canadian Bacon
                        <input type="checkbox" />
                    </label>
                    <label>Pinapple
                        <input type="checkbox" />
                    </label>
                    <label>Black Olives
                        <input type="checkbox" />
                    </label>
                    <label>Three-chesse
                        <input type="checkbox" />
                    </label>
                </div>
            </div>
            
            <label>Special Instructions?
                <textarea id="instructions" name="instructions" onChange={inputChange}/>
            </label>
            
            <button type="submit" disabled={buttonDisabled} onChange={inputChange}>Submit</button>
                
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <pre>{JSON.stringify(user.name, null, 2)}</pre>




        </form> 
      </PizzaPage>

  );
}

export default Pizza;