import Sidebar from './components/Sidebar'


export default function Home() {
  return (
    <div className='h-screen overflow-hidden bg-black'>

      <main>
          <Sidebar />
          {/* Sidebar */}
          {/* Center */}
      </main>
      <div>{/* player */}</div>
    </div>
  );
}
