import { useState, useEffect } from 'react'
const Site = (props) => {
  return (
    <article
      className={
        'flex flex-col items-center justify-center gap-4 p-4 font-semibold  rounded-3xl h-80 bg-purple-500 text-gray-100 border-2'
      }
    >
      <header>
        <h2>
          <a
            href={props.link}
            target="_blank"
            className="text-xl font-bold tracking-wider "
          >
            {props.title}
          </a>
        </h2>
      </header>
      <a href={props.link} target="_blank" className="">
        <img
          src={props.image}
          alt={props.title}
          className="object-cover transition-transform duration-500 transform rounded-3xl md:h-52 hover:scale-105"
        />
      </a>

      <a
        href={props.title}
        target="_blank"
        className={
          'p-2 rounded-md font-semibold shadow-xl ' +
          props.button_color +
          props.hover
        }
      >
        Source Code
      </a>
    </article>
  )
}
export default Site
