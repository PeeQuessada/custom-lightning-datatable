export function generateRowsWithColumnsData(rows, columns) {
    let result = [];

    rows.forEach((row) => {
        const items = [];
        const fieldsWithColums = [];
    
        columns.forEach((column) => {
            const item = {
              fieldName: column.fieldName,
              fieldValue: row[column.fieldName],
              show: true,
              label: column.label,
              type: column.type,
            };

            fieldsWithColums.push(column.fieldName);
        
            if (column.cellAttributes) {
                item.cellAttributes = { ...column.cellAttributes };   
                item.cellAttributes.value = row[column.cellAttributes.iconName.fieldName];  
                fieldsWithColums.push(column.cellAttributes.iconName.fieldName);           
            }
    
            if (column.typeAttributes) {
                item.typeAttributes = { ...column.typeAttributes };
            }
    
            items.push(item);
        });
    
        // Add the missing fields as hidden in the list
        const missingValues = Object.keys(row).filter((field) => !fieldsWithColums.includes(field));
        missingValues.forEach((rowAux) => {
            items.push({
                fieldName: rowAux,
                fieldValue: row[rowAux],
                show: false
            });
        });

        result.push({ index: result.length, items });
    });            
    console.log('result ', JSON.parse(JSON.stringify(result)));
    return result;
}