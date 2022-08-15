import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {geoAPIOptions, GEO_API_URL} from "../../Data/API/API";

const Search = ({onSearchChange}) => {
    console.log('Search')
    const [search,setSearch] = useState(null)

    const loadOption = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=60000&namePrefix=${inputValue}`,
        geoAPIOptions
    )
    .then(response => response.json())
    .then(response => {
        return {
            options:response.data.map((city)=>{
                return{
                    value:`${city.latitude} ${city.longitude}`,
                    label:`${city.name}, ${city.countryCode} `,
                }
            })
        }
    })
    .catch(err => console.error(err));

    }

    const handleOnChange = (searchData) =>{
        setSearch(searchData);
        onSearchChange(searchData)
    }

    return (
        <div className="SearchComp">
            <AsyncPaginate
                debounceTimeout={600}
                value={search}
                placeholder="Search for city"
                onChange={handleOnChange}
                loadOptions={loadOption}

            ></AsyncPaginate>
        </div>
    );
};

export default Search;
