import CounterApp from "./01-useState/CounterApp"
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook"
import SimpleForm from "./02-useEffect/SimpleForm"
import SimpleFormWithCustomHook from "./02-useEffect/SimpleFormWithCustomHook"
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks"
import { FocusScreen } from "./04-useRef/FocusScreen"
import Layout from "./05-useLayoutEffect/Layout"
import { Memorize } from "./06-memos/Memorize"
import { CallbackHook } from "./07-callbacks/CallbackHook"
import { MemoHook } from "./07-useMemo/MemoHook"
import { Padre } from "./07-tarea-memo/Padre"

import { TodoApp } from "./08-reducer/TodoApp"
import { MainApp } from "./09-useContext/MainApp"
import { BrowserRouter } from "react-router-dom";



function HooksApp() {
	return (
		<BrowserRouter>
			<MainApp/>
		</BrowserRouter>
	)
}

export default HooksApp