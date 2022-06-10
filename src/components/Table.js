import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Table() {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    return () => {
      setMatches([
        ...matches,
        {
          tn1: localStorage.getItem("tn1"),
          tn2: localStorage.getItem("tn2"),
          tv1: localStorage.getItem("tv1"),
          tv2: localStorage.getItem("tv2"),
          location: localStorage.getItem("location"),
          matchType: localStorage.getItem("matchType"),
          tournamentName: localStorage.getItem("tournamentname"),
          start: localStorage.getItem("start"),
          end: localStorage.getItem("end"),
          comments: localStorage.getItem("comment"),
        },
      ]);

    };
  },[]);
  return (
    <div>
      
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team 1</th>
              <th scope="col">Team 2</th>
              <th scope="col">Match Type</th>
              <th scope="col">Tournament Name</th>
              <th scope="col">Start Date and Time</th>
              <th scope="col">End Date and Time</th>
              <th scope="col">Location</th>
              <th scope="col">Comments</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => {
              let tn = match.tournamentName;
              if (!match.tournamentName) {
                tn = " ";
              }
              const s = new Date(match.start).toDateString();
              const e = new Date(match.end).toDateString();
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{match.tn1}</td>
                  <td>{match.tn2}</td>
                  <td>{match.matchType}</td>
                  <td>{tn}</td>
                  <td>{s}</td>
                  <td>{e}</td>
                  <td>{match.location}</td>
                  <td>{match.comments}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
     
      
      <Link to="/matchdetails">
        <button type="button" className="btn btn-danger pre">
          Schedule another match
        </button>
      </Link>
    </div>
  );
}

export default Table;
