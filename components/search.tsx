// import { useRouter } from "next/navigation";
// import { useState, ChangeEvent } from "react";

// interface iDefault {
//   defaultValue: string | null;
// }

// export const SearchInput = ({ defaultValue }: iDefault) => {
//   // initiate the router from next/navigation

//   const router = useRouter();

//   // We need to grab the current search parameters and use it as default value for the search input

//   const [inputValue, setValue] = useState(defaultValue);

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const inputValue = event.target.value;

//     setValue(inputValue);
//   };

//   // If the user clicks enter on the keyboard, the input value should be submitted for search

//   // We are now routing the search results to another page but still on the same page

//   const handleSearch = () => {
//     if (inputValue) return router.push(`/?q=${inputValue}`);

//     if (!inputValue) return router.push("/");
//   };

//   const handleKeyPress = (event: { key: any }) => {
//     if (event.key === "Enter") return handleSearch();
//   };

//   return (
//     <div className="search__input border-[2px] border-solid border-slate-500 flex flex-row items-center gap-5 p-1 rounded-[15px]">
//       <label htmlFor="inputId">searchIcon</label>

//       <input
//         type="text"
//         id="inputId"
//         placeholder="Enter your keywords"
//         value={inputValue ?? ""}
//         onChange={handleChange}
//         onKeyDown={handleKeyPress}
//         className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3"
//       />
//     </div>
//   );
// };

"use client";
import * as React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    console.log(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    // replace URL
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="search anything..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
        className="h-14 w-full pr-[65px]  rounded-2xl shadow-none "
      />
      <span className="absolute top-4 right-5 border-l pl-4 ">
        <Search />
      </span>
    </div>
  );
}

export default search;
