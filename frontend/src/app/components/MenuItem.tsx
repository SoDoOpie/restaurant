export interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image_url: string;
}

export function MenuItem({
  name,
  description,
  price,
  image_url,
}: MenuItemProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-neutral-800 border border-amber-500/20">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="mb-2 font-playfair text-amber-50">{name}</h3>
          <p className="text-neutral-400 text-sm font-crimson">{description}</p>
        </div>
        <div className="shrink-0 text-right">
          <div className="relative">
            <span className="text-3xl font-playfair text-amber-500 italic group-hover:text-amber-400 transition-colors">
              {price}
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
