export const getExportFunctionality = (elements) => {
    const exportData = {
        elements: elements,
        // Add other relevant configuration data if needed
    };
    
    const jsonData = JSON.stringify(exportData, null, 2); // Pretty-print the JSON
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create a download link and trigger a click event
    const a = document.createElement('a');
    a.href = url;
    a.download = 'page_config.json';
    a.click();
    
    // Clean up resources
    URL.revokeObjectURL(url);
}
// { x: 0, y: 0,type: '', text: '',fontSize: 0, fontWeight: 0 }
export const configFields = [
    { label: 'Text', id: 'elementText', type: 'text', value: 'text' },
    { label: 'X', id: 'elementX', type: 'number', value: 'x' },
    { label: 'Y', id: 'elementY', type: 'number', value: 'y' },
    { label: 'Font Size (pixel)', id: 'elementFontSize', type: 'number', value: 'fontSize' },
    { label: 'Font Weight (multiple of 100)', id: 'elementFontWeight', type: 'number', value: 'fontWeight' },
];