import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { TagFilters } from "@/constants/filters";
import { SearchParamsProps } from "@/types";

const Page = async ({ searchParams }: SearchParamsProps) => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search by tag name"
          otherClasses="flex-1"
        />

        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4"></section>

      <div className="mt-10"></div>
    </>
  );
};

export default Page;
