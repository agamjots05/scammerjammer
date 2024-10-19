import Link from "next/link";
import Image from "next/image";  // Import Image for optimized loading
import scamimg from "@/assets/scammerimg.png";

export default function Landing() {
  return (
    <> 
      {/* Background Section: Ensure it covers the entire page */}
      <div className="min-h-screen max-w-content-width flex flex-col bg-white [background:radial-gradient(125%_125%_at_50%_50%,#fff_40%,#63e_100%)]">
        {/* Container for Landing Page Content */}
        <div className="mx-auto max-w-content-width px-md flex flex-col">
          
          {/* Main Section */}
          <section className="min-h-fit flex flex-col lg:flex-row items-center text-center lg:text-left px-4 pt-40 pb-10 gap-10">
            {/* Text Content */}
            <div className="flex-1 lg:pl-16 xl:pl-24 pb-10">
                <h1 className="animate-in fade-in-5 duration-1000 ease-in text-6xl font-bold text-gray-800 mb-6">
                    Destroy Scammers At Their Own Game.
                </h1>
                <p className="animate-in fade-in-5 duration-1000 ease-in text-xl text-gray-600 mb-8">
                    Take control of your phone! Waste the scammers' time, not yours. We engage them so you don’t have to.
                </p>
                <div className="animate-in fade-in-5 duration-1000 ease-in flex justify-center lg:justify-start gap-4">
                    {/* Learn More Button */}
                    <Link href="/about" className="text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition">
                    Learn More
                    </Link>
                    {/* Try Us Now Button */}
                    <Link href="/tryusnow" className="text-gray-800 border border-gray-800 px-6 py-3 rounded-md hover:bg-gray-800 hover:text-white transition">
                    Try Us Now
                    </Link>
                </div>  
            </div>

            {/* Image Content */}
            <div className="flex-1">
              <Image 
                src={scamimg} 
                alt="Scammer Image" 
                className="rounded-3xl w-full max-w-xs lg:max-w-xl mx-auto"  // Rounded image with responsive width
                priority={true}  // Priority loading for better performance
              />
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-10">
            <h2 className="text-3xl font-semibold pt-40 pb-10 text-gray-800 text-center mb-8">
              How Does Scammer Jammer Work?
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Feature 1 */}
              <div className="max-w-sm shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Identify Scammers</h3>
                <p className="text-gray-600">
                  Using Hume AI, we analyze conversations to detect emotional patterns associated with scams. Once verified, we engage with the scammer.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="max-w-sm shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Engage and Waste Their Time</h3>
                <p className="text-gray-600">
                  After identifying scammers, our AI-driven system keeps them engaged in long conversations, preventing them from targeting others.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="max-w-sm shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Comprehensive Protection</h3>
                <p className="text-gray-600">
                  We use advanced AI-powered analysis to handle scam calls for you, ensuring minimal interaction while maximizing disruption to scammers.
                </p>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="w-full py-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Jam the Scammers?
            </h2>
            <Link href="/tryusnow" className="text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition">
              Try Scammer Jammer Now
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
