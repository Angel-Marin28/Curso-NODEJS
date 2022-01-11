const usuariosQueries ={
    inserUsuario: `
    INSERT INTO 
    Usuarios(
        nombre, 
        email,
        password,
        status
    )

    VALUES
    (?, ?, ?, ?)
    `,

    selectUsuarios: `
    SELECT
        *
    FROM
        usuarios
    WHERE
        status=1
    `,

};
