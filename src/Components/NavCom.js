import { Link } from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
    padding: 0.5rem;
    border: 2px ridge #ededcc;
    border-radius: 5px;
    background: ${props => props.contact ? ' #232e11' : '#efefdd'};
    color: ${props => props.contact ? '#fff' : '#232e11'};
    font-weight: 400;

    :hover {
        background-color: ${props => props.contact ? '#3c4b23' : '#cecece'};
        color: ${props => props.contact ? '#efefdd' : '#232e11'};
        transition: all 1000ms ease-in-out;
    }

    @media screen {
        display: none;
        visibility: hidden;
    }
    
    @media screen and (min-width: 992px) {
      display: block;
      visibility: visible;
    }
`;

const NavCom = () => {
    return ( 
        <nav>
            <section className="nav">
                {/* logo */}
                <div className="logo">
                    <h2>For<span className="px-2 text-bg-danger text-light">T</span>une</h2>
                </div>
                {/* nav menu */}
                <div>
                    <ul>
                        <li><Link to='./Home.js'>Fortune</Link></li>
                        <li><Link to='Services'>Services</Link></li>
                        <li><Link to='./Home.js'>Daily Meals</Link></li>
                        <li><Link to='Services'>Fresh Desserts</Link></li>
                        <li><Link to='./Home.js'>Bookings</Link></li>
                        <li><Link to='Services'>Delivery</Link></li>
                    </ul>
                </div>
                {/* button for sign up */}
                <div className="d-flex gap-4">
                    <Button>Sign Up</Button>
                    <Button contact>Contact Us</Button>
                </div>
            </section>
        </nav>
     );
}
 
export default NavCom;