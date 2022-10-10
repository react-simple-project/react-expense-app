import './Button.css';
function Button(props) {
  console.log(props)
  return <button className={props.clsname}>Button</button>;
}

export default Button;
