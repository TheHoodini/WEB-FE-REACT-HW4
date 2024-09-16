function Dofa({ content }) {
  return (
      <div className="flex flex-wrap justify-center w-300 bg-slate-500">
        {content.map((category) => (
          <div key={category.id} className="bg-green-500 w-2/5 mx-3 my-2">
            <h3 className="font-bold mb-3 mt-5 text-center">{category.type}</h3>
            <ul>
              {category.items.map((item) => (
                <li className="font-light mb-1 mx-8 list-disc text-base" key={item.id}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  );
}

export default Dofa;