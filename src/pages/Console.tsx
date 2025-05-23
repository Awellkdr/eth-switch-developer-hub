
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Console = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Developer Console</h1>
          <p className="text-lg text-gray-600 mb-8">
            Manage your applications and API keys...
          </p>
          <div className="bg-white rounded-lg p-8 shadow-sm border max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">🔑 Developer Dashboard</h3>
            <p className="text-gray-600">
              Your developer console for managing API keys, viewing usage analytics, 
              and configuring applications is coming soon!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Console;
