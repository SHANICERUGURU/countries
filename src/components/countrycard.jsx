import React from "react";
import { Link } from "react-router-dom";
const CountryCard = ({ count }) => {
    return (
        <>

            <div className="card countrycontainer">
                <img src={count.flags.png} alt="" />
                <div className="card-body">
                    <h5 className="card-title">COUNTRY:{count.name.common}</h5>
                    <h5>CAPITAL:{count.capital}</h5>
                    <h5>CONTINENT:{count.continents}</h5>
                    
                    <Link to='/countryprofile' state={count} class="btn btn-secondary"> view more</Link>
                </div>
            </div>

        </>
    )
}
export default CountryCard