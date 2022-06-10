import React from "react";
import { useState } from "react";
import "./details.css";
import { Link } from "react-router-dom";
const TeamDetails = () => {
  const [tn1, settn1] = useState();
  const [tn2, settn2] = useState();
  const [tv1, settv1] = useState();
  const [tv2, settv2] = useState();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Team 1 name
            </label>
            <input
              onChange={(e) => {
                settn1(e.target.value);
              }}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <label class="form-label">Select Whether Home or Away</label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              settv1(e.target.value);
            }}
          >
            <option value="none">Home/Away</option>
            <option value="Home">Home</option>
            <option value="Away">Away</option>
          </select>
        </div>
      </div>
      <div className="vs">VS.</div>
      <div className="row">
        <div className="col-sm-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Team 2 name
            </label>
            <input
              onChange={(e) => {
                settn2(e.target.value);
              }}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <label class="form-label">Select Whether Home or Away</label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              settv2(e.target.value);
            }}
          >
            <option value="none">Home/Away</option>
            <option value="Home">Home</option>
            <option value="Away">Away</option>
          </select>
        </div>
        <div class="row">
          <div class="col-sm-6">
            {" "}
            <Link to="/details">
              <button type="button" className="btn btn-secondary pre">
                Previous
              </button>
            </Link>
          </div>
          <div class="col-sm-6">
            <Link to="/">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  localStorage.setItem("tn1", tn1);
                  localStorage.setItem("tv1", tv1);
                  localStorage.setItem("tn2", tn2);
                  localStorage.setItem("tv2", tv2);
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
};

export default TeamDetails;
