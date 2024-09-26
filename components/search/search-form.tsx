"use client";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import { useRouter } from "next/navigation";

type Props = {
  showButtons?: boolean;
};
const searchSchema = z.object({
  inputSearch: z.string(),
});
const SearchForm = ({ showButtons }: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      inputSearch: "",
    },
  });

  const onSubmit = (data: z.infer<typeof searchSchema>) => {
    if (data.inputSearch.trim().length < 1) return;
    const { inputSearch } = data;
    console.log(inputSearch);
    router.push(`/search/web?searchTerm=${inputSearch}`);
  };
  return (
    <div className="my-10 flex w-full justify-center lg:w-1/2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center space-y-8"
        >
          <FormField
            control={form.control}
            name="inputSearch"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2">
                      <BiSearch className="h-5 w-5" />
                    </span>
                    <Input
                      placeholder="search..."
                      {...field}
                      type="search"
                      className="rounded-full px-10"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2">
                      <MdKeyboardVoice className="h-5 w-5" />
                    </span>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          {showButtons && (
            <div className="flex items-center gap-4">
              <Button variant={"outline"} className="rounded-none">
                Google Search
              </Button>
              <Button variant={"outline"} asChild className="rounded-none">
                <Link href="https://doodles.google/">
                  {"I'm Feeling Lucky"}
                </Link>
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default SearchForm;
