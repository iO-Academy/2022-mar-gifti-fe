import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
} from "react-router-dom";


function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/:id' element={<ParticipantPage />}/>
                <Route path='success' element={<SuccessPage/>}/>
            </Routes>
        </BrowserRouter>
        <Form />
    </div>
  );
}

const Home = () => {
    return <h1>Home</h1>
}

const ParticipantPage = () => {
    return <h1>Participant Page</h1>
}

const SuccessPage = () => {
    return <h1>Success!</h1>
}

export default App;
