import React from "react";
import { useState } from "react";

function CountryDashBoard() {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


    const infofetcher = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,cca3");
        if (!res.ok) {
          throw new Error("Unable to fetch country information");
        }

        const data = await res.json();
        setInfos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  

  return (
    <div>
      <h4>Country Explorer Dashboard</h4>
      <p>
        Using Real API covering async/await,error handling ,conditonal UI and
        handling invalid data
      </p>
      <br />
      {loading && <p>Loading Countries...</p>}
      <button onClick={infofetcher}>Get Country Info</button>
      <button onClick={()=>setLoading(true)}>Close</button>
      {!loading && error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && infos.length === 0 && <p>No countries found</p>}
      {!loading && !error && infos.length > 0 && (
        <ul>
          {infos.map((info) => (
            <li key={info.cca3}>
              <p>
                <strong>Country Name:</strong>{" "}
                {info.name?.common || "Not Available"}
              </p>

              <p>
                <strong>Capital:</strong> {info.capital?.[0] || "Not Available"}
              </p>

              <p>
                <strong>Population:</strong>{" "}
                {info.population?.toLocaleString() || "Not Available"}
              </p>

              <p>
                <strong>Region:</strong> {info.region || "Unknown"}
              </p>
              <br />
            </li>
          ))}
        </ul>
      )
      
      
        }
      
    </div>
  );
}

export default CountryDashBoard;
