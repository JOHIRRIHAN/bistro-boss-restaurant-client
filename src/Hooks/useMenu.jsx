import { useEffect, useState } from "react";

const useMenu = () => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("http://localhost:5000/menus")
        .then((result) => result.json())
        .then((data) => {
          setMenus(data);
          setLoading(false);
        });
    }, []);
    return [menus, loading]
};

export default useMenu;