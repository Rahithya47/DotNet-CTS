USE LibraryManagementDB;

GO


-- Transaction for issuing a book


BEGIN TRANSACTION;


DECLARE @BookID INT = 2;

DECLARE @MemberID INT = 3;



IF EXISTS
(
SELECT *
FROM Books
WHERE BookID=@BookID
AND AvailableCopies>0
)

BEGIN


INSERT INTO IssueRecords
(BookID,MemberID)

VALUES
(@BookID,@MemberID);



UPDATE Books

SET AvailableCopies =
AvailableCopies-1

WHERE BookID=@BookID;



COMMIT TRANSACTION;


PRINT 'Book issued successfully';


END


ELSE

BEGIN


ROLLBACK TRANSACTION;


PRINT 'Book not available';


END;



-- Transaction with error handling


BEGIN TRY


BEGIN TRANSACTION;



UPDATE Books

SET AvailableCopies=0

WHERE BookID=1;



INSERT INTO IssueRecords
(BookID,MemberID)

VALUES
(1,5);



COMMIT;


END TRY


BEGIN CATCH


ROLLBACK;


PRINT ERROR_MESSAGE();


END CATCH;