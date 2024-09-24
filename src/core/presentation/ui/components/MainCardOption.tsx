interface Props {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconClass?: string;
}

export const MainMenuOptionsCard = ({
  title,
  description,
  icon: IconOption,
  iconClass,
}: Props) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 bg-white w-full text-black grid grid-cols-1 grid-rows-2">
      <div className="w-full flex flex-row gap-2 h-full items-start">
        <IconOption className={`${iconClass ?? ''}`} />
        <span className="text-xl">{title}</span>
      </div>
      <div className="flex w-full h-full items-start">
      <span className="text-gray-600 text-xl">{description}</span>
      </div>
    </div>
  );
};
