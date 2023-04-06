// import styled from 'styled-components';
import VertNav from "../VertNav";

const NavCom = () => {
    return ( 
        <nav>
            <section className="nav">
                {/* logo */}
                <div className="logo">
                    <h2 className='mb-0'>For<span className="px-2 text-bg-danger text-light">T</span>une</h2>
                </div>

                {/* nav menu */}
                <VertNav />
            </section>
        </nav>
     );
}
 
export default NavCom;