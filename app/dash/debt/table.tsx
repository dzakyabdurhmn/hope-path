import React from "react";

type TableComponentProps = {
  data: { kategori: string; jumlah_pengeluaran: number }[] | undefined;
};

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Kategori</th>
          <th>Jumlah Pengeluaran</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.kategori}</td>
              <td>{item.jumlah_pengeluaran}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={2}>No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableComponent;
