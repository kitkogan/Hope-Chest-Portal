import React, { Component } from "react";
import { connect } from "react-redux";

class Welcome extends Component {
  //pushes users to the home page
  goToForm = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="welcomePage">
        <h1>Welcome Cause Marketing Partners!</h1>
        <h2>
          Hope Chest for Breast Cancer Foundation is excited to work with you
          and together we will make an impact to better the lives of Minnesota
          Breast Cancer Patients.
        </h2>

        <h3>Cause Marketing </h3>
        <p>
          What is Cause Marketing? It’s simple… It’s when a for profit and a
          non-profit come together to solve a worthwhile cause through a program
          or event that also helps a brand differentiate and drive business.
        </p>
        <h3>Why Cause Marketing?</h3>
        <p>
          Did you know… 86% of American's expect companies to do more than make
          a profit; address community issues. (Key statistics from Blackbaud)
          When you develop a cause marketing promotion with Hope Chest – you are
          addressing community issues by helping Minnesota breast cancer
          patients and their families. There are so many ways you can do this…
          and it’s turn-key!
        </p>
        <ul>
          <li>Incorporate our logo in your promotions. </li>
          <li>
            We promote your program on our website, social media channels and
            newsletter.
          </li>
          <li>
            You have 100% control over your promotional program with Hope Chest.
            Some ideas include:
          </li>
          <li>
            Create a special package or event night and donate those proceeds.{" "}
          </li>
          <li>Create a "round up" program where extra change is donated.</li>
          <li>Donate a percentage of sales from your Hope Chest day.</li>
          <li>
            Throw a company party or mixer with a “cover fee” to give to Hope
            Chest.
          </li>
        </ul>

        <h3>How to Get Started</h3>
        <p>
          Interested on getting your promotional event up and running?
          Wonderful! Complete the information by clicking the Start Your
          Fundraiser button. Once information is complete, Hope Chest will reach
          out with marketing materials to help your event.
        </p>
        <center>
          <button className="fundButton" onClick={() => this.goToForm()}>
            Start Your Fundraiser
          </button>
        </center>
      </div>
    );
  }
}

export default Welcome;
