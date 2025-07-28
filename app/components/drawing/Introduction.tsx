export default function Introduction() {
  return (
    <div
      className="
    bg-[url('/kucko_bg_hullamos.png')] bg-cover bg-bottom
    [background-position-x:-180px] sm:[background-position-x:0]
    text-[color:blue]
    pt-14 md:pt-48 
    xl:py-72 2xl:py-72
    pb-8 md:pb-40
    px-6
    text-center
    "
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4
      text-[white] max-w-4xl mx-auto"
      >
        <div
          className="text-center
          text-4xl sm:text-5xl font-bold
                     md:text-right"
        >
          Ingyen tanácsadással ünnepeljük a hordozást!
        </div>
        <div
          className="text-center
          italic text-xl
          
          md:text-left
          mt-4 sm:mt-0"
        >
          <p className="mb-4">
            Regisztrálj az alábbi űrlapon, hogy te is részt vehess a játékban!
          </p>
          <p className="mb-4">
            Hihetetlen gyorsasággal léptük át az első 100 tanácsadást, amiért
            nem lehetek elég hálás nektek! A bizalmatokat egy ajándék
            tanácsadással szeretném meghálálni. Add meg az adataidat, hogy te is
            részt vehess a sorsoláson!
          </p>
          <p className="mb-4">Az eredményről e-mailben tájékoztatlak.</p>
          <p>A sorsolás időpontja: 2025.08.31.</p>
        </div>
      </div>
      <div
        className="flex
        flex-col sm:flex-row 
        gap-x-6 gap-y-6 
        justify-center items-center
        mt-12"
      ></div>
    </div>
  );
}
