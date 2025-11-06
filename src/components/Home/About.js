import React from "react";

function About() {
  return (
    <div className="container-fluid">
      <div className="Heading m-5">
        <h3 className="text-center">
          <i>Personalised Learning Companion</i>
        </h3>
        <br></br>
        <p style={{ fontSize: "24px", textAlign: "justify"}}>
          The Personalized Learning Companion is an AI-driven educational
          platform designed to enhance the learning experience by tailoring
          content and resources to individual users. This application leverages
          machine learning algorithms to analyze a user's progress, strengths,
          and weaknesses, providing personalized study plans, recommendations,
          and adaptive assessments. The platform incorporates interactive
          learning materials, real-time feedback, and performance tracking,
          enabling students to optimize their study routines efficiently. By
          integrating Natural Language Processing (NLP) and data analytics, the
          system understands user preferences and offers dynamic content
          suggestions to improve retention and comprehension. With an intuitive
          user interface and smart analytics, the Personalized Learning
          Companion serves as an intelligent tutor, bridging the gap between
          conventional learning methods and modern AI-powered education. The
          application aims to revolutionize personalized education by making
          learning more accessible, engaging, and effective for students across
          various disciplines.
        </p>
      </div>
    </div>
  );
}

export default About;
