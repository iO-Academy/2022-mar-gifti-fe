import logo from './logo.svg';
import './App.css';
import {BrowserRouter,

    Route,
    Routes,
} from "react-router-dom";
import Home from "./components/PageContainer/SetupPageContent";
import SuccessPageContent from "./components/PageContainer/SuccessPageContent";
import ParticipantPageContent from "./components/PageContainer/ParticipantPageContent";
import PageContainer from "./components/PageContainer";




function App() {

  return (
    <>
        <PageContainer>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/:id' element={<ParticipantPageContent />}/>
                    <Route path='/success' element={<SuccessPageContent/>}/>
                </Routes>
            </BrowserRouter>
        </PageContainer>
    </>
  );
}

export default App;
