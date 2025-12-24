export const AddCategory = () => {
  return (
    <button
      onClick={() => {
        console.log("Add new category");
        // Add your logic for adding a new category here
      }}
      className="w-full text-left p-2 rounded-md hover:bg-green-500 transition-colors bg-green-800 flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-4 h-4 fill-current"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
      Add Category
    </button>
  );
};
