import React, { Component } from "react";

class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      number: "",
      city: "",
      userInformationList: [],
    };
  }

  handleToSubmit = () => {
    if (
      this.state?.userName?.length &&
      this.state?.email?.length &&
      this.state?.number?.length === 10 &&
      this.state?.city?.length
    ) {
      let userInformationList = [
        {
          userName: this.state?.userName,
          number: this.state?.number,
          email: this.state?.email,
          city: this.state?.city,
        },
        ...this.state.userInformationList,
      ];
      this.setState({
        userName: "",
        email: "",
        number: "",
        city: "",
        userInformationList: userInformationList,
      });
    } else {
      alert("Please Fill the Details");
    }
  };

  isNumberKey = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>User List</h1>
        <div
          style={
            this?.state?.userInformationList?.length
              ? {
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  gap: "20px",
                }
              : {}
          }
        >
          <div className="userList__container">
            <div style={{ marginBottom: "10px" }}>
              <label className="inputLabel__Title">Name</label>
              <input
                className="form-control"
                name="userName"
                type="text"
                autoComplete="off"
                placeholder="Enter Name"
                value={this?.state?.userName}
                onChange={(event) =>
                  this.setState({ userName: event.target.value })
                }
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label className="inputLabel__Title">Email</label>
              <input
                name="email"
                autoComplete="off"
                className="form-control"
                value={this?.state?.email}
                type="email"
                placeholder="Enter Email Id"
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label className="inputLabel__Title">Number</label>
              <input
                name="number"
                onKeyPress={(event) => this?.isNumberKey(event)}
                autoComplete="off"
                value={this?.state?.number}
                className="form-control"
                maxLength="10"
                type="number"
                placeholder="Enter Your Number"
                onChange={(event) => {
                  if (event.target.value.length <= 10) {
                    this.setState({
                      number: event.target.value?.replace(/\s/g, ""),
                    });
                  }
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label className="inputLabel__Title">City</label>
              <input
                name="city"
                type="text"
                autoComplete="off"
                className="form-control"
                value={this?.state?.city}
                placeholder="Enter City"
                onChange={(event) =>
                  this.setState({ city: event.target.value })
                }
              />
            </div>
            <button
              onClick={() => this.handleToSubmit()}
              className="submit__Btn"
            >
              Submit
            </button>
          </div>
          {this?.state?.userInformationList?.length ? (
            <div style={{ marginTop: "20px", border: "1px solid black" }}>
              <div
                style={{ backgroundColor: "#f0f0f0" }}
                className="user__informationTitleHeader"
              >
                <h1>Name</h1>
                <h1>Email</h1>
                <h1>Number</h1>
                <h1>City</h1>
              </div>
              {this?.state?.userInformationList?.map((user, index) => (
                <div
                  key={index + user?.userName}
                  className="user__informationTitleHeader"
                >
                  <h1>{user?.userName}</h1>
                  <h1>{user?.email}</h1>
                  <h1>{user?.number}</h1>
                  <h1>{user?.city}</h1>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Userlist;
