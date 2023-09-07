export default function Profile({ books, fullName }) {
  return (
    <section>
      <h2>Author: {fullName}</h2>
      <ul>
        {books.map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </section>
  );
}
