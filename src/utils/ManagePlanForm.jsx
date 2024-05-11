import React, { useState, useEffect } from 'react'

import './css/ManagePlanForm.css'

export const ManagePlanForm = (props) => {
    const [isHidden, setHidden] = useState(true);

    useEffect(() => {
        if (props.visible === 'true') {
            setHidden(false);
            console.log("clicked");
        }
    }, [props.visible]);

    const toggleForm = () => {
        props.toggleVisible();
        setHidden(!isHidden);
    }

    return (
        <section className={`manage-plan-form container-fluid ${isHidden ? 'hidden' : ''}`} onClick={() => toggleForm()}>
            <div className='plan-form-content rounded-2xl' onClick={(e) => e.stopPropagation()}>
                <div className='block text-end'>
                    <span onClick={toggleForm} className='text-white-800 mb-4 cursor-pointer text-lg font-bold'>X</span>
                </div>
                <form className='flex-col content-center justify-center'>
                    <div className="form-group">
                        <label htmlFor="sel-operator">Operator:</label>
                        <input
                            id="sel-operator"
                            type="text"
                            placeholder="Operator"
                            className="form-control mb-3 px-3 py-2 rounded-md text-black"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sel-price">Price:</label>
                        <input
                            id="sel-price"
                            type="text"
                            placeholder="Price"
                            className="form-control mb-3 px-3 py-2 rounded-md text-black"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sel-validity">Validity:</label>
                        <input
                            id="sel-validity"
                            type="text"
                            placeholder="Validity"
                            className="form-control mb-3 px-3 py-2 rounded-md text-black"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sel-plan">Plan:</label>
                        <input
                            id="sel-plan"
                            type="text"
                            placeholder="Plan"
                            className="form-control mb-3 px-3 py-2 rounded-md text-black"
                            required
                        />
                    </div>
                    <div className="form-group flex items-center justify-center">
                        <button className="form-control mb-3 px-4 py-1 rounded-md bg-primary text-sm text-black">ADD</button>
                    </div>
                </form>

            </div>
        </section>
    )
}