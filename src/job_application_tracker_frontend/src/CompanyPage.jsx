import React, { useState } from "react";
import "./CompanyPage.css";

const CompanyPage = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (company && role && salary && experience) {
      const newJob = { company, role, salary, experience, id: Date.now() };
      const existingJobs = JSON.parse(localStorage.getItem("jobs")) || [];
      localStorage.setItem("jobs", JSON.stringify([...existingJobs, newJob]));
      setCompany("");
      setRole("");
      setSalary("");
      setExperience("");
      alert("Job successfully added!");
    }
  };

  return (
    <div className="company-page">
      <h2>Company - Post a Job</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Experience Required"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />
        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
};

export default CompanyPage;
