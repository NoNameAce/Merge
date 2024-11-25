import image from '%/logosection-ninth.svg'
const Ninth = () => {
  return (<div className="w-full max-w-[1200px] mx-auto px-4">
    <h1 className="text-center text-3xl font-semibold mb-12 mt-[100px]">Create Your NFT</h1>

    {/* section1 */}
    <div className="w-full flex flex-col md:flex-row justify-evenly gap-8 mt-[100px]">

      {/* Form section */}
      <form action="" className="space-y-6 w-full md:w-[50%] mb-[100px]">
        <fieldset className="p-4">
          <legend className="text-lg font-semibold text-gray-700">ArtWork Details</legend>
          <div>
            <input
              id="artwork-name"
              type="text"
              placeholder="Enter ArtWork Name"
              className="w-full md:w-[600px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </fieldset>

        <fieldset className="p-4">
          <legend className="text-lg font-semibold text-gray-700">Description</legend>
          <div>
            <textarea
              id="comment"
              placeholder="Write your comment here..."
              rows="4"
              className="w-full md:w-[600px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </fieldset>

        <div className="flex gap-8">
          <fieldset className="p-4 w-full md:w-1/2">
            <legend className="text-lg font-semibold text-gray-700">Royalty</legend>
            <div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Royalty</option>
                <option value="">Royalty</option>
                <option value="">Royalty</option>
              </select>
            </div>
          </fieldset>
          <fieldset className="p-4 w-full md:w-1/2">
            <legend className="text-lg font-semibold text-gray-700">Size</legend>
            <div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Ex - 100 x 100</option>
                <option value="">Ex - 200 x 200</option>
                <option value="">Ex - 300 x 300</option>
              </select>
            </div>
          </fieldset>
        </div>

        <fieldset className="p-4">
          <legend className="text-lg font-semibold text-gray-700">Tags</legend>
          <div>
            <input
              id="artwork-name"
              type="text"
              placeholder="Enter ArtWork Name"
              className="w-full md:w-[600px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </fieldset>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Price and Input Section */}
          <fieldset className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Price Select */}
            <div className="flex flex-col w-full md:w-1/3 gap-4">
              <legend className="text-lg font-semibold text-gray-700 mb-2">Price</legend>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">BTN</option>
                <option value="">NFT</option>
                <option value="">TON</option>
              </select>
            </div>

            {/* ArtWork Name Input (40% Width on desktop, 60% on mobile) */}
            <div className="flex flex-col w-full md:w-2/3 gap-4">
              <legend className="text-lg font-semibold text-gray-700 mb-2">ArtWork Name</legend>
              <input
                id="artwork-name"
                type="text"
                placeholder="Enter ArtWork Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </fieldset>

          {/* In Stock Select */}
          <fieldset className="w-full flex flex-col md:w-1/3 gap-4 justify-center items-center">
            <legend className="text-lg font-semibold text-gray-700 mb-2">In Stock</legend>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">001</option>
              <option value="">002</option>
              <option value="">003</option>
            </select>
          </fieldset>
        </div>
        <div className="w-full flex justify-center pt-[100px]">
          <button className=" bg-black w-full md:w-[600px] p-3 rounded-[10px] text-white font-semibold text-lg 
            transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Create
          </button>
        </div>
      </form>

      {/* Right Image Section */}
      <div className="w-full md:w-[400px] flex flex-col items-center justify-center mb-[100px]">
        <div className="w-[400px] h-[400px] rounded-[30px] shadow-2xl p-6 border bg-white flex flex-col justify-between">
          <img src={image} className="m-auto " alt="NFT Preview" />
        </div>

        <div className="w-full flex justify-center mt-6">
          <button className="bg-black w-[350px] p-3 rounded-[10px] text-white font-semibold text-lg 
            transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
            Upload
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Ninth