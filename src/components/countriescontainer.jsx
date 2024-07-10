import React, { useEffect, useState } from "react";
import axios from "axios";
import { Atom } from "react-loading-indicators";
import CountryCard from "./countrycard";
import NavBar from "./navbar";
import { useRef } from "react";
const CountriesContainer = () => {
    const [countries, setCountries] = useState([])
    const [isLoaded,SetIsLoaded]=useState(false)
    const searchInputRef=useRef("")
    const [searchQuery,setSearchQuery]=useState("")
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((resp) => {
            console.log(resp);
            setTimeout(()=>{
            setCountries(resp.data)
            SetIsLoaded(true)
        },3000)
        }).catch((err) => {
            console.error(err);
        })
    }, [])
    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.value = "";
        }
    }, []);
   
    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <>
            <NavBar />
            <input
                type="text"
                placeholder="Search countries..."
                onChange={(e) => setSearchQuery(e.target.value)}
                ref={searchInputRef}
            />
            <div className="container">
                <div className="row justify-content-around">
                    {
                        isLoaded ? (
                            filteredCountries.length > 0 ? (
                                filteredCountries.map((country, index) => {
                                    return (
                                        <div className="col-md-4 mb-4" key={index}>
                                            <CountryCard count={country} />
                                        </div>
                                    )
                                })
                            ) : (
                                <h1>No countries found</h1>
                            )
                        ) : (
                            <Atom color='#f7bd86' size="large" text="wait a minute!!" textColor="" />
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default CountriesContainer