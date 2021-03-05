/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
    const [search, setSearch] = useState({ city: '', country: '' });
    const [ask, setAsk] = useState(false);
    const [outcome, setOutcome] = useState({});
    const [error, setError] = useState(false);

    const { country, city } = search;

    useEffect(() => {
        const askAPI = async () => {
            if (ask) {
                const key = '579faf2a66da26680bffe62a3f2c83b8';
                const uri = 'https://api.openweathermap.org/data/2.5/weather?';
                const url = `${uri}q=${city},${country}&appid=${key}`;

                const answer = await fetch(url);
                const result = await answer.json();

                if (result.cod === '404') {
                    setError(true);
                } else {
                    setOutcome(result);
                    setError(false);
                }
                setAsk(false);
            }
        };

        askAPI();
    }, [ask]);

    let component;
    if (error) {
        component = <Error message='That city does not exist' />;
    } else component = <Weather outcome={outcome} error={error} />;

    return (
        <>
            <Header title='Weather Forecast' />
            <div className='contenedor-form'>
                <div className='container'>
                    <div className='row'>
                        <div className='col m6 s12'>
                            <Form
                                search={search}
                                setSearch={setSearch}
                                setAsk={setAsk}
                            />
                        </div>
                        <div className='col m6 s12'>{component}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
