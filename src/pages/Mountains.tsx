import { Link } from "react-router-dom";

const Mountains = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Ze světa hor</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-3xl font-bold text-mountain-green mb-4">Ze světa hor</h2>
            <p className="text-stone-dark leading-relaxed mb-6">
              Zveme vás na obrazovou návštěvu velehor, hor, pohoříček i kopců zajímavých pro skalničkáře. 
              Poznání přirozeného prostředí horských rostlin pomáhá při jejich pěstování.
            </p>
          </section>
          
          <div className="space-y-4">
            <div className="p-5 bg-mountain-mist/30 rounded-lg border-l-4 border-alpine-green hover:bg-mountain-mist/50 transition-colors">
              <h3 className="font-bold text-mountain-dark mb-2 text-xl">Kavkaz</h3>
              <p className="text-stone-dark">Majestátní hranice mezi Evropou a Asií je domovem stovek druhů vzácných skalniček.</p>
            </div>
            
            <div className="p-5 bg-mountain-mist/30 rounded-lg border-l-4 border-alpine-orange hover:bg-mountain-mist/50 transition-colors">
              <h3 className="font-bold text-mountain-dark mb-2 text-xl">Ortlerské Alpy</h3>
              <p className="text-stone-dark">Alpský masiv, kam nemáme daleko za krásou květů.</p>
            </div>

            <div className="p-5 bg-mountain-mist/30 rounded-lg border-l-4 border-alpine-green hover:bg-mountain-mist/50 transition-colors">
              <h3 className="font-bold text-mountain-dark mb-2 text-xl">Komovi</h3>
              <p className="text-stone-dark">Vápencové pohoří, malé, ale moc hezké, ležící na albánsko-černohorské hranici.</p>
            </div>

            <div className="p-5 bg-mountain-mist/30 rounded-lg border-l-4 border-alpine-orange hover:bg-mountain-mist/50 transition-colors">
              <h3 className="font-bold text-mountain-dark mb-2 text-xl">Montserrat</h3>
              <p className="text-stone-dark">Je nejen známý španělský klášter, ale také východisko za květenou do hor nad ním.</p>
            </div>

            <div className="p-5 bg-mountain-mist/30 rounded-lg border-l-4 border-alpine-green hover:bg-mountain-mist/50 transition-colors">
              <h3 className="font-bold text-mountain-dark mb-2 text-xl">Grammos</h3>
              <p className="text-stone-dark">Téměř neznámé, unikátní, turisty málo navštěvované hory v severozápadním Řecku jsou plné kvítí.</p>
            </div>

            <div className="p-5 bg-mountain-mist/30 rounded-lg border-l-4 border-alpine-orange hover:bg-mountain-mist/50 transition-colors">
              <h3 className="font-bold text-mountain-dark mb-2 text-xl">Sierra Nevada</h3>
              <p className="text-stone-dark">Horský masiv v jižním Španělsku, skrývající skutečně vzácné endemity a rostlinné poklady.</p>
            </div>

            <div className="p-5 bg-mountain-mist/30 rounded-lg border-l-4 border-alpine-green hover:bg-mountain-mist/50 transition-colors">
              <h3 className="font-bold text-mountain-dark mb-2 text-xl">Himálaje</h3>
              <p className="text-stone-dark">Velehory, které dokonale poznat je nad lidské síly. Tak alespoň malá návštěva jejich cípku.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mountains;
