let allquestion = document.querySelectorAll(".faqQuestion");
allquestion.forEach((v, index) => {
  v.addEventListener("click", () => {
    console.log(index)

    v.nextElementSibling.classList.toggle("h-[auto]")
    v.nextElementSibling.classList.toggle("scale-y-100")
    v.nextElementSibling.classList.toggle("p-[20px]")
    // v.children[1].classList.toggle("rotate-45")
    // v.children[1].classList.toggle("rotate-[45px]")

    allquestion.forEach((el, i) => {
      if(i!=index) {
        el.nextElementSibling.classList.remove("h-[auto]", "scale-y-100", "p-[20px]")
        // el.children[1]/classList.remove("rotate-45")
      }
    })

  })
})

const FAQ = () => {




  return (
    <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[70px] py-[50px]">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <h2 className="sm:text-[50px] text-[30px] text-center font-bold text-white mb-7">Frequently Asked Questions</h2>


        <div className=""> 
          <div className="bg-[#2d2d2d] flex items-center justify-between sm:text-[35px] text-[20px] p-[20px] text-white border-b-[2px] border-black mb-[5px] hover:bg-[#4e4e4e] duration-300 cursor-pointer faqQuestion">
            <h3 className="">What is Netflix?</h3>
            <span className="">+</span>
          </div>
          <div className="text-white sm:text-[20px] text-[14px] scale-y-0 h-[0px] origin-top bg-[#2d2d2d] mb-[5px]">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
            <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
        </div>

        <div className="">
          <div className="bg-[#2d2d2d] flex items-center justify-between sm:text-[35px] text-[20px] p-[20px] text-white border-b-[2px] border-black mb-[5px] hover:bg-[#4e4e4e] duration-300 cursor-pointer faqQuestion">
            <h3 className="">What is Netflix?</h3>
            <span className="">+</span>
          </div>
          <div className="text-white sm:text-[20px] text-[14px] scale-y-0 h-[0px] origin-top bg-[#2d2d2d] mb-[5px]">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
            <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
        </div>

        <div className="">
          <div className="bg-[#2d2d2d] flex items-center justify-between sm:text-[35px] text-[20px] p-[20px] text-white border-b-[2px] border-black mb-[5px] hover:bg-[#4e4e4e] duration-300 cursor-pointer faqQuestion">
            <h3 className="">What is Netflix?</h3>
            <span className="">+</span>
          </div>
          <div className="text-white sm:text-[20px] text-[14px] scale-y-0 h-[0px] origin-top bg-[#2d2d2d] mb-[5px]">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
            <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
        </div>

        <div className="">
          <div className="bg-[#2d2d2d] flex items-center justify-between sm:text-[35px] text-[20px] p-[20px] text-white border-b-[2px] border-black mb-[5px] hover:bg-[#4e4e4e] duration-300 cursor-pointer faqQuestion">
            <h3 className="">What is Netflix?</h3>
            <span className="">+</span>
          </div>
          <div className="text-white sm:text-[20px] text-[14px] scale-y-0 h-[0px] origin-top bg-[#2d2d2d] mb-[5px] ">
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
            <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
        </div>
      </div>

      <div>
        <p className="sm:text-[22px] text-[18px] font-400 text-white text-center mt-[20px]">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="max-w-[700px] sm:px-[10px] px-[20px] mx-auto mt-[10px]">
          <form action="" className="grid sm:gap-[20px] gap-[10px] sm:grid-cols-[70%_auto] grid-cols-1">
            <input type="text" className="border-[1px] pl-[20px] sm:h-[60px] h-[50px] border-[#cccccc] rounded-md bg-black opacity-70" placeholder="Email Address" />
            <button className="bg-[#E50914] rounded-[5px] py-[10px] text-white hover:bg-[rgb(193, 17 25)] duration-300 text-[20px] font-medium hover:bg-[#c11119]">Get Started </button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default FAQ