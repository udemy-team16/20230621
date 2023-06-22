'use strict';
const root = document.getElementById('root')

function App() {
    const [imgSrc, setImgSrc] = React.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvUAj9bRWuxCm5o72_BMhsHxCvkv_eS7baQ&usqp=CAU")
    const img = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZd582-ePNW-oPWTV_rilMRbJC7CWatTJ0fA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKe_EkxqG5gIxovU2hAOHG3OkYX0WUkZLng&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_imZdPpLCgMzcECX9wOgOjHh_HhDzy3CDA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslN-Lma8pMpuhYxjVpj-isBLtUfmU58coUg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebJh2gLipfb2bfmUkZSf7U39YW-7jxMH5_A&usqp=CAU"]


    const handleChangeImg = () => {
        const selectedImg = parseInt(Math.random() * (img.length - 1))
        setImgSrc(img[selectedImg])
    }
    return (
        <>
            <img src={imgSrc} onClick={handleChangeImg} />
        </>
    )
}

ReactDOM.render(<App />, root)
