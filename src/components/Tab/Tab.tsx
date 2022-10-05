import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export type TabProps = {
  data: {
    title: string;
    content: any;
  }[];
};

export const TabComponent = ({ data }: TabProps) => {
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {data.map((data) => (
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {data.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {data.map((data) => (
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              {data.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
  



// export default Tab;


// const tabData = [
//   {
//     title: "Recent",
//     content: "Does drinking coffee make you smarter?",
//   },
//   {
//     title: "Popular",
//     content: "Is tech making coffee better or worse?",
//   },
//   {
//     title: "Trending",
//     content: "10 answers to your questions about coffee",
//   },
// ];





// let [categories] = useState({
//   Recent: [
//     {
//       id: 1,
//       title: "Does drinking coffee make you smarter?",
//       date: "5h ago",
//       commentCount: 5,
//       shareCount: 2,
//     },
//     {
//       id: 2,
//       title: "So you've bought coffee... now what?",
//       date: "2h ago",
//       commentCount: 3,
//       shareCount: 2,
//     },
//   ],
//   Popular: [
//     {
//       id: 1,
//       title: "Is tech making coffee better or worse?",
//       date: "Jan 7",
//       commentCount: 29,
//       shareCount: 16,
//     },
//     {
//       id: 2,
//       title: "The most innovative things happening in coffee",
//       date: "Mar 19",
//       commentCount: 24,
//       shareCount: 12,
//     },
//   ],
//   Trending: [
//     {
//       id: 1,
//       title: "Ask Me Anything: 10 answers to your questions about coffee",
//       date: "2d ago",
//       commentCount: 9,
//       shareCount: 5,
//     },
//     {
//       id: 2,
//       title: "The worst advice we've ever heard about coffee",
//       date: "4d ago",
//       commentCount: 1,
//       shareCount: 2,
//     },
//   ],
// });
