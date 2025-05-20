import FeedbackForm from "../components/FeedbackForm";
import "../scss/pages/Home.scss";

function Home() {
    return (
        <div className="home-page">
            <FeedbackForm />

            <p className="made-by">
                🔧 Made by <strong>Nithin</strong> ❤️
            </p>
        </div>
    );
}
export default Home;
