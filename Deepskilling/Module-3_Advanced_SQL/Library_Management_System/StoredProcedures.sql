USE LibraryManagementDB;

GO


-- Procedure to display books

CREATE PROCEDURE GetAllBooks

AS

BEGIN

SELECT *

FROM Books;

END;


GO



-- Execute Procedure

EXEC GetAllBooks;



-- Procedure to search book

CREATE PROCEDURE SearchBook

@BookName VARCHAR(100)

AS

BEGIN


SELECT *

FROM Books

WHERE Title LIKE '%' + @BookName + '%';


END;


GO



EXEC SearchBook 'Python';



-- Procedure to issue book

CREATE PROCEDURE IssueBook

@BookID INT,
@MemberID INT

AS

BEGIN


INSERT INTO IssueRecords
(BookID,MemberID)

VALUES
(@BookID,@MemberID);



UPDATE Books

SET AvailableCopies =
AvailableCopies - 1

WHERE BookID=@BookID;


END;


GO



EXEC IssueBook 4,1;



-- Procedure to return book

CREATE PROCEDURE ReturnBook

@IssueID INT

AS

BEGIN


UPDATE IssueRecords

SET 
Status='Returned',
ReturnDate=GETDATE()


WHERE IssueID=@IssueID;



UPDATE Books

SET AvailableCopies =
AvailableCopies + 1


WHERE BookID=

(
SELECT BookID
FROM IssueRecords
WHERE IssueID=@IssueID
);



END;


GO


EXEC ReturnBook 1;