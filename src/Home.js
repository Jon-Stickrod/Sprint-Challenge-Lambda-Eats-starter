import React from 'react';

import './App.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
        <p>welcome to lmbda pizza!</p>
        <Link to={"./Pizza"}>
            <button>make pizza</button>
        </Link>
        
    </div>
  );
}

export default Home;