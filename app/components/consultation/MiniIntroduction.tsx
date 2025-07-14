export default function Introduction() {
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
          Mini tanácsadás online vagy Keszthelyen
        </div>
        <div
          className="text-center
          italic text-xl
          
          md:text-left
          mt-4 sm:mt-0"
        >
          Ez a 30 perces konzultiáció neked szól, ha már van egy vagy több hordozóeszközöd,
          aminek szeretnéd elsajátítani a helyes használatát, szeretnéd javítani a beállítást/kötést
          vagy ha egy-két kérdésed van a hordozással kapcsolatban.
        </div>
      </div>
      <div
        className="flex
        flex-col sm:flex-row 
        gap-x-6 gap-y-6 
        justify-center items-center
        mt-12"
      >
      </div>
      
    </div>
  );
}
