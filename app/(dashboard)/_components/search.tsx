import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useEffect, ChangeEvent, useState } from "react";
import { useDebounce } from "usehooks-ts";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[50rem] pl-9"
        placeholder="Search Boards"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
