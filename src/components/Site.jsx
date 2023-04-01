import { useState, useEffect } from 'react'
const Site = (props) => {
  return (
    <article
      className={
        'flex flex-col items-center justify-center gap-4 p-4 font-semibold  rounded-3xl ' +
        props.bgColor
      }
    >
      <header>
        <h2>
          <a
            href={props.link}
            target="_blank"
            className="text-xl font-extrabold tracking-wider shadow-xl "
          >
            {props.title}
          </a>
        </h2>
      </header>
      <a href={props.link} target="_blank" className="">
        <img
          src={props.image}
          alt={props.title}
          className="object-cover rounded-3xl "
        />
      </a>

      <a
        href={props.title}
        target="_blank"
        className={
          'p-2 rounded-md font-bold shadow-xl ' +
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
