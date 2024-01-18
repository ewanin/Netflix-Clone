import { HeroBanner, LanguageIcon, Logo } from "../Components"


const Hero = () => {
  return (
    <section className="w-full h-[100vh] bg-center bg-cover" style={{backgroundImage: `url(${HeroBanner})`}}  >
      <div className="w-full h-[100vh] bg-black bg-opacity-70">
        <header className="sm:max-w-[80%] max-w-[90%] pt-[20px] mx-auto">
          <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] p-[0px] items-center">
            <figure>
              <img src={Logo} alt="Logo" className="sm:w-[10vmax]" />
            </figure>
            <div className="flex justify-end sm:gap-5 gap-2">
              <div className="relative">
                <img src={LanguageIcon} alt="Icon" className="text-white absolute top-1.5 left-1 sm:block hidden" />
                <select name="" id="" className="bg-black text-white border-white border-[1px] sm:p-[7px_30px] p-[4px_10px] rounded-md sm:text-base text-xs ">
                  <option value="">English</option>
                  <option value="">Hindi</option>
                </select>
              </div>
              <button className="bg-[#E50914] rounded-md text-white sm:p-[7px_30px] p-[4px_10px] sm:text-base text-xs sm:font-bold font-medium hover:bg-[#c11119]">Sign In</button>
            </div>
          </div>
        </header>


        <div className="sm:max-w-[80%] max-w-[87%] mx-auto sm:py-[150px] py-[60px] text-center text-white ">
          <h1 className="sm:text-[50px] text-[33px] sm:font-extrabold font-bold leading-10">Unlimited movies, TV shows and more</h1>
          <h4 className="sm:text-[30px] text-[20px] sm:py-[30px] py-[20px] leading-7">Watch anywhere. Cancel anytime</h4>
          <p className="sm:text-[22px] text-[18px] font-400">Ready to watch? Enter your email to create or restart your membership.</p>

          <div className="max-w-[700px] sm:px-[10px] px-[20px] mx-auto mt-[20px]">
            <form action="" className="grid sm:gap-[20px] gap-[10px] sm:grid-cols-[70%_auto] grid-cols-1">
              <input type="text" className="border-[1px] pl-[20px] sm:h-[60px] h-[50px] border-[#cccccc] rounded-md bg-black opacity-70" placeholder="Email Address" />
              <button className="bg-[#E50914] rounded-[5px] py-[10px] text-white hover:bg-[rgb(193, 17 25)] duration-300 text-[20px] font-medium hover:bg-[#c11119]">Get Started </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero