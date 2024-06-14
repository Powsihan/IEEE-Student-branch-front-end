import React from 'react'
import search from '../../../assets/icons/search.png'


const CommonSearch = (props) => {
    return (
        <div>
            <div class="input-group mb-3">
                <input type="search" style={{ minWidth: 250 }} className="form-control form-control-sm" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className={`input-group-append ps-3 pe-3 p-2 text-center rounded-end-3 ${props.primary ? "bag-primary" : "bg-third"}`}>
                    <img style={{ width: 15, height: 15 }} src={search} className='img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default CommonSearch