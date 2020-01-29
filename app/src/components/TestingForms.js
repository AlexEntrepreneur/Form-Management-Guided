import React from "react";

export default function TestingForms() {
  return (
    <div className="TestingForms">
      <form>
        <label htmlFor="testform_username">Username</label>
        <input
          type="text"
          id="testform_username"
          name="username"
          placeholder="Enter your username here"
        />
        <label htmlFor="testform_password">Password</label>
        <input
          type="password"
          id="testform_password"
          name="password"
          placeholder="Enter your password here"
        />
        <label htmlFor="testform_remember_pass">Remember password?</label>
        <input
          type="checkbox"
          id="testform_remember_pass"
          name="remember_pass"
        />
        <label htmlFor="testform_account_type">Select An Account Type: </label>
        <select name="account_type" id="testform_account_type">
          <option>Gold Account</option>
          <option>Silver Account</option>
          <option>Bronze Account</option>
        </select>
      </form>
    </div>
  );
}
