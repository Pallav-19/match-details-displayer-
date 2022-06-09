import * as React from "react";
import { Link } from "react-router-dom";
import "./match-type.css";
function MatchType() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <select className="form-select" aria-label="Default select example">
            <option value="0" selected>
              Tournament
            </option>
            <option value="1">Friendly</option>
          </select>
        </div>
        <div className="col-sm-6"> </div>
        <div className="col-sm-6">
          <button type="button" className="btn btn-success">
            <Link to="/page2">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MatchType;
