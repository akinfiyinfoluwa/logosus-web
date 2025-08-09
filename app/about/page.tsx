import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Code2Icon, Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <main className="overflow-x-hidden">
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(134,134,240,.12),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(134,134,240,.12),rgba(255,255,255,0))]"></div>
      </div>
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              About Logosus
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded by Emmanuel Akin-Ademola, we're passionate about creating innovative solutions that help businesses thrive in the digital age. 
            Our mission is to bridge the gap between technology and business success through cutting-edge AI applications, full-stack development, and technical expertise.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by Emmanuel Akin-Ademola, a Software Engineer and Technical Writer based in Abuja, Nigeria, 
                Logosus emerged from a vision to democratize technology and make cutting-edge digital solutions 
                accessible to businesses of all sizes. With expertise spanning AI applications, full-stack development, 
                and technical writing, Emmanuel brings a unique blend of technical prowess and communication skills.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Drawing from experience at companies like Algolog and HackerNoon, where Emmanuel has implemented 
                RAG solutions, developed AI-powered applications, and authored technical content for global audiences, 
                Logosus represents the culmination of years of expertise in bridging the gap between complex technology 
                and practical business solutions.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <Code2Icon className="h-32 w-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and close collaboration with our clients 
                to achieve extraordinary results.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of technology, constantly exploring new ways to 
                solve complex business challenges.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering the highest quality solutions that exceed 
                expectations and drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading with expertise in software engineering, AI applications, technical writing, and product management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D03AQE92dHK_Q7SVQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718880325978?e=1757548800&v=beta&t=pZ3-2CpURExcaViAfRHroIm_dNGl2mTMq9XxB9dDg-A"
                  alt="Emmanuel Akin-Ademola"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Emmanuel Akin-Ademola</h3>
              <p className="text-blue-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                Software Engineer and Technical Writer with expertise in AI applications, full-stack development, 
                and RAG solutions. Currently Full Stack Engineer at Algolog and Tech Writer at HackerNoon.
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>📍 Abuja, Nigeria</p>
                <p>🎓 Law Student & Mass Communication Graduate</p>
                <p>💼 2K+ LinkedIn Followers</p>
                <p>✍️ Published Technical Writer</p>
              </div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D03AQH_WLu8KW0Jig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731000088454?e=1757548800&v=beta&t=q3g5iMpbaWm7GPQO5UvzVa5yB0JTto_tG8dyvnmQV9A"
                  alt="Adebimpe Akin-Ademola"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Adebimpe Akin-Ademola</h3>
              <p className="text-blue-600 mb-4">Product Manager</p>
              <p className="text-gray-600 mb-4">
                Experienced Product Manager specializing in strategic product development, user experience optimization, 
                and cross-functional team leadership to deliver innovative solutions that meet market demands.
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>🎯 Product Strategy & Development</p>
                <p>🎓 Computer Engineering Graduate</p>
                <p>📊 Market Research & Analysis</p>
                <p>🚀 Product Launch & Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;