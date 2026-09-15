import StudentCard from "./components/studentCard";
function App() {
  const students = [
    {  id: 1, name: "Alice", skill: "JavaScript" },
    { id: 2, name: "Charlie", skill: "Java" },
    { id: 3, name: "Bob", skill: "Python" }
  ];
  return(
    <div>
      <h1>Student</h1>
      {students.map((student) =>(
        <StudentCard
        key={student.id}
        name={student.name}
        skill={student.skill}
        />
      ))}
    </div>
  )
}

export default App;