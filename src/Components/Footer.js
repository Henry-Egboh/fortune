import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
    padding: 0.5rem;
    margin-right: 1rem;
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
`;


function Footer() {
    return (
        <>
            <footer className='footer'>

            {/* list items */}
                <div>
                    <h4>In the Garden</h4>
                    <ul>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                    </ul>
                </div>

            {/* list items */}
                <div>
                    <h4>In the Garden</h4>
                    <ul>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                    </ul>
                </div>

            {/* list items */}
                <div>
                    <h4>In the Garden</h4>
                    <ul>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                    </ul>
                </div>

            {/* list items */}
                <div>
                    <h4>In the Garden</h4>
                    <ul>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                        <li><Link to='/'>Veggies Cromium</Link></li>
                    </ul>
                </div>
                {/* button for sign up */}
                <div className="">
                    <Button>Sign Up</Button>
                    <Button contact>Contact Us</Button>
                </div>
            </footer>
        </>
    );
}
export default Footer;