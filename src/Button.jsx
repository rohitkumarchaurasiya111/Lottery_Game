export default function Button({action, text}){
    return <button onClick={action}>{text}</button>;
}