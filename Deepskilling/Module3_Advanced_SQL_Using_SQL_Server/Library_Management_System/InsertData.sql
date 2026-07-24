USE LibraryManagementDB;

GO


-- Insert Books

INSERT INTO Books
(Title, Author, Category, PublishedYear, AvailableCopies)

VALUES

('Clean Code','Robert Martin','Programming',2008,5),

('Database System Concepts','Abraham Silberschatz','Database',2019,4),

('Introduction to Algorithms','Thomas Cormen','Algorithms',2022,3),

('Python Programming','John Zelle','Programming',2021,6),

('Artificial Intelligence','Stuart Russell','AI',2020,2);



-- Insert Members

INSERT INTO Members
(MemberName,Email,Phone)

VALUES

('Rahithya','rahithya@gmail.com','9876543210'),

('Ananya','ananya@gmail.com','9876543211'),

('Kiran','kiran@gmail.com','9876543212'),

('Sai Kumar','saikumar@gmail.com','9876543213');



-- Insert Issue Records

INSERT INTO IssueRecords
(BookID,MemberID,IssueDate,Status)

VALUES

(1,1,'2026-07-01','Issued'),

(2,2,'2026-07-02','Returned'),

(3,3,'2026-07-03','Issued');



-- Insert Fine Details

INSERT INTO Fine
(IssueID,Amount,PaidStatus)

VALUES

(2,50,'Paid'),

(3,100,'Pending');



SELECT * FROM Books;

SELECT * FROM Members;

SELECT * FROM IssueRecords;

SELECT * FROM Fine;