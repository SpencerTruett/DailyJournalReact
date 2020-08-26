import React, { useContext, useEffect } from "react";
import { EntryContext } from "./EntryProvider";
import Entry from "./Entry";
import { MoodContext } from "./mood/MoodProvider";

export default () => {
  const { entries, getEntries } = useContext(EntryContext);
  const { moods, getMoods } = useContext(MoodContext);

  useEffect(() => {
    getEntries()
      .then(getMoods)
  }, []);

  return (
    <>
      <h1>Entries</h1>

      <div className="entries">
        {entries.map(entry => {
          return <Entry key={entry.id} entry={entry} moods={moods} />;
        })}
      </div>
    </>
  );
};
