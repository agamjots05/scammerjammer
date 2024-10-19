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
          <section className="min-h-fit flex flex-col-reverse lg:flex-row items-center text-center lg:text-left px-4 pt-40 gap-10">
            {/* Text Content */}
            <div className="flex-1 pb-20  ">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Destroy Scammers In Their Own Game.   
              </h1>   
              <p className="text-lg text-gray-600 mb-8">
                Take control of your phone! Waste the scammers' time, not yours. We engage them so you don’t have to.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
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
                className="rounded-3xl w-full max-w-xs lg:max-w-md mx-auto"  // Rounded image with responsive width
                priority={true}  // Priority loading for better performance
              />
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-10">
            <h2 className="text-3xl font-semibold pt-40 pb-10 text-gray-800 text-center mb-8">
              How Scammer Jammer Works
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Feature 1 */}
              <div className="max-w-sm shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Engage the Scammer</h3>
                <p className="text-gray-600">
                  We interact with scammers on your behalf, wasting their time and protecting you from fraud.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="max-w-sm shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Save Time</h3>
                <p className="text-gray-600">
                  Our automated system keeps scammers on the phone, so you can focus on what matters.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="max-w-sm shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Easy Setup</h3>
                <p className="text-gray-600">
                  Get started in minutes and let Scammer Jammer handle the rest.
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
