import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid, type GridCellParams } from "@mui/x-data-grid";
import { useMemo } from "react";

const Row3 = () => {
  const { palette } = useTheme();
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.3,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
    },
  ];

  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="List of Products"
          sideText={`${productData?.length} products`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              backgroundColor: "#2d2d34",
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
              border: "none",
            },
            "& .MuiDataGrid-columnHeader": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
              color: "#2d2d34",
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden !important",
            },
          }}
        >
          <DataGrid
            rows={productData || []}
            columns={productColumns}
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h">
        <BoxHeader
          title="Recent Orders"
          sideText={`${transactionData?.length} latest transactions`}
        />
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              backgroundColor: "#2d2d34",
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
              border: "none",
            },
            "& .MuiDataGrid-columnHeader": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
              color: "#2d2d34",
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden !important",
            },
          }}
        >
          <DataGrid
            rows={transactionData || []}
            columns={transactionColumns}
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
};

export default Row3;
