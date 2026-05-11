import { Destination, Package, Testimonial } from "./types";

export const DESTINATIONS: Destination[] = [
  {
    id: "1",
    name: "Meghalaya",
    image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&q=80&w=800",
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    price: "₹45,000",
    description: "The abode of clouds and hidden living root bridges."
  },
  {
    id: "2",
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&q=80&w=800",
    duration: "7 Days / 6 Nights",
    rating: 4.8,
    price: "₹65,000",
    description: "Tropical paradise with vibrant culture and beaches."
  },
  {
    id: "3",
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    duration: "5 Days / 4 Nights",
    rating: 4.7,
    price: "₹85,000",
    description: "Futuristic skyscrapers and desert adventures."
  },
  {
    id: "4",
    name: "Kashmir",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800",
    duration: "8 Days / 7 Nights",
    rating: 4.9,
    price: "₹55,000",
    description: "Heaven on earth with shikara rides and snow peaks."
  },
  {
    id: "5",
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800",
    duration: "6 Days / 5 Nights",
    rating: 4.6,
    price: "₹42,000",
    description: "Land of smiles, crystal waters, and nightlife."
  },
  {
    id: "6",
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=800",
    duration: "10 Days / 9 Nights",
    rating: 5.0,
    price: "₹2,45,000",
    description: "Majestic Alps and pristine luxury living."
  },
  {
    id: "7",
    name: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800",
    duration: "4 Days / 3 Nights",
    rating: 4.5,
    price: "₹25,000",
    description: "Sun, sand, and vintage Portuguese architecture."
  },
  {
    id: "8",
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    price: "₹1,25,000",
    description: "Overwater villas in a turquoise dreamscape."
  }
];

export const PACKAGES: Package[] = [
  {
    id: "p1",
    title: "The Royal Himalayan Escape",
    price: "₹75,000",
    duration: "7 Days",
    rating: 5.0,
    inclusions: ["5-Star Resorts", "Private Chauffeur", "Heli-Tour", "Gourmet Dining"],
    isPopular: true
  },
  {
    id: "p2",
    title: "Tropical Oasis Retreat",
    price: "₹89,000",
    duration: "6 Days",
    rating: 4.8,
    inclusions: ["Beachside Villa", "Couple Spa", "Scuba Diving", "Private Yacht"],
  },
  {
    id: "p3",
    title: "European Grandeur Tour",
    price: "₹2,60,000",
    duration: "12 Days",
    rating: 4.9,
    inclusions: ["Train VIP Pass", "Castle Stays", "Wine Tasting", "Museum Access"],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Aarav Sharma",
    role: "CEO, TechVision",
    image: "https://i.pravatar.cc/150?u=aarav",
    content: "NomadNest Travels redefined luxury for me. Every detail was meticulously handled, making our Swiss trip unforgettable.",
    rating: 5
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    role: "Travel Blogger",
    image: "https://i.pravatar.cc/150?u=sarah",
    content: "The AI itinerary planning is a game-changer. It knew exactly what I wanted before I even asked. Truly premium!",
    rating: 5
  },
  {
    id: "t3",
    name: "Vikram Malhotra",
    role: "Architect",
    image: "https://i.pravatar.cc/150?u=vikram",
    content: "Handcrafted journeys is not just a slogan. They genuinely craft experiences that touch the soul.",
    rating: 5
  }
];

export const WHATSAPP_NUMBER = "+919876543210"; // Placeholder
