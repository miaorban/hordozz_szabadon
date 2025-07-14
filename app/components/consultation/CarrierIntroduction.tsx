export default function CarrierIntroduction() {
  return (
    <div
      className="
    bg-[url('/kucko_bg_hullamos.png')] bg-cover bg-bottom
    [background-position-x:-180px] sm:[background-position-x:0]
    text-[color:blue]
    pt-28 md:pt-48 
    xl:py-72 2xl:py-72
    pb-4 md:pb-40
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
          Hordozóválasztó tanácsadás online
        </div>
        <div
          className="text-center
          italic text-xl
          
          md:text-left
          mt-4 sm:mt-0"
        >
          Ez a 20 perces konzultiáció neked szól, ha nem szeretnél
          feleslegesen pénzt kiadni egy olyan hordozóra, ami utána
          nem szolgál ki. Amit a gyártó állít, az sok esetben nem fedi a
          valóságot, de én segítek abban, hogy olyan hordozótok legyen,
          amit szeretni fogtok.
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
