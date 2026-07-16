import React from 'react'

export default function MovieCard({ data }) {
   
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="movie-card">
                <img
                    src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
                    alt="Movie"
                />
                <span className="rating">★ {data.vote_average}</span>
                <div className="movie-overlay">
                    <h4>{data.title}</h4>
                    <small className="text-light">Action • Adventure • Sci-Fi</small>
                    <p className="mt-2 small">
                       {data.overview}
                    </p>
                    <div className="d-flex gap-2 mt-3">
                        <button className="btn btn-light">
                            <i className="bi bi-play-fill" /> Play
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
