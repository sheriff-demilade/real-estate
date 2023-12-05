import React from 'react'

const Contact = () => {
    return (
        <div className="d-flex justify-content-center">
            <form action="" className="w-50 p-5 m-5 border rounded bg-light shadow">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your fullname" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email address" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Enter message here</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>
    )
}

export default Contact