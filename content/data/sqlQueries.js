export const sqlQueries = [
  {
    title: "Query 1",
    caption: "asd",
    query: `SELECT 
    username, 
    created_at,
    CONCAT(TIMESTAMPDIFF(DAY, created_at, NOW()), ' days old') AS age
  FROM users
  ORDER BY created_at
  LIMIT 5;`,
    colNames: ["username", "created_at", "age"],
    table: [
      { username: "Darby_Herzog", created: "2016-05-06 00:14:21", age: 2492 },
      {
        username: "Emilio_Bernier52",
        created: "2016-05-06 13:04:30",
        age: 2492,
      },
      { username: "Elenor88", created: " 2016-05-08 01:30:41 ", age: 2490 },
      { username: "Nicole71", created: "2016-05-09 17:30:22", age: 2488 },
      {
        username: "Jordyn.Jacobson2",
        created: "2016-05-14 07:56:26",
        age: 2484,
      },
    ],
  },
];
