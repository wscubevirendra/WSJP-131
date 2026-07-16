import React from 'react'
import { CiSearch } from "react-icons/ci";


export default function Input({ search, setSearch }) {
    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <div className="input-group">
                        <span className="input-group-text bg-dark text-white border-secondary">
                            <CiSearch />
                        </span>
                        <input
                        onChange={(e)=>setSearch(e.target.value)}
                            value={search}
                            type="text"
                            className="form-control bg-dark text-white border-secondary"
                            placeholder="Search movies..."
                        />
                        <button className="btn btn-danger">Search</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
