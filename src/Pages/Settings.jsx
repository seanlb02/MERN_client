import {useState, useEffect} from 'react';
import React from 'react';
import { deleteAccount } from '../API services (fetch functions)/userServices';
import { CheckTokenExpiration } from '../API services (fetch functions)/TokenServices';




export default function Settings() {


    useEffect(() => {   
        CheckTokenExpiration();
    },[]);

    const [warning, setWarning] = useState(false);

    const showWarning = function() {
        return(
            <div>
                <div>Are you sure you want to delete your account?</div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
    }

    const handleDelete = function() {
        deleteAccount()
    }

    return (
        <div>
                <section>
                    <div onClick={() => setWarning(true)}>Delete Account</div>
                    {warning ? showWarning() : <div></div>}
                </section>
               



        </div>
    )



}
