import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
             
           <h1 className="main-title">EaTlY.... Welcome to the Unlimited Food Experience</h1>
            <p className="main-subtitle">Delicious, fresh, and delivered right to your doorstep.</p>


            <div className="categories">
                <div className="category-card">
                    <img 
                        src="public/vegHome.avif" 
                        alt="Vegetables" 
                        className="category-image" 
                    />
                    <h2>Vegetables</h2>
                    <p>Fresh, organic vegetables</p>
                </div>
                <div className="category-card">
                    <img 
                        src="public/fruitsHome.jpg" 
                        alt="Fruits" 
                        className="category-image" 
                    />
                    <h2>Fruits</h2>
                    <p>Juicy and ripe fruits</p>
                </div>
                <div className="category-card">
                    <img 
                       src="public/seafoodHome.avif"   alt="Non-Veg" 
                        className="category-image" 
                    />
                    <h2>Sea Food</h2>
                    <p>Quality meats and seafood</p>
                </div>
                <div className="category-card">
                    <img 
                       src="public/muttonHome.jpg"    alt="Beverages" 
                        className="category-image" 
                    />
                    <h2>Fresh Meet</h2>
                    <p>Refreshing drinks for every occasion</p>
                </div>

                <div className="category-card">
                    <img 
                       src="public/bevHome.jpg"    alt="Beverages" 
                        className="category-image" 
                    />
                    <h2>Drinks and Beverages</h2>
                    <p>Refreshing drinks for every occasion</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
