import './UserCSS.css';

function Book({ book }) {
    // Check if 'book' is defined before accessing its properties
    if (!book) {
        return null; // or handle the case when 'book' is not defined
    }

    const { bookName, pdfName, author, info } = book;

    const handleDownload = () => {
        // Assuming pdfName is the correct path to the PDF file on your server
        const pdfUrl = `/auth/pdf/${pdfName}`;

        // Create a link element
        const link = document.createElement('a');

        // Set the href attribute to the PDF URL
        link.href = pdfUrl;

        // Specify that the link should be downloaded when clicked
        link.setAttribute('download', pdfName);

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    };

    return (
        <div className="card">
            <h3>{bookName}</h3>
            <p>author: {author}</p>

            <p>Info: {info}</p>

            {/* Add a button for downloading */}
            <button onClick={handleDownload}>Download PDF</button>
        </div>
    );
}

export default Book;
