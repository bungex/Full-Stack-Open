const Course = ({course}) => {
  // const r = course.parts.map(x => x.name)
  // console.log(course.parts.map(x => x.exercises))

  return(
    <>
      <Header header={course.name}/>
      <Content part={course.parts}/>
      <Total part={course.parts} />
    </>
  )
}

const Total = ({part}) => {
  // console.log(part.map(x => x.exercises))
  const sum = part.reduce((next, curr) => ({exercises: next.exercises + curr.exercises}))

  return(
    <ul>
      <li>
          Total number of {sum.exercises} exercises.
      </li>
    </ul>
  )
}

const Content = ({part}) => {
  return(
    <ul>
       {part.map(x => <li key={x.id}> {x.name}: {x.exercises}</li>)} 
    </ul>
  )
}

const Header = ({header}) => {
  return(
    <h1>
      {header}
    </h1>
  )
} 


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
      ,
      {
        name: 'Use of Map',
        exercises: 5,
        id: 5
      }
    ]
  }

  return <Course course={course} />
}

export default App