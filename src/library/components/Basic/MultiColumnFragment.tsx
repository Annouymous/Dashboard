import { Navigation } from "./Navigation";
import ProfileActionBar from "./helper/ProfileActionBar";
import SingleFragment from "./helper/SingleFragment";
import DisclosureFragment from "./helper/DisclosureFragment";
import { iconsList } from "./helper/Icons";

export default function MultiColumnFragment() {
  return (
    <div
      className={`flex-none md:max-w-64 md:w-64 relative pl-6 pr-3 border-r-[1px] border-r-gray-300 w-full`}
    >
      <div className="py-[80px] pb-5 scrollbar h-screen overflow-y-auto">
        <span className="text-slate-400 text-[12px] font-semibold">
          Main Menu -{" "}
        </span>
        <div className="flex flex-col gap-3 my-2">
          {
            Navigation.map((item)=>{
              return(
                item.isSingle?
                  <SingleFragment key={item.name} href={item.href} text={item.name}>
                   {
                    iconsList[item.icon]
                   }
                  </SingleFragment>
                  :
                  <DisclosureFragment key={item.name} item={item.name} Docs={item.sub} >
                    {
                    iconsList[item.icon]
                   }
                  </DisclosureFragment>
              )
            })
          }
        </div>
      </div>
      <div className="border-t-[1px] border-t-gray-300 h-14 w-full absolute bottom-0 right-0 left-0">
        <ProfileActionBar/>
      </div>
    </div>
  );
}