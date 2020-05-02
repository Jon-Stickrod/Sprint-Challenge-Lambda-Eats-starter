import React from 'react';

import './App.css';
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as yup from "yup";

const PizzaPage = styled.div`
display: flex;
margin: auto 0%;
justify-content: center;
`;

const formSchema = yup.object().shape({

});



function Pizza() {

    const [formState, setFormState] = useState({
        name: "",
        size: "",
        sauce: "",
        toppings: "",
        instructions: ""
      });


  return (
      <PizzaPage className='pizzaPage'>
        <div className="Pizza">
            <label htmlFor="name">Please enter your name
                <input
                id="title"
                type="text"
                />
            </label>
            <label> Pizza size
                <select>
                    <option value="">--Please select your size--</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra-Large">Extra-Large</option>
                </select>
            </label>
            <label>Sauce Qoice
                <select> 
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
                <textarea />
            </label>
            
            <button>Submit</button>





        </div> 
      </PizzaPage>

  );
}

export default Pizza;