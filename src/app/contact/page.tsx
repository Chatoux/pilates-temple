import Header from '../components/Header';

export default function Contact() {
    return (
        <div>
            <Header />
            <main className="bg-white min-h-screen py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-700">
                        Reach out to us by phone or email, or visit us at our location.
                    </p>
                </div>
            </main>
        </div>
    );
}
