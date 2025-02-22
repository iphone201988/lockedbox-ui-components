import React from "react";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import Map from "./components/Map";
import SearchListing from "./components/SearchListing";
import './style.css'
import ItemsFilter from "./components/ItemsFilter";
import SortFilter from "./components/SortFilter";
import PriceFilter from "./components/PriceFilter";
import MainFilter from "./components/MainFilter";

const SearchResult = () => {
  return (
    <div>
      <ProfileNavbar />
      <div className="flex h-[90vh] max-lg:flex-col">
        <div className="w-max-[50%] w-[50%] max-lg:w-max-[100%] max-lg:w-[100%] max-lg:h-[50%]">
          <Map />
        </div>
        <div className="w-max-[50%] min-w-[50%] pl-[20px] pr-[40px] pt-[10px] max-lg:pr-[20px]">
          <div className="fliters-row flex items-center justify-between mb-[16px] flex-wrap ">
            <div className="flex items-center">
              <div className="input-with-icon relative w-[60px]  ">
                <input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl text-center"
                  type="text"
                  value="5ft"
                />
                <span className=" absolute right-[16px] top-[20px]"></span>
              </div>
              <p className="text-[26px] font-semibold px-[12px] leading-[26px]">
                X
              </p>
              <div className="input-with-icon relative  w-[60px]  ">
                <input
                  className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl text-center"
                  type="text"
                  value="5ft"
                />
                <span className=" absolute right-[16px] top-[20px]"></span>
              </div>
            </div>
            <div className="filter-btns-row">
                <button className="">Grid</button>
                <button className="active">Items <ItemsFilter/></button>
                <button>Price <PriceFilter/></button>
                <button>Sort <SortFilter/></button>
                <button className="!p-[10px] active">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.25 12H8.895M4.534 12H2.75M4.534 12C4.534 11.4218 4.76368 10.8673 5.17251 10.4585C5.58134 10.0497 6.13583 9.82 6.714 9.82C7.29217 9.82 7.84666 10.0497 8.25549 10.4585C8.66432 10.8673 8.894 11.4218 8.894 12C8.894 12.5782 8.66432 13.1327 8.25549 13.5415C7.84666 13.9503 7.29217 14.18 6.714 14.18C6.13583 14.18 5.58134 13.9503 5.17251 13.5415C4.76368 13.1327 4.534 12.5782 4.534 12ZM21.25 18.607H15.502M15.502 18.607C15.502 19.1853 15.2718 19.7404 14.8628 20.1493C14.4539 20.5583 13.8993 20.788 13.321 20.788C12.7428 20.788 12.1883 20.5573 11.7795 20.1485C11.3707 19.7397 11.141 19.1852 11.141 18.607M15.502 18.607C15.502 18.0287 15.2718 17.4746 14.8628 17.0656C14.4539 16.6567 13.8993 16.427 13.321 16.427C12.7428 16.427 12.1883 16.6567 11.7795 17.0655C11.3707 17.4743 11.141 18.0288 11.141 18.607M11.141 18.607H2.75M21.25 5.393H18.145M13.784 5.393H2.75M13.784 5.393C13.784 4.81483 14.0137 4.26033 14.4225 3.8515C14.8313 3.44268 15.3858 3.213 15.964 3.213C16.2503 3.213 16.5338 3.26938 16.7983 3.37894C17.0627 3.4885 17.3031 3.64907 17.5055 3.8515C17.7079 4.05394 17.8685 4.29426 17.9781 4.55875C18.0876 4.82324 18.144 5.10672 18.144 5.393C18.144 5.67928 18.0876 5.96276 17.9781 6.22725C17.8685 6.49174 17.7079 6.73206 17.5055 6.93449C17.3031 7.13692 17.0627 7.2975 16.7983 7.40705C16.5338 7.51661 16.2503 7.573 15.964 7.573C15.3858 7.573 14.8313 7.34332 14.4225 6.93449C14.0137 6.52566 13.784 5.97117 13.784 5.393Z" stroke="#" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
    <MainFilter/>
                </button>
            </div>
          </div>
          <div className="h-[calc(100%-78px)] overflow-auto no-scrollbar max-lg:h-auto">
          <div className="grid grid-cols-[repeat(3,_1fr)] gap-[16px] pb-[20px] max-mlg:grid-cols-[repeat(2,_1fr)] max-sm:grid-cols-[repeat(1,_1fr)]">
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
          </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-[repeat(5,_1fr)] gap-[16px] pb-[20px] max-mlg:grid-cols-[repeat(3,_1fr)] max-lg:grid-cols-[repeat(2,_1fr)] max-sm:grid-cols-[repeat(1,_1fr)]">
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
            <SearchListing />
          </div> */}
    </div>
  );
};

export default SearchResult;
