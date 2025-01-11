/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Fabricio has over 20 years of experience in IT and teaches undergraduate courses in Computer Science and Software Engineering.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Project management",
  "Software engineering",
  "Cloud computing",
  "Artificial intelligence",
  "Team Leadership",
  "Teaching",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const About = () => {
  return (
    <section className="padding" id="about">
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2>Fabricio Santana</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
      </div>
    </section>
  );
};

export default About;
