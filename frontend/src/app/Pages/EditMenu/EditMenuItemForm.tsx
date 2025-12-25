import { useState } from "react";

interface EditMenuItemFormProps {
  menuItem?: {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    category: number;
    is_active: boolean;
  };
  categories: { id: number; name: string }[];
  onClose: () => void;
  onSave: (data: {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    prev_category_id: number;
    image_url: string;
    is_active: boolean;
  }) => void;
  isNew?: boolean;
}

export function EditMenuItemForm({
  menuItem,
  categories,
  onClose,
  onSave,
}: EditMenuItemFormProps) {
  const [name, setName] = useState(menuItem?.name || "");
  const [description, setDescription] = useState(menuItem?.description || "");
  const [price, setPrice] = useState(menuItem?.price.toString() || "");
  const [categoryId, setCategoryId] = useState(menuItem?.category || "");
  const [imageFile, setImageFile] = useState(menuItem?.image_url || "");
  const [isActive, setIsActive] = useState<boolean>(
    menuItem?.is_active || true
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedItem: any = {
      name,
      description,
      price: parseFloat(price),
      prev_category_id: menuItem?.category,
      category_id: categoryId,
      is_active: isActive,
    };

    if (imageFile) {
      // Если нужен API для загрузки файла, можно конвертировать в base64 или FormData
      //updatedItem.image = URL.createObjectURL(imageFile); // пример для локального отображения
    }

    onSave(updatedItem);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded bg-gray-700 text-gray-100"
        placeholder="Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded bg-gray-700 text-gray-100"
        placeholder="Description"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-2 rounded bg-gray-700 text-gray-100"
        placeholder="Price"
      />
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(Number(e.target.value))}
        className="w-full p-2 rounded bg-gray-700 text-gray-100"
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={imageFile}
        className="w-full p-2 rounded bg-gray-700 text-gray-100"
        onChange={(e) => setImageFile(e.target.value)}
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
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
