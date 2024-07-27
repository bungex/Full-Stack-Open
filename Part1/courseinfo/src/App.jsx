const Course = ({course}) => {
  // const r = course.parts.map(x => x.name)
  // console.log(course.parts)

  return(
    <>
      <Header header={course.name}/>
      <Part part={course.parts}/> 
    </>
  )
}

const Part = ({part}) => {
  return(
    <>
       {part.map(x => <li key={x.id}> {x.name}: {x.exercises}</li>)} 
    </>
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
    ]
  }

  return <Course course={course} />
}

export default App