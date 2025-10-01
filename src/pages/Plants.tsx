import { Link } from "react-router-dom";

const Plants = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Zajímavé rostliny</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <p className="text-stone-dark leading-relaxed mb-6">
            Objevte fascinující svět alpínských rostlin. Od drobných skalniček po vzácné horské druhy.
          </p>
          
          <div className="grid gap-6">
            <div className="border-l-4 border-alpine-green pl-4">
              <h3 className="text-xl font-semibold text-mountain-dark mb-2">Alpínské rostliny</h3>
              <p className="text-stone-dark">Rostliny pocházející z vysokohorských oblastí.</p>
            </div>
            
            <div className="border-l-4 border-alpine-orange pl-4">
              <h3 className="text-xl font-semibold text-mountain-dark mb-2">Vzácné druhy</h3>
              <p className="text-stone-dark">Informace o vzácných a chráněných druzích skalniček.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plants;
