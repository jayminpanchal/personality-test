import { Link } from "react-router-dom";
import "./style.css";

const StartPage = () => {
  return (
    <div className="container">
      <h3 className="heading">Are you an introvert or an extrovert?</h3>
      <img
        className="img"
        src="https://www.psychologies.co.uk/wp-content/uploads/sites/3/2018/05/introvert_or_extrovert-1-scaled.jpg?w=1080"
        alt="Test: Are you an introvert or an extrovert?"
      />
      <Link className="start-exam" to="/exam">Start Exam</Link>
    </div>
  );
};

export default StartPage;
