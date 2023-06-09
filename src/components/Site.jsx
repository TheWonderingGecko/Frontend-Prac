const Site = (props) => {
  return (
    <article
      className={
        'flex flex-col items-center justify-center gap-4 p-4 font-semibold w-[305px]  rounded-3xl h-80 bg-purple-500 text-gray-100 border-2 landscape:h-96 md:h-96 w-auto'
      }
    >
      <header>
        <h2 className=" landscape:h-16">
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
          className="object-cover  w-[273px] transition-transform duration-500 transform h-44 rounded-3xl md:h-52 hover:scale-105"
        />
      </a>

      <a
        href={props.source_code}
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
