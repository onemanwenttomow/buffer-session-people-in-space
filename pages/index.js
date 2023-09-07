import Profile from "@/components/Profile";

const terryPratchett = {
  fullName: "Sir Terry Pratchett",
  birthYear: 1948,
  deathYear: 2015,
  nationality: "British",
  biography:
    "Sir Terry Pratchett was a beloved British author known for his humorous and satirical fantasy novels. He is best known for his Discworld series, which consists of over 40 books and has gained a cult following worldwide. Pratchett's writing style combined wit, humor, and social commentary, making his works both entertaining and thought-provoking. Throughout his career, he received numerous awards and honors for his contributions to literature and was a strong advocate for Alzheimer's research.",
  books: [
    {
      title: "Good Omens",
      publicationYear: 1990,
    },
    {
      title: "Mort",
      publicationYear: 1987,
    },
    {
      title: "Guards! Guards!",
      publicationYear: 1989,
    },
    {
      title: "Going Postal",
      publicationYear: 2004,
    },
    {
      title: "Small Gods",
      publicationYear: 1992,
    },
  ],
};

// John Grisham

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {/* <section>
        <h2>Author: {terryPratchett.fullName}</h2>
        <ul>
          {terryPratchett.books.map((book) => (
            <li key={book.title}>{book.title}</li>
          ))}
        </ul>
      </section> */}
      <Profile
        fullName={terryPratchett.fullName}
        books={terryPratchett.books}
      />
      <Profile fullName="John Grisham" books={[{ title: "The Client" }]} />
    </main>
  );
}
