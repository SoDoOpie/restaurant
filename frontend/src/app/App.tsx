import { Logo } from "./components/Logo";
import { MenuItem } from "./components/MenuItem";
import { Ornament, CornerOrnament } from "./components/Ornament";

export default function App() {
  const appetizers = [
    {
      name: "Seared Scallops",
      description: "Pan-seared scallops with citrus reduction and microgreens",
      price: "$18",
      image: "https://images.unsplash.com/photo-1763376385238-ba0211a17505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwYXBwZXRpemVyfGVufDF8fHx8MTc2NjAxMTExMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Burrata & Heirloom Tomatoes",
      description: "Fresh burrata, heirloom tomatoes, basil, aged balsamic",
      price: "$16",
      image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600",
    },
    {
      name: "Crispy Calamari",
      description: "Lightly fried calamari with lemon aioli and marinara",
      price: "$15",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600",
    },
  ];

  const mains = [
    {
      name: "Wagyu Ribeye",
      description: "12oz grass-fed wagyu ribeye, roasted vegetables, red wine reduction",
      price: "$48",
      image: "https://images.unsplash.com/photo-1705755402973-009b7877a0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaW5uZXJ8ZW58MXx8fHwxNzY2MDY0OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Atlantic Salmon",
      description: "Grilled salmon, lemon butter sauce, asparagus, quinoa",
      price: "$32",
      image: "https://images.unsplash.com/photo-1562436260-126d541901e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbG1vbiUyMGRpc2h8ZW58MXx8fHwxNzY2MDE3MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Truffle Carbonara",
      description: "Fresh fettuccine, pancetta, egg, parmesan, black truffle",
      price: "$28",
      image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYXxlbnwxfHx8fDE3NjYwMDQxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const desserts = [
    {
      name: "Molten Chocolate Cake",
      description: "Warm chocolate cake with liquid center, vanilla ice cream",
      price: "$12",
      image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2NjAyNDk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Crème Brûlée",
      description: "Classic vanilla custard with caramelized sugar",
      price: "$10",
      image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600",
    },
    {
      name: "Tiramisu",
      description: "Espresso-soaked ladyfingers, mascarpone, cocoa",
      price: "$11",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-neutral-950/95 backdrop-blur-sm z-50 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />
            <div className="hidden md:flex gap-8 font-crimson">
              <a href="#menu" className="text-amber-100 hover:text-amber-500 transition-colors">
                Menu
              </a>
              <a href="#about" className="text-amber-100 hover:text-amber-500 transition-colors">
                About
              </a>
              <a href="#contact" className="text-amber-100 hover:text-amber-500 transition-colors">
                Contact
              </a>
            </div>
            <button className="px-6 py-2.5 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors font-cinzel text-sm tracking-wide">
              Reserve
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1613274554329-70f997f5789f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzY2MDE1MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-900/60 to-neutral-950/90"></div>
        </div>
        
        {/* Corner ornaments */}
        <CornerOrnament className="absolute top-8 left-8" />
        <CornerOrnament className="absolute top-8 right-8 transform scale-x-[-1]" />
        <CornerOrnament className="absolute bottom-8 left-8 transform scale-y-[-1]" />
        <CornerOrnament className="absolute bottom-8 right-8 transform scale-[-1]" />
        
        <div className="relative z-10 text-center text-white px-4">
          <Ornament className="mb-8" />
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight font-playfair text-amber-50">
            Experience Fine Dining
          </h1>
          <p className="text-xl md:text-2xl text-amber-100/80 mb-8 max-w-2xl mx-auto font-crimson">
            Where culinary artistry meets timeless elegance
          </p>
          <Ornament className="mb-8" position="bottom" />
          <a
            href="#menu"
            className="inline-block px-8 py-3.5 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors font-cinzel tracking-wide"
          >
            Explore Menu
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Ornament className="mb-6" />
            <h2 className="text-4xl md:text-5xl mb-4 font-playfair text-amber-50">Our Menu</h2>
            <p className="text-amber-100/70 max-w-2xl mx-auto font-crimson">
              Crafted with the finest ingredients, each dish is a celebration of flavor and technique
            </p>
            <Ornament className="mt-6" position="bottom" />
          </div>

          {/* Appetizers */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl mb-8 text-center font-playfair text-amber-400">Appetizers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {appetizers.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Mains */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl mb-8 text-center font-playfair text-amber-400">Main Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {mains.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h3 className="text-2xl md:text-3xl mb-8 text-center font-playfair text-amber-400">Desserts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {desserts.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-amber-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <Ornament className="mb-6" />
          <h2 className="text-4xl md:text-5xl mb-6 font-playfair text-amber-50">About Savour</h2>
          <p className="text-amber-100/70 mb-6 text-lg font-crimson">
            At Savour Bistro, we believe in the power of exceptional food to bring people together. 
            Our chef-driven menu showcases seasonal ingredients sourced from local farms and trusted suppliers.
          </p>
          <p className="text-amber-100/70 text-lg font-crimson">
            Each dish is thoughtfully prepared to honor traditional techniques while embracing modern innovation, 
            creating an unforgettable dining experience in an atmosphere of refined elegance.
          </p>
          <Ornament className="mt-6" position="bottom" />
        </div>
      </section>

      {/* Contact/Footer */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-950 to-black border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Logo className="text-white mb-4" />
              <p className="text-neutral-500 text-sm font-crimson">
                Contemporary dining in the heart of the city
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-cinzel text-amber-400">Hours</h4>
              <div className="text-neutral-400 text-sm space-y-2 font-crimson">
                <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                <p>Sunday: 4:00 PM - 9:00 PM</p>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-cinzel text-amber-400">Contact</h4>
              <div className="text-neutral-400 text-sm space-y-2 font-crimson">
                <p>123 Culinary Street</p>
                <p>Downtown, NY 10001</p>
                <p className="pt-2">+1 (555) 123-4567</p>
                <p>info@savourbistro.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-600 text-sm font-crimson">
            <p>© 2024 Savour Bistro. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}