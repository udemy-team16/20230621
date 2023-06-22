'use strict';

function App() {
    const [imgIdx, setIdx] = React.useState(0);

    const Prev = () => {
        if (imgIdx > 1) setIdx(imgIdx - 1);
    }
    const Next = () => {
        if (imgIdx < 9) setIdx(imgIdx + 1);
    }

    return (
        <div>
            <img src={`/static/images/yoon/${imgIdx}.jpg`}></img>
            <button onClick={() => Prev()}>이전</button>
            <button onClick={() => Next()}>다음</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))