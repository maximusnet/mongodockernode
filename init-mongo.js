db.createUser(
    {
        user: "work",
        pwd: "1234",
        roles: [
            {
                role: "readWrite",
                db: "workdb"
            }
        ]
    }
)