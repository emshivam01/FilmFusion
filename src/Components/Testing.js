import { ToastContainer, toast } from "react-toastify";

const Testing = () => {
  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div>
      <h1 className="text-white text-xl"> This is a Testing Component</h1>

      <ToastContainer />
      <button className="bg-white text-black text-2xl" onClick={notify}>
        {" "}
        Get Toast
      </button>
    </div>
  );
};

export default Testing;
