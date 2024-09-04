import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 text-white">
      <div className="presentation h-[25rem] flex justify-center items-center">
        <h1 className="text-5xl font-extrabold  text-center">Présentation</h1>
      </div>

      <div className="flex flex-col w-auto mx-3 text-white gap-5 border border-[#070707] bg-[#0000005c] p-5 rounded-[5px] md:w-[65rem] md:mx-0">
        <h1 className="text-5xl font-bold text-center">Qui Sommes nous ?</h1>
        <p className="text-[20px] mt-5 leading-8">Envol Technology, anciennement denommé le Groupe Malien d'Informatique (GMI S.A), est depuis 30 ans l'un des 
          principaux fournisseur d'infrastructures sur le marché Malien des technologies de l'information et de la communication. Avec des 
          solutions encrées dans 3 domaines clés (le hardware, le software et la téléphonie) nous avons forgé notre capital grâce a la confiance et a la satisfaction
          de nos clients. En tant que société pionnière notre engagement reste le meme, a savoir : fournir un travail de qualité qui 
          perdura dans le temps.
        </p>
      </div>

      <div className="flex flex-col mx-3 items-center gap-[1rem] w-auto md:w-[60%] mx-0">

        <p className="text-[20px] mt-10 leading-8 text-center">Le Groupe Envol Technology représente le département technologie du Groupe Envol Afrique : Cinq structures
          régionales en Afrique de l’Ouest constituées par GMI (Groupe Malien d’Informatique basée au Mali),
          Envol technology CI (basé en cote d'ivoire), ENVOL Tunisie un Centre R&D (Recherche et Développement),
          Verbeba Mali SA , et AFT Mali ( atlantic Future Technology Mali ).
        </p>

        <p className="text-[17px] leading-6 text-center">Envol Technology est un acteur spécialisé dans les domaines des télécommunications, de l’Informatique,
          sécurité des systèmes, conception/construction de plateformes innovantes ainsi la distribution et la
          revente de produits TIC (VAR: Value Added Reseller).
        </p>

      </div>

      <img className="object-contain" src="http://www.envoltechnology.com/images/2018/04/10/envol_diagrammes3.png" alt="" />

    </main>
  );
}
