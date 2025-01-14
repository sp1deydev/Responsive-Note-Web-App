export const formatDisplayDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
};
export const formatDate = (date, format) => {
    const options = {
      "dd/MM/yyyy": `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`,
      "MM-dd-yyyy": `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${date.getFullYear()}`,
      "yyyy/MM/dd": `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`
    };
    return options[format] || date.toISOString(); // Fallback to ISO string if format is not provided
};