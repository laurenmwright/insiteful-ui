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

export const Tabs = ({ data }: TabProps) => {
  return (
    <div className=" w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex ">
          {data.map((data, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  " w-full py-2.5 text-md leading-5 focus-visible:outline-none",
                  selected
                    ? "text-actionBlue font-bold shadow-b-md border-b-4 border-actionBlue	"
                    : "text-mediumGray font-medium hover:bg-white/[0.12] hover:text-actionBlue/70 hover:border-b-2 hover:border-actionBlue/70 border-b-2 border-stone-500"
                )
              }
            >
              {data.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {data.map((data, index) => (
            <Tab.Panel
              key={index}
              className={classNames(
                "rounded-xl p-3 ",
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
export default Tabs;
