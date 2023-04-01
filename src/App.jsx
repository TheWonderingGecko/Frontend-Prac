import backroads from './assets/backroads-app.png'
import mobile from './assets/Mobile_first.png'

import Site from './components/Site'
import { useState, useEffect } from 'react'

function App() {
  const colors = ['bg-teal-500', 'bg-orange-400', 'bg-purple-500']
  const hover_colors = [
    ' hover:bg-teal-700',
    ' hover:bg-orange-600',
    ' hover:bg-purple-700',
  ]

  return (
    <div className="flex flex-col items-center w-screen h-screen gap-6 overflow-scroll bg-gray-800">
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
      <section className="flex flex-col items-center justify-center w-3/4 gap-4 text-center">
        <Site
          title="Backroads App"
          link="https://candid-centaur-f32f8b.netlify.app/"
          image={backroads}
          bgColor={colors[2 % colors.length]}
          button_color={colors[3 % colors.length]}
          hover={hover_colors[3 % hover_colors.length]}
        />

        <Site
          title="Mobile first application"
          link="https://storied-dolphin-2eae5d.netlify.app/"
          image={mobile}
          bgColor={colors[3 % colors.length]}
          button_color={colors[1 % colors.length]}
          hover={hover_colors[1 % hover_colors.length]}
        />

        <Site
          title="Backroads App"
          link="https://candid-centaur-f32f8b.netlify.app/"
          image={backroads}
          bgColor={colors[1 % colors.length]}
          button_color={colors[2 % colors.length]}
          hover={hover_colors[2 % hover_colors.length]}
        />
      </section>
    </div>
  )
}

export default App
