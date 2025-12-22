import { MenuItem } from "./MenuItem";
import { MenuResponse } from "./queries/useMenu";

export function Menu(menu: MenuResponse) {
  return Object.keys(menu).map((category) => (
    <div key={category} className="mb-20">
      <h3 className="text-2xl md:text-3xl mb-8 text-center font-playfair text-amber-400">
        {category}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {menu[category].map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  ));
}
