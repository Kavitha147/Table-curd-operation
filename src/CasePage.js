import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";
import { MdModeEdit, MdDelete } from "react-icons/md";
import "./casepage.css";

const CasePage = () => {
  const [addcase, setAddCase] = useState(false);
  const [cref, setCref] = useState();
  const [appNo, setAppno] = useState();
  const [country, setCountry] = useState();
  const [check, setCheck] = useState(false);
  const [tableLists, setList] = useState([
    { caseRef: null, application: null, countryName: null },
  ]);
  const [editList, setEdit] = useState([]);

  const handleCheck = () => {
    setList((current) => [
      ...current,
      { caseRef: cref, application: appNo, countryName: country },
    ]);
    setAddCase(false);
  };

  const handleEdit = (id) => {
    setAddCase(true);
    const edit = tableLists.filter((i, index) => id === index);

    edit.map((i, index) => {
      setCref(i.caseRef);
      setAppno(i.application);
      setCountry(i.countryName);
    });

    // tableLists.map((i, index) => {
    //   if (id === index)
    //     setList((current) => [
    //       ...current,
    //       { caseRef: cref, application: appNo, countryName: country },
    //     ]);
    // });
    };

  const handleCancel = () => {
    setAddCase(false);
  };

  return (
    <div>
      <h1>Tabel View Data</h1>
      <table className="tablediv">
        <tr>
          <th>Case.Ref</th>
          <th>Application No</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
        <tr>
          {addcase && (
            <>
              <td>
                <input
                  type="text"
                  onChange={(e) => setCref(e.target.value)}
                  value={cref}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => setAppno(e.target.value)}
                  value={appNo}
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                />
              </td>
              <td>
                <FcCheckmark size={"30px"} onClick={handleCheck} />
                <GiCancel size={"30px"} color={"red"} onClick={handleCancel} />
              </td>
            </>
          )}
        </tr>
        {tableLists.length > 0 &&
          tableLists.map((i, index) => (
            <tr key={index}>
              <td>{i.caseRef}</td>
              <td>{i.application}</td>
              <td>{i.countryName}</td>
              <td>
                <MdModeEdit size={"30px"} onClick={() => handleEdit(index)} />
                <MdDelete size={"30px"} />
              </td>
            </tr>
          ))}
      </table>
      <button className="casebtn" onClick={() => setAddCase(true)}>
        Add Case
      </button>
    </div>
  );
};
export default CasePage;
