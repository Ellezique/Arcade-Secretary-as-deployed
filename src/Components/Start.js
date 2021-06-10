import "../App.css"
export default function Start(props){
return(
    <p className="word">
        { 
          props.original.split("").map((c, index) => {
            let className=""
          if(props.completed[index]==undefined)
            {className="wait-char"}
          else if(props.completed[index]!=c)
            {className="red"}
          return (
            <span key={index} className={className}>
              {c}
            </span>
          )
        })}
      </p>
)
}
