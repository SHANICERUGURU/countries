import React from "react";
import NavBar from "./navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const CountryProfile = () => {
    const location = useLocation()
    const country = location.state
    console.log(country);
    return (
        <>
            <NavBar/>
            <div className="countryprofile">
                <div className="card countrycontainer2">
                    <img src={country.flags.png} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">COUNTRY:{country.name.common}</h5>
                        <h5>CAPITAL:{country.capital}</h5>
                        <h5>CONTINENT:{country.continents}</h5>
                        <h5>SUBREGION:{country.subregion}</h5>
                        <h5>POPULATION:{country.population}</h5>
                        <h5> NEIGHBOURS:{country.borders?country.borders.map((border)=>{
                        return(
                            <Link to='/border' state={border}>
                                <h4>{border}</h4> 
                            </Link>
                        )
                    }):null}</h5>
                        <p className="card-text">{ }</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CountryProfile