import FitcheckService from '@/app/utils/FitcheckService';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import { verifySession } from '@/app/utils/daj';
import { redirect } from 'next/navigation';

async function saveResponseUrl(formData) {
  'use server';
  
  const { isAuth } = await verifySession();
  if (!isAuth) {
    redirect('/admin');
  }
  
  const responseUrl = formData.get('responseUrl');
  const fitcheckId = formData.get('fitcheckId');
  
  if (!responseUrl?.trim()) {
    return { error: 'Kérlek írj be egy linket' };
  }

  try {
    const fitcheckService = new FitcheckService();
    await fitcheckService.addResponseUrl(fitcheckId, responseUrl.trim());
    
    // Revalidate the cache for this page
    revalidatePath(`/admin/fitcheck/${fitcheckId}`);
    
    return { success: true };
  } catch {
    console.error('Error saving response URL');
    return { error: 'Hiba történt a link mentése közben' };
  }
}

export default async function EditFitcheck({ params }) {
  const { isAuth } = await verifySession();
  if (!isAuth) {
    redirect('/admin');
  }

  const fitcheckService = new FitcheckService();
  const fitcheck = await fitcheckService.getById(params.id);
  const images = await fitcheckService.getImages(params.id);
  const defaultResponseScript = `🔶 1. Beköszönés és elismerés (fix)-

Szia NÉV!
Köszönöm, hogy elküldted a képeidet, nagyon örülök, hogy ilyen odafigyeléssel hordozol. Ez tényleg nagyon sokat számít!”

🔶 2. Átvezetés

„Mutatom, miket vettem észre!”

🔶 3. Pozitív kiemelés (opcionális, válassz 1–2)

„Amit külön kiemelnék, hogy nagyon szépen beállítottad a …”

„Nagyon tetszett, ahogy figyeltél arra, hogy …”

„Szuper, hogy már most jól látszik, hogy …”

🔶 4. Tipp vagy finomhangolás (opcionális, válassz 1–3)

„Itt egy kis tipp, ami segíthet ÜGYFÉL PROBLÉMÁJÁNAK LEÍRÁSA”

„Amit érdemes lenne még finomítani, hogy …”

Ellenőrzési pontok:

Szorosság → ne rogyjon bele, ne essen előre a feje, az álla legyen magasan.

Hordozó súlyelosztása → téged se húzzon.

Baba pozíciója → popsi alacsonyan, térdek minimum popsi magasságban, hát domború.

Megtámasztás → maximum tarkóig vagy vállig, hogy ébren tudjon nézelődni.

🔶 5. Összegzés (fix)

„Összességében szuper, nagyon jó úton vagy és még jobb lesz!”

🔶 6. Közösségi rész (opcionális, bátorító)

„Ha van kedved, írd meg, hogy vált be a javaslat – vagy akár küldj egy új fotót, nagyon jó látni a változást!”

„Ha van a környezetedben más is, aki most ismerkedik a hordozással, bátran ajánlj neki is – sokat segítesz ezzel.”

🔶 7. Lezárás (fix)

„És ha bármiben elakadnál, kérdésed lenne, vagy szeretnél továbblépni, nyugodtan keress – mindig szívesen segítek!”
LEHETSÉGES TOVÁBBLÉPÉS A JELENLEGI HELYZETÉBŐL
  `

  if (!fitcheck) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Top Row - Name and Date */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">{fitcheck.name}</h1>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-500">Status</p>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                fitcheck.status === 'done' ? 'bg-green-100 text-green-800 border-green-200' :
                fitcheck.status === 'in_progress' ? 'bg-orange-100 text-orange-800 border-orange-200' :
                fitcheck.status === 'pending' ? 'bg-red-100 text-red-800 border-red-200' :
                'bg-gray-100 text-gray-800 border-gray-200'
              }`}>
                {fitcheck.status ? fitcheck.status.replace('_', ' ').toUpperCase() : 'PENDING'}
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Created</p>
              <p className="text-lg font-semibold text-gray-900">
                {fitcheck.created_at ? new Date(fitcheck.created_at).toISOString().split('T')[0].replace(/-/g, '.') : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {!fitcheck.response_url && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <form action={saveResponseUrl}>
            <input type="hidden" name="fitcheckId" value={params.id} />
            <div className="flex gap-4">
              <input
                type="text"
                name="responseUrl"
                placeholder="Link"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button 
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Küldés
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Two Column Layout */}
      <div className="flex flex-row gap-8">
        {/* Left Column - Images */}
        <div className="flex-1">
          {/* Fitcheck Details */}
          <div className="mb-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kor</label>
                <p className="text-gray-900">{fitcheck.baby_age || 'Not specified'}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Súly</label>
                <p className="text-gray-900">{fitcheck.baby_weight || 'Not specified'}</p>
              </div>
            </div>
            <div>
              <p className="text-gray-900">{fitcheck.description || 'No description provided'}</p>
            </div>
          </div>

          {/* Images Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Images ({images.length})</h2>
            <div className="space-y-4">
              {images.map((imageUrl, index) => (
                <div key={index} className="w-full bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
                  <a 
                    href={imageUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full hover:opacity-90 transition-opacity"
                    title={`View image ${index + 1} in new tab`}
                  >
                    <img
                      src={imageUrl}
                      alt={`Fitcheck image ${index + 1}`}
                      className="w-full h-auto max-h-96 object-contain"
                    />
                  </a>
                  <div className="hidden w-full h-full items-center justify-center bg-gray-100">
                    <div className="text-center text-gray-500">
                      <p className="text-sm">Image {index + 1}</p>
                      <p className="text-xs">Failed to load</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Response */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Response</h2>
          <form className="space-y-4">
            <textarea
              id="response"
              name="response"
              rows={20}
              defaultValue={fitcheck.response_script || defaultResponseScript}
              placeholder="Enter your response to this fitcheck..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
            />
            
            <div className="flex space-x-4 pt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Save Response
              </button>
              <Link
                href="/admin/fitcheck"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Back to List
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 