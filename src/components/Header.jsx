// components/Header.jsx
import Link from 'next/link';

function Header() {
    return (
        <header className="bg-green-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-lg font-bold">
                    <Link href="/">Marketplace</Link>
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                    Подать объявление
                </button>
            </div>
        </header>
    );
}

export default Header;
