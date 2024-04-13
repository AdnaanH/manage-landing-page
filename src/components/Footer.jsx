const Footer = () => {
  return (
    <footer className="flex justify-between items-center gap-4 px-24 min-h-72 bg-FmarineBlue">
        <div className="h-40 w-3/12 flex flex-col justify-between">
            <img src="/logo.svg" alt="logo" className="w-8/12" />
            <div className="w-8/12 flex justify-between items-center">
                <img src="/icon-facebook.svg" alt="" />
                <img src="/icon-youtube.svg" alt="" />
                <img src="/icon-twitter.svg" alt="" />
                <img src="/icon-pinterest.svg" alt="" />
                <img src="/icon-instagram.svg" alt="" />
            </div>
        </div>
        <div className="h-40 w-2/12 flex flex-col justify-between items-start">
              <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Home</a>
              <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Pricing</a>
              <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Products</a>
              <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">About Us</a>
        </div>
        <div className="h-40 w-2/12 flex flex-col justify-start gap-4 items-start">
              <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Careers</a>
              <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Community</a>
              <a href="#" className="text-base text-white font-medium font-BeVietnam text-Fmagnolia">Privacy Policy</a>
        </div>
        <div className="h-40 w-4/12 flex flex-col justify-between items-between">
              <div className="w-full flex justify-end items-center gap-6">   
                <input type="text" placeholder="Updates in your inbox..." className="w-9/12 rounded-3xl text-base placeholder:text-FcoolGray font-semibold py-3 px-4 font-BeVietnam"/>
                <button className="w-3/12 font-BeVietnam text-center bg-FstrawberryRed rounded-3xl px-4 py-3 text-white font-semibold text-base font-BeVietnam">Go</button>
              </div>
              <p className="font-BeVietnam text-end text-FcoolGray text-base font-semibold">Copyright 2020. All Rights Reserved</p>
        </div>

    </footer>
  )
}

export default Footer
