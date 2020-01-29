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
          onChange={e => console.log(e.target.value)}
        />
        <label htmlFor="testform_password">Password</label>
        <input
          type="password"
          id="testform_password"
          name="password"
          placeholder="Enter your password here"
          onChange={e => console.log(e.target.value)}
        />
        <label htmlFor="testform_remember_pass">Remember password?</label>
        <input
          type="checkbox"
          id="testform_remember_pass"
          value="true"
          name="remember_pass"
          onChange={e => console.log(e.target.checked)}
        />
        <label htmlFor="testform_account_type">Select An Account Type: </label>
        <select
          name="account_type"
          id="testform_account_type"
          onChange={e => console.log(e.target.value)}
        >
          <option value="gold">Gold Account</option>
          <option value="slvr">Silver Account</option>
          <option value="brnz">Bronze Account</option>
        </select>
      </form>
    </div>
  );
}
