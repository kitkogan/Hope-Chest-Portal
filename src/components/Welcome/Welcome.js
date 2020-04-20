import React, {Component} from 'react';
import { connect } from 'react-redux';



class Welcome extends Component {
  render() {
    return (
      <div className="welcomePage">
        <h1>Welcome Cause Marketing Partners!</h1>
        <h3>Hope Chest for Breast Cancer Foundation is excited to work with you and together we will make an impact to better the lives of Minnesota Breast Cancer Patients.</h3>
        <p>
        Cause Marketing 
        What is Cause Marketing?
        It’s simple… It’s when a for profit and a non-profit come together to solve a worthwhile cause through a program or event that also helps a brand differentiate and drive business.
        Why Cause Marketing?
        Did you know… 86% of American's expect companies to do more than make a profit; address community issues. (Key statistics from Blackbaud)
        When you develop a cause marketing promotion with Hope Chest – you are addressing community issues by helping Minnesota breast cancer patients and their families. There are so many ways you can do this… and it’s turn-key!
        Incorporate our logo in your promotions. 
        We promote your program on our website, social media channels and newsletter.
        You have 100% control over your promotional program with Hope Chest. Some ideas include:
        Create a special package or event night and donate those proceeds. 
        Create a "round up" program where extra change is donated.
        Donate a percentage of sales from your Hope Chest day.
        Throw a company party or mixer with a “cover fee” to give to Hope Chest.
        How to Get Started
        Interested on getting your promotional event up and running? Wonderful! Complete the information by clicking the Start Your Fundraiser button. Once information is complete, Hope Chest will reach out with marketing materials to help your event.
        </p>
      </div>
    );
  }
  
}

const mapStateToProps = reduxState => ({
  reduxState
  
});

export default connect(mapStateToProps)(Welcome);