import React from 'react';
import './mystyle.css';

import CustomCard from './card.js';
import MyFooter from './footer.js';
import About from './about.js';
import './mystyle.css';


const Home = () => {
    return(
        <div>
            
            <About />
            <CustomCard />
            <MyFooter />
        </div>
    )
};

export default Home;