import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return (
    <>
      <h3>Project Details</h3>
      <p><strong>Project ID:</strong> {id}</p>
      <p>
        This project demonstrates a real-world React CRUD workflow
        using mock backend data.
      </p>
    </>
  );
};

export default Details;
