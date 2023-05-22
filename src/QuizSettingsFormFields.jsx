import React from "react";

const QuizSettingsFormFields = ({ onChange }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <section className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="amount">
          Number Of Questions
        </label>
        <input
          type="number"
          name="amount"
          defaultValue={10}
          min={1}
          max={50}
          onChange={onChange}
          className="rounded bg-slate-100 px-2 py-1"
        />
      </section>

      <section className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="category">
          Category
        </label>
        <select
          className="rounded bg-slate-100 px-2 py-1"
          name="category"
          onChange={onChange}
        >
          <option value="sport">sports</option>
          <option value="history">history</option>
          <option value="politics">politics</option>
        </select>
      </section>

      <section className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="difficulty">
          Select Difficulty
        </label>
        <select
          className="rounded bg-slate-100 px-2 py-1"
          name="difficulty"
          onChange={onChange}
        >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </section>
    </div>
  );
};

export default QuizSettingsFormFields;
