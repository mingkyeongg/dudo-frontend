

const JobButton = ({text1, text2, image}) => {
  return (
    <>
      <button>
        <p>{text1}</p>
        <p>{text2}</p>
        <img src={image}></img>
      </button>
    </>
  )
}

export default JobButton;