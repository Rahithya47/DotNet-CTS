USE LibraryManagementDB;

GO


-- 1. Display all books

SELECT *
FROM Books;



-- 2. Display available books

SELECT Title,Author,Category
FROM Books
WHERE AvailableCopies > 0;



-- 3. Search books by category

SELECT *
FROM Books
WHERE Category='Programming';



-- 4. Count total books

SELECT COUNT(*) AS TotalBooks
FROM Books;



-- 5. Members who borrowed books

SELECT 
M.MemberName,
B.Title,
I.IssueDate,
I.Status

FROM IssueRecords I

INNER JOIN Members M
ON I.MemberID=M.MemberID

INNER JOIN Books B
ON I.BookID=B.BookID;



-- 6. Books currently issued

SELECT 
B.Title,
M.MemberName

FROM IssueRecords I

JOIN Books B
ON I.BookID=B.BookID

JOIN Members M
ON I.MemberID=M.MemberID

WHERE I.Status='Issued';



-- 7. Total fine collected

SELECT 
SUM(Amount) AS TotalFine

FROM Fine

WHERE PaidStatus='Paid';



-- 8. Highest priced fine

SELECT 
MAX(Amount) AS MaximumFine

FROM Fine;



-- 9. Member count

SELECT 
COUNT(MemberID) AS TotalMembers

FROM Members;



-- 10. Group books by category

SELECT 
Category,
COUNT(*) AS NumberOfBooks

FROM Books

GROUP BY Category;



-- 11. Books sorted by year

SELECT *

FROM Books

ORDER BY PublishedYear DESC;