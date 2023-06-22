'use strict';

const root = document.getElementById("root");

function App() {
    const [imgSrc, setImgSrc] = React.useState("https://cdn.maily.so/fdv5fjq09vcgp419ehzg9hacwsxf")
    const onClick = () => {
        console.log('방가방가');
    }
    const handleImg = () => {
        console.log('이미지 바뀔 예정');
        setImgSrc('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOe9_zVs8Me9FQNKtih6YYFirUgcOrJCrUQ&usqp=CAU');
    }

    return (
        <div>
            <h1>안녕하세요!</h1>
            <p onClick={onClick}>만나서 반갑습니다!</p>
            <p >제가 좋아하는 캐릭터를 소개합니다! 이미지를 클릭해보세요</p>
            <img onClick={handleImg} src={imgSrc} />
        </div>
    );
}

ReactDOM.render(<App />, root);
