import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Button from "../../UI/Button/AddButton";
import Modal from "../../UI/Modal/FormModal";

import { Row } from "reactstrap";

import classes from "./Desk.module.css";
import Notes from "../../components/Note/Note";

const Desk = () => {
  const [notes, setNotes] = useState([
    {
      noteId: 1,
      noteTitle: "Note 1",
      noteText: "This is my first note",
    },
    {
      noteId: 2,
      noteTitle: "Note 2",
      noteText: "This is my second note",
    },
    {
      noteId: 3,
      noteTitle: "Note 3",
      noteText: "This is my third note",
    },
    {
      noteId: 4,
      noteTitle: "Note 4",
      noteText: "This is my fourth note",
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  let noteTitle = "";
  let noteText = "";

  //Adds new note to notes array
  const addNoteHandler = (e) => {
    if (noteTitle && noteText) {
      e.preventDefault();
      setNotes(
        notes.concat({
          noteId: uuidv4(),
          noteTitle: noteTitle,
          noteText: noteText,
        })
      );
      console.log(notes);
      toggleModalHandler();
    } else {
      return;
    }
  };

  const toggleModalHandler = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  const noteDataHandler = (e) => {
    noteText = e.target.value;
  };

  const noteTitleHandler = (e) => {
    noteTitle = e.target.value;
  };

  const stickyNotes = notes.map((note) => (
    <Notes key={note.noteId} text={note.noteText} title={note.noteTitle} />
  ));

  const modalForm = (
    <Modal
      openModal={showModal}
      toggleModal={toggleModalHandler}
      changeTitle={noteTitleHandler}
      changeNote={noteDataHandler}
      addNote={addNoteHandler}
      title={notes.noteTitle}
      note={notes.noteText}
    />
  );

  return (
    <div className={classes.Desk}>
      <Row>{stickyNotes}</Row>
      {modalForm}
      <Button addNote={toggleModalHandler} />
    </div>
  );
};

export default Desk;
