function Card({ content }){
    return (
        <div className="">
          {content.map((category) => (
            <div key={category.id} className="">
              <h3>{category.type}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item.id}>{item.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
}

export default Card;