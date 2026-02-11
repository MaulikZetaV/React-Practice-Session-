import ItemForm from "../components/ItemForm";
import { addItem } from "../services/apiService";

const AddEdit = () => {
  const handleAdd = async (data) => {
    await addItem(data);
    alert("Item added (mock API)");
  };

  return (
    <>
      <h3>Add Item</h3>
      <ItemForm onSubmit={handleAdd} />
    </>
  );
};

export default AddEdit;
