import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ReviewStars from './ReviewStar.jsx';


const ImpactCard = ({review}) => {
    return (
        <div className="flex flex-col md:relative h-[40vh] ">

            <div className="absolute top-[-7rem] z-10 mx-auto ">
                <div className=" w-[140px] h-[140px] z-25"><img className=" aspect-square object-cover rounded-full" src={review.image}  /></div>
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>

            <div className="text-center mt-1">
                <p className="font-bold text-2xl capitalize leading-3">{review.name}</p>
            </div>

            <div  className="text-center mt-4">
                <p className="text-violet-300 text-sm uppercase">{review.ailment}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-2"><FaQuoteLeft/></div>

            <div className="text-center mt-2 text-slate-500 ">
                {review.text}
            </div>

            <div className="text-violet-400 mx-auto mt-2"><FaQuoteRight/></div>

            <div><ReviewStars star={review.star}/></div>

            

            

        
        </div>
    )
}

export default ImpactCard;