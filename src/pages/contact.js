import React from 'react'
import Footer from '../components/Footer'
const contact = () => {
    return (
        <div>
            <div>
        <div className>
            <form id="form-add" className="mx-5 my-5 py-4 px-5 bg-gray-100 border border-gray-200">
            <h2 className="text-xl font-bold">Phản hồi của khách hàng : </h2>
            <label htmlFor="inputPassword5" className="form-label">Tên khách hàng </label>
            <input type="text" id="user-name" className="form-control" aria-describedby="passwordHelpBlock" />
            <label htmlFor="inputPassword5" className="form-label">Email </label>
            <input type="email" id="email" className="form-control" aria-describedby="passwordHelpBlock" />
            <label htmlFor="inputPassword5" className="form-label">Nội dung </label>
            <input type="text" id="content" className="form-control" aria-describedby="passwordHelpBlock" />
            <button id="sub-contact" className="btn btn-primary my-3">Submit</button>
            </form>
        </div>
        
</div>
<Footer/>
        </div>
    )
}

export default contact
