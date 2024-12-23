import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Experiences
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 w-96 sm:w-full">
            Here is a list of my work experience.
          </p>
        </div>
        <div className="mt-10">
          <div className="mt-5">
            <div className="mb-5">
              <h4 className="text-xl font-bold tracking-tight text-gray-900">
                DevOps Engineer at OctopusX
              </h4>
              <p className="text-gray-500">August 2024 - Present</p>
              <p className="text-gray-500 mx-auto w-96 sm:w-full">
                I manage the deployment and monitoring of multiple web
                applications to ensure their availability and performance,
                utilizing a CI/CD pipeline with GitHub Actions.
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-xl font-bold tracking-tight text-gray-900">
                Software Engineer at OctopusX
              </h4>
              <p className="text-gray-500">April 2018 - Present</p>
              <p className="text-gray-500 w-96 sm:w-full">
                Developing and maintaining multiple web applications using
                React, Node.js, and MongoDB.
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-xl font-bold tracking-tight text-gray-900">
                Web Developer Intern at Monster Studio
              </h4>
              <p className="text-gray-500">February 2024 - March 2024</p>
              <p className="text-gray-500 w-96 sm:w-full">
                Contributed to the development of a web app using MERN Stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
