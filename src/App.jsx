// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import { decrement, increment } from "./features/counter/counterSlice";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { StateProvider } from "./context/StateProvider";

function App() {
    // const count = useSelector((state) => state.counter.value);
    // const dispatch = useDispatch();

    return (
        <>
            {/* <>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </>
            <> */}
            <StateProvider>
                <TaskForm />
                <TaskList />
            </StateProvider>
            {/* </> */}
        </>
    );
}

export default App;
