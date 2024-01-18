import { Enjoy1, Enjoy2 } from "../Components"

const Enjoy = () => {
  return (
    <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[70px] py-[50px]">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
          <div className="text-white">
            <h2 className="sm:text-[50px] text-[30px] sm:text-left	text-center	 font-bold">Enjoy on your TV</h2>
            <p className="sm:text-[25px] text-[18px] sm:text-left	text-center sm:pt-[30px] pt-[15px] sm:leading-9 leading-6">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>

          <figure className="relative">
            <video className="absolute w-[80%] left-[10%] bottom-[20%] z-[1] bg-repeat">
              <source src={Enjoy2} />
            </video>
            <img className="relative z-[2]" src={Enjoy1} alt="Enjoy1" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Enjoy