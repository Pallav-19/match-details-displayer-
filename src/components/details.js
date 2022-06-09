import React from "react";
import "./details.css";
function Friendly() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Start date and time
            </label>
            <input
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
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <label htmlFor="floatingTextarea">Comments</label>

          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className="col-sm-6">
          <button type="button" className="btn btn-secondary">
            Previous
          </button>
        </div>
        <div className="col-sm-6">
          <button type="button" className="btn btn-success">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Friendly;
