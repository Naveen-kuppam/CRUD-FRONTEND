import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/Movies")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []); 

    const remove=(id)=>{
    
       axios.delete("http://localhost:4000/Movies/"+id).then((res)=>{
              window.confirm("Are you sure delete");
              alert("Successfully Delete");
              window.location.reload()
       })
    }

 return (
  <div className="home-bg">
    <Navbar />

    <div className="container mt-5">

      <div className="card shadow-lg border-0">

        <div className="card-header bg-dark text-white text-center">
          <h2 className="fw-bold mb-0">🎬 Movie Management System</h2>
        </div>

        <div className="card-body">
          <div className="table-responsive">
          <table className="table table-hover table-bordered align-middle text-center">

            <thead className="table-info">
              <tr>
                <th>Movie</th>
                <th>Hero</th>
                <th>Heroine</th>
                <th>Budget</th>
                <th>Collections</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.Movie}</td>
                  <td>{item.Hero}</td>
                  <td>{item.Heroine}</td>
                  <td>₹ {item.Budget} Cr</td>
                  <td>₹ {item.Collections} Cr</td>
                  <td> <img
                    src={item.Image}
                    alt={item.Movie}
                    width="80"
                    height="50"
                    style={{ borderRadius: "8px" }}
                /></td>
                  <td>
                    <Link to={`/Update/${item.id}`}>
                      <button className="btn btn-success btn-sm me-2">
                        ✏ Update
                      </button>
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => remove(item.id)}>
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
              </div>
    </div>
  </div>
);
}

export default Home;
