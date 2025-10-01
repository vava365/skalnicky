import { Link } from "react-router-dom";

const Mountains = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Ze světa hor</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <p className="text-stone-dark leading-relaxed mb-6">
            Putování po horách, odkud pochází naše oblíbené skalničky. 
            Poznání jejich přirozeného prostředí pomáhá při jejich pěstování.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-mountain-mist/30 rounded">
              <h3 className="font-semibold text-mountain-dark mb-2">Alpy</h3>
              <p className="text-stone-dark">Domov mnoha klasických alpínských rostlin.</p>
            </div>
            
            <div className="p-4 bg-mountain-mist/30 rounded">
              <h3 className="font-semibold text-mountain-dark mb-2">Himaláje</h3>
              <p className="text-stone-dark">Zdroj vzácných a exotických druhů.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mountains;
