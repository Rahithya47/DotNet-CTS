-- Library Management System
-- Database Table Creation


CREATE DATABASE LibraryManagementDB;

GO

USE LibraryManagementDB;

GO


-- Books Table

CREATE TABLE Books
(
    BookID INT PRIMARY KEY IDENTITY(1,1),
    Title VARCHAR(100) NOT NULL,
    Author VARCHAR(100) NOT NULL,
    Category VARCHAR(50),
    PublishedYear INT,
    AvailableCopies INT DEFAULT 0
);


-- Members Table

CREATE TABLE Members
(
    MemberID INT PRIMARY KEY IDENTITY(1,1),
    MemberName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(15),
    JoinDate DATE DEFAULT GETDATE()
);


-- Issue Records Table

CREATE TABLE IssueRecords
(
    IssueID INT PRIMARY KEY IDENTITY(1,1),

    BookID INT,
    MemberID INT,

    IssueDate DATE DEFAULT GETDATE(),

    ReturnDate DATE,

    Status VARCHAR(20) DEFAULT 'Issued',


    CONSTRAINT FK_Book
    FOREIGN KEY(BookID)
    REFERENCES Books(BookID),


    CONSTRAINT FK_Member
    FOREIGN KEY(MemberID)
    REFERENCES Members(MemberID)

);


-- Fine Details Table

CREATE TABLE Fine
(
    FineID INT PRIMARY KEY IDENTITY(1,1),

    IssueID INT,

    Amount DECIMAL(10,2),

    PaidStatus VARCHAR(20)
    DEFAULT 'Pending',


    FOREIGN KEY(IssueID)
    REFERENCES IssueRecords(IssueID)

);



-- View all tables

SELECT * FROM Books;

SELECT * FROM Members;

SELECT * FROM IssueRecords;

SELECT * FROM Fine;