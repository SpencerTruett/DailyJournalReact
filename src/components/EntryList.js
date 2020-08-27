import React, { useContext, useEffect, useState, useRef } from "react";
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

  useEffect(() => {
    setEntries(entries)
  }, [entries])

  const [filteredEntries, setEntries] = useState([]);

  const [moodSelected, setMoodSelected] = useState("");

  const filterAllEntries = (event) => {
    const filteredEntriesByMood = entries.filter(entry => entry.moodId === parseInt(event.target.value))
    setEntries(filteredEntriesByMood)
    setMoodSelected(event.target.value)
  }


  return (
    <>
      <h1>Filter Entries</h1>

      <div >
        <input type="radio" value="1" name="moodId" checked={moodSelected === "1"}
          onClick={filterAllEntries}
        /> Happy
        <input type="radio" value="2" name="moodId" checked={moodSelected === "2"}
          onClick={filterAllEntries}
        /> Sad
        <button onClick={() => {
          setEntries(entries)
          setMoodSelected("")
        }}>Clear Filter</button>
      </div>

      <h1>Entries</h1>

      {/* 
            Pseudo Code
            .filter(happyEntries => happyEntries.mood.label === "Happy") 
        */}

      <div className="entries">
        {filteredEntries.map(entry => {
          return <Entry key={entry.id} entry={entry} moods={moods} />;
        })}
      </div>

    </>
  );
};
