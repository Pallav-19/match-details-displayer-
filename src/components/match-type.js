import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./match-type.css";
function MatchType() {
  const [matchType, setmatchType] = useState();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <label className="form-label">Choose Match Type</label>
          <select
            onChange={(event) => {
              setmatchType(event.target.value);
            }}
            className="form-select"
          >
            <option value="none">Choose Match Type (default - Tournament)</option>
            <option value="tournament">Tournament</option>
            <option value="Friendly">Friendly</option>
          </select>
        </div>
        <div className="col-sm-6"> </div>
        <div className="col-sm-6">
          <Link to={`/details`}>
            <button
              type="button"
              onClick={() => {
                localStorage.setItem("matchType", matchType);
                if (matchType === undefined) {
                  localStorage.setItem("matchType", "Tournament");
                }
              }}
              className="btn btn-success"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MatchType;
