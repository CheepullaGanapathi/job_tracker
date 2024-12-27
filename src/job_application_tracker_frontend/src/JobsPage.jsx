import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./JobsPage.css";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  const handleApply = (jobId) => {
    navigate(`/apply/${jobId}`);
  };

  return (
    <div className="jobs-page">
      <h2>Available Jobs</h2>
      <table className="job-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.company}</td>
              <td>{job.role}</td>
              <td>{job.salary}</td>
              <td>{job.experience}</td>
              <td>
                <button onClick={() => handleApply(job.id)}>Apply</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsPage;
