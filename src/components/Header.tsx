import Avatar from "./Avatar";
import Description from "./Description";


export default function Header() {
    return <header className="flex flex-col items-center gap-6 mx-auto py-[7.25rem]">
      <Avatar />
      <h2>Ricardo Ferreira - Software Developer</h2>
      <Description />
    </header>
  };