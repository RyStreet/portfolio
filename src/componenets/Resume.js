import React from "react";
import "../styles/resume.css";

export default function Resume() {
  return (
<div>
    <div id="resume"></div>

    <section id="resumeContainer">
      <div className="container">
        <h2 id="resTitle">Resume</h2>

        <div className="" id="techSkills">
            <h2 className="mt-4 title col-5">Technical Skills</h2>
            <article className="techList">Languages: HTML, CSS, JavaScript, SQL</article>
            <article className="techList">
            Tools: SQL, MySQL, Mongo, Express, React, Node, GitHub, Bootstrap,
            Tailwind, Semantic, Wordpress, Wix, Google Analytics, Adobe Creative
            Suite, Canva, Office Suite, Slack
            </article>
            <article className="techList">Frameworks: OOP, MERN, MVC, RESTful API, Agile</article>
        </div>

        <div id="workExperience">
            <h2 className="mt-4 col-4 title">Work Experience</h2>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">Digital Specialist, Web Developer | BeSomeone</h4>
                <h5 className="">June 2022 - Present</h5>
                </div>
            </div>
          
            <ul>
                <li>Facilitate website design, compatibility and user experience.</li>
                <li>Develop website features with custom HTML and Javascript.</li>
                <li>Manage and analyze social media content marketing campaigns. </li>
                <li>Design marketing materials, messaging and graphics</li>
                <li>Lead internship program focusing on best practices for social media marketing and web development.</li>
            </ul>
        </article>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">Creative Writer | Houston Outlaws</h4>
                <h5 className="">June 2022 - Present</h5>
                </div>
            </div>
          
            <ul>
                <li>Write weekly radio segments and web content covering Esports and Gaming News. </li>
                <li>Nationally syndicated across the US through radio distributor Key Networks. </li>
            </ul>
        </article>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">Editorial Content Manager | Houston Outlaws</h4>
                <h5 className="">Nov 2021 - June 2022</h5>
                </div>
            </div>
          
            <ul>
                <li>Managed content creation for esports and gaming media outlet. </li>
                <li>Coordinated a complete rebranding for one of our publications - CheckpointXP. </li>
                <li>Established new content verticals, managed content publication and social media.</li>
                <li>Built and managed business relationships within Esports, gaming brands and universities. </li>
                <li>Migrated the previous version of the website to a new domain host on Wix.</li>
            </ul>
        </article>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">Associate Project Manager | SeedX</h4>
                <h5 className="">Aug 2020 - Sep 2021</h5>
                </div>
            </div>
          
            <ul>
                <li>Lead creative direction for online marketing campaigns across a wide variety of businesses and nonprofits. </li>
                <li>Revitalized client websites with intuitive UX, content, and messaging</li>
                <li>Wrote, edited, and published 10-12 pieces of unique content per client each month. </li>
                <li>Significantly increased client's brand recognition and revenue while achieving over $300,000 in campaign fundraising for a client.</li>

            </ul>
        </article>

        <h2 className="mt-4 mb-4 col-2 title">Education</h2>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">Certificate | FullStack Web Development</h4>
                <h5 className="">The University of Texas, Austin</h5>
                </div>
            </div>
        </article>

        <article className="job mt-4">
            <div className="container-fluid">
                <div className="row">
                <h4 className="">B.A | Rhetoric and Writing, Minor in Business </h4>
                <h5 className="">The University of Texas, Austin</h5>
                </div>
            </div>
        </article>
        <div className="container mt-4">
     <a target="_blank"
            rel="noopener noreferrer" href="https://docs.google.com/document/d/128Td--36THUOunAFfLrQtp1sszhuA2-D/edit?usp=sharing&ouid=108990533128814279209&rtpof=true&sd=true">
     <button className="btn btn-outline-dark">Download Resume</button>
    </a>   
</div>


        </div>

        
      </div>


     

    </section>

    </div>
  );
}
