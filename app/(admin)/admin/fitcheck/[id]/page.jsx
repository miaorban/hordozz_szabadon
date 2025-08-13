import FitcheckService from '@/app/utils/FitcheckService';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function EditFitcheck({ params }) {
  const fitcheckService = new FitcheckService();
  const fitcheck = await fitcheckService.getById(params.id);
  const images = await fitcheckService.getImages(params.id);

  if (!fitcheck) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Top Row - Name and Date */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">{fitcheck.name}</h1>
          <div className="text-right">
            <p className="text-sm text-gray-500">Created</p>
            <p className="text-lg font-semibold text-gray-900">
              {fitcheck.created_at ? new Date(fitcheck.created_at).toISOString().split('T')[0].replace(/-/g, '.') : 'N/A'}
            </p>
          </div>
        </div>
      </div>

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
            <div className="grid grid-cols-2 gap-4">
              {images.length > 0 ? (
                images.map((imageUrl, index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={`Fitcheck image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="hidden w-full h-full items-center justify-center bg-gray-100">
                      <div className="text-center text-gray-500">
                        <p className="text-sm">Image {index + 1}</p>
                        <p className="text-xs">Failed to load</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Show placeholders if no images
                [1, 2, 3, 4].map((index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p className="text-sm">No Image</p>
                      <p className="text-xs">Available</p>
                    </div>
                  </div>
                ))
              )}
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
              defaultValue={fitcheck.response || ''}
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