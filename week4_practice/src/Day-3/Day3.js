import FocusInput from "./Example";
import ClickCounter from "./Practice/ClickCounter";
import Counter from "./Practice/Counter";
import DomRef from "./Practice/DomRef";
import DomValueRef from "./Practice/DomValueRef";
import String from "./Practice/String";
import Time from "./Practice/Time";
import ValueRef from "./Practice/ValueRef";
import PreviousDisplay from "./useEffect + useState + useRef/PreviousDisplay";
import RenderDetector from "./useEffect + useState + useRef/RenderDetector";
import AutoFocus from "./useRef + useEffect/AutoFocus";
import PreviousValue from "./useRef + useEffect/PreviousValue";
import CounterExample from "./useRef+useState/CounterExample";
import InputChangeTracker from "./useRef+useState/InputChangeTracker";
import SessionActionTracker from "./useRef+useState/SessionActionTracker";
import ToggleRenderCounter from "./useRef+useState/ToggleRenderCounter";

export default function Day3() {
  return (
    <div>
        <h2><b>Day-3 of React Learning</b></h2>
        <h3>Self-Practice Session of Day-3</h3>
        <br/>
        <FocusInput/>
        <br/>
        <ClickCounter/>
        <br/>
        <Counter/>
        <br/>
        <Time/>
        <br/>
        <String/>
        <br/>
        <DomRef/>
        <br/>
        <ValueRef/>
        <br/>
        <DomValueRef/>
        <br/>
        <h3>useRef + useState(Understanding & Practice)</h3>
        <br/>
        <CounterExample/>
        <br/>
        <InputChangeTracker/>
        <br/>
        <ToggleRenderCounter/>
        <br/>
        <SessionActionTracker/>
        <br/>
        <h3>useRef + useEffect(Understanding & Practice)</h3>
        <br/>
        <AutoFocus/>
        <br/>
        <PreviousValue/>
        <br/>
        <h3>useRef + useEffect+ useState(Understanding & Practice)</h3>
        <PreviousDisplay/>
        <br/>
        <RenderDetector/>
        <br/>

        <br/>

        <br/>

        <br/>
        <br/>

        <br/>

        <br/>

        <br/>
        <br/>

        <br/>

        <br/>

        <br/>

        <br/>

        <br/>

        <br/>

        <br/>
    </div>
  )
}
