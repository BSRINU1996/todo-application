import React from 'react';
import useState from 'react';

const Problem = () => {
    const [country, setCountry] = useState("");
    const countries = [
        { name: "India", value: "IN", cities: ['Delhi', "Vishakapatnam", "Hyderabad"],rank:1 },
        { name: "US", value: "Us", cities: ['NewYork', "sansFransisco", "chicago"],rank:2 },
        { name: "Australia", value: "Aus", cities: ['Melbourne', "sydney", "Kanberra"],rank:3 },
        { name: "Britain", value: "Aus", cities: ['Melbourne', "sydney", "Kanberra"] ,rank:4},
        { name: "China", value: "chi", cities: ['Melbourne', "sydney", "Kanberra"] ,rank:5}
    ]
   
    const handleSelector =(e) => {
     console.log(e.target.value);
     setCountry(e.target.value);
    }

    return (
        <>
           <h1>Problem Statement</h1>
            {/* first drop down */}
           <select onChange={handleSelector}>
            {countries.map((eachCountry,index)=>{
                    return <option value={eachCountry.value} key={eachCountry.rank}>{eachCountry.name}</option>
            })}
           </select>

           {/* second drop down */}
          

        </>
    )
}

export default Problem