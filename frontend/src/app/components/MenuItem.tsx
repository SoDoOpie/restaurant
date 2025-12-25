import { SetActiveSVG } from "../Pages/EditMenu/SetActiveSVG";

export interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  category: number;
  image_url: string;
  onClickActive?: () => void;
  is_active: boolean;
  is_admin_mode?: boolean;
}

export function MenuItem({
  name,
  description,
  price,
  image_url,
  is_active = true,
  onClickActive,
  is_admin_mode = false, // Default to false
}: MenuItemProps) {
  return (
    <div
      className={`group cursor-pointer transition-opacity duration-300 ${
        !is_active ? "opacity-60" : ""
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-neutral-800 border border-amber-500/20 relative">
        {is_admin_mode && (
          <button
            className="
              absolute top-2 right-2 z-20
              w-9 h-9 rounded-full
              bg-black/60 backdrop-blur
              flex items-center justify-center
              text-amber-400
              hover:bg-black/80 hover:scale-110
              transition
              shadow-lg
              filter-none
            "
            onClick={(e) => {
              e.stopPropagation();
              console.log("onClickActive");
              onClickActive?.();
            }}
          >
            <SetActiveSVG is_active={is_active} />
          </button>
        )}
        <img
          src={image_url}
          alt={name}
          className={`
            w-full h-full object-cover
            transition-transform duration-500
            ${!is_active ? "grayscale" : "group-hover:scale-110"}
          `}
        />
      </div>
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="mb-2 font-playfair text-amber-50">{name}</h3>
          <p className="text-neutral-400 text-sm font-crimson">{description}</p>
        </div>
        <div className="shrink-0 text-right">
          <div className="relative">
            <span
              className={`text-3xl font-playfair italic transition-colors ${
                !is_active
                  ? "text-neutral-500"
                  : "text-amber-500 group-hover:text-amber-400"
              }`}
            >
              {price.toString() + "€"}
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
