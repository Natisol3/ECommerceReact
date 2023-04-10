import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const productofilter = Data.filter((producto) => producto.id ==id);
    return <ItemDetail productos={Data} />;
};

export default ItemDetailContainer