export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="w-1/5 bg-gray-900 text-white p-5 flex flex-col items-center">
        <button className="nav-button">Home</button>
        <button className="nav-button">Profile</button>
        <button className="nav-button">Plus</button>
        <button className="nav-button">Folder</button>
        <button className="nav-button">Signout</button>
      </nav>

      {/* Main Content */}
      <div className="w-4/5 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 text-white text-center py-4 text-xl font-bold">
          Project Name
        </header>

        {/* Content */}
        <main className="flex-1 bg-gray-100 flex justify-center items-center">
          <h1 className="text-2xl text-gray-700">Dashboard</h1>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-2 text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
