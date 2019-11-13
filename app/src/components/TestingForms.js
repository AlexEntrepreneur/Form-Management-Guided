import React from 'react';

export default function TestingForms() {
  return (
    <div className="TestingForms">
      <form>
        <label htmlFor="testform_username">Username</label>
        <input
          type="text"
          name="username"
          id="testform_username"
          placeholder="Enter your username here"
        />
        <label htmlFor="testform_password">Password</label>
        <input
          type="password"
          name="password"
          id="testform_password"
          placeholder="Enter your password here"
        />
        <label>Remember password?</label>
        <input
          type="checkbox"
          value="true"
          name="remember_pass"
          id="testform_remember_pass"
        />
        <label htmlFor="testform_account_type">Select An Account Type: </label>
        <select name="account_type" id="testform_account_type">
          <option value="gold">Gold Account</option>
          <option value="silver">Silver Account</option>
          <option value="bronze">Bronze Account</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
