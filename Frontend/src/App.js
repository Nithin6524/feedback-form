import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.js";
import FeedbackForm from "./Pages/Home.js";
import "./scss/main.scss";

function App() {
    return (
        <Router>
            <Layout>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<FeedbackForm />} />
                    </Routes>
                </div>
            </Layout>
        </Router>
    );
}

export default App;
