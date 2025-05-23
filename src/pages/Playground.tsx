
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Playground = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">API Playground</h1>
          <p className="text-lg text-gray-600 mb-8">
            Interactive testing environment coming soon...
          </p>
          <div className="bg-white rounded-lg p-8 shadow-sm border max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">🚧 Under Construction</h3>
            <p className="text-gray-600">
              We're building an amazing interactive API testing experience. 
              Check back soon to test our APIs right from your browser!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Playground;
