import { Download1, Download2, Download3 } from "../Components"

const Download = () => {
  return (
    <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[70px] py-[50px]">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
          <figure className="relative sm:order-1 order-2">
            <img src={Download1} alt="" />
            <div className="sm:w-[60%] w-[90%] absolute sm:left-[20%] left-[5%] border-[1px] border-[#cccccc] bottom-[0px] grid grid-cols-[70%_auto] bg-black items-center rounded-[10px]">
              <div className="grid grid-cols-[25%_auto] gap-[10px] items-center justify-between">
                <img src={Download2} alt="" className="sm:m-[20px] m-[10px] sm:w-[100%] w-[70%]" />
                <div className="text-white">
                  <h3 className="font-bold sm:text-[18px] text-[14px]"> Stranger Things</h3>
                  <b className="text-[blue] sm:text-[18px] text-[14px]">Downloading...</b>
                </div>
              </div>
              <div>
                <img className="sm:w-[80%] w-[70%]" src={Download3} alt="" />
              </div>
            </div>
          </figure>

          <div className="text-white sm:order-2 order-1">
            <h2 className="sm:text-[50px] text-[30px] sm:text-left text-center font-bold">Download your shows to watch offline</h2>
            <p className="sm:text-[25px] text-[18px] sm:text-left	text-center sm:pt-[30px] pt-[15px] sm:leading-9 leading-6">Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download