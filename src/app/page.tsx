import Header from './components/Header';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Header />
            <main className="bg-gray-100 min-h-screen">
                <section className="relative h-screen bg-cover bg-center bg-no-repeat bg-gray-700" style={{ backgroundImage: 'url(/hero-gym.jpg)' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative max-w-2xl mx-auto text-center py-48">
                        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Welcome to Pilates Temple</h1>
                        <p className="text-white text-lg">Your journey to fitness starts here.</p>
                        <a href="/contact" className="mt-8 inline-block bg-green-500 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 transition">Get Started</a>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                        <p className="text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
