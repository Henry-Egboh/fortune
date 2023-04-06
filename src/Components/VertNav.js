import { Link } from "react-router-dom";
// import styled from 'styled-components';

// const Nav = styled.nav ``;

const VertNav = () => {
    return ( 
            <nav>
                <ul>
                    <li><Link to='./Home.js'>Fortune</Link></li>
                    <li><Link to='Services'>Services</Link></li>
                    <li><Link to='./Home.js'>Daily Meals</Link></li>
                    <li><Link to='Services'>Fresh Desserts</Link></li>
                    <li><Link to='./Home.js'>Bookings</Link></li>
                    <li><Link to='Services'>Delivery</Link></li>
                </ul>
            </nav>
     );
}
 
export default VertNav;