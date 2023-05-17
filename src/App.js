function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <header className="bg-white h-3/5 w-6/12 max-w-md box-border rounded p-12 flex flex-col gap-8">
        <h1 className="font-bold text-4xl">Set Up Quiz</h1>
        <section className="flex flex-col gap-2">
          <label className="font-semibold">Number Of Questions</label>
          <input
            type="number"
            defaultValue={10}
            min={1}
            max={50}
            className="rounded bg-slate-100 px-2 py-1"
          />
        </section>

        <section className="flex flex-col gap-2">
          <p className="font-semibold">Category</p>
          <select className="rounded bg-slate-100 px-2 py-1">
            <option>sports</option>
            <option>history</option>
            <option>politics</option>
          </select>
        </section>

        <section className="flex flex-col gap-2">
          <p className="font-semibold">Select Difficulty</p>
          <select className="rounded bg-slate-100 px-2 py-1">
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
          </select>
        </section>

        <buton className="bg-amber-500 rounded text-center cursor-pointer">
          Start
        </buton>
      </header>
    </div>
  );
}

export default App;
