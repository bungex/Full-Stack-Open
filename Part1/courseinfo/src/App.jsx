//Create new components, Header, Content, Total and use props to pass data and stuff

const Header = (props) => {
  return(
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part}: {props.exercises}
    </p>
  )
}


const Content = (props) => {
  return(
    <>
    <Part part={props.parts.name} exercises={props.parts.exercises}></Part>
    </>
  )
}

const Total = (props) => {
  return(
    <p>
      Number of exrcises: {props.total}
    </p>
  )
}


const  App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
      exercises: 14
  }
  
  return (
    <div>
      <Header course={course}></Header>
      {/* <Content parts={parts}></Content> */}
      <Content parts={part1}></Content>
      <Content parts={part2}></Content>
      <Content parts={part3}></Content>
      <Total total={part1.exercises + part2.exercises + part3.exercises }></Total>
    </div>
  )
}

export default App
