import { useEffect } from "react";
const Header = () => {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    const isSticky = (e) => {
        const header = document.querySelector('.header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    return (
        <>
            <div className="header" id="myHeader">
                <div className="data-1">Siddharth Rai</div>
                <div className="data-2">
                    <div className="header-cat" style={{borderLeft:"hidden"}}><a href="#">About Me</a></div>
                    <div className="header-cat"><a href="#">Education</a></div>
                    <div className="header-cat"><a href="#">Projects</a></div>
                </div>
                <div className="data-3">
                    <div className="header-con-1">
                        +91-0101010101
                    </div>
                    <div className="header-con-2">
                        <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;