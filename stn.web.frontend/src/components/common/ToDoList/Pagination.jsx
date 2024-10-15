import React, { useEffect, useState } from "react";
import "react-material-symbols/rounded";
import Pagination from "react-bootstrap/Pagination";
import { useStnStore } from "../../../stores/useStateStore";

const PaginationTable = ({ list, setCurrenItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = useStnStore(state => state.numItemsTable);
  const [paginationItems, setPaginationItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Calcula los datos a mostrar en la página actual
    if (!list || list.length === 0) return;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const items = list.slice(indexOfFirstItem, indexOfLastItem)
    setCurrenItems(items);
    setTotalItems(items.length);

    // Calcular número total de páginas
    setTotalPages(Math.ceil(list.length / itemsPerPage));
  }, [list, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Generar los items de paginación basados en el número total de páginas
    const items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    setPaginationItems(items); // Actualizamos fuera del bucle
  }, [totalPages, list, currentPage]); // totalPages agregado como dependencia

  return (
    <>{paginationItems.length > 0 && (
      <div className="p-2">
        <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
          <span className="fs-12 fw-medium">Mostrando { totalItems } de { list.length } </span>
          <Pagination>{paginationItems}</Pagination>
        </div>

      </div>
    )}</>
  );
};

export default PaginationTable;
