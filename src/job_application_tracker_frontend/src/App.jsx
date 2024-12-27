import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompanyPage from "./CompanyPage";
import JobSeekerPage from "./JobSeekerPage";
import JobsPage from "./JobsPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Job Recruitment Platform</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/company">Post a Job (Company)</Link>
            </li>
            <li>
              <Link to="/jobs">View Jobs</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/apply/:jobId" element={<JobSeekerPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
