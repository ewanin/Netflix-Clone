import { Watch1, Watch2 } from "../Components"

const Watch = () => {
  return (
    <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[70px] py-[50px]">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
          <div className="text-white">
            <h2 className="sm:text-[50px] text-[30px] sm:text-left	text-center	 font-bold">Watch everywhere</h2>
            <p className="sm:text-[25px] text-[18px] sm:text-left	text-center sm:pt-[30px] pt-[15px] sm:leading-9 leading-6">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>

          <figure className="relative">
            <video className="absolute w-[60%] left-[20%] bottom-[40%] z-[1] bg-repeat">
              <source src={Watch2} />
            </video>
            <img className="relative z-[2]" src={Watch1} alt="Enjoy1" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Watch