import reactLogo from '../assets/react.svg';


function NavBar (){
    return(
        <>
        <header className="header">
            <nav>
                <img src= {reactLogo} alt="react logo" />
                <span className='navbar'>ReactFacts</span>
            </nav>
        </header>
        </>
    )
}

export default NavBar;