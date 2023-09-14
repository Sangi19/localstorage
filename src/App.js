import './App.css';
function App() {
  localStorage.setItem("name", "sam")
  sessionStorage.setItem("id","123")
  return (
    <>
      <h2>Welcome to local Storage page {localStorage.getItem("name")}</h2>
      <h3>session storage id is {sessionStorage.getItem("id")}</h3>
    </>
  );
}

export default App;
