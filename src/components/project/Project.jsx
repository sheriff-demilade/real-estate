import React from 'react'

const Project = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="text-center text-decoration-underline  m-4"></h3>
                    <div className="card" style={{ width: "18rem", height: "400px" }}>
                        <img className='projectimg card-img-top' src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Our Engineers</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3 className="text-center text-decoration-underline  m-4"></h3>
                    <div className="card" style={{ width: "18rem", height: "400px" }}>
                        <img  src="https://images.pexels.com/photos/18867836/pexels-photo-18867836/free-photo-of-a-person-walking-on-the-beach-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="projectimg card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Scenery</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3 className="text-center text-decoration-underline  m-4"></h3>
                    <div className="card" style={{ width: "18rem", height: "400px" }}>
                        <img src="https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top projectimg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Interior</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project