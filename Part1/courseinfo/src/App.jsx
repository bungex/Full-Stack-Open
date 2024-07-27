const Course = ({course}) => {

  return(
    <div>
      <Header />
      {course.map((sec) =>{
        return(
          <div key={sec.id}>
            <h2>{sec.name}</h2>
            <Content part={sec.parts}/>
            <Total part={sec.parts}/>
          </div>
          
        )
      }
      )}
    </div>
  )
}

const Total = ({part}) => {
  const sum = part.reduce((next, curr) => ({exercises: next.exercises + curr.exercises}))
  return(
    <div>
      Total of {sum.exercises} exercises 
    </div>
  )
}


//Working Code
{/* {part.map((c) => (
        <div key={c.id}>
          <h2>{c.name} </h2>
          {c.parts.map(p => <div key={p.id}> {p.name}: {p.exercises} </div>)} 
        </div>
        )
      )} */}

const Content = ({part}) => {
  return(
    <div>
      {part.map((p) => <div key={p.id}> {p.name}: {p.exercises}</div>)}       
    </div>
  )
}

const Header = () => {
  return(
    <h1>
      Web development curriculum
    </h1>
  )
} 


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
        ,
        {
          name: 'Arrow Functions',
          exercises: 13,
          id: 3
        }
      ]
    }
  ]


  return <Course course={courses} />
}

export default App