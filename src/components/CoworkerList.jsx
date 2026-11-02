import Coworker from "./Coworker";
export default function CoworkerList({ members }) {
  return (
    <div className="coworker-list">
      {members.map((person, index) => (
        <Coworker key={index} person={person} />
      ))}
    </div>
  );
}
