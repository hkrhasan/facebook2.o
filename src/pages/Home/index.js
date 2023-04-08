import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Header,
  SidebarRow,
  WhiteBox,
  StoryController,
  PostController,
  SidebarHeadingRow,
  ThreeDotsIcon,
} from "../../components";
import avatar from "../../assets/profile.jpeg";
import { selectUser } from "../../store/reducers/user.reducer";

import {
  Friends,
  Groups,
  MarketPlace,
  MostRecent,
  Watch,
} from "../../assets/facebookicons";
import { useSelector } from "react-redux";
import AuthPage from "../AuthPage";
import clsx from "clsx";
import { GiEarthAmerica } from "react-icons/gi";
import { BsDot } from "react-icons/bs";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { TbShare3 } from "react-icons/tb";
import { getDocument, getDocuments } from "../../firebase";

const leftSideBarMenus = [
  {
    id: "friends",
    title: "Friends",
    img: Friends,
    as: "menu",
  },
  {
    id: "mostRecent",
    title: "MostRecent",
    img: MostRecent,
    as: "menu",
  },
  {
    id: "groups",
    title: "Groups",
    img: Groups,
    as: "menu",
  },
  {
    id: "marketPlace",
    title: "MarketPlace",
    img: MarketPlace,
    as: "menu",
  },
  {
    id: "watch",
    title: "Watch",
    img: Watch,
    as: "menu",
  },
  {
    id: "friends",
    title: "Friends",
    img: Friends,
    as: "menu",
  },
  {
    id: "mostRecent",
    title: "MostRecent",
    img: MostRecent,
    as: "menu",
  },
  {
    id: "groups",
    title: "Groups",
    img: Groups,
    as: "menu",
  },
  {
    id: "marketPlace",
    title: "MarketPlace",
    img: MarketPlace,
    as: "menu",
  },
  {
    id: "watch",
    title: "Watch",
    img: Watch,
    as: "menu",
  },
  {
    id: "friends",
    title: "Friends",
    img: Friends,
    as: "menu",
  },
  {
    id: "mostRecent",
    title: "MostRecent",
    img: MostRecent,
    as: "menu",
  },
  {
    id: "groups",
    title: "Groups",
    img: Groups,
    as: "menu",
  },
  {
    id: "marketPlace",
    title: "MarketPlace",
    img: MarketPlace,
    as: "menu",
  },
  {
    id: "watch",
    title: "Watch",
    img: Watch,
    as: "menu",
  },
  {
    id: "friends",
    title: "Friends",
    img: Friends,
    as: "menu",
  },
  {
    id: "mostRecent",
    title: "MostRecent",
    img: MostRecent,
    as: "menu",
  },
  {
    id: "groups",
    title: "Groups",
    img: Groups,
    as: "menu",
  },
  {
    id: "marketPlace",
    title: "MarketPlace",
    img: MarketPlace,
    as: "menu",
  },
  {
    id: "watch",
    title: "Watch",
    img: Watch,
    as: "menu",
  },
  {
    id: "friends",
    title: "Friends",
    img: Friends,
    as: "menu",
  },
  {
    id: "mostRecent",
    title: "MostRecent",
    img: MostRecent,
    as: "menu",
  },
  {
    id: "groups",
    title: "Groups",
    img: Groups,
    as: "menu",
  },
  {
    id: "marketPlace",
    title: "MarketPlace",
    img: MarketPlace,
    as: "menu",
  },
  {
    id: "watch",
    title: "Watch",
    img: Watch,
    as: "menu",
  },
];

