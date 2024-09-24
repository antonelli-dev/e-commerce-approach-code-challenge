interface Props {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  description: string;
}

export const MiniCard = ({ icon: IconOption, text, description }: Props) => {
  return (
    <div className="flex flex-row gap-3 w-fit h-fit items-center bg-white p-5 px-10 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-full">
        <IconOption className="text-blue-600 h-10 w-10" />
      </div>

      <div className="flex flex-col">
        <span className="text-black font-bold">{text}</span>
        <span className="text-gray-600 text-sm">{description}</span>
      </div>
    </div>
  );
};
