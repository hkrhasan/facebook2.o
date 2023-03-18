import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { Avatar } from "../../components";
import avatar from "../../assets/profile.jpeg";

function StoryCard({ img }) {
  return (
    <div className="h-48 w-28 overflow-hidden rounded-xl relative group min-w-[112px]">
      <div className="transition duration-150 delay-300 hover:ease-in group-hover:scale-105">
        <AspectRatio.Root ratio={1 / 2}>
          <img className="h-full w-full object-cover" src={img} alt="story" />
        </AspectRatio.Root>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-20" />
      <Avatar
        className="absolute top-4 left-4"
        src={img}
        enableBorder={true}
        width="35px"
      />
      <p className="absolute bottom-1 text-white text-center inset-x-0 font-medium text-sm">
        Hkr hasan
      </p>
    </div>
  );
}

export default StoryCard;
