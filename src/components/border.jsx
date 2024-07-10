import React, { useState, useEffect } from "react";
import NavBar from "./navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Border = () => {
    const location = useLocation();
    const border = location.state;

    const [country, setCountry] = useState(null);
    useEffect(() => {
        if (!border) return;
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                const foundCountry = data.find((c) => c.cca3 === border);
                if (foundCountry) {
                    setCountry(foundCountry);
                } else {
                    console.error(`Country with code ${border} not found.`);
                }
            })
            .catch((err) => {
                console.error("Error fetching country data:", err);
            });
    }, [border]); 

    return (
        <>
            <NavBar />

            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-4 mb-4">
                        {country && (
                            <div className="card countrycontainer">
                                <img src={country.flags.png} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">COUNTRY: {country.altSpellings[1]}</h5>
                                    <h5>CAPITAL: {country.capital}</h5>
                                    <h5>CONTINENT: {country.continents}</h5>
                                    <Link to='/countryprofile' state={country} className="btn btn-secondary">View More</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Border;
