import React, { useState } from 'react'

export default function RecipeCard({
    title = "Dummy Title",
    thumbnail = "https://png.pngtree.com/png-clipart/20230917/original/pngtree-no-image-available-icon-flatvector-illustration-picture-coming-creative-vector-png-image_12324456.png"
}) {

    const [toggle, setToggle] = useState(false);

    function toggleHanlder() {
        setToggle(!toggle)
    }

    return (
        <div  className='col-4'>
            <div className="card">
                <img src={thumbnail} height={200} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className={`card-title ${toggle ? "text-primary" : "text-danger" }`}>{title}</h5>

                    <button onClick={toggleHanlder} className="btn btn-primary">
                        Click
                    </button>
                </div>
            </div>
        </div>

    )
}
