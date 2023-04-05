import Display from "./components/Display/Display";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-slate-900 pb-24 flex justify-center items-center">
      <Header />
      <div className="w-full h-full mt-48 flex justify-center items-center">
        <Display />
      </div>
    </div>
  )
}


