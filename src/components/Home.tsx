import React, { useEffect, useState } from "react";

const Home = () => {
  const [pointer, setPointer] = useState<number>(0);
  const [data, setData] = useState([]);
  const getData = (value: number) => {
    let url = `https://give-me-users-forever.vercel.app/api/users/${value}/next`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json.users);
        console.log(json);
      })
      .catch((error) => {
        return false;
      });
  };
  useEffect(() => {
    getData(pointer);
  }, []);

  return (
    <div className="table_render_scope">
      <table className="tabel_scope">
        <thead>
          <tr className="table_heading">
            <th>id</th>
            <th>JobTitle</th>
            <th>EmailAddress</th>
            <th>FirstNameLastName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => {
            return (
              <tr className="tbody_row_scope">
                <td>{item.ID}</td>
                <td>{item.JobTitle}</td>
                <td>{item.EmailAddress}</td>
                <td>{item.FirstNameLastName}</td>
                <td>{item.Email}</td>
                <td>{item.Phone}</td>
                <td>{item.Company}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="navigation_container">
        {pointer !== 0 && (
          <button
            className="navigate-btn"
            onClick={() => {
              setPointer(pointer - 10);
              getData(pointer - 10);
            }}
          >
            Previous
          </button>
        )}
        <span>{pointer}</span>
        <button
          className="navigate-btn"
          onClick={() => {
            setPointer(pointer + 10);
            getData(pointer + 10);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
