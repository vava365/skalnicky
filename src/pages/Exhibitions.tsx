import { Link } from "react-router-dom";

const Exhibitions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Výstavy a akce</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Nadcházející akce</h2>
            <p className="text-stone-dark leading-relaxed mb-4">
              Informace o nadcházejících výstavách skalniček, seminářích a setkáních pěstitelů.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Sdělení pro zájemce o výměnu semen</h2>
            <p className="text-stone-dark leading-relaxed">
              Každoroční výměna semen je důležitou součástí skalničkářské komunity. 
              Zde najdete informace o tom, jak se zapojit.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
