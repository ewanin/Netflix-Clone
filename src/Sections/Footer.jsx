import { LanguageIcon } from "../Components"

const Footer = () => {
  return (
    <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[80px] py-[50px]">
      <div className="sm:max-w-[80%] max-w-[100%] mx-auto px-[15px]">
        <h3 className="text-[#cccccc] sm:text-[18px] text-[16px] sm:text-left text-center">Questions? Call:
          <a href="tel:000-800-919-1694"> 000-800-919-1694</a>
        </h3>

        <div className="py-[30px] grid sm:grid-cols-4 grid-cols-2 sm:text-[19px] text-[14px] sm:text-left text-center">
          <div>
            <ul className="text-[#cccccc]">
              <li className="mb-[10px]">
                <a href="#" className="underline">FAQ</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline">Investor Relations</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline">Privacy</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline">Speed Test</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-[#cccccc]">
              <li className="mb-[10px]">
                <a href="#" className="underline">Help Centre</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline">Jobs</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline">Cookie Preferences</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline">Legal Notices</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-[#cccccc]">
              <li className="mb-[10px]">
                <a href="#" className="underline">Account</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline">Ways to Watch</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline">Corporate Information</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline">Only on Netflix</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-[#cccccc]">
              <li className="mb-[10px]">
                <a href="#" className="underline">Media Centre</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline">Terms of Use</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="underline">Contact Us</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div>
          <div className="relative">
            <img src={LanguageIcon} alt="Icon" className="text-white absolute top-1.5 left-1 sm:block hidden" />
            <select name="" id="" className="bg-black text-white border-white border-[1px] sm:p-[7px_30px] p-[4px_10px] rounded-md sm:text-base text-xs ">
              <option value="">English</option>
              <option value="">Hindi</option>
            </select>
          </div>
          <h3 className="text-[#cccccc] sm:pt-[20px] pt-[10px]">Netflix India</h3>
        </div>
      </div>
    </section>
  )
}

export default Footer