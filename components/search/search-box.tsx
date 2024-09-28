"use client";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Card } from "../ui/card";
import { searchSchema } from "@/utils/search-schema";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      inputSearch: searchTerm || "",
    },
  });

  const onSubmit = (data: z.infer<typeof searchSchema>) => {
    const { inputSearch } = data;
    if (inputSearch.trim().length < 1) return;
    router.push(`${pathname}?searchTerm=${inputSearch}`);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full items-center space-y-8"
      >
        <FormField
          control={form.control}
          name="inputSearch"
          render={({ field }) => (
            <FormItem className="w-full lg:w-3/5">
              <FormControl>
                <Card className="flex items-center space-x-2 rounded-full">
                  <Input
                    placeholder="search..."
                    {...field}
                    type="search"
                    className="rounded-l-full border-0 border-r-0 px-10 focus-visible:ring-0"
                  />
                  <div className="flex h-full items-center space-x-2 border-l-2 border-primary/25 pl-2">
                    <span className="">
                      <BiSearch className="h-5 w-5" />
                    </span>
                    <span className="">
                      <MdKeyboardVoice className="h-5 w-5" />
                    </span>
                  </div>
                </Card>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchBox;
