import './UserCSS.css'

function Book({ book }) {
    // Check if 'book' is defined before accessing its properties
    if (!book) {
        return null; // or handle the case when 'book' is not defined
    }

    const { bookName, pdfName, info } = book;

    return (
        <div className="card">
            <h3>{bookName}</h3>
            <p>PDF: {pdfName}</p>
            <p>Info: {info}</p>

        </div>
    );
}

export default Book;
