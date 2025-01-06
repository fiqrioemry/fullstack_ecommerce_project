import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";
import CategoryCard from "../CategoryCard";

const CategoryCarousel = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4>Category List</h4>

        <Link
          to="/category"
          className="text-primary hover:text-primary/60 font-medium duration-300 transition-all"
        >
          See all categories
        </Link>
      </div>
      <div>
        <Carousel className="w-full ">
          <CarouselContent>
            {[...Array(8)].map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 "
              >
                <Link to={`/category/namacategory${index}`}>
                  <CategoryCard />
                </Link>
              </CarouselItem>
            ))}
            <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 ">
              <Link to="/category">
                <Card className="h-[225px] overflow-hidden">
                  <div className="h-full flex items-center justify-center hover:bg-muted-foreground/25 duration-300 transition-all">
                    <h4>All Categories</h4>
                  </div>
                </Card>
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;