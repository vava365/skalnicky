import { Link } from "react-router-dom";

const YearInAlpinum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Rok v alpinu</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Nová kniha</h2>
            <p className="text-stone-dark leading-relaxed mb-4">
              <strong>Alpinum klub Plzeň</strong> vydal novou knihu pro skalničkáře. 
              Pěstitelé i spolupracující odborníci zde předávají své zkušenosti nejen členům klubu, 
              ale všem skalničkářům u nás.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Obsah knihy</h2>
            <p className="text-stone-dark leading-relaxed">
              Kniha mapuje péči o alpinum během celého roku - od prvních jarních prací 
              až po zimní přípravu rostlin.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default YearInAlpinum;
