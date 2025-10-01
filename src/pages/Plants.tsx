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
            Objevte fascinující svět zajímavých rostlin pro skalky. Od drobných alpínských skalniček 
            po vzácné horské druhy, které ozdobí každou zahradu.
          </p>
          
          <div className="grid gap-6">
            <div className="border-l-4 border-alpine-green pl-4 p-4 bg-mountain-mist/20 rounded">
              <h3 className="text-xl font-semibold text-mountain-dark mb-2">Horské rostliny</h3>
              <p className="text-stone-dark">Rostliny z alpínských oblastí celého světa - od Alp přes Kavkaz až po Himálaje.</p>
            </div>
            
            <div className="border-l-4 border-alpine-orange pl-4 p-4 bg-mountain-mist/20 rounded">
              <h3 className="text-xl font-semibold text-mountain-dark mb-2">Vzácné druhy</h3>
              <p className="text-stone-dark">Informace o vzácných botanických druzích a jejich pěstování v našich podmínkách.</p>
            </div>

            <div className="border-l-4 border-alpine-green pl-4 p-4 bg-mountain-mist/20 rounded">
              <h3 className="text-xl font-semibold text-mountain-dark mb-2">Zajímavé kultivary</h3>
              <p className="text-stone-dark">Nové a osvědčené kultivary skalniček vhodné pro naše zahrady.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plants;
