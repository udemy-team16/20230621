'use strict';

function App() {
    const [timeValue, setTime] = React.useState(new Date());

    const init = (time) => {
        const h = String(time.getHours()).padStart(2, '0');
        const m = String(time.getMinutes()).padStart(2, '0');
        const s = String(time.getSeconds()).padStart(2, '0');

        return `${h}:${m}:${s}`;
    }

    setInterval(() => setTime(new Date()), 1000);

    return (
        <h1>{init(timeValue)}</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));