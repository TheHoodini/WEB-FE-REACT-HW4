function Dofa({ content }) {
  return (
    <div className="flex flex-wrap max-md:flex-col max-md:w-full justify-center w-300">
      {content.map((category) => (
        <div key={category.id} className=" border max-md:w-full w-2/5 mx-3 my-2 shadow-md">
          <h3 className="font-bold mb-3 mt-5 text-center">{category.type}</h3>
          <ul className="mb-7">
            {category.items.map((item) => (
              <li className="font-light mb-2 mx-8 list-disc text-xs sm:text-sm md:text-base" key={item.id}>{item.description}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Dofa;