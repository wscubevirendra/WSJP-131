import React from 'react'

export default function Card({thumbnail,title}) {
    return (
        <div className="col-3">
            <div className="card" >
            <img src={thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                
                <button  className="btn btn-primary">
                   Add to cart
                </button>
            </div>
        </div>
        </div>
        

    )
}
