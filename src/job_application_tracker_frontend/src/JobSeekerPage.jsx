import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./JobSeekerPage.css";

const JobSeekerPage = () => {
  const { jobId } = useParams();
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && experience && resume) {
      alert(`Application submitted for job ID: ${jobId}`);
      setName("");
      setExperience("");
      setResume(null);
    }
  };

  return (
    <div className="job-seeker-page">
      <h2>Apply for Job ID: {jobId}</h2>
      <form className="application-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
          required
        />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default JobSeekerPage;
