import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Add_Details() {
    const navigation = useNavigate()
    const[Movie,setMovie]=useState("")
    const[Hero,setHero]=useState("")
    const[Heroine,setHeroine]=useState("")
    const[Budget,setBudget]=useState("")
    const[Collections,setCollections]=useState("")
    const[Image,setImage]=useState("")
  
   const submitHandler=(e)=>{
        e.preventDefault();
     let Movies={Movie,Hero,Heroine,Budget,Collections,Image}
        axios.post("http://localhost:4000/Movies",Movies).then((res)=>{
                alert("Successfully added")
                navigation("/")
        }).catch((err)=>{
            console.log(err)
        })
    }
    return ( 
        <div>
            <Navbar/>
       <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card shadow-lg">
                <div className="card-header bg-warning text-center">
                    <h3>🎬 Add Movie Details</h3>
                </div>

                <div className="card-body">
                    <form onSubmit={submitHandler}>

                        <div className="mb-3">
                            <label className="form-label fw-bold">
                                Movie Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Movie Name"
                                onChange={(e)=>setMovie(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">
                                Hero
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Hero Name"
                                onChange={(e)=>setHero(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">
                                Heroine
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Heroine Name"
                                onChange={(e)=>setHeroine(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">
                                Budget
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Budget"
                                onChange={(e)=>setBudget(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold">
                                Collections
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Collections"
                                onChange={(e)=>setCollections(e.target.value)}
                            />
                        </div>
                         <div className="mb-3">
                            <label className="form-label fw-bold">
                                Image
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                placeholder="Upload Image"
                                onChange={(e)=>setImage(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-warning w-100 fw-bold"
                        >
                            Added Movie
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
     );
}

export default Add_Details;