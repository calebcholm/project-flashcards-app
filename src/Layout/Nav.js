import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ name='', link='', currentPage='Page Name' }) {
    return (
        <div>
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
                    {link !== '' ? <li className="breadcrumb-item text-secondary">
                        <p className="m-1 text-info"></p>
                        <Link to={link}>{name}</Link>
                    </li> : ''}
                    <li className='breadcrumb-item active' aria-current='page'>{currentPage}</li>
                </ol>
            </nav>
        </div>
    )
}
