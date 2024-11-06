import Header from '../components/Header';

export default function About() {
    return (
        <div>
            <Header />
            <main className="bg-white min-h-screen py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">About Us</h1>
                    <p className="text-gray-700">
                        At Pilates Temple, we believe in a holistic approach to wellness. Our mission is to provide high-quality fitness training that balances body, mind, and spirit.
                    </p>
                </div>
            </main>
        </div>
    );
}
