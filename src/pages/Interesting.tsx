import { Link } from "react-router-dom";

const Interesting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Může vás zajímat</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          <p className="text-stone-dark leading-relaxed">
            Zajímavosti ze světa skalniček, novinky v pěstování a další užitečné informace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interesting;
