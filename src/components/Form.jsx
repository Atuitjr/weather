import { useState } from 'react';
import Error from './Error';

const Form = ({ search, setSearch, setAsk }) => {
    const [error, setError] = useState(false);

    const { country, city } = search;

    const handleChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        setAsk(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <Error message='All fields are required' />}
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='city'
                    id='city'
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor='city'>City</label>
            </div>

            <div className='input-field col s12'>
                <select name='country' value={country} onChange={handleChange}>
                    <option value=''>-- Select country --</option>
                    <option value='US'>United States</option>
                    <option value='UK'>United Kingdom</option>
                    <option value='NL'>The Netherlands</option>
                    <option value='MX'>Mexico</option>
                    <option value='AR'>Argentina</option>
                    <option value='CO'>Colombia</option>
                    <option value='CR'>Costa Rica</option>
                    <option value='ES'>Spain</option>
                    <option value='PE'>Peru</option>
                </select>
                <label htmlFor='country'>Country</label>
            </div>

            <div className='input-field col s12' onClick={handleSubmit}>
                <input
                    type='submit'
                    value='Search Weather'
                    className='waves-effect waves-light btn-large btn-block yellow accent-4'
                />
            </div>
        </form>
    );
};

export default Form;
