import React from "react";

export default function StudentForm() {
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
        />
        <label htmlFor="student_lastName">Last Name</label>
        <input
          type="text"
          id="student_lastName"
          name="lastName"
          placeholder="Enter your last name here"
        />
        <label htmlFor="student_username">Username</label>
        <input
          type="text"
          id="student_username"
          name="username"
          placeholder="Enter your username here"
        />
        <label htmlFor="student_password">Password</label>
        <input
          type="password"
          id="student_password"
          name="password"
          placeholder="Enter your password here"
        />
        <label htmlFor="student_remember_pass">Remember password?</label>
        <input
          type="checkbox"
          id="student_remember_pass"
          name="remember_pass"
        />
      </form>
    </div>
  );
}
