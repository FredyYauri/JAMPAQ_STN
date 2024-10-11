import React, { useEffect, useState } from "react";
import "react-material-symbols/rounded";
import Pagination from "react-bootstrap/Pagination";

const PaginationTable = ({ list, setCurrenItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [paginationItems, setPaginationItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Calcula los datos a mostrar en la página actual
    if (!list || list.length === 0) return;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrenItems(list.slice(indexOfFirstItem, indexOfLastItem));

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
  }, [totalPages, list]); // totalPages agregado como dependencia

  return (
    <>{paginationItems.length > 0 && (
      <div className="p-4">
        <Pagination>{paginationItems}</Pagination>
      </div>
    )}</>
  );
};

export default PaginationTable;
