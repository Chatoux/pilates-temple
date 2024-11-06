import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-green-500">Pilates Temple</div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/"><a className="text-gray-700 hover:text-green-500">Home</a></Link></li>
                        <li><Link href="/about"><a className="text-gray-700 hover:text-green-500">About</a></Link></li>
                        <li><Link href="/services"><a className="text-gray-700 hover:text-green-500">Services</a></Link></li>
                        <li><Link href="/contact"><a className="text-gray-700 hover:text-green-500">Contact</a></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
