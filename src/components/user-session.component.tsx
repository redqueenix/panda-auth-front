import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {getAllUsers} from "../store/user/user.action.ts";
import { Box, Button, List, ListItem, ListItemText } from '@mui/material';

const UserSessionComponent = () => {
    const users = useSelector((state: RootState) => state.userReducer.users);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Box sx={{ mt: 3 }}>
            <h2>Users list</h2>
            <List>
                {users.map((user) => (
                    <ListItem key={user.id} sx={{ mb: 1 }}>
                        <ListItemText primary={`${user.name} - ${user.email}`} />
                    </ListItem>
                ))}
            </List>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={() => dispatch(getAllUsers())}>
                    Fetch Users
                </Button>
            </Box>
        </Box>
);

};

export default UserSessionComponent;