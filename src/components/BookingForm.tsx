import { Calendar, MapPin, Users, Sparkles } from "lucide-react";

export default function BookingForm() {
  return (
    <div className="w-[320px] h-[450px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1540944158204-287c41a44e5a?auto=format&fit=crop&q=80&w=800')] bg-cover opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      
      <div className="relative h-full flex flex-col justify-end">
        <div className="mb-6">
          <span className="px-2 py-1 bg-gold text-black text-[9px] font-bold uppercase rounded-sm">Personalized Trip</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 tracking-tighter uppercase leading-none">
          Design Your <br />
          <span className="text-gradient-gold">Dream Journey</span>
        </h3>

        <div className="space-y-4 mb-8">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold" />
            <input
              type="text"
              placeholder="Search Destination"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-[11px] focus:outline-none focus:border-gold/50 transition-colors uppercase tracking-widest font-semibold"
            />
          </div>
          <button 
            className="w-full py-4 rounded-lg bg-gradient-gold text-black text-[11px] font-black uppercase tracking-widest shadow-[0_10px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-all duration-500"
            onClick={() => window.open(`https://wa.me/919876543210?text=Hi, I want to plan a luxury trip!`, '_blank')}
          >
            Start Planning
          </button>
        </div>

        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-white/40 font-bold">
           <span>AI Powered</span>
           <span>•</span>
           <span>VIP Support</span>
        </div>
      </div>
    </div>
  );
}