function HomePage() {
  const [sideBarMenus, setSideBarMenus] = useState(leftSideBarMenus);
  const navigate = useNavigate();
  const { user, isLoading } = useSelector(selectUser);
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(() => {
    const withoutProfileMenus = sideBarMenus.filter(
      (menu) => menu.id !== "profile"
    );

    if (user) {
      setSideBarMenus([
        {
          id: "profile",
          title: user?.displayName,
          img: user?.image,
          as: "profile",
        },
        ...withoutProfileMenus,
      ]);
    }

    getDocuments("posts").then(async ({ success, data, error }) => {
      if (data) {
        // Get unique author IDs
        const uniqueAuthorIds = [...new Set(data.map((post) => post.userId))];

        const authorDocs = await Promise.all(
          uniqueAuthorIds.map((authorId) => getDocument("user1", authorId))
        );

        const authors = Object.fromEntries(
          authorDocs.map((doc) => [doc.data.docId, doc.data])
        );

        const postWithAuthors = data.map((post) => {
          return {
            ...post,
            authorName: `${authors[post.userId]?.firstName} ${
              authors[post.userId]?.surName
            }`,
            authorImage: authors[post.userId]?.image,
          };
        });

        setFeedPosts(postWithAuthors);
      }
    });
    console.log("code updated");
  }, [user]);

  const heightAndScroll = "h-[calc(100vh-4rem)] overflow-y-scroll pb-2";

  return (
    <AuthPage>
      <div className="h-screen w-full bg-[#f0f2f5] overflow-hidden">
        <Header />
        <main
          className="px-3 py-4 grid gap-x-24 items-start h-[calc(100vh-4rem)]"
          style={{ gridTemplateColumns: "300px auto 300px" }}
        >
          {/* Left col */}
          <div className={clsx(heightAndScroll)}>
            {sideBarMenus.map((menu) => (
              <SidebarRow key={`left-side-menu-${menu.id}`} {...menu} />
            ))}
          </div>
          {/* Mid col */}
          <div
            className={clsx(
              "grid justify-center items-start",
              heightAndScroll,
              "hide-scrollbar"
            )}
          >
            <div className="grid gap-y-5 w-[700px]">
              <StoryController />
              <PostController />
              {feedPosts.map((post) => (
                <PostCard {...post} />
              ))}
            </div>
          </div>
          {/* Right col */}
          <div className={clsx(heightAndScroll)}>
            <SidebarHeadingRow title="Your Pages and profiles" />
          </div>
        </main>
      </div>
    </AuthPage>
  );
}

export default HomePage;

function PostCard({ authorName, authorImage, bodyText, images }) {
  return (
    <WhiteBox>
      <div>
        <div className="flex-i-center justify-between px-3 py-2">
          <div className="flex-i-center gap-x-2">
            <Avatar src={authorImage} />
            <div>
              <p className="text-sm font-bold">{authorName}</p>
              <div className="flex-i-center gap-x-1 text-sm font-light text-gray-500">
                <p className="">1 h</p>
                <BsDot />
                <GiEarthAmerica />
              </div>
            </div>
          </div>
          <div>
            <ThreeDotsIcon />
          </div>
        </div>
        <div>
          <div className="px-3 py-2 text-lg">
            <p>{bodyText}</p>
          </div>
          <div>
            <img src={images[0]} />
          </div>
        </div>
        <div className="flex-i-center justify-between py-3 px-3">
          <div className={clsx("flex-i-center gap-x-2")}>
            <div className="bg-blue-500 rounded-full p-1">
              <AiFillLike className="text-white" />
            </div>
            <p className="text-sm">46</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">2 Comments</p>
          </div>
        </div>
        <div className="flex-i-center mx-3 my-2 py-1 border-y-2">
          <PostActionButton Icon={AiOutlineLike} title="Like" />
          <PostActionButton Icon={GoComment} title="Comment" />
          <PostActionButton Icon={TbShare3} title="Share" />
        </div>
      </div>
    </WhiteBox>
  );
}

function PostActionButton({ Icon, title }) {
  return (
    <div className="hover:bg-[#efefef] w-full flex items-center justify-center py-1 rounded-lg gap-x-2 text-sm">
      <Icon size={20} />
      <p>{title}</p>
    </div>
  );
}
