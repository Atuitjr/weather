const Weather = ({ outcome }) => {
    if (Object.keys(outcome).length === 0) return null;

    const { name, main } = outcome;

    const kelvinToDegrees = (kelvin) => (kelvin - 273.15).toFixed(2);

    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>The weather of {name} is:</h2>
                <p className='temperatura'>
                    {kelvinToDegrees(main.temp)} <span>&#x2103;</span>
                </p>
                <p>
                    Maximum temperature: {kelvinToDegrees(main.temp_max)}{' '}
                    <span>&#x2103;</span>
                </p>
                <p>
                    Minimum temperature: {kelvinToDegrees(main.temp_min)}{' '}
                    <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
};

export default Weather;
