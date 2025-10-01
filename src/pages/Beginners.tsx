import { Link } from "react-router-dom";

const Beginners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Nejen pro začátečníky</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Základy pěstování skalniček</h2>
            <p className="text-stone-dark leading-relaxed mb-4">
              Praktické rady a tipy nejen pro začínající skalničkáře. Zkušenosti od výběru stanoviště 
              až po péči během celého roku. Informace o substrátech, zálivce a ochraně rostlin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Tipy zkušených pěstitelů</h2>
            <p className="text-stone-dark leading-relaxed">
              Cenné zkušenosti od dlouholetých pěstitelů skalniček, které vám pomohou vyhnout se 
              nejčastějším chybám a úspěšně pěstovat alpínské rostliny ve vašich zahradách.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Beginners;
