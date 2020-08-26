import React, { useContext } from "react";
import { EntryContext } from "./EntryProvider";

export default ({ entry, moods }) => {

  const mood = moods.find(m => m.id === entry.moodId)
  const { deleteEntry } = useContext(EntryContext)

  return (

    <section className="entry">
      <div className="entry__concept">{entry.concept}</div>
      <div className="entry__entry">{entry.entry}</div>
      <div className="entry__date">{entry.date}</div>
      <div className="entry__mood">{mood.label}</div>
      <button onClick={
        () => {

        }
      }>Edit</button>

      <button onClick={
        () => {
          deleteEntry(entry)
        }
      }>Delete</button>
    </section>
  )
};
