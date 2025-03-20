import Progressbar from "./ProgressBar";

function App() {
  const progressArr = [0, 5, 10, 30, 50, 90, 100];
  return (
    <>
      <main>
        <h1 className="heading">Progress Bar</h1>
        {progressArr.map((pVal) => (
          <Progressbar
            key={pVal}
            progressVal={pVal}
            role="progressbar"
            aria-valueNow={pVal}
            aria-valueMax="100"
          />
        ))}
      </main>
    </>
  );
}

export default App;
