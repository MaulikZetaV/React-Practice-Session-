import Parent from "./Example/Parent";
import Parent1 from "./Parent1";
import ParentState from "./ParentState";
import ParentCounter from "./Practice/ParentCounter";
import ParentName from "./Practice/ParentName";
import ParentToggler from "./Practice/ParentToggling";

export default function Day1() {
  return (
    <div>
      <h2>
        <b>Day-1 of React Learning</b>
      </h2>
      <br />
      <Parent1 />
      <br />
      <ParentState />
      <br />

      <h3>Self-Practice Session of Day-1</h3>
      <ParentName />
      <br />
      <ParentCounter />
      <br />
      <ParentToggler />
      <br />

      <h3>Understanding example of Lifting state up</h3>
      <Parent />
    </div>
  );
}
