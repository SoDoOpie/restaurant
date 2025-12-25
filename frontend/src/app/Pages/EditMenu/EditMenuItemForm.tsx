import { useState } from "react";
import {
  MenuItemAddPayload,
  MenuItemUpdatePayload,
} from "../../components/mutations/useUpdateMutation";

interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  category: number;
  image_url: string;
  is_active: boolean;
}

type OnSavePayload =
  | { type: "edit"; data: MenuItemUpdatePayload }
  | { type: "add"; data: MenuItemAddPayload };

interface EditMenuItemFormProps {
  menuItem?: MenuItemProps;
  categories: { id: number; name: string }[];
  onClose: () => void;
  onSave: (payload: OnSavePayload) => void;
}

export function EditMenuItemForm({
  menuItem,
  categories,
  onClose,
  onSave,
}: EditMenuItemFormProps) {
  const [form, setForm] = useState({
    name: menuItem?.name ?? "",
    description: menuItem?.description ?? "",
    price: menuItem?.price?.toString() ?? "",
    categoryId: menuItem?.category ?? categories[0]?.id ?? 0,
    imageUrl: menuItem?.image_url ?? "",
    isActive: menuItem?.is_active ?? true,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (menuItem) {
      onSave({
        type: "edit",
        data: {
          ...menuItem,
          name: form.name,
          description: form.description,
          price: Number(form.price),
          prev_category_id: menuItem.category,
          category_id: Number(form.categoryId),
          image_url: form.imageUrl,
          is_active: form.isActive,
        },
      });
    } else {
      onSave({
        type: "add",
        data: {
          name: form.name,
          description: form.description,
          price: Number(form.price),
          category: Number(form.categoryId),
          image_url: form.imageUrl,
          is_active: form.isActive,
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-700 text-gray-100"
        placeholder="Name"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-700 text-gray-100"
        placeholder="Description"
      />

      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-700 text-gray-100"
        placeholder="Price"
      />

      <select
        name="categoryId"
        value={form.categoryId}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-700 text-gray-100"
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <input
        name="imageUrl"
        value={form.imageUrl}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-700 text-gray-100"
        placeholder="Image URL"
      />

      <label className="flex items-center gap-2">
        <input
          name="isActive"
          type="checkbox"
          checked={form.isActive}
          onChange={handleChange}
        />
        Active
      </label>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}
