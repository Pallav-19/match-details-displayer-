import React from "react";
import { useState } from "react";
import "./details.css";
import { Link } from "react-router-dom";

function Details() {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [location, setLocation] = useState();
  const [tournamentname, setTournamentname] = useState();
  const [comment, setComment] = useState();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Start date and time
            </label>
            <input
              onChange={(e) => {
                setStart(e.target.value);
              }}
              type="datetime-local"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              End date and time
            </label>
            <input
              onChange={(e) => {
                setEnd(e.target.value);
              }}
              type="datetime-local"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Match Location
            </label>
            <input
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="col-sm-6">
          {localStorage.getItem("matchType") !== "Friendly" && (
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Tournament name
              </label>
              <input
                onChange={(e) => {
                  setTournamentname(e.target.value);
                }}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          )}
        </div>
        <div className="col-sm-6">
          <label htmlFor="floatingTextarea">Comments</label>

          <textarea
            onChange={(e) => {
              setComment(e.target.value);
            }}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className="col-sm-6">{"  "}</div>
        <div className="row">
          <div className="col-sm-6">
            <Link to="/">
              <button type="button" className="btn btn-secondary pre">
                Previous
              </button>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/teamdetails">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  localStorage.setItem("start", start);
                  localStorage.setItem("end", end);
                  localStorage.setItem("location", location);
                  localStorage.setItem("tournamentname", tournamentname);
                  localStorage.setItem("comment", comment);
                }}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
