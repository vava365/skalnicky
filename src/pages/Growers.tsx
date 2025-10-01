import { Link } from "react-router-dom";

const Growers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Adresy pěstitelů</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-mountain-green mb-4">Adresář pěstitelů</h2>
            <p className="text-stone-dark leading-relaxed mb-6">
              Pěstitelé skalniček, mini dřevin, hajních i vodních rostlin u nás, ať již výborní amatéři či zahradníci, 
              jsou velmi početní. Zde najdete jejich adresy, které jsou stejně cenné jako informace o rostlinách.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Praha a Středočeský region</h2>
            <div className="space-y-6">
              <div className="bg-mountain-mist/20 p-4 rounded-lg">
                <h3 className="font-bold text-mountain-dark mb-2">Zahradnictví Krulich - PRAHA 6</h3>
                <p className="text-stone-dark">Radimova 2 (vchod z ulice Na Petynce), 169 00 PRAHA 6 – Břevnov<br/>
                Telefon: 724 077 050<br/>
                <strong>Nabídka:</strong> Skalničky, trvalky, bylinky a koření v širokém sortimentu. 
                Sběratelské kolekce rodů Phlox, Thymus, Helleborus, Lavandula a mnoho dalších.</p>
              </div>

              <div className="bg-mountain-mist/20 p-4 rounded-lg">
                <h3 className="font-bold text-mountain-dark mb-2">Ing. Josef Hlavatý - PRAHA 8</h3>
                <p className="text-stone-dark">Mazurská 516, 181 00 PRAHA 8-Troja<br/>
                Tel: +420 233 559 890 (večer po 20.00 hod.)<br/>
                <strong>Nabídka:</strong> Vzácné sbírkové i běžné skalkové cibuloviny a hlíznaté rostliny z celého světa. 
                Chladnomilné orchideje, lekníny včetně zakrslých druhů.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Jihočeský region</h2>
            <div className="space-y-6">
              <div className="bg-mountain-mist/20 p-4 rounded-lg">
                <h3 className="font-bold text-mountain-dark mb-2">Josef Basík - CHÝNOV</h3>
                <p className="text-stone-dark">Nádražní 499, 391 55 Chýnov<br/>
                Tel: (+420) 381 297 700, mobil: (+420) 602 466 700<br/>
                Web: www.basik.cz<br/>
                <strong>Nabídka:</strong> Skalničky, trvalky, okrasné traviny, jehličnany, okrasné keře, vodní rostliny, semena.</p>
              </div>

              <div className="bg-mountain-mist/20 p-4 rounded-lg">
                <h3 className="font-bold text-mountain-dark mb-2">Milan a Alena Odvárkovi - ZDEŠOV</h3>
                <p className="text-stone-dark">Zdešov 55, 378 42 Nová Včelnice<br/>
                Tel: 384 394 770, mobil: 722 575 767<br/>
                Web: www.zahradyodvarka.cz<br/>
                <strong>Nabídka:</strong> Sbírka lýkovců rodu Daphne, rody Cytisus, Polygala, Gentiana a další skalničky.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Západočeský region</h2>
            <div className="space-y-6">
              <div className="bg-mountain-mist/20 p-4 rounded-lg">
                <h3 className="font-bold text-mountain-dark mb-2">Josef a Bohumila Plocarovi - ŠVIHOV</h3>
                <p className="text-stone-dark">Havlíčkova 54, 340 12 Švihov<br/>
                Tel: 737 553 759<br/>
                <strong>Nabídka:</strong> Zajímavý sortiment výběrových skalniček z celého světa, vřesy, vřesovce a další vřesovištní druhy.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Growers;
