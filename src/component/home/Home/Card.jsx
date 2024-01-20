import React from 'react';
import { hero } from '../../assests/data/data';

const Card = () => {
  return (
    <div className="mt-14">
      <section className="flex gap-10 flex-wrap mx-10 justify-center">
        {hero.map((item) => (
          <div key={item.id} className="flex gap-2 justify-center bg-gray-50 pl-4 pr-14 py-3">
            <div className="">
              <img src={item.cover} alt="cover" width={60} />
            </div>
            <div className="text-sm mt-2">
              <h4 className="font-medium">{item.name}</h4>
              <p>{item.items} items</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Card;