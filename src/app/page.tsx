import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 md:p-24">
      <div className="w-full max-w-lg">
        <LoginForm />
      </div>
      
      <footer className="mt-12 text-center text-gray-600 text-sm w-full">
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </footer>
    </main>
  );
}