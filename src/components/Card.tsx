export interface CardProps {
    icon: {
      src: string;
      alt: string;
    };
    title: string;
    description: string;
  }

export default function Card({title, description, icon}: CardProps) {
    return <div className="border border-dark-gray-3 bg-dark-gray-2 p-8 pt-[60px] flex flex-col w-1/3 gap-3">
      <img src={icon.src} alt={icon.alt} width={30} height={30} className="w-[0.875rem] h-[0.875rem]"/>
  
      <h3 className="text-md text-medium-gray-2">{title}</h3>
  
      <p className="text-xs text-light-gray">{description}</p>
    </div>
  }