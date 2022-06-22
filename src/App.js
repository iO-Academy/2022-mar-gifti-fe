import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    Redirect
} from "react-router-dom";
import Home from "./components/PageContainer/SetupPageContent";
import SuccessPageContent from "./components/PageContainer/SuccessPageContent";
import PageContainer from "./components/PageContainer";



function App() {

  return (
    <div>
        <PageContainer>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/:id' element={<ParticipantPage />}/>
                    <Route path='/success' element={<SuccessPageContent/>}/>
                </Routes>
            </BrowserRouter>
        </PageContainer>
    </div>
  );
}


const ParticipantPage = () => {
    return <h1>Participant Page</h1>
}



export default App;
