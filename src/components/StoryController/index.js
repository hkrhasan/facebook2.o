import { useRef, useEffect, useState } from "react";
import { StoryCard, TabBar, WhiteBox } from "../";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import testImage from "../../assets/profile.jpeg";
import { FaBookOpen } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";

function StoryController() {
  const topRowRef = useRef(null);
  const [topRowScrollValue, setTopRowScrollValue] = useState(0);

  const tabs = [
    {
      id: "stories",
      title: "Stories",
      Icon: FaBookOpen,
    },
    {
      id: "reels",
      title: "Reels",
      Icon: SiYoutube,
    },
  ];

  const [tab, setTab] = useState(tabs[0]);

  useEffect(() => {
    // last scrollLeft = 332
    const onScroll = (e) => {
      setTopRowScrollValue(e.target.scrollLeft);
    };
    // clean up code
    topRowRef?.current?.removeEventListener("scroll", onScroll);
    topRowRef?.current?.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <WhiteBox>
      <div className="px-4 pt-1 border-b-[1px] pb-2">
        <TabBar
          disableTooltip={true}
          displayTitle={true}
          tabs={tabs}
          selected={tab}
          onTabClick={(tab) => setTab(tab)}
        />
      </div>
      <div className="py-5 relative">
        <div
          ref={topRowRef}
          className="flex w-[700px] items-center gap-x-3 overflow-x-scroll hide-scrollbar px-4 scroll-smooth"
        >
          <StoryCard img={testImage} />
          <StoryCard img={testImage} />
          <StoryCard img={testImage} />
          <StoryCard img={testImage} />
          <StoryCard img={testImage} />
          <StoryCard img={testImage} />
          <StoryCard img={testImage} />
          <StoryCard img={testImage} />
          {topRowScrollValue > 0 ? (
            <div
              className="absolute flex items-center justify-center bg-white p-4 cursor-pointer rounded-full top-31 left-6"
              onClick={() => {
                topRowRef.current.scrollLeft -= 1000;
              }}
            >
              <BsChevronLeft size={22} />
            </div>
          ) : null}
          {topRowScrollValue !==
          topRowRef?.current?.scrollWidth - topRowRef?.current?.clientWidth ? (
            <div
              className="absolute flex items-center justify-center bg-white p-4 cursor-pointer rounded-full top-31 right-6"
              onClick={() => {
                topRowRef.current.scrollLeft += 1000;
              }}
            >
              <BsChevronRight size={22} />
            </div>
          ) : null}
        </div>
      </div>
    </WhiteBox>
  );
}

export default StoryController;
