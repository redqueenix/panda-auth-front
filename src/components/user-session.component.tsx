import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {getAllUsers} from "../store/user/user.action.ts";

const UserSessionComponent = () => {
    const users = useSelector((state: RootState) => state.userReducer.users);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h2>{users.map(user => user.email)}</h2>
        <div>
        <button onClick={() => dispatch(getAllUsers())}>Fetch users</button>
    </div>
    </div>
);

};

export default UserSessionComponent;