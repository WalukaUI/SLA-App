import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./BecomeAmember.css";
import axios from "axios";

function BecomeAmem() {
  const [member, setMember] = useState(null);
  const [newMemberForm, setNewMembwrForm] = useState(true);


  function createNewMember(e) {
    e.preventDefault();
    console.log(member);
    setNewMembwrForm(!newMemberForm);
    const newPerson = {
      firstname: member.firstname,
      lastname: member.lastname,
      username: member.username,
      streetandcity: member.streetandcity,
      state: member.state,
      zip: member.zip,
      email: member.email,
      contactnumber: member.contactnumber
    };
    axios.post("http://localhost:3001/create", newPerson);
  }

  function handleChangeData(e) {
    e.preventDefault();
    let newData = { ...member, [e.target.name]: e.target.value };
    setMember(newData);
  }

  return newMemberForm ? (
    <>
      <div>
        <div className="popup-inner">
          <div className="formDiv div1">
            <form onSubmit={createNewMember}>
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
                      placeholder="# Street Name, City Name"
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
                      name="zip"
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
                      <button
                        className=" btn btn-success submitBtn"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="col-sm">
                      <Nav.Link
                        href="/"
                        className=" btn btn-danger formCancelBtn"
                      >
                        Cancel
                      </Nav.Link>
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
    <div className="popup-box">
      <div className="popup-inner thankYouPopup">
        <h4>Thank you</h4>
        <Nav.Link href="/" className=" btn btn-danger canclePopup">
          X
        </Nav.Link>
      </div>
    </div>
  );
}

export default BecomeAmem;
