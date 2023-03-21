import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import "./outings.css";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../config/firebase";

const initialState = { title: "", description: "", date: "", location: "" };

function Organize() {
  const [outing, setOuting] = useState(initialState);
  console.log("outing", outing);

  // Add Outings
  const AddOutings = async () => {
    try {
      const outingRef = collection(database, "sorties");
      await addDoc(outingRef, outing);
      alert('Event created ! Bravo !');
      console.log(outingRef);
    } catch (error) {
      console.log(error);
    }
  };

  // Update Outings State
  const HandleChange = (e) => {
    setOuting((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="section organize flex">
      <div className="">
        <h2>Create your event here</h2>
      </div>

      <div className="create_container">
        <div className="inputSection">
          <input
            name="title"
            value={outing.title}
            placeholder="Title"
            onChange={HandleChange}
          />
          <input
            name="description"
            value={outing.description}
            placeholder="Description"
            onChange={HandleChange}
          />
          <input
            name="date"
            value={outing.date}
            placeholder="Date"
            onChange={HandleChange}
          />
          <input
            value={outing.location}
            name="location"
            placeholder="Location"
            onChange={HandleChange}
          />
        </div>

        <div className="btnSection">
          <button className="btn submit" onClick={AddOutings}>
            Submit
          </button>
          <button type="submit" className="btn cancel">
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default Organize;
