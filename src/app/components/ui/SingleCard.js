import Image from "next/image";
import React from "react";

const SingleCard = ({img}) => {
  return (
    <div className="p-8">
      <div>
        <div className="bg-transparent ">
          <ul className="list-none m-0 p-0">
            <li className="border-none">
              <div className="w-16 flex-shrink-0 pb-20 z-[3]">
                <Image
                src={img}
                width={250}
                height={200}
                alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
