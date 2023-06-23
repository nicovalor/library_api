-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "nationality" VARCHAR(255) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "release_date" DATE NOT NULL,
    "pages" INTEGER NOT NULL,
    "language" VARCHAR(255) NOT NULL,
    "stock" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "editorialId" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Editorial" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Editorial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenreOnBooks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BooksOnUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreOnBooks_AB_unique" ON "_GenreOnBooks"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreOnBooks_B_index" ON "_GenreOnBooks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BooksOnUsers_AB_unique" ON "_BooksOnUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_BooksOnUsers_B_index" ON "_BooksOnUsers"("B");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_editorialId_fkey" FOREIGN KEY ("editorialId") REFERENCES "Editorial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreOnBooks" ADD CONSTRAINT "_GenreOnBooks_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreOnBooks" ADD CONSTRAINT "_GenreOnBooks_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BooksOnUsers" ADD CONSTRAINT "_BooksOnUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BooksOnUsers" ADD CONSTRAINT "_BooksOnUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
