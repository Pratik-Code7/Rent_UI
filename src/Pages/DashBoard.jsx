import Navbar from "../Components/Navbar";
import hero from "../assets/hero.png";
const DashBoard = () => {
  const dashList = [
    "My Properties",
    "Favorites",
    "Messages",
    "Profile Settings",
  ];
  return (
    <div className="h-screen  w-full bg-amber-200">
      <Navbar />
      <div className="Dash-Box flex  items-center h-full justify-center bg-gray-300">
        <div className=" bg-white h-full w-1/4  flex flex-col gap-2 p-5 ">
          {dashList.map((elem, idx) => (
            <div
              key={idx}
              className="bg-black text-white p-3 rounded hover:bg-violet-200 cursor-pointer"
            >
              {elem}
            </div>
          ))}
        </div>
        <div className="dash-right bg-violet-300 overflow-y-auto h-full w-full flex flex-col  p-10  gap-10 ">
          <div className="dash-txt">
            <h1>My Properties</h1>
            <p>Manage your active properties and track their performance.</p>
          </div>
          <div className="views flex  gap-5 p-10 ">
            <div className="h-10 w-72 bg-amber-400"></div>
            <div className="h-10 w-72 bg-amber-400"></div>
            <div className="h-10 w-72 bg-amber-400 "></div>
          </div>
          <div className="property-items">
            <div className="h-64 w-full bg-white rounded-2xl overflow-hidden flex ">
              <div className="img h-full w-1/3 relative">
                <img
                  src={hero}
                  alt=""
                  className="h-full  object-cover absolute z-0 "
                />
                <div className="status absolute z-10 bg-white px-3 py-1 rounded-xl mx-3 mt-3">
                  Active
                </div>
              </div>
              <div className="details w-full bg-white flex flex-col px-8 justify-between">
                <div className=" py-5 ">
                  <div className="dash-title flex justify-between w-full py-1 text-xl">
                    <h1>
                      <b>Modern Penthouse at Baneshwor</b>
                    </h1>
                    <p className="px-5">$1000</p>
                  </div>
                  <div className="detail-icons flex  gap-5 ">
                    <div className="text-sm ">1 Bed</div>
                    <div className="text-sm ">1 Bed</div>
                  </div>
                  <div className="dash-location flex items-center gap-1 py-2 ">
                    <i className="ri-map-pin-2-fill"></i>
                    <p className=" text-sm">Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="dash-review text-sm">
                    <i class="ri-star-fill text-yellow-300"></i> Rating( 4.5/5)
                  </div>
                </div>
                <div className="w-full  h-[28%] flex flex-col gap-5">
                  <div className="h-0.5 bg-gray-400"></div>
                  <div className="posted text-sm  flex items-center w-full  h-[25%] justify-between">
                    <div>Posted 2 days ago</div>
                    <div className="btns flex gap-10  px-4">
                      <button>
                        <i class="ri-pencil-line"></i> Edit
                      </button>
                      <button className="text-red-500">
                        <i class="ri-delete-bin-line"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
