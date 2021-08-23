import React, { useState } from "react";
import "./BecomeAmember.css";

function BecomeAmem({ newMemberForm, setNewMembwrForm }) {
  const [member, setMember] = useState(null);

  function togglePopup(e) {
    e.preventDefault();
    setNewMembwrForm(!newMemberForm);
  }

  function handleChangeData(e) {
    e.preventDefault();
    let newData = { ...member, [e.target.name]: e.target.value };
    setMember(newData);
    
  }

  function updatePlayerHandler(e) {
    e.preventDefault();
    console.log(member);
    setNewMembwrForm(!newMemberForm);
  }
  return newMemberForm ? (
    <>
      <div className="popup-box">
        <div className="popup-inner">
          <div className="formDiv div1">
            <form onSubmit={updatePlayerHandler}>
              <h4>Become a New Member of SLA</h4>
              <div className="form-group row">
                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label>First name</label>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      id="validationCustom01"
                      placeholder="First name"
                      required
                      onChange={handleChangeData}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>Last name</label>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      id="validationCustom02"
                      placeholder="Last name"
                      required
                      onChange={handleChangeData}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          @
                        </span>
                      </div>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="validationCustomUsername"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        onChange={handleChangeData}
                      />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label>Street and City</label>
                    <input
                      type="text"
                      name="streetandcity"
                      className="form-control"
                      id="validationCustom03"
                      placeholder="City"
                      required
                      onChange={handleChangeData}
                    />
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>State</label>
                    <input
                      type="text"
                      name="state"
                      className="form-control"
                      id="validationCustom04"
                      placeholder="State"
                      required
                      onChange={handleChangeData}
                    />
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>Zip</label>
                    <input
                      type="number"
                      name="zipcode"
                      className="form-control"
                      id="validationCustom05"
                      placeholder="Zip"
                      required
                      onChange={handleChangeData}
                    />
                    <div className="invalid-feedback">
                      Please provide a valid zip.
                    </div>
                  </div>
                </div>
                <label>
                  Email address
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                    onChange={handleChangeData}
                  />
                </label>
                <label>
                  Contact Number
                  <input
                    type="number"
                    name="contactnumber"
                    className="form-control"
                    placeholder="Contact Number"
                    required
                    onChange={handleChangeData}
                  />
                </label>
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <button className=" btn btn-success" type="submit">
                        Submit
                      </button>
                    </div>
                    <div className="col-sm">
                      <button className="btn btn-danger" onClick={togglePopup}>
                        Cancel
                      </button>
                    </div>
                    <div className="col-sm"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>{""}</div>
  );
}

export default BecomeAmem;
