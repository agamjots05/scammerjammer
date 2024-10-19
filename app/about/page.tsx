import { ArrowRight, DollarSign, ShieldAlert, Users } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="min-h-screen max-w-content-width flex flex-col bg-white [background:radial-gradient(125%_125%_at_50%_50%,#fff_40%,#63e_100%)]">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className=" text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-black">Who Are We Fighting Against?</h1>
          <p className="text-xl text-gray-600">Protecting you from financial fraud and scams</p>
        </header>
        <div className="animate-in fade-in-5 duration-1000 ease-in">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-black">The Growing Threat of Scams</h2>
          <p className="text-gray-700 mb-4">
            Scams have become an increasingly prevalent issue in our digital age, affecting millions of people worldwide. In the United States alone, the Federal Trade Commission (FTC) reported that consumers lost a staggering $10 billion to fraud in 2023 alone, an increase of more than 14% from 2022.
          </p>
          <p className="text-gray-700 mb-4">
            The most common types of scams include imposter scams, online shopping fraud, and investment scams. These fraudulent activities not only cause financial harm but also emotional distress to victims.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 pb-40">
          {[
            { icon: DollarSign, title: "Financial Impact", description: "$10 billion lost to fraud in 2023" },
            { icon: Users, title: "Victims", description: "More than 56 million fraud reports in 2023" },
            { icon: ShieldAlert, title: "Our Mission", description: "Educate and protect against scams" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <item.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </section>
        </div>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6 text-black">Join Us in the Fight Against Scams</h2>
          <p className="text-gray-700 mb-6">
            Together, we can make a difference. Stay informed, report suspicious activities, and help spread awareness about the dangers of scams.
          </p>
          <a
            href="https://www.businesswire.com/news/home/20240311681922/en/More-than-56-million-U.S.-Adults-%E2%80%93-21-Percent-of-Americans-%E2%80%93-Fleeced-Out-of-25.4-Billion-in-Telephone-Scams-in-2023-per-Truecaller%E2%80%99s-latest-edition-of-the-U.S.-Spam-and-Scam-Report"
            target="_blank" // This opens the link in a new tab
            rel="noopener noreferrer" // Security measure when opening external links
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-full transition-colors duration-300 hover:bg-purple-700"
            >
            Learn More
            <ArrowRight className="ml-2 w-5 h-5" />
        </a>
        </section>
      </div>
    </div>
  )
}