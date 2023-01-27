import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import DashboardCompoent from './components/dashboard';
import ContactCompoent from './components/contact';

function App() {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardComponent />}></Route>
            <Route path="/contact" element={<ContactComponent />}></Route>
        </Routes>
    );
}

export default App;
