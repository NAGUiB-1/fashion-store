import { useState, useRef } from "react";
import NewCard from "./NewCard";
import Loader from "./Loader";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
function Row({ data, title }) {
  let box = useRef();
  let [scroll, setScroll] = useState({ left: 0, right: 100 });
  const ScrollLeft = () => {
    let x = box.current.ScrollLeft;
    box.current.scrollLeft -= 260;
  };
  const Scrollright = () => {
    let x = box.current.ScrollLeft;
    box.current.scrollLeft += 260;
  };

  //console.log(window.getComputedStyle(box.current, null).getPropertyValue('padding-left'))

  return (
    <div className="py-6 ">
      <h3 className="container mx-auto font-bold text-left px-2 text-4xl">
        {title}
      </h3>
      {data?.length ? (
        <>
          <div className="container mx-auto ">
            <div className="w-full  relative h-full ">
              {scroll.left <= 20 ? (
                ""
              ) : (
                <div
                  className="absolute left-0 top-[calc(50%-20px)] cursor-pointer h-[40px] w-[40px] bg-gray-300 flex jusify-center items-center z-50 opacity-80  rounded-[50%]"
                  onClick={ScrollLeft}
                >
                  <AiOutlineArrowLeft className="mx-auto" size={25} />
                </div>
              )}

              <div
                className="py-2 px-2 whitespace-nowrap w-full gap-2 overflow-x-scroll scroll-smooth scrollbar-hide flex"
                ref={box}
                onScroll={(e) =>
                  setScroll({
                    left: e.target.scrollLeft,
                    right:
                      e.target.scrollWidth -
                      box.current.getBoundingClientRect().width,
                  })
                }
              >
                {data?.map((i) => (
                  <div key={i.id} className="w-[250px] ">
                    <NewCard
                      title={i?.name ? i.name : i.title}
                      brand={i.brandName}
                      price={
                        i?.price?.current?.value
                          ? i.price.current.value
                          : i.price
                      }
                      oldPrice={
                        i?.price?.previous?.value
                          ? i.price.previous.value
                          : i.oldPrice
                      }
                      thumb={`${i?.imageUrl ? i.imageUrl : i.thumb}`}
                      //discount={i.discountPercentage}
                      id={i.id}
                    />
                  </div>
                ))}
              </div>
              {scroll.left >= scroll.right - 20 ? (
                ""
              ) : (
                <div
                  className="absolute right-0 top-[calc(50%-20px)] h-[40px] cursor-pointer w-[40px] bg-gray-300 flex jusify-center items-center z-50 opacity-80  rounded-[50%]"
                  onClick={Scrollright}
                >
                  <AiOutlineArrowRight className="mx-auto" size={25} />
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Row;
