'use stict';

const Nav = () => {
    const pagination = (id) => {
        Array.from(document.querySelector(".pagination").children).forEach(item => {
            item.id === id ? item.classList.add("active") : item.classList.remove("active");
        });

        const tag = document.getElementById(`section_${id}`);
        document.querySelectorAll(".section1").forEach(item => {
            if (item.id === tag.id) item.classList.add("div-block");
            else item.classList.remove("div-block");
        });
    }


    return (
        <nav>
            <ul class="pagination">
                <li id="profile">
                    <a href="#" onClick={() => pagination('profile')}>
                        <i class="fa-solid fa-user"></i>&nbsp; 프로필
                    </a>
                </li>

                <li id="skill">
                    <a href="#" onClick={() => pagination('skill')}>
                        <i class="fa-solid fa-list"></i>&nbsp; 스킬
                    </a>
                </li>

                <li id="award">
                    <a href="#" onClick={() => pagination('award')}>
                        <i class="fa-solid fa-award"></i>&nbsp; 수상 및 자격증
                    </a>
                </li>
            </ul>
        </nav>
    )
}