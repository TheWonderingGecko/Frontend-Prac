import backroads from './assets/backroads-app.png'

function App() {
  return (
    <div className="flex flex-col items-center w-screen h-screen gap-6 bg-gray-800">
      <div className="flex flex-col justify-center w-full font-extrabold text-center bg-teal-500 h-1/4 ">
        <h1 className="text-3xl text-gray-100">
          Welcome to my Frontend Portfolio
        </h1>
      </div>
      <div className="w-3/4 bg-orange-400 rounded-2xl">
        <h2 className="p-4 text-lg font-semibold text-center text-gray-100 ">
          What's going on here?
        </h2>
        <div className="block p-4 text-gray-100 border-t-4 border-gray-200">
          This website showcases my frontend projects. To make space for more
          complex full-stack applications and language showcases, I've kept my
          main portfolio reserved for those projects.
        </div>
      </div>
      <section className="flex flex-col items-center justify-center w-3/4 p-4 text-center bg-purple-600 rounded-3xl">
        <article className="flex flex-col items-center justify-center gap-4 font-semibold text-gray-100">
          <header>
            <h2>
              <a
                href="https://candid-centaur-f32f8b.netlify.app/"
                target="_blank"
              >
                Backroads App
              </a>
            </h2>
          </header>
          <a
            href="https://candid-centaur-f32f8b.netlify.app/"
            target="_blank"
            className=""
          >
            <img src={backroads} alt="Backroads App" className="rounded-3xl " />
          </a>

          <a
            href="https://github.com/TheWonderingGecko/backroads"
            target="_blank"
          >
            Source Code
          </a>
        </article>
      </section>
    </div>
  )
}

export default App
