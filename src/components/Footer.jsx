const Footer = () => {
  return (
    <footer className="flex sm:flex-row flex-col-reverse justify-between items-center gap-4 sm:px-24 px-6 sm:py-0 py-10 min-h-72 bg-FmarineBlue">
        <div className="h-40 sm:w-3/12 w-full sm:py-0 py-8 flex sm:flex-col  flex-col-reverse sm:justify-between justify-between">
            <div className="sm:w-8/12 w-full flex justify-center items-center">
              <img src="/logo.svg" alt="logo" className="sm:w-10/12 w-6/12" />
            </div>
            <div className="sm:w-8/12 w-full flex sm:justify-between justify-around items-center">
                <img src="/icon-facebook.svg" alt="" />
                <img src="/icon-youtube.svg" alt="" />
                <img src="/icon-twitter.svg" alt="" />
                <img src="/icon-pinterest.svg" alt="" />
                <img src="/icon-instagram.svg" alt="" />
            </div>
        </div>

        <div className="flex sm:justify-between justify-center sm:w-4/12 w-full sm:px-0 px-8">
          <div className="h-40 sm:w-3/6 w-3/6 flex flex-col justify-between items-start">
                <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Home</a>
                <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Pricing</a>
                <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Products</a>
                <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">About Us</a>
          </div>
          <div className="h-40 sm:w-3/6 w-3/6 flex flex-col justify-start gap-4 items-start">
                <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Careers</a>
                <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Community</a>
                <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Privacy Policy</a>
          </div>
        </div>
        
        <div className="sm:h-40 h-20 sm:w-4/12 w-full flex flex-col justify-between items-between">
              <div className="w-full flex justify-end items-center gap-6">   
                <input type="text" placeholder="Updates in your inbox..." className="w-9/12 rounded-3xl text-base placeholder:text-FcoolGray font-semibold py-3 px-4 font-BeVietnam"/>
                <button className="w-3/12 font-BeVietnam text-center bg-FstrawberryRed rounded-3xl px-4 py-3 text-white font-semibold text-base font-BeVietnam">Go</button>
              </div>
              <p className="font-BeVietnam sm:text-end text-center mt-96 text-FcoolGray sm:text-base text-sm font-semibold">Copyright 2020. All Rights Reserved</p>
        </div>

    </footer>
  )
}

export default Footer
