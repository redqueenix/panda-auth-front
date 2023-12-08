import './App.css'
import UserSessionComponent from "./components/user-session.component.tsx";
import {useSelector} from "react-redux";
import {RootState} from "./store/store.ts";
import LoginComponent from "./components/login.component.tsx";

function App() {
    const authInfo = useSelector((state: RootState) => state.authReducer.authInfo);

    return (
        <div>
            {!authInfo ? <LoginComponent/> : <UserSessionComponent/>}
        </div>
    );
}

export default App
