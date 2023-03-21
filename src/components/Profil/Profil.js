import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../context/UseAuth";
import Default from "../../assets/img/default.png";
import "./profil.css";
import { HiPencilAlt } from "react-icons/hi";
import { BsTrash3 } from "react-icons/bs";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../config/firebase";

function ProfilPage() {
  const [outings, setOutings] = useState([]);
  console.table(outings);
  const currentUser = UseAuth();

  const UpdateOuting = async (id) => {};

  const DeleteOuting = async (id) => {};
  const getData = async () => {
    try {
      const outingsRef = collection(database, "sorties");
      const res = await getDocs(outingsRef);
      const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setOutings(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="section main_profil">
      <div className="profil_container">
        <div className="avatar_container">
          {currentUser !== 0 ? (
            <img src={currentUser?.photoURL} alt="" className="avatar" />
          ) : (
            <img src={Default} />
          )}
        </div>

        <div className="informations_container">
          <div className="flagrant">
            <h3>{currentUser?.displayName}</h3>
            <p>{currentUser?.email}</p>
            <div className="about_me">
              <h4>Présentation </h4>
              <HiPencilAlt className="icon" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      <div className="outings_container">
        <h3 id="title_list">Liste des sorties</h3>
        <div className="outings_list">
          {/* <li className="outing_element"><Link to="outing/:id">Outing 1</Link></li> */}

          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {outings.map((outing) => (
                <tr key={outings.id}>
                  <td>{outing.title}</td>
                  <td>{outing.description}</td>
                  <td>{outing.date}</td>
                  <td>{outing.location}</td>
                  <td>
                    <div className="actionIcon">
                      <div className="update">
                        <HiPencilAlt className="icon" />
                      </div>

                      <div className="delete">
                        <BsTrash3 className="icon" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProfilPage;
