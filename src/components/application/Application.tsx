import React from "react";

const Application = () => {
  return (
    <div>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value="Jhantu Nandi"
            onChange={() => {}}
          />
        </div>
        <br />
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="textbox" name="bio" id="bio" />
        </div>
        <br />
        <label htmlFor="joblocatoin">job location</label>
        <select name="joblocation" id="joblocation">
          <option value="US">United State</option>
          <option value="GB">United Kingdom</option>
          <option value="IN">India</option>
          <option value="AU">Australia</option>
        </select>
        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" id="terms" /> I agree to the
          terms and conditions
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Application;
