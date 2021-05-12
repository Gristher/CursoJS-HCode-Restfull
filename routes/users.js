  module.exports = (app) => {

    app.get('/users', (req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
          users: [
            {
              name: "CursoJS",
              email: "cursojs@hcode.com.br",
              id: 1,
            }]
        });
    });

    app.post('/users', (req, res) => {
      
      res.status(200).json(req.body);
    });
  }
