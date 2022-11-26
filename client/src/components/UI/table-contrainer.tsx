import React, { ReactNode } from "react";
import { Card, Table } from "react-bootstrap";

type Props = {
  children: ReactNode;
  cols: string[];
};

const TableContainer = ({ children, cols }: Props) => {
  return (
    <Card className="p-0 shadow border-0 mt-5 ">
      <Table responsive hover className="table-nowrap">
        <thead
          style={{ backgroundColor: "#e03a3c" }}
          className="thead-light text-white"
        >
          <tr>
            {cols.map((col: any, index: number) => (
              <th
                style={{
                  borderRadius:
                    index === 0
                      ? "10px 0 0 0"
                      : index === cols.length - 1
                      ? "0  10px 0 0"
                      : 0,
                }}
                key={col}
                scope="col"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    </Card>
  );
};

export default TableContainer;
