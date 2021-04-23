import { PrismaClient } from '@prisma/client'
import express from 'express'
import helmet from "helmet"
import cors from "cors"

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())

app.get('/', (req: express.Request, res: express.Response) => {
  res.sendStatus(200)
})

app.get('/tasks', async (req: express.Request, res: express.Response) => {
  const tasks = await prisma.task.findMany()

  res.json(tasks)
})

app.get('/tasks/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params

  const task = await prisma.task.findFirst({
    where: {
      id: Number(id),
    }
  })

  if (!task) {
    res.status(404).json({message: "Not Found"})
  } else {
    res.json(task)
  }
})

app.post('/tasks', async (req: express.Request, res: express.Response) => {
  const { name, dueDate, listId } = req.body

  const result = await prisma.task.create({
    data: {
      name, dueDate, listId
    },
  })

  res.status(201).json(result)
})

app.patch('/tasks/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params
  const { name, dueDate, listId, completed } = req.body

  const task = await prisma.task.findFirst({
    where: {
      id: Number(id)
    }
  })

  if (!task) {
    res.status(404).json({message: "Not Found"})
  } else {
    const result = await prisma.task.update({
      where: {
        id: Number(id)
      },
      data: {
        name, dueDate, listId, completed
      },
    })
    
    res.json(result)
  }
})

app.delete('/tasks/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params

  const task = await prisma.task.findFirst({
    where: {
      id: Number(id)
    }
  })

  if (!task) {
    res.status(404).json({message: "Not Found"})
  } else {
    const result = await prisma.task.delete({
      where: {
        id: Number(id)
      },
    })
    
    res.json(result)
  }
})

const server = app.listen(3001, () =>
  console.log(`
  🚀 Server ready at: http://localhost:3001
  ⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`,
  ),
)