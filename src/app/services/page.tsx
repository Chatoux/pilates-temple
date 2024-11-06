import Header from '../components/Header';

export default function Services() {
    return (
        <div>
            <Header />
            <main className="bg-white min-h-screen py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Our Services</h1>
                    <p className="text-gray-700">
                        We offer a range of services including personalized training sessions, group classes, and nutrition consulting.
                    </p>
                </div>
            </main>
        </div>
    );
}
