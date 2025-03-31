import React from "react";

import Navbar from './navbar.jsx';
import Jumbotron from './jumbotron.jsx';
import Card from './Cards.jsx';
import Footer from './footer.jsx';
//create your first component
const Home = () => {
	return (
		<div>
            
			<Navbar />
			
			<div className="container">
			     <div className="row">
			          <Jumbotron />
			     </div>
				 <div className="container-fluid  mt-5" >
                     <div className="row">
                          <div className="col-md-6 col-lg-3"><Card /></div>
                          <div className="col-md-6 col-lg-3"><Card /></div>
                          <div className="col-md-6 col-lg-3"><Card /></div>
                          <div className="col-md-6 col-lg-3"><Card /></div>
				     </div>
		         </div>
		   </div>
		   <div className= "mt-5 "  >
		   <Footer />
		   </div>
		</div>
		
		
		
	);
};

export default Home;