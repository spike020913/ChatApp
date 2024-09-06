import React, { useState } from 'react'

const GenderCheckbox = () => {
    const [gender, setGender] = useState(null);

    const handleCheckboxChange = (selectedGender) => {
        setGender(selectedGender === gender ? null : selectedGender);
    };

    return (
        <div className="flex">
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className='label-text'>Male</span>
                    <input
                        type="checkbox"
                        className='checkbox border-slate-900'
                        checked={gender === 'male'}
                        onChange={() => handleCheckboxChange('male')}
                    />
                </label>
            </div>

            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className='label-text'>Female</span>
                    <input
                        type="checkbox"
                        className='checkbox border-slate-900'
                        checked={gender === 'female'}
                        onChange={() => handleCheckboxChange('female')}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox