import React, { useEffect, useState } from "react";
import { database, auth } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "../index.css";

function Profil() {
  const [outingList, setOutingList] = useState([]);

  // Add Outing
  const [newOutingTitle, setNewOutingTitle] = useState("");
  // const [newBeginDate, setNewBeginDate] = useState(0);
  const [isPublic, setIsPublic] = useState(false);

  const outingsCollectionRef = collection(database, "outings");

  const getOutingList = async () => {
    try {
      const data = await getDocs(outingsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setOutingList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getOutingList();
  });

  const onSubmitOuting = async () => {
    try {
      await addDoc(outingsCollectionRef, {
        title: newOutingTitle,
        // begin_date: newBeginDate,
        isPublic: isPublic,
        userId: auth?.currentUser?.uid,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteOuting = async (id) => {
    const outingDoc = doc(database, "outings", id);
    await deleteDoc(outingDoc);
  };

  return (
    <div>
      <div>
        <fieldset className="add_outing">
          <input
            type="text"
            placeholder="Outing title"
            onChange={(e) => setNewOutingTitle(e.target.value)}
          />
          {/* <input
            type="number"
            placeholder="Begin date"
            onChange={(e) => setNewBeginDate(e.target.value)}
          /> */}

          <div className="visibility_part">
            <input 
            type="checkbox"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
            />
            <label>Public</label>
          </div>

          <button className="other_btn" onClick={onSubmitOuting}>Submit</button>
        </fieldset>
      </div>

      <h1 className="title_listouting">List of outings</h1>

      {outingList.map((outing) => (
        <div className="outings_list">
          <h3 style={{color: outing.isPublic ? "green" : "red"}}> {outing.title} </h3>
          {/* <p>Date : {outing.begin_date} </p> */}
          <div>
            <button className="delete_btn" onClick={() => deleteOuting(outing.id)}>Delete</button>
            <button className="other_btn">See more</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profil;
