import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Update() {
        const navigation=useNavigate()
        const[Movie,setMovie]=useState("")
        const[Hero,setHero]=useState("")
        const[Heroine,setHeroine]=useState("")
        const[Budget,setBudget]=useState("")
        const[Collections,setCollections]=useState("")
        const[Image,setImage]=useState("")
        const { mid }=useParams()
        useEffect(()=>{
            axios.get(`http://localhost:4000/Movies/${mid}`).then((res)=>{
                console.log(res.data)
                setMovie(res.data.Movie)
                setHero(res.data.Hero)
                setHeroine(res.data.Heroine)
                setBudget(res.data.Budget)
                setCollections(res.data.Collections)
                setImage(res.data.Image)

            }).catch((error)=>{
                console.log(error)
            })
        },[mid])

        const submitHandler=(e)=>{
            e.preventDefault();
            let Movies={Movie,Hero,Heroine,Budget,Collections,Image}
            axios.put('http://localhost:4000/Movies/'+mid,Movies).then((res)=>{
                alert("Successfully Updated");
                navigation("/")
            }).catch((error)=>{
                console.log(error)
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
                    <h3>🎬 Update Movie Details</h3>
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
                                value={Movie}
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
                                value={Hero}
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
                                value={Heroine}
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
                                value={Budget}
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
                                value={Collections}
                                onChange={(e)=>setCollections(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">
                                Image
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Upload Image"
                                value={Image}
                                onChange={(e)=>setImage(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-warning w-100 fw-bold"
                        >
                            Update Movie
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

export default Update;