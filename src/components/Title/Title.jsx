import "./Title.css"

function Title({ titleSub, titleMain }) {
  return (
    <div className='title'>
      <p className="title-sub">{titleSub}</p>
      <p className="title-main">{titleMain}</p>
    </div>
  )
}

export default Title
