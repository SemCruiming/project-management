export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

  export const dataGridSxStyles = (isDarkMode: boolean) => {
    return {
        "& .MuiDataGrid-columnHeaders": {
          color: `${isDarkMode ? "#e5e7eb" : ""}`,
          '& [role="row"] > *': {
            backgroundColor: `${isDarkMode ? "#1d1f21" : "white"}`,
            borderColor: `${isDarkMode ? "#2d3135" : ""}`,
          },
        },
      "& .MuiDataGrid-cell": {
        color: `${isDarkMode ? "#e5e7eb" : "black"}`, // Cell text color
        backgroundColor: `${isDarkMode ? "#1d1f21" : "white"}`, // Cell background color
        borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`, // Cell border color
      },
      "& .MuiDataGrid-row": {
        "&:hover": {
          backgroundColor: `${isDarkMode ? "#2a2e33" : "#f5f5f5"}`, // Row hover color
        },
      },
      "& .MuiDataGrid-footerContainer": {
        color: `${isDarkMode ? "#e5e7eb" : "black"}`, // Footer text color
        backgroundColor: `${isDarkMode ? "#1a1a1a" : "white"}`, // Footer background color
      },
      "& .MuiTablePagination-root": {
        color: `${isDarkMode ? "#e5e7eb" : "black"}`, // Pagination text color
      },
      "& .MuiTablePagination-selectIcon": {
        color: `${isDarkMode ? "#e5e7eb" : "black"}`, // Pagination select icon color
      },
      "& .MuiIconButton-root": {
        color: `${isDarkMode ? "#a3a3a3" : "black"}`, // Icon button color
      },
    };
  };
  