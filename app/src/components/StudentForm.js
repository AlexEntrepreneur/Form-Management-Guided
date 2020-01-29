import React, { useState } from "react";

export default function StudentForm() {
  const [studentForm, setStudentForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    remember_pass: false
  });
  function changeHandler(e) {
    // console.log(e.target.name);
    if (e.target.type === "checkbox") {
      setStudentForm({
        ...studentForm,
        [e.target.name]: e.target.checked
      });
    } else {
      setStudentForm({
        ...studentForm,
        [e.target.name]: e.target.value
      });
    }
  }
  return (
    <div className="StudentForm">
      <h1>Lambda Student Form</h1>
      <form>
        <label htmlFor="student_firstName">First Name</label>
        <input
          type="text"
          id="student_firstName"
          name="firstName"
          placeholder="Enter your first name here"
          onChange={changeHandler}
        />
        <label htmlFor="student_lastName">Last Name</label>
        <input
          type="text"
          id="student_lastName"
          name="lastName"
          placeholder="Enter your last name here"
          onChange={changeHandler}
        />
        <label htmlFor="student_username">Username</label>
        <input
          type="text"
          id="student_username"
          name="username"
          placeholder="Enter your username here"
          onChange={changeHandler}
        />
        <label htmlFor="student_password">Password</label>
        <input
          type="password"
          id="student_password"
          name="password"
          placeholder="Enter your password here"
          onChange={changeHandler}
        />
        <label htmlFor="student_remember_pass">Remember password?</label>
        <input
          type="checkbox"
          id="student_remember_pass"
          name="remember_pass"
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}
