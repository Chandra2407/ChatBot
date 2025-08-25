import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, fetchUsers, store } from '../teststore';
import { useEffect } from 'react';
import type { ThunkDispatch } from 'redux-thunk';
import type { AnyAction } from 'redux';

type RootState = ReturnType<typeof store.getState>;

const TestRedux: React.FC = () => {
    const count = useSelector((state: RootState) => state.count.count);
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const currentTheme = useSelector((state: RootState) => state.theme.theme);
    const users = useSelector((state: RootState) => state.async.users);
    // Fetch users only once on mount
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    // Log users whenever they change
    useEffect(() => {
        if (users && users.length > 0) {
            console.log(users, 'users');
        }
    }, [users]);
    return (
        <div>
            <h2>TestRedux</h2>
            <p>Count: {count}</p>
            <button
                onClick={() => {
                    dispatch(actionCreators.increment())
                }}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'>Increment</button>
            <button
                onClick={() => {
                    dispatch(actionCreators.decrement())
                }}
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4'>Decrement</button>
            <button
                onClick={() => {
                    const newTheme = currentTheme === "dark" ? "light" : "dark";
                    dispatch(actionCreators.setTheme(newTheme));
                }}
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Change Theme</button>
            <h1>{currentTheme === "dark" ? "Dark Theme" : "Light Theme"}</h1>
            <h3>User List</h3>
            <ul>
                {users.map((user: any, idx: number) => (
                    <li key={user.id || idx}>
                        {user.name ? user.name : JSON.stringify(user)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TestRedux