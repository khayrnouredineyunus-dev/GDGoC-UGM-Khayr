import SectionLabel from "../ui/SectionLabel";
import arrowBlue from "../../assets/arrow-right-blue.svg";

const INSTAGRAM_URL = "https://www.instagram.com/gdgoc.ugm/";

export default function CommunityUpdates() {
  return (
    <aside className="bg-g-yellow-soft flex flex-col gap-4 rounded-3xl p-6.5">
      <SectionLabel>Stay curious, stay connected</SectionLabel>
      <h2 className="text-2xl leading-[1.12] font-bold md:text-[26px]">
        Looking for community updates?
      </h2>
      <p className="text-muted leading-[1.55]">
        Follow <strong className="font-bold">@gdgoc.ugm</strong> for learning
        opportunities and what’s happening in the community.
      </p>
      {/* Link ke situs luar memakai <a>, bukan Link dari React Router */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="group text-primary inline-flex items-center gap-3 self-start font-medium"
      >
        <span className="group-hover:underline">Find @gdgoc.ugm</span>
        <img
          src={arrowBlue}
          alt=""
          className="size-5 transition-transform group-hover:translate-x-1"
        />
      </a>
    </aside>
  );
}
