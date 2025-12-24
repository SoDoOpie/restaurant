import { useRef, useState, useEffect, ChangeEvent } from "react";
import { useCookies } from "react-cookie";
import { api } from "../../api";
import { Navigate } from "react-router";
import { useCategories } from "../../components/queries/useCategories";
import { useMenu } from "../../components/queries/useMenu";
import { MenuItem } from "../../components/MenuItem";
import { EditCategory } from "./EditCategory";
import { DeleteCategory } from "./DeleteCategory";
import { AddCategory } from "./AddCategory";
import "./EditMenu.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function EditMenu() {
  const [cookies, , removeCookie] = useCookies(["api-key"]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(
    null
  );
  const [editedCategoryName, setEditedCategoryName] = useState<string>("");

  const [selectedMenuItem, setSelectedMenuItem] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const [category_id, setCategoryId] = useState<number | undefined>(undefined);
  const { data: menuItems, isLoading: menuItemsLoading } = useMenu(category_id);

  const handleEditClick = (category: { id: number; name: string }) => {
    setEditingCategoryId(category.id);
    setEditedCategoryName(category.name);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedCategoryName(e.target.value);
  };

  const handleSaveClick = () => {
    // Add logic to save the edited category name (e.g., API call)
    console.log("Save edited category:", editingCategoryId, editedCategoryName);
    setEditingCategoryId(null);
  };

  const handleCancelClick = () => {
    setEditingCategoryId(null);
  };

  // Check if the API key is valid
  useEffect(() => {
    const checkKey = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${api}/check-api-key/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": cookies["api-key"],
          },
        });

        if (response.ok) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          removeCookie("api-key", { path: "/" });
        }
      } catch (err) {
        console.error("Error while checking API key");
      } finally {
        setIsLoading(false);
      }
    };
    checkKey();
  }, []);

  // Set the category_id to the first category if it's not set
  useEffect(() => {
    console.log("categories", categories);
    if (categories && categories.length) {
      console.log("dadasd", categories.length);
    }
    if (categories && categories.length > 0 && !category_id) {
      setCategoryId(categories[0].id);
    }
  }, [categories, category_id]);

  // Close the form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        handleCancelClick();
      }
    };

    if (editingCategoryId !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editingCategoryId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  console.log("editingCategoryId", editingCategoryId);

  return (
    <div className="min-h-screen bg-gray-900 p-4 text-gray-100">
      <div className="flex gap-6 max-w-6xl mx-auto">
        {/* Categories Section */}
        <div className="w-64 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          {categoriesLoading ? (
            <div className="text-gray-400">Loading...</div>
          ) : categories ? (
            <div className="space-y-2">
              {categories.map((category) =>
                editingCategoryId !== category.id ? (
                  <div
                    key={category.id}
                    className="flex items-center gap-2 w-full"
                  >
                    {/* Edit button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(category);
                        console.log("Edit category:", category.id);
                      }}
                      className="p-1 rounded-md hover:bg-gray-600 transition-colors"
                    >
                      <EditCategory />
                    </button>

                    {/* Delete button */}
                    <button className="p-1 rounded-md hover:bg-gray-600 transition-colors ">
                      <DeleteCategory />
                    </button>

                    {/* category button */}
                    <button
                      onClick={() => setCategoryId(category.id)}
                      className={`w-full text-left p-2 rounded-md hover:bg-gray-700 transition-colors ${
                        category_id === category.id
                          ? "bg-blue-500/20 border border-blue-500"
                          : "bg-gray-700/30"
                      }`}
                    >
                      {category.name}
                    </button>
                  </div>
                ) : (
                  <form
                    key={category.id}
                    ref={formRef}
                    action={() => {}}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={editedCategoryName}
                      onChange={handleInputChange}
                      className="w-full flex-1 p-2 h-9 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="text-center px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                      save
                    </button>
                  </form>
                )
              )}
              <AddCategory />
            </div>
          ) : (
            <div className="text-gray-400">No categories</div>
          )}
        </div>

        {/* Menu Items Section */}
        <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Menu Items</h2>
          {menuItemsLoading ? (
            <div className="text-gray-400">Loading...</div>
          ) : menuItems ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.map((item) => (
                <div
                  onClick={() => {
                    setSelectedMenuItem(item);
                    setIsModalOpen(true);
                  }}
                  className="w-full text-left p-2 rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <MenuItem key={item.id} {...item} is_admin_mode />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-400">No items</div>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        closeTimeoutMS={200}
        contentLabel="Menu Item Details"
        className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 max-w-md mx-auto outline-none"
        overlayClassName="fixed inset-0 flex items-center justify-center"
      >
        {selectedMenuItem && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{selectedMenuItem.name}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-200 transition"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-300">
              Additional details or actions for {selectedMenuItem.name} go here.
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
