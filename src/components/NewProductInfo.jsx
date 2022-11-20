import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AppState } from "../AppState";
import Loader from "./Loader";
export default function NewProductInfo({ data }) {
  let { addToCart } = AppState();

  let item = {
    price: data?.price?.current?.value,
    title: data?.name,
    thumb: `${data?.media?.images[0].url}`,
    id: data.id,
    number: 1,
  };
  console.log(data)
  return (
    <div className=" futura container mx-auto flex flex-col gap-8">
    
    {
     data.id ? <>
      {/*Start Gallery*/}
      <div className="md:flex gap-8">
        <Carousel
          className="md:w-2/3"
          infiniteLoop
          autoPlay
          transitionTime={500}
        >
          {data?.media?.images?.map((e, i) => (
            <img key={i} src={`https://${e.url}`} alt=" " />
          ))}
        </Carousel>

        <div className="md:w-1/3 flex flex-col justify-center gap-4">
          {/*Start title*/}
          <h3 className="text-2xl font-bold futura"> {data?.name} </h3>
          <p className="text-xl font-medium"> {data?.price?.current?.text} </p>
          {data?.price?.current?.value == data?.price?.previous?.value ? (
            " "
          ) : (
            <p className="line-through"> Was {data?.price?.previous?.text} </p>
          )}

          {/*Start color*/}
          {/*  <div className=" "> Color : {data?.variants[0]?.colour} </div>*/}

          {/*Start size*/}

          <label className="text-xl"> Size :</label>
          <select
            name="1"
            className="w-full text-xl  text-center rounded border  border-[#ddd] bg-transparent"
            onChange={(e) => setValue(eval(e.target.value))}
          >
            {data?.variants?.map((e, i) => (
              <option key={i} value={e?.brandSize}>
                {e?.brandSize}
              </option>
            ))}
          </select>

          {/*Add to Cart*/}
          <div
            onClick={() => addToCart(item)}
            className=" w-full bg-green-500 py-4 rounded text-center bold text-xl font-bold text-white"
          >
            {" "}
            Add To Cart{" "}
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:grid  md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/*product details*/}
        <div className=" text-lg md:text-xl lg:text-2xl">
          <h3 className="font-bold text-[#d5d5d5]"> Product Details : </h3>
          <div
            className="list"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </div>

        {/*product Size*/}
        <div className=" text-lg md:text-xl lg:text-2xl">
          <h3 className="font-bold text-[#d5d5d5]"> SIZE & FIT : </h3>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: data?.info?.sizeAndFit }}
          />
        </div>
        {/*Look after*/}
        <div className=" text-lg md:text-xl lg:text-2xl">
          <h3 className="font-bold text-[#d5d5d5]"> Look After Me : </h3>
          <div dangerouslySetInnerHTML={{ __html: data?.info?.careInfo }} />
        </div>
        {/*About Me*/}
        <div className=" text-lg md:text-xl lg:text-2xl">
          <h3 className="font-bold text-[#d5d5d5]"> About Me : </h3>
          <div dangerouslySetInnerHTML={{ __html: data?.info?.aboutMe }} />
        </div>
      </div>
      </> : <Loader />
    }
    </div>
  );
}
