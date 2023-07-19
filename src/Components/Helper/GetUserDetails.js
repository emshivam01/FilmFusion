import { useContext } from "react";
import { account } from "../Appwrite/service";
import AppContext from "../AppContext";

const GetUserDetails = () => {
  const { setIsLoggedIn } = useContext(AppContext);

  const data = account.get("current");

  data.then(
    function (response) {
      console.log(response);
      setIsLoggedIn(true);
    },
    function (error) {
      console.log(error);
    }
  );
};

export default GetUserDetails;
