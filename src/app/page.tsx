// pages/Navbar.js
import Link from 'next/link';

function Navbar  ()  {
    return (
        <div>
        <nav>
        <Link href="/navbar">
                <button>Navar</button>
            </Link>
            <Link href="/about">
                <button>About</button>
            </Link>
            <Link href="/contact">
                <button>Contact</button>
            </Link>
            <Link href="/footer">
                <button>Footer</button>
            </Link>
            
        </nav>
        
        </div>
    );
};

export default Navbar;
