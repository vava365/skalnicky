import { Link } from "react-router-dom";

const Lexicon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Lexikon skalniček</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Rozsáhlý lexikon</h2>
            <p className="text-stone-dark leading-relaxed mb-4">
              Představujeme vám rozsáhlý <strong>LEXIKON SKALNIČEK</strong> v neobvyklém provedení, 
              který je stále v nabídce.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Obsah lexikonu</h2>
            <p className="text-stone-dark leading-relaxed">
              Kompletní informace o skalničkách, jejich původu, pěstování a použití v zahradě.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Lexicon;
